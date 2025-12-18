export interface Artifact {
    src: string
    alt: string
    caption?: string
    needsRotation?: boolean
    needsScale?: boolean
}

export const reportCasterArtifacts: Artifact[] = [
    {
        src: '/images/case-study/ReportCaster/process/rc-sketchbook_Page_01_Image_0001.jpg',
        alt: 'Making notes on legacy system',
        caption: 'Making notes: Deconstructing the fragmentation of the 5 connected subsystems.',
        needsRotation: true
    },
    {
        src: '/images/case-study/ReportCaster/process/rc-sketchbook_Page_02_Image_0001.jpg',
        alt: 'Mapping user journeys',
        caption: 'Mapping journeys: Tracing the complex paths users had to navigate.',
        needsRotation: true
    },
    {
        src: '/images/case-study/ReportCaster/process/rc-sketchbook_Page_03_Image_0001.jpg',
        alt: 'Identifying friction points',
        caption: 'Pain points: Documenting the friction and dead-ends in the legacy workflow.',
        needsRotation: true
    },
    {
        src: '/images/case-study/ReportCaster/process/rc-sketchbook_Page_04_Image_0001.jpg',
        alt: 'Brainstorming architecture',
        caption: 'Reimagining RC: Brainstorming how the scheduling modal could live in the + menu.',
        needsRotation: true
    },
    {
        src: '/images/case-study/ReportCaster/process/rc-sketchbook_Page_05_Image_0001.jpg',
        alt: 'Simplifying complexity',
        caption: 'Reimagining RC: Sketches on how we could simplify complex rules.',
        needsScale: true
    },
    {
        src: '/images/case-study/ReportCaster/process/rc-sketchbook_Page_06_Image_0001.jpg',
        alt: 'Unifying workflows',
        caption: 'Reimagining RC: Exploring how scattered lists could be unified with the main flow.',
        needsScale: true
    },
    {
        src: '/images/case-study/ReportCaster/process/rc-sketchbook_Page_07_Image_0001.jpg',
        alt: 'Visualizing the new interface',
        caption: 'Reimagining RC: Early sketches of what the new unified version could actually look like.',
        needsScale: true
    },
    // Adding the rest programmatically to ensure we capture the volume
    ...Array.from({ length: 7 }, (_, i) => {
        const pageNum = i + 8
        const needsRotation = pageNum === 13
        return {
            src: `/images/case-study/ReportCaster/process/rc-sketchbook_Page_${String(pageNum).padStart(2, '0')}_Image_0001.jpg`,
            alt: `Process sketch page ${pageNum}`,
            needsRotation,
            needsScale: !needsRotation // Scale the others too so they match visually
        }
    })
]
