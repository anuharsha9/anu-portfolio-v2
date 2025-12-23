import React from 'react'

/**
 * Extracts key metrics from text (percentages, numbers, etc.)
 * Matches patterns like "44–56%", "5 / 5", "12+ clicks", "100%", "5 → 1"
 */
export function extractMetrics(text: string): string[] {
    const metrics: string[] = []
    const metricPatterns = [
        /\d+[–-]\d+%/g, // Range percentages
        /\d+%/g, // Single percentages
        /\d+\s*\/\s*\d+/g, // Ratios like "5 / 5"
        /\d+\+\s*(?:clicks|steps|months|years)/gi, // "12+ clicks"
        /≈?\d+[–-]\d+%\s*(?:fewer|faster|reduction|increase)/gi, // "≈60–70% fewer"
        /\d+\s*→\s*\d+/g, // "5 → 1"
    ]

    metricPatterns.forEach((pattern) => {
        const matches = text.match(pattern)
        if (matches) {
            metrics.push(...matches)
        }
    })

    return [...new Set(metrics)] // Remove duplicates
}

/**
 * Parses body text to identify "Aha moment" blocks.
 * Returns an array of text parts and aha moments.
 */
export function parseBodyWithAhaMoments(body: string) {
    const ahaPattern = /Aha moment — ([^:\n]+):\s*([\s\S]*?)(?=\n\nAha moment|$)/g
    const parts: Array<{ type: 'text' | 'aha'; content: string; title?: string }> = []
    let lastIndex = 0
    let match

    while ((match = ahaPattern.exec(body)) !== null) {
        // Add text before the aha moment
        if (match.index > lastIndex) {
            const textBefore = body.substring(lastIndex, match.index).trim()
            if (textBefore) {
                parts.push({
                    type: 'text',
                    content: textBefore,
                })
            }
        }

        // Add the aha moment
        const nextAhaIndex = body.indexOf('\n\nAha moment', match.index + match[0].length)
        const contentEnd = nextAhaIndex > 0 ? nextAhaIndex : body.length
        const fullAhaContent = body.substring(match.index + match[0].indexOf(':') + 1, contentEnd).trim()

        parts.push({
            type: 'aha',
            title: match[1].trim(),
            content: fullAhaContent,
        })

        lastIndex = contentEnd
    }

    // Add remaining text
    if (lastIndex < body.length) {
        const remainingText = body.substring(lastIndex).trim()
        if (remainingText) {
            parts.push({
                type: 'text',
                content: remainingText,
            })
        }
    }

    // If no aha moments found, return original text
    if (parts.length === 0 || parts.every(p => p.type === 'text' && !p.content)) {
        return [{ type: 'text' as const, content: body }]
    }

    return parts
}

/**
 * Parses simple markdown patterns:
 * - **bold** or *bold*
 * - Bullet points starting with •
 */
export function renderFormattedContent(text: string, t: any, isFirstParagraph = false): React.ReactNode[] | null {
    if (!text) return null

    // Function to parse bold text
    const parseBold = (str: string) => {
        const parts = str.split(/(\*\*.*?\*\*|\*.*?\*)/g)
        return parts.map((part, i) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return (
                    <strong key={i} className="font-bold text-[var(--text-heading)]">
                        {part.slice(2, -2)}
                    </strong>
                )
            }
            if (part.startsWith('*') && part.endsWith('*')) {
                return (
                    <strong key={i} className="font-bold text-[var(--text-heading)]">
                        {part.slice(1, -1)}
                    </strong>
                )
            }
            return part
        })
    }

    const lines = text.split('\n')
    const content: React.ReactNode[] = []
    let currentList: React.ReactNode[] = []

    lines.forEach((line, index) => {
        const trimmedLine = line.trim()
        if (trimmedLine.startsWith('•')) {
            // It's a list item
            currentList.push(
                <li key={`li-${index}`} className="flex gap-3 mb-2 last:mb-0">
                    <span className="text-[var(--accent-teal)] font-bold flex-shrink-0 mt-1">•</span>
                    <span className="flex-1">{parseBold(trimmedLine.substring(1).trim())}</span>
                </li>
            )
        } else {
            // If we were building a list, push it now
            if (currentList.length > 0) {
                content.push(
                    <ul key={`list-${index}`} className="my-4 list-none">
                        {currentList}
                    </ul>
                )
                currentList = []
            }

            // Add regular line
            if (trimmedLine) {
                content.push(
                    <span key={`line-${index}`} className="block mb-4 last:mb-0">
                        {parseBold(trimmedLine)}
                    </span>
                )
            } else if (index < lines.length - 1) {
                // Empty line within a paragraph, add some space
                content.push(<div key={`br-${index}`} className="h-2" />)
            }
        }
    })

    // Final list cleanup
    if (currentList.length > 0) {
        content.push(
            <ul key="final-list" className="my-4 list-none">
                {currentList}
            </ul>
        )
    }

    return content
}

/**
 * Helper to create image groups based on content captions.
 * Groups images that seem related (steps, specific flows).
 */
export function createImageGroups(images: any[]) {
    if (!images || images.length <= 6) {
        return images ? [images.map((img, i) => ({ ...img, originalIndex: i }))] : []
    }

    const groups: Array<Array<any>> = []
    let currentGroup: Array<any> = []

    images.forEach((img) => {
        const caption = img.caption?.toLowerCase() || ''
        const imageWithIndex = { ...img, originalIndex: images.indexOf(img) }

        // Smart grouping based on content
        const isStep = caption.includes('step')
        const isBinaryClassification = caption.includes('binary classification') || caption.includes('classification metrics')
        const isSave = caption.includes('save') || caption.includes('select folder')
        const isWorkflowInit = caption.includes('landing page') || caption.includes('empty state')
        const isCompletion = caption.includes('compare models') || caption.includes('model details')

        // Start new group at logical breaks
        if (currentGroup.length > 0) {
            const prevCaption = currentGroup[currentGroup.length - 1].caption?.toLowerCase() || ''
            const prevIsStep = prevCaption.includes('step')
            const prevIsBinary = prevCaption.includes('binary classification') || prevCaption.includes('classification metrics')
            const prevIsSave = prevCaption.includes('save')
            const prevIsInit = prevCaption.includes('landing page') || prevCaption.includes('empty state')

            // Break groups at transitions
            if (
                (isStep && !prevIsStep && currentGroup.length > 1) ||
                (isBinaryClassification && !prevIsBinary && currentGroup.length > 1) ||
                (isSave && !prevIsSave && currentGroup.length > 1) ||
                (isCompletion && !prevIsInit && currentGroup.length > 1) ||
                currentGroup.length >= 4
            ) {
                groups.push([...currentGroup])
                currentGroup = []
            }
        }

        currentGroup.push(imageWithIndex)
    })

    if (currentGroup.length > 0) {
        groups.push(currentGroup)
    }

    return groups.length > 0 ? groups : [images.map((img, i) => ({ ...img, originalIndex: i }))]
}
