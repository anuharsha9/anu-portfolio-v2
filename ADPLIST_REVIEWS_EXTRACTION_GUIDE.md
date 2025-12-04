# How to Extract and Add ADPList Reviews

## ✅ What I've Done

1. **Created `ADPListReviewsDisplay` component** - Displays reviews in the same style as testimonials
2. **Added `ADPListReview` interface** - Structure for storing review data
3. **Updated About page** - Shows reviews when you add them to the data file
4. **Removed iframe dependency** - No external widget needed

## 📝 How to Add Your Reviews

### Step 1: Visit Your ADPList Profile
Go to: https://adplist.org/mentors/anuja-harsha-nimmagadda

### Step 2: Extract Review Information
For each review, collect:
- **Quote** (the review text)
- **Name** (mentee's name)
- **Role** (optional - their job title)
- **Company** (optional - their company)
- **Rating** (optional - 1-5 stars)
- **Date** (optional - when the review was posted)

### Step 3: Add to Data File
Open `src/data/home.ts` and find the `adpListReviews` array (around line 285).

Replace the empty array with your reviews:

```typescript
export const adpListReviews: ADPListReview[] = [
  {
    quote: 'Anuja provided excellent mentorship and helped me navigate my career transition. Her insights on portfolio building were invaluable.',
    name: 'Mentee Name',
    role: 'UX Designer',
    company: 'Company Name',
    rating: 5,
    date: '2024-12-15',
  },
  {
    quote: 'Great mentor! Very helpful and responsive.',
    name: 'Another Mentee',
    role: 'Product Designer',
    rating: 5,
  },
  // Add more reviews...
]
```

### Step 4: Review Display
The reviews will automatically appear on your About page in the "Mentorship & Community" section, styled consistently with your testimonials.

## 🎨 Design Features

- **Consistent styling** - Matches your testimonials design
- **Responsive grid** - 2 columns on desktop, 1 on mobile
- **Quote icons** - Same teal accent quote icons
- **Star ratings** - Shows 5-star rating if provided
- **Hover effects** - Subtle lift and border color change
- **Link to full profile** - "View all reviews on ADPList" link at bottom

## 💡 Tips

1. **Start with 3-5 reviews** - Don't overwhelm the page
2. **Include diverse reviews** - Mix of different mentees and topics
3. **Keep quotes concise** - Shorter quotes work better visually
4. **Update regularly** - Add new reviews as you get them

## 🔄 Maintenance

When you get new reviews:
1. Visit your ADPList profile
2. Extract the new review information
3. Add it to the `adpListReviews` array in `src/data/home.ts`
4. The review will appear automatically on your About page

---

*The component is ready - just add your review data!*

