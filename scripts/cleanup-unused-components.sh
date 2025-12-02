#!/bin/bash

# Unused components to remove (verified not imported anywhere)
UNUSED_COMPONENTS=(
  "src/components/home/PersonalSection.tsx"
  "src/components/home/BrainHeroSection.tsx"
  "src/components/home/FinalCTA.tsx"
  "src/components/home/WorkArchiveSection.tsx"
  "src/components/home/RecommendationsCarousel.tsx"
  "src/components/home/FeaturedWorkSection.tsx"
  "src/components/home/ArticlesSection.tsx"
  "src/components/home/FeaturedCaseStudies.tsx"
  "src/components/home/ContactSection.tsx"
  "src/components/home/RecommendationWall.tsx"
  "src/components/home/BrainMapSection.tsx"
  "src/components/home/LeadershipSection.tsx"
  "src/components/home/BrainIllustration.tsx"
  "src/components/loading/LoadingScreen.tsx"
  "src/components/case-study/EntryPointComparison.tsx"
  "src/components/case-study/WorkflowTransformation.tsx"
  "src/components/case-study/DecisionJourney.tsx"
  "src/components/case-study/ReflectionBlock.tsx"
  "src/components/case-study/VersionTimeline.tsx"
  "src/components/case-study/ClickReductionVisual.tsx"
)

echo "🗑️  Removing unused components..."
for component in "${UNUSED_COMPONENTS[@]}"; do
  if [ -f "$component" ]; then
    echo "  Removing: $component"
    rm "$component"
  fi
done
echo "✅ Cleanup complete!"



