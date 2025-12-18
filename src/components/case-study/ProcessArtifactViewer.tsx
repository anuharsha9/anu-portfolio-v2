'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Download, ZoomIn, FileText } from 'lucide-react'
import ImageLightbox from './ImageLightbox'
import { Artifact } from '@/data/reportcaster-artifacts'

interface ProcessArtifactViewerProps {
    artifacts: Artifact[]
    pdfUrl?: string
    title?: string
    description?: string
}

export default function ProcessArtifactViewer({
    artifacts,
    pdfUrl,
    title = "The Raw Sketchbook",
    description = "Before pixels, there was paper. I believe thinking happens away from the screen. Here is a glimpse into the 100+ pages of notes, logic maps, and questions that built this system."
}: ProcessArtifactViewerProps) {
    const [lightboxOpen, setLightboxOpen] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)

    // Show only first 6 items in the grid to save space, but lightbox navigates all
    const displayArtifacts = artifacts.slice(0, 6)

    const openLightbox = (index: number) => {
        setCurrentIndex(index)
        setLightboxOpen(true)
    }

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-6">
                <div className="space-y-3 max-w-2xl">
                    <div className="flex items-center gap-2 text-[var(--accent-teal)]">
                        <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-teal)]">{'// ARCHIVE_EVIDENCE'}</span>
                        <div className="h-px w-8 bg-[var(--accent-teal)]/30" />
                    </div>
                    <h3 className="text-[var(--text-heading)] text-3xl md:text-4xl lg:text-5xl font-serif leading-tight tracking-tight">
                        {title}
                    </h3>
                    <p className="text-[var(--text-muted)] text-sm md:text-base leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* PDF Download Action */}
                {pdfUrl && (
                    <a
                        href={pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-shrink-0 items-center gap-3 pl-6 pr-5 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                    >
                        <div className="relative">
                            <FileText className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
                            <span className="absolute -top-1 -right-1 flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                        </div>
                        <div className="text-left">
                            <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Full Access</p>
                            <p className="text-sm font-medium">View Original PDF</p>
                        </div>
                        <Download className="w-4 h-4 text-slate-500 group-hover:text-slate-300 ml-1" />
                    </a>
                )}
            </div>

            {/* Artifact Grid -Masonry Feel */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {displayArtifacts.map((artifact, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, zIndex: 10 }}
                        className="group relative cursor-pointer"
                        onClick={() => openLightbox(index)}
                    >
                        {/* Paper Effect Container */}
                        <div className="relative aspect-[4/3] bg-white p-2 md:p-3 shadow-sm border border-slate-200 group-hover:shadow-xl transition-all duration-300 ease-out">
                            {/* Tape Effect (Decorative) */}
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-yellow-50/80 rotate-1 shadow-sm opacity-80 z-20" />

                            <div className="relative w-full h-full overflow-hidden bg-slate-50 filter grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500">
                                <Image
                                    src={artifact.src}
                                    alt={artifact.alt}
                                    fill
                                    className={`object-cover ${artifact.needsRotation ? '-rotate-90 scale-[1.35]' : ''} ${artifact.needsScale ? 'scale-[1.10]' : ''}`}
                                    sizes="(max-width: 768px) 50vw, 33vw"
                                />

                                {/* Overlay on Hover */}
                                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300 flex items-center justify-center">
                                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg">
                                        <ZoomIn className="w-5 h-5 text-slate-700" />
                                    </div>
                                </div>
                            </div>

                            {/* Caption (Simulated Handwriting) */}
                            <div className="mt-2 text-center">
                                <p className="font-handwriting text-xs text-slate-500 line-clamp-1 italic font-serif">
                                    {artifact.alt}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}

                {/* "More" Card Indicator */}
                {artifacts.length > 6 && (
                    <div className="flex items-center justify-center p-6 text-center">
                        <div className="space-y-2">
                            <p className="font-mono text-2xl text-[var(--accent-teal)]">+{artifacts.length - 6}</p>
                            <p className="text-sm text-[var(--text-muted)]">more pages in the full archive</p>
                        </div>
                    </div>
                )}
            </div>

            {/* Lightbox */}
            <ImageLightbox
                isOpen={lightboxOpen}
                onClose={() => setLightboxOpen(false)}
                imageSrc={artifacts[currentIndex].src}
                imageAlt={artifacts[currentIndex].alt}
                imageCaption={artifacts[currentIndex].caption}
                images={artifacts} // Use full list for navigation
                currentIndex={currentIndex}
                onNavigate={setCurrentIndex}
            />
        </div>
    )
}
