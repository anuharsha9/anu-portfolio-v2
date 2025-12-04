'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'

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

    const modalContent = (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 flex items-center justify-center"
                    style={{ zIndex: 20000 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0 bg-black/90 backdrop-blur-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={onClose}
                    />

                    {/* Modal Content - Full Screen */}
                    <motion.div
                        className="relative bg-[var(--bg-dark)] w-full h-full flex flex-col overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                            aria-label="Close preview"
                            style={{ zIndex: 20001 }}
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

                        <div className="flex flex-col h-full">
                            {/* Header with Title & Description */}
                            <div className="flex-shrink-0 p-4 md:p-6 pb-3 border-b border-white/10">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="space-y-2 flex-1">
                                        <h3 className="text-white text-lg md:text-xl font-serif leading-tight">
                                            {title}
                                        </h3>
                                        <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                                            {description}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* PDF Viewer - Takes full remaining space */}
                            <div className="flex-1 min-h-0 w-full">
                                <iframe
                                    src={`${pdfUrl}#toolbar=1&navpanes=1&scrollbar=1`}
                                    className="w-full h-full"
                                    title={title}
                                    style={{ border: 'none' }}
                                />
                            </div>

                            {/* Action Buttons */}
                            <div className="flex-shrink-0 p-4 md:p-6 pt-3 border-t border-white/10">
                                <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
                                    <a
                                        href={pdfUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[var(--accent-teal)] text-white text-sm font-medium hover:bg-[var(--accent-teal-soft)] transition-all duration-300 group"
                                    >
                                        <svg
                                            className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
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
                                        Open in New Tab
                                    </a>
                                    <a
                                        href={pdfUrl}
                                        download
                                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white/10 hover:border-white/30 transition-all duration-300 group"
                                    >
                                        <svg
                                            className="w-4 h-4 group-hover:translate-y-0.5 transition-transform"
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
                </motion.div>
            )}
        </AnimatePresence>
    )

    // Render modal using portal to document.body to escape parent containers
    if (typeof window !== 'undefined') {
        return createPortal(modalContent, document.body)
    }

    return null
}

