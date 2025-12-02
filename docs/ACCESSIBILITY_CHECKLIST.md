# Accessibility Audit Checklist

## ✅ Already Implemented
- Skip to content link
- ARIA labels on navigation, buttons, modals
- Focus trap in ImageLightbox
- Keyboard navigation support
- Alt text on images
- Reduced motion support (CSS media queries)
- Focus-visible styles

## ⚠️ Needs Verification

### Color Contrast
- **Text on dark backgrounds**: Verify WCAG AA compliance (4.5:1 for normal text, 3:1 for large text)
- **Teal accent color** (`--accent-teal`): Check contrast against white and dark backgrounds
- **Button text**: Ensure sufficient contrast on hover states
- **Links**: Verify link color contrast meets standards

### Screen Reader Testing
- Test with NVDA (Windows) or VoiceOver (Mac)
- Verify all interactive elements are announced
- Check that form labels are properly associated
- Ensure error messages are announced

### Keyboard Navigation
- ✅ Tab order is logical
- ✅ Focus indicators are visible
- ⚠️ Verify all interactive elements are keyboard accessible
- ⚠️ Check that modals can be closed with Escape key

### Semantic HTML
- ✅ Proper heading hierarchy (h1 → h2 → h3)
- ✅ Lists use proper `<ul>`/`<ol>` tags
- ✅ Forms use proper `<label>` associations
- ⚠️ Verify landmark regions (main, nav, footer)

## Recommended Tools
1. **axe DevTools** (Browser extension)
2. **WAVE** (Web Accessibility Evaluation Tool)
3. **Lighthouse** (Built into Chrome DevTools)
4. **Color Contrast Analyzer** (Browser extension)

## Quick Wins
1. Run Lighthouse accessibility audit
2. Test with keyboard-only navigation
3. Verify color contrast ratios
4. Test with screen reader (NVDA/VoiceOver)

## Notes
- Most accessibility features are already in place
- Main focus should be on verification
- Color contrast is the most likely issue to address

