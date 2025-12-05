import { CaseStudyData } from '@/types/caseStudy'
import { reportcasterCaseStudy } from '@/data/reportcaster'
import { mlFunctionsCaseStudy } from '@/data/ml-functions'
import { iqPluginCaseStudy } from '@/data/iq-plugin'

const caseStudyMap: Record<string, CaseStudyData> = {
  'reportcaster': reportcasterCaseStudy,
  'ml-functions': mlFunctionsCaseStudy,
  'iq-plugin': iqPluginCaseStudy,
}

export function getCaseStudyData(slug: string): CaseStudyData | null {
  return caseStudyMap[slug] || null
}
