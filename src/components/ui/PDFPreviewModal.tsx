'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import Image from 'next/image'

interface PDFPreviewModalProps {
    isOpen: boolean
    onClose: () => void
    title: string
    description: string
    pdfUrl: string
    thumbnailUrl?: string
}

export default function PDFPreviewModal({
    isOpen,
    onClose,
    title,
    description,
    pdfUrl,
    thumbnailUrl,
}: PDFPreviewModalProps) {
    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen])

    // Handle escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose()
            }
        }

        if (isOpen) {
            window.addEventListener('keydown', handleEscape)
            return () => window.removeEventListener('keydown', handleEscape)
        }
    }, [isOpen, onClose])

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0 bg-black/90 backdrop-blur-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={onClose}
                    />

                    {/* Modal Content */}
                    <motion.div
                        className="relative bg-[var(--bg-dark)] border border-white/10 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                            aria-label="Close preview"
                        >
                            <svg
                                className="w-5 h-5 text-white/70 group-hover:text-white transition-colors"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>

                        <div className="overflow-y-auto max-h-[90vh] p-8 md:p-10">
                            <div className="space-y-6">
                                {/* Thumbnail Preview (if available) */}
                                {thumbnailUrl && (
                                    <div className="aspect-[8.5/11] relative rounded-lg overflow-hidden border border-white/10 bg-white/5">
                                        <Image
                                            src={thumbnailUrl}
                                            alt={`Preview of ${title}`}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 672px"
                                        />
                                    </div>
                                )}

                                {/* PDF Icon (fallback if no thumbnail) */}
                                {!thumbnailUrl && (
                                    <div className="aspect-[8.5/11] relative rounded-lg overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center">
                                        <svg
                                            className="w-20 h-20 text-[var(--accent-teal)]"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                                d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>
                                )}

                                {/* Title & Description */}
                                <div className="space-y-3">
                                    <h3 className="text-white text-2xl md:text-3xl font-serif leading-tight">
                                        {title}
                                    </h3>
                                    <p className="text-white/70 text-base md:text-lg leading-relaxed">
                                        {description}
                                    </p>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                                    <a
                                        href={pdfUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[var(--accent-teal)] text-white font-medium hover:bg-[var(--accent-teal-soft)] transition-all duration-300 group"
                                    >
                                        <svg
                                            className="w-5 h-5 group-hover:translate-x-0.5 transition-transform"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                            />
                                        </svg>
                                        View PDF
                                    </a>
                                    <a
                                        href={pdfUrl}
                                        download
                                        className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 hover:border-white/30 transition-all duration-300 group"
                                    >
                                        <svg
                                            className="w-5 h-5 group-hover:translate-y-0.5 transition-transform"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                            />
                                        </svg>
                                        Download
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}

