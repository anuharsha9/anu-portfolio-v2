export default function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-surface bg-transparent">
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 xl:px-24 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-text font-medium">
            Anuja Harsha Nimmagadda
          </div>
          <div className="text-muted text-sm">
            © {currentYear}
          </div>
        </div>
        <div className="mt-4 text-center md:text-left">
          <p className="text-muted text-sm">
            Designing clarity for complex systems.
          </p>
        </div>
      </div>
    </footer>
  )
}

