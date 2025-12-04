'use client'

import { useState, FormEvent } from 'react'
import { trackContactFormSubmit } from '@/components/analytics/GoogleAnalytics'

interface ContactFormData {
  name: string
  email: string
  company: string
  projectType: string
  message: string
}

interface ContactFormProps {
  isLightBackground?: boolean
  onSuccess?: () => void
}

export default function ContactForm({ isLightBackground = false, onSuccess }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error message when user starts typing
    if (submitStatus === 'error') {
      setSubmitStatus('idle')
      setErrorMessage('')
    }
  }

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setErrorMessage('Name is required')
      return false
    }
    if (!formData.email.trim()) {
      setErrorMessage('Email is required')
      return false
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage('Please enter a valid email address')
      return false
    }
    if (!formData.message.trim()) {
      setErrorMessage('Message is required')
      return false
    }
    return true
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      setSubmitStatus('error')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      // Using Formspree or similar service
      // For now, we'll use mailto as fallback, but you should integrate with a form service
      // Option 1: Formspree (free tier available)
      // Option 2: Netlify Forms (if hosting on Netlify)
      // Option 3: EmailJS (client-side email sending)
      // Option 4: Custom API endpoint

      // For now, using mailto as a fallback
      const subject = encodeURIComponent(
        `Contact from Portfolio: ${formData.projectType || 'General Inquiry'}`
      )
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || 'N/A'}\nProject Type: ${formData.projectType || 'General Inquiry'}\n\nMessage:\n${formData.message}`
      )

      // In production, replace this with actual form submission
      // For now, we'll show success and provide mailto link
      window.location.href = `mailto:anu.anuja@outlook.com?subject=${subject}&body=${body}`

      // Track form submission
      trackContactFormSubmit(formData.projectType)

      // Simulate success (remove this when implementing actual form submission)
      setTimeout(() => {
        setSubmitStatus('success')
        setIsSubmitting(false)
        setFormData({
          name: '',
          email: '',
          company: '',
          projectType: '',
          message: '',
        })
        
        // Close form after a brief delay to show success message
        if (onSuccess) {
          setTimeout(() => {
            onSuccess()
          }, 2000) // Close after 2 seconds to show success message
        }
      }, 500)
    } catch (error) {
      if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
        console.error('Form submission error:', error)
      }
      setSubmitStatus('error')
      setErrorMessage('Something went wrong. Please try again or email directly at anu.anuja@outlook.com')
      setIsSubmitting(false)
    }
  }

  const bgColor = isLightBackground ? 'bg-white' : 'bg-black/10'
  const borderColor = isLightBackground ? 'border-refined-light' : 'border-refined-dark'
  const textColor = isLightBackground ? 'text-[var(--text-primary-light)]' : 'text-white'
  const mutedColor = isLightBackground ? 'text-[var(--text-muted-light)]' : 'text-white/60'
  const inputBg = isLightBackground ? 'bg-white' : 'bg-white/5'
  const inputBorder = isLightBackground ? 'border-refined-light' : 'border-refined-dark'
  const inputFocus = isLightBackground
    ? 'focus:border-[var(--accent-teal)] focus:ring-[var(--accent-teal)]/20'
    : 'focus:border-white/30 focus:ring-white/10'

  return (
    <div className={`${bgColor} rounded-lg border ${borderColor} p-8 md:p-12`}>
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h3 className={`${textColor} text-2xl md:text-3xl font-serif`}>Get in Touch</h3>
          <p className={`${mutedColor} text-base md:text-lg max-w-2xl mx-auto`}>
            Interested in working together? Have a question? I&apos;d love to hear from you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className={`block ${textColor} text-sm font-medium mb-2`}>
                Name <span className="text-[var(--accent-teal)]">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-lg ${inputBg} border ${inputBorder} ${textColor} placeholder:${mutedColor} focus:outline-none focus:ring-2 ${inputFocus} transition-all`}
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className={`block ${textColor} text-sm font-medium mb-2`}>
                Email <span className="text-[var(--accent-teal)]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-lg ${inputBg} border ${inputBorder} ${textColor} placeholder:${mutedColor} focus:outline-none focus:ring-2 ${inputFocus} transition-all`}
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="company" className={`block ${textColor} text-sm font-medium mb-2`}>
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg ${inputBg} border ${inputBorder} ${textColor} placeholder:${mutedColor} focus:outline-none focus:ring-2 ${inputFocus} transition-all`}
                placeholder="Company name (optional)"
              />
            </div>

            <div>
              <label htmlFor="projectType" className={`block ${textColor} text-sm font-medium mb-2`}>
                Project Type
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg ${inputBg} border ${inputBorder} ${textColor} focus:outline-none focus:ring-2 ${inputFocus} transition-all`}
              >
                <option value="">Select an option</option>
                <option value="full-time">Full-time Position</option>
                <option value="contract">Contract Work</option>
                <option value="consulting">Consulting</option>
                <option value="speaking">Speaking Engagement</option>
                <option value="collaboration">Collaboration</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className={`block ${textColor} text-sm font-medium mb-2`}>
              Message <span className="text-[var(--accent-teal)]">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className={`w-full px-4 py-3 rounded-lg ${inputBg} border ${inputBorder} ${textColor} placeholder:${mutedColor} focus:outline-none focus:ring-2 ${inputFocus} transition-all resize-none`}
              placeholder="Tell me about your project, question, or how I can help..."
            />
          </div>

          {submitStatus === 'error' && errorMessage && (
            <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
              <p className="text-red-500 text-sm">{errorMessage}</p>
            </div>
          )}

          {submitStatus === 'success' && (
            <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
              <p className="text-green-500 text-sm">
                Thank you! Your message has been sent. I&apos;ll get back to you soon.
              </p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
            <p className={`${mutedColor} text-sm text-center sm:text-left`}>
              Or email directly:{' '}
              <a
                href="mailto:anu.anuja@outlook.com"
                className="text-[var(--accent-teal)] hover:underline"
              >
                anu.anuja@outlook.com
              </a>
            </p>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-8 py-3 rounded-full border-2 border-[var(--accent-teal)] text-[var(--accent-teal)] font-medium transition-all duration-300 hover:bg-[var(--accent-teal)] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

