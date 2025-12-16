#!/usr/bin/env node
/**
 * Script to add hydration awareness to all motion components
 * This prevents the flash during SSR hydration
 */

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

// Find all files with initial={{ opacity: 0
const srcDir = path.join(__dirname, '../src')

function findFilesWithPattern(dir, pattern, files = []) {
  const items = fs.readdirSync(dir)
  for (const item of items) {
    const fullPath = path.join(dir, item)
    const stat = fs.statSync(fullPath)
    if (stat.isDirectory()) {
      findFilesWithPattern(fullPath, pattern, files)
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      const content = fs.readFileSync(fullPath, 'utf8')
      if (content.includes(pattern)) {
        files.push(fullPath)
      }
    }
  }
  return files
}

// Files to skip (already have hydration or are special)
const skipFiles = [
  'HydrationContext.tsx',
  'MotionDiv.tsx',
  'useHydrated.ts',
]

// Find all files with initial={{ opacity: 0
const files = findFilesWithPattern(srcDir, 'initial={{ opacity: 0')
  .filter(f => !skipFiles.some(skip => f.endsWith(skip)))

console.log(`Found ${files.length} files to update:\n`)

let updated = 0
let skipped = 0

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8')
  const relativePath = path.relative(srcDir, file)

  // Skip if already has useHydration import
  if (content.includes('useHydration')) {
    console.log(`  ⏭️  ${relativePath} - already has useHydration`)
    skipped++
    continue
  }

  // Skip if already has isHydrated state (our manual fix)
  if (content.includes('const [isHydrated, setIsHydrated]')) {
    console.log(`  ⏭️  ${relativePath} - already has isHydrated state`)
    skipped++
    continue
  }

  let modified = false

  // Add useHydration import
  if (content.includes("from 'framer-motion'")) {
    // Add import after framer-motion import
    content = content.replace(
      /import \{ ([^}]+) \} from 'framer-motion'/,
      `import { $1 } from 'framer-motion'\nimport { useHydration } from '@/contexts/HydrationContext'`
    )
    modified = true
  } else if (content.includes("import { motion }")) {
    content = content.replace(
      /import \{ motion \}/,
      `import { motion }\nimport { useHydration } from '@/contexts/HydrationContext'`
    )
    modified = true
  }

  // Find the component function and add useHydration hook
  // Match: export default function ComponentName or export function ComponentName or const ComponentName =
  const componentPatterns = [
    /(export default function \w+\([^)]*\)\s*\{)/,
    /(export function \w+\([^)]*\)\s*\{)/,
    /(const \w+ = (?:forwardRef<[^>]+>)?\([^)]*\)\s*(?:=>)?\s*\{)/,
    /(const \w+ = memo\(function \w+\([^)]*\)\s*\{)/,
  ]

  let hookAdded = false
  for (const pattern of componentPatterns) {
    if (pattern.test(content) && !hookAdded) {
      content = content.replace(pattern, `$1\n  const isHydrated = useHydration()`)
      hookAdded = true
      break
    }
  }

  if (!hookAdded) {
    console.log(`  ⚠️  ${relativePath} - could not find component function`)
    skipped++
    continue
  }

  // Replace all initial={{ opacity: 0, ... }} patterns
  // This regex matches initial={{ opacity: 0, followed by any props, ending with }}
  const initialPatterns = [
    // initial={{ opacity: 0 }}
    { find: /initial=\{\{ opacity: 0 \}\}/g, replace: 'initial={isHydrated ? { opacity: 0 } : false}' },
    // initial={{ opacity: 0, y: NUMBER }}
    { find: /initial=\{\{ opacity: 0, y: (-?\d+) \}\}/g, replace: 'initial={isHydrated ? { opacity: 0, y: $1 } : false}' },
    // initial={{ opacity: 0, x: NUMBER }}
    { find: /initial=\{\{ opacity: 0, x: (-?\d+) \}\}/g, replace: 'initial={isHydrated ? { opacity: 0, x: $1 } : false}' },
    // initial={{ opacity: 0, scale: NUMBER }}
    { find: /initial=\{\{ opacity: 0, scale: ([\d.]+) \}\}/g, replace: 'initial={isHydrated ? { opacity: 0, scale: $1 } : false}' },
    // initial={{ opacity: 0, y: NUMBER, scale: NUMBER }}
    { find: /initial=\{\{ opacity: 0, y: (-?\d+), scale: ([\d.]+) \}\}/g, replace: 'initial={isHydrated ? { opacity: 0, y: $1, scale: $2 } : false}' },
    // initial={{ opacity: 0, scale: NUMBER, rotate: NUMBER }}
    { find: /initial=\{\{ opacity: 0, scale: ([\d.]+), rotate: (-?\d+) \}\}/g, replace: 'initial={isHydrated ? { opacity: 0, scale: $1, rotate: $2 } : false}' },
  ]

  for (const { find, replace } of initialPatterns) {
    content = content.replace(find, replace)
  }

  // Write the updated file
  fs.writeFileSync(file, content)
  console.log(`  ✅ ${relativePath}`)
  updated++
}

console.log(`\n✅ Updated ${updated} files`)
console.log(`⏭️  Skipped ${skipped} files`)
