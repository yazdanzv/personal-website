export type AccentTone = 'teal' | 'red' | 'sand' | 'slate' | 'cyan' | 'violet' | 'emerald' | 'amber' | 'rose' | 'blue';

export interface NavLink { label: string; href: string; }
export interface ActionLink { label: string; href: string; variant?: 'primary' | 'secondary' | 'ghost'; icon?: 'download' | 'arrow' | 'spark' | 'external'; external?: boolean; download?: boolean; }
export interface SocialLink { label: string; href: string; icon: 'github' | 'linkedin' | 'scholar' | 'mail'; }
export interface Stat { label: string; value: string; }
export interface ExperienceMetric { value: string; label: string; }
export interface ExperienceEntry { company: string; role: string; period: string; location: string; summary: string | string[]; metrics?: ExperienceMetric[]; technologies: string[]; tone: AccentTone; }
export interface PublicationEntry {
  title: string;
  area: string;
  summary: string;
  tone: AccentTone;
  tags: string[];
  citationCount: number;
  url?: string;
  doi?: string;
  doiUrl?: string;
  venue?: string;
  year?: number;
  pages?: string;
  authorRole?: string;
  ctaLabel?: string;
  indicator: string;
  problem?: string;
  approach?: string;
  contribution?: string;
  result?: string;
  figure?: {
    src: string;
    alt: string;
    caption: string;
    width: number;
    height: number;
  };
}
export interface SkillGroup { title: string; description?: string; items: string[]; tone: AccentTone; }

export const profile = {
  name: 'Yazdan Zandiye Vakili',
  title: 'Full-Stack Software Engineer | Distributed Systems',
  location: 'Vienna, Austria',
  email: 'yazdanzv.1378@gmail.com',
  photo: { src: '/headshot.jpg', alt: 'Portrait of Yazdan Zandiye Vakili' },
  workPhotos: [
    {
      src: '/work-team.jpeg',
      alt: 'Yazdan with colleagues at the Workflow office in Vienna',
      caption: 'Building and modernizing enterprise HR software with the Workflow team in Vienna.',
    },
    { src: '/work-collage.jpeg', alt: 'A collage of team activities at the office' },
  ],
  seo: {
    title: 'Yazdan Zandiye Vakili | Full-Stack Software Engineer',
    description: 'Full-Stack Software Engineer in Vienna focused on distributed systems, enterprise modernization, Java, Spring, and safe evolutionary architecture.',
    siteUrl: 'https://yazdanzv.github.io/personal-website/',
    ogImage: '/og-image.svg',
  },
  links: {
    github: 'https://github.com/yazdanzv',
    linkedin: 'https://www.linkedin.com/in/yazdanzv/',
    scholar: 'https://scholar.google.com/citations?hl=en&user=BWUk8wIAAAAJ',
    cv: 'cv.pdf',
  },
  navigation: [
    { label: 'Experience', href: '#experience' },
    { label: 'Research', href: '#research' },
    { label: 'Engineering', href: '#engineering' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ] satisfies NavLink[],
  hero: {
    intro: 'I modernize enterprise software without breaking the workflows people already rely on.',
    subline: 'My work spans Java and Spring, distributed systems, and migration architecture—supported by research in NLP and machine learning.',
    status: 'Vienna-based. Open to relevant engineering roles across Austria and selected European hubs.',
    focus: ['Enterprise modernization', 'Distributed systems', 'Java & Spring', 'System design'],
    stats: [
      { label: 'Publications', value: '6+' },
      { label: 'Citations', value: '41' },
      { label: 'h-index', value: '3' },
    ] satisfies Stat[],
    primaryActions: [
      { label: 'Download résumé', href: 'cv.pdf', variant: 'primary', icon: 'download', download: true },
      { label: 'Contact me', href: '#contact', variant: 'secondary', icon: 'arrow' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yazdanzv/', variant: 'ghost', icon: 'external', external: true },
    ] satisfies ActionLink[],
    socialActions: [
      { label: 'GitHub', href: 'https://github.com/yazdanzv', icon: 'github' },
      { label: 'Google Scholar', href: 'https://scholar.google.com/citations?hl=en&user=BWUk8wIAAAAJ', icon: 'scholar' },
    ] satisfies SocialLink[],
  },
  engineeringPrinciple: {
    label: 'Working principle',
    title: 'Modernize without breaking what already works.',
    paragraphs: [
      'Modern systems rarely begin from zero. I favor evolutionary architecture: understand existing behavior, establish clean boundaries, and move the system forward without forcing every component to change at once.',
      'I call this controlled coexistence. It is the recurring thread across my work with Java and Hibernate upgrades, distributed caching, UI migration, offline synchronization, and localization.',
    ],
  },
  engineeringCases: [
    {
      number: '01', title: 'Platform modernization at scale', tone: 'teal',
      summary: 'Staged upgrades across 130 Maven projects and approximately 1.3 million lines of production Java.',
      problem: 'A large HR platform needed coordinated runtime, framework, persistence, and search upgrades without destabilizing existing product modules.',
      approach: 'Contributed to Java 11 → 17, Spring 5.2 → 5.3, Hibernate 5.1 → 5.6, and Hibernate Search 5 → 6 compatibility work.',
      outcome: 'Each compatibility step removed blockers for later modernization work, including the path toward Hibernate 6.',
      technologies: ['Java 11 → 17', 'Spring 5.2 → 5.3', 'Hibernate 5.1 → 5.6', 'Hibernate Search 5 → 6'],
    },
    {
      number: '02', title: 'Distributed caching', tone: 'red',
      summary: 'A new cache architecture designed to coexist with the legacy one during migration.',
      problem: 'Modern Hibernate adoption required a distributed cache while existing components still depended on Ehcache 2.',
      approach: 'Designed and implemented Caffeine L1 and Redis L2 caching with Pub/Sub invalidation and cross-node coherence across multiple product modules.',
      outcome: 'Modern caches and Ehcache 2 could operate side by side while migration progressed incrementally.',
      technologies: ['Caffeine', 'Redis', 'JCache', 'Cross-node invalidation'],
    },
    {
      number: '03', title: 'Reliable business systems', tone: 'sand',
      summary: 'Turning complex time rules into explicit, traceable transaction processing.',
      problem: 'Time valuation had to handle configurable rules without losing the original booking history.',
      approach: 'Co-designed and implemented a transaction-based engine for pauses, overtime, compensatory rest, and interval validity.',
      outcome: 'Rules could transform valuations while source bookings remained preserved and traceable.',
      technologies: ['Rule processing', 'Transactions', 'Domain modeling', 'Traceability'],
    },
    {
      number: '04', title: 'UI decoupling & Vaadin migration', tone: 'slate',
      summary: 'Separating business behavior from a legacy UI so both can evolve independently.',
      problem: 'HR-Expert business logic was coupled to Vaadin 8, blocking the move to Vaadin 23 and later persistence upgrades.',
      approach: 'Redesigned HR-Expert around UI-neutral contracts and adapters. Currently migrating functionality to Vaadin 23 while preserving existing business behavior.',
      outcome: 'The new boundary removes UI constraints from the broader modernization path toward Hibernate 6.',
      technologies: ['Vaadin 8 → 23', 'UI-neutral contracts', 'Adapters', 'Hibernate 6 readiness'],
    },
    {
      number: '05', title: 'Offline kiosk synchronization', tone: 'red',
      summary: 'Keeping workplace kiosks useful through network outages.',
      problem: 'Kiosks needed to record data while disconnected without losing or duplicating accumulated events.',
      approach: 'Implemented offline collection and asynchronous synchronization after reconnection using durable UTC batches and duplicate protection.',
      outcome: 'Kiosks continue collecting data offline and replay accumulated records when connectivity returns.',
      technologies: ['Offline-first', 'Async synchronization', 'UTC', 'Duplicate protection'],
    },
    {
      number: '06', title: 'Localization architecture', tone: 'sand',
      summary: 'Reducing duplicated translations while preserving regional and customer terminology.',
      problem: 'Separate text modules made language maintenance repetitive across products and DACH markets.',
      approach: 'Designed a parent-child localization model with fallback, merged language exports, and selective overrides.',
      outcome: 'Shared translations stay centralized while regions and customers can retain their own terminology.',
      technologies: ['Translation fallback', 'Selective overrides', 'Merged exports', 'DACH markets'],
    },
  ],
  experience: [
    {
      company: 'Workflow GmbH', role: 'Software Engineer · Previously Software Engineering Intern', period: 'Sep 2024 – Present', location: 'Vienna, Austria', tone: 'teal',
      summary: 'Modernizing a 130-project Maven monorepo with approximately 1.3 million lines of production Java, spanning runtime, framework, persistence, distributed caching, UI, and synchronization architecture.',
      metrics: [
        { value: '130', label: 'Maven projects' },
        { value: '~1.3M', label: 'lines of production Java' },
        { value: 'Java 11 → 17', label: 'runtime upgrade' },
        { value: 'Vaadin 8 → 23', label: 'UI migration' },
      ],
      technologies: ['Java', 'Spring Boot', 'Hibernate / JPA', 'Redis & Caffeine', 'Vaadin', 'PostgreSQL / SQL Server / MySQL', 'Docker / Jenkins / Grafana'],
    },
    {
      company: 'Karyar College', role: 'Programming Mentor & Course Supervisor', period: 'Jul 2020 – Oct 2024', location: 'Tehran, Iran', tone: 'sand',
      summary: 'Mentored students, reviewed code, and taught Python, Django, APIs, SQL, and core programming practices.',
      technologies: ['Python', 'Django', 'REST APIs', 'SQL', 'Mentoring'],
    },
    {
      company: 'Tadbir Pardaz Company', role: 'Part-time Backend Developer', period: 'Dec 2022 – Dec 2023', location: 'Tehran, Iran', tone: 'red',
      summary: 'Built backend services for financial and trading workflows with C#, ASP.NET, microservices, and RabbitMQ.',
      technologies: ['C#', 'ASP.NET', 'RabbitMQ', 'Microservices', 'Confluence'],
    },
  ] satisfies ExperienceEntry[],
  research: {
    intro: 'I study efficient NLP systems, Persian sentiment analysis, and trustworthy machine learning—work that began with an information-retrieval course during my bachelor’s degree.',
    featured: [
      {
        title: 'Distilled BERT Model in Natural Language Processing',
        area: 'Primary research case · Model efficiency',
        tone: 'red',
        indicator: 'Review paper',
        citationCount: 22,
        year: 2024,
        venue: '14th International Conference on Computer and Knowledge Engineering (ICCKE)',
        pages: '243–250',
        authorRole: 'First author · Bachelor thesis research',
        doi: '10.1109/ICCKE65377.2024.10874673',
        doiUrl: 'https://doi.org/10.1109/ICCKE65377.2024.10874673',
        summary: 'A review of compact BERT models and the tradeoffs behind knowledge distillation.',
        problem: 'Language models can be too computationally and memory intensive for constrained devices.',
        approach: 'Compared TinyBERT, DistilBERT, MobileBERT, and MiniLM with a focus on their distillation strategies.',
        contribution: 'As first author, I synthesized the research landscape and practical deployment tradeoffs.',
        result: 'The review clarifies how compact BERT variants trade size and computational cost against retained capability. It has 22 Google Scholar citations.',
        figure: {
          src: '/research/distilbert-distillation.png',
          alt: 'Diagram comparing the BERT base model with the six-layer DistilBERT model and their distillation path',
          caption: 'DistilBERT distillation process · Figure 4 in the paper, source [61].',
          width: 760,
          height: 470,
        },
        tags: ['Knowledge distillation', 'Transformers', 'Model efficiency'],
        url: 'https://ieeexplore.ieee.org/document/10874673',
      },
      {
        title: 'Enhancing Sentiment Analysis of Persian Tweets: A Transformer-Based Approach', area: 'Persian NLP', tone: 'teal', indicator: 'Research project', citationCount: 12,
        summary: 'A hybrid Persian sentiment model adds hints from Naive Bayes and rule-based analysis before BERT classification.',
        contribution: 'I contributed to the model design and directly to writing the paper.',
        result: 'The proposed model reported approximately 89% accuracy, compared with 86% for BERT alone.',
        tags: ['Persian NLP', 'BERT', 'Hybrid models'],
        url: 'https://ieeexplore.ieee.org/document/10533353/',
      },
    ] satisfies PublicationEntry[],
    all: [
      { title: 'AI-driven Approaches for Dysgraphia Diagnosis Using Online and Offline Handwriting Data', area: 'Healthcare AI / Handwriting', summary: 'Multimodal handwriting analysis for dysgraphia diagnosis.', tone: 'sand', tags: ['Healthcare AI'], citationCount: 3, indicator: 'Published', url: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0328722' },
      {
        title: 'Revolutionizing Dysgraphia Detection: Combining Feature Fusion with Non-Discriminatory Regularization',
        area: 'Healthcare AI / Model Design',
        summary: 'Feature fusion and neural ensemble research for dysgraphia classification.',
        tone: 'slate',
        tags: ['Feature fusion'],
        citationCount: 3,
        indicator: 'Published',
        url: 'https://ieeexplore.ieee.org/document/11006233',
        figure: {
          src: '/research/dysgraphia-model.png',
          alt: 'Designed dysgraphia model combining extracted handwriting features, non-discriminatory regularization, SVM classifiers, and a final neural network or soft-voting stage',
          caption: 'Designed dysgraphia classification pipeline · Figure 5 in the paper.',
          width: 1320,
          height: 500,
        },
      },
      { title: 'An Approach to Accurate Recognition of Emotions through Speech-to-Image Signal Conversion and Deep CNNs', area: 'Speech Emotion Recognition', summary: 'Image-based representation learning for speech emotion recognition.', tone: 'teal', tags: ['Speech emotion'], citationCount: 1, indicator: 'Published', url: 'https://link.springer.com/article/10.1007/s11042-025-20956-2' },
      { title: 'A Comprehensive Comparison of Various Drug Synergy Score Prediction Methods', area: 'Biomedical ML', summary: 'A comparative study of drug synergy prediction methods.', tone: 'red', tags: ['Biomedical ML'], citationCount: 0, indicator: 'Published', url: 'https://doi.org/10.1109/ICRoM60803.2023.10412510' },
      { title: 'Cross-Corpus Speech Emotion Recognition Using a Three-Dimensional CNN with Gray Wolf Optimizer', area: 'Speech Emotion Recognition', summary: 'Cross-corpus speech emotion recognition using 3D CNNs and optimization.', tone: 'sand', tags: ['3D CNN'], citationCount: 0, indicator: 'Submitted', ctaLabel: 'Submitted' },
      { title: 'Combining Minimum Spanning Tree and Label Propagation for Robust Pathway Enrichment', area: 'Graph Learning / Bioinformatics', summary: 'Graph-based pathway enrichment using minimum spanning trees and label propagation.', tone: 'slate', tags: ['Bioinformatics'], citationCount: 0, indicator: 'Submitted', ctaLabel: 'Submitted' },
    ] satisfies PublicationEntry[],
  },
  publications: {
    stats: [{ label: 'Publications', value: '6+' }, { label: 'Citations', value: '41' }, { label: 'h-index', value: '3' }] satisfies Stat[],
    featured: [] as PublicationEntry[],
  },
  skills: [
    { title: 'Core engineering', description: 'The areas at the center of my current professional work.', items: ['Java', 'Spring Boot', 'Spring Framework', 'Hibernate / JPA', 'REST APIs', 'SQL', 'Redis', 'Distributed Systems', 'System Design', 'Concurrent Programming', 'Performance Optimization'], tone: 'teal' },
    { title: 'Production experience', description: 'Technologies used across professional delivery, maintenance, and integration work.', items: ['JavaScript', 'React', 'C#', 'ASP.NET', 'RabbitMQ', 'Docker', 'Jenkins', 'Linux', 'Git', 'Grafana', 'Python', 'Django'], tone: 'red' },
    { title: 'Additional technologies', description: 'Useful supporting knowledge that I continue to develop.', items: ['AWS Fundamentals', 'Kafka', 'PostgreSQL', 'Microsoft SQL Server', 'Celery', 'HTML', 'CSS'], tone: 'sand' },
  ] satisfies SkillGroup[],
  education: [{ institution: 'University of Tehran', degree: 'Bachelor of Computer Science', period: 'Sep 2018 – Jan 2024', location: 'Tehran, Iran' }],
  achievements: [{ title: 'Faculty of Engineering Top Student of the Year', year: 'Sep 2019', detail: 'The FOE Award', tone: 'sand', href: '/FOE_merged.pdf', linkLabel: 'View certificate', download: true }],
  languages: [
    { language: 'Persian', detail: 'Native', tone: 'teal' },
    { language: 'English', detail: 'Professional · IELTS 8.0', tone: 'red', href: '/IELTS.png', linkLabel: 'View certificate', download: true },
    { language: 'German', detail: 'A2 · Elementary', tone: 'sand' },
  ],
  about: {
    title: 'Engineering, with a research habit.',
    subtitle: 'I am most useful where a system has history, constraints, and a difficult next step.',
    paragraphs: [
      'I am a Vienna-based full-stack engineer focused on modernizing mature enterprise software in deliberate, reliable steps.',
      'Research taught me to compare alternatives, state assumptions, and treat evaluation as part of design.',
      'I am drawn to systems with history, constraints, and a difficult next step.',
    ],
    metrics: [], cards: [],
  },
  researchInterests: [],
  contact: {
    summary: 'Open to relevant full-stack, backend, Java, platform, distributed-systems, and research-informed AI/ML roles—primarily in Vienna, and selectively elsewhere in Austria and Europe.',
    socials: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yazdanzv/', icon: 'linkedin' },
      { label: 'GitHub', href: 'https://github.com/yazdanzv', icon: 'github' },
      { label: 'Google Scholar', href: 'https://scholar.google.com/citations?hl=en&user=BWUk8wIAAAAJ', icon: 'scholar' },
      { label: 'Email', href: 'mailto:yazdanzv.1378@gmail.com', icon: 'mail' },
    ] satisfies SocialLink[],
  },
} as const;
