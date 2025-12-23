import { MessageSquare, Lightbulb, Brain, Database } from 'lucide-react'
import { Tab } from './DesignIterationLog'

export const iqTabs: Tab[] = [
    {
        id: '01_NLQ_WORKFLOW',
        index: '01',
        label: 'Natural Language Query',
        icon: <MessageSquare className="w-4 h-4" />,
        title: 'Ask a Question Workflow',
        description: 'From empty state to visualization. Validating the "Ask a Question" mental model with non-technical users.',
        specCaption: 'FIG_01: QUERY_PARSING_LOGIC',
        images: [
            {
                src: '/images/case-study/iq-plugin/IQ - Ask a Question _ Empty State 1.png',
                alt: 'IQ NLQ - Empty state',
                caption: 'Empty State: Tutorial guidance on first visit',
                figNumber: 'FIG_01A',
            },
            {
                src: '/images/case-study/iq-plugin/IQ - Ask a Question _ Data Selected 1.png',
                alt: 'IQ NLQ - Data selected',
                caption: 'Data Selected: Ready to receive natural language input',
                figNumber: 'FIG_01B',
            },
            {
                src: '/images/case-study/iq-plugin/IQ - Ask a Question - Vertical Stacked Bar 1.png',
                alt: 'IQ NLQ - Chart visualization',
                caption: 'Query Result: Auto-generated visualization',
                figNumber: 'FIG_01C',
            },
        ],
    },
    {
        id: '02_INSIGHTS_ENGINE',
        index: '02',
        label: 'Automated Insights',
        icon: <Lightbulb className="w-4 h-4" />,
        title: 'Pattern Recognition Engine',
        description: 'Generating instant summaries. Testing the "auto-generate" pattern to reduce time-to-value.',
        specCaption: 'FIG_02: PATTERN_RECOGNITION_UI',
        images: [
            {
                src: '/images/case-study/iq-plugin/IQ - Insights _ Empty State 1.png',
                alt: 'IQ Insights - Empty state',
                caption: 'Empty State: Data selection prompt',
                figNumber: 'FIG_02A',
            },
            {
                src: '/images/case-study/iq-plugin/IQ - Insights _ Data Selected 1.png',
                alt: 'IQ Insights - Data selected',
                caption: 'Processing: Insights generation in progress',
                figNumber: 'FIG_02B',
            },
            {
                src: '/images/case-study/iq-plugin/IQ - Insights - Tile View 1.png',
                alt: 'IQ Insights - Tile view',
                caption: 'Results: Scannable tile-based insights display',
                figNumber: 'FIG_02C',
            },
        ],
    },
    {
        id: '03_PREDICT_WORKFLOW',
        index: '03',
        label: 'Predictive Analytics',
        icon: <Brain className="w-4 h-4" />,
        isKey: true,
        title: 'Guided Model Training Flow',
        description: 'The guided 4-step ML flow. Re-using the "ML Functions" wizard pattern within the IQ Hub context.',
        specCaption: 'FIG_03: GUIDED_MODEL_TRAINING',
        images: [
            {
                src: '/images/case-study/iq-plugin/IQ - Predict Data - Train Models - landing page - model tile view.png',
                alt: 'IQ Predict Data - Train models landing',
                caption: 'Landing: Model tile overview with quick actions',
                figNumber: 'FIG_03A',
            },
            {
                src: '/images/case-study/iq-plugin/IQ - Predict Data - Train Model Workflow - Compare models.png',
                alt: 'IQ Predict Data - Compare models',
                caption: 'Compare: Side-by-side model performance analysis',
                figNumber: 'FIG_03B',
            },
            {
                src: '/images/case-study/iq-plugin/IQ - Predict Data - Train Model Workflow - Results - Fitted Values.png',
                alt: 'IQ Predict Data - Model results',
                caption: 'Results: Fitted values with confidence intervals',
                figNumber: 'FIG_03C',
            },
            {
                src: '/images/case-study/iq-plugin/IQ - Predict Data - Run Model - results.png',
                alt: 'IQ Predict Data - Results',
                caption: 'Execution: Live prediction results',
                figNumber: 'FIG_03D',
            },
            {
                src: '/images/case-study/iq-plugin/IQ - Predict Data - Run Model - explanability.png',
                alt: 'IQ Predict Data - Explainability',
                caption: 'Explainability: Making ML decisions transparent',
                figNumber: 'FIG_03E',
            },
        ],
    },
    {
        id: '04_DATA_PREVIEW',
        index: '04',
        label: 'Data Exploration',
        icon: <Database className="w-4 h-4" />,
        title: 'Quick-Look Dataset Analysis',
        description: 'Ensuring consistent table interactions and time-series views. The first step in any data workflow.',
        specCaption: 'FIG_04: DATA_QUALITY_INSPECTION',
        images: [
            {
                src: '/images/case-study/iq-plugin/IQ - Preview Data Sample Tab 1.png',
                alt: 'IQ Preview Data - Sample tab',
                caption: 'Sample Tab: Quick data inspection',
                figNumber: 'FIG_04A',
            },
            {
                src: '/images/case-study/iq-plugin/IQ - Preview Data Key Analysis Tab 1.png',
                alt: 'IQ Preview Data - Key analysis tab',
                caption: 'Key Analysis: Column statistics and distribution',
                figNumber: 'FIG_04B',
            },
            {
                src: '/images/case-study/iq-plugin/IQ - Preview Data Time-series report tab 1.png',
                alt: 'IQ Preview Data - Time-series tab',
                caption: 'Time-series: Temporal pattern visualization',
                figNumber: 'FIG_04C',
            },
        ],
    },
]

export const iqFooterContent = {
    label: '> VALIDATION_OUTCOME:',
    text: (
        <>
            User testing confirmed that the "Unified Hub" architecture successfully abstracted the complexity.{' '}
            <span className="text-emerald-400 font-medium">Non-technical users could execute NLQ queries without training</span>, while{' '}
            <span className="text-emerald-400 font-medium">Data Scientists accepted the "Predict" wizard as a valid accelerator</span>.
        </>
    ),
}
