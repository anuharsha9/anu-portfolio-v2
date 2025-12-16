#!/usr/bin/env node
/**
 * Cleanup script to replace manual isHydrated state with useHydration hook
 */

const fs = require('fs')
const path = require('path')

const files = [
  'src/app/me/page.tsx',
  'src/components/case-study/ImpactVisual.tsx',
  'src/components/case-study/RCDesignEvolution.tsx',
  'src/components/case-study/VitalSigns.tsx',
  'src/components/case-study/QuickOverview.tsx',
]

for (const file of files) {
  const fullPath = path.join(__dirname, '..', file)
  if (!fs.existsSync(fullPath)) {
    console.log(`  ⚠️  ${file} not found`)
    continue
  }

  let content = fs.readFileSync(fullPath, 'utf8')

  // Remove DEBUG_ENDPOINT if present
  content = content.replace(/\/\/ #region agent log\nconst DEBUG_ENDPOINT = [^;]+;\n\/\/ #endregion\n\n?/g, '')

  // Replace the manual state block with just the hook call
  // Pattern: // #region agent log - H*: ... \n const [isHydrated, setIsHydrated] ... // #endregion
  const manualStatePattern = /\s*\/\/ #region agent log - H\d+: Track hydration[^\n]*\n\s*const \[isHydrated, setIsHydrated\] = useState\(false\)\n\s*useEffect\(\(\) => \{[^}]+\}\n\s*const timer = setTimeout\(\(\) => \{[^}]+\}[^}]+\}\n\s*return \(\) => clearTimeout\(timer\)\n\s*\}, \[\]\)\n\s*\/\/ #endregion/g

  content = content.replace(manualStatePattern, '\n  const isHydrated = useHydration()')

  // Also remove any remaining DEBUG_ENDPOINT fetch calls
  content = content.replace(/\s*fetch\(DEBUG_ENDPOINT[^;]+;/g, '')

  fs.writeFileSync(fullPath, content)
  console.log(`  ✅ ${file}`)
}

console.log('\n✅ Cleanup complete')

