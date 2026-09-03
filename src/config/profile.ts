export type AccentTone = 'teal' | 'red' | 'sand' | 'slate' | 'cyan' | 'violet' | 'emerald' | 'amber' | 'rose' | 'blue';

export interface NavLink { label: string; href: string; }
export interface ActionLink { label: string; href: string; variant?: 'primary' | 'secondary' | 'ghost'; icon?: 'download' | 'arrow' | 'spark' | 'external'; external?: boolean; download?: boolean; }
export interface SocialLink { label: string; href: string; icon: 'github' | 'linkedin' | 'scholar' | 'mail'; }
export interface Stat { label: string; value: string; }
export interface ExperienceEntry { company: string; role: string; period: string; location: string; summary: string | string[]; technologies: string[]; tone: AccentTone; }
export interface PublicationEntry { title: string; area: string; summary: string; tone: AccentTone; tags: string[]; citationCount: number; url?: string; ctaLabel?: string; indicator: string; contribution?: string; result?: string; }
export interface SkillGroup { title: string; description?: string; items: string[]; tone: AccentTone; }

export const profile = {
  name: 'Yazdan Zandiye Vakili',
  title: 'Full-Stack Software Engineer | Distributed Systems',
  location: 'Vienna, Austria',
  email: 'yazdanzv.1378@gmail.com',
  photo: { src: '/headshot.jpg', alt: 'Portrait of Yazdan Zandiye Vakili' },
  workPhotos: [
    { src: '/work-team.jpeg', alt: 'Yazdan with colleagues at the office' },
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
    { label: 'Engineering', href: '#engineering' },
    { label: 'Experience', href: '#experience' },
    { label: 'Research', href: '#research' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ] satisfies NavLink[],
  hero: {
    intro: 'I modernize enterprise software by designing safe paths between legacy systems and the architecture that comes next.',
    subline: 'My work spans Java and Spring platforms, distributed caching, migration architecture, and reliable business systems. Research in NLP and machine learning adds a second lens to how I approach difficult technical problems.',
    status: 'Based in Vienna and exploring stronger software engineering opportunities.',
    focus: ['Enterprise modernization', 'Distributed systems', 'Java & Spring', 'System design'],
    stats: [
      { label: 'Publications', value: '6+' },
      { label: 'Citations', value: '40' },
      { label: 'h-index', value: '3' },
    ] satisfies Stat[],
    primaryActions: [
      { label: 'View résumé', href: 'cv.pdf', variant: 'primary', icon: 'download', download: true },
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
      number: '01', title: 'Enterprise modernization', tone: 'teal',
      summary: 'Establishing a modern foundation before asking the rest of the platform to move.',
      problem: 'A mature enterprise application needed a path beyond an aging runtime and framework stack.',
      approach: 'Migrated Java 8 to Java 17, creating the technical foundation required for later framework upgrades, including Hibernate 6.',
      outcome: 'The platform could evolve in deliberate stages instead of through a single high-risk rewrite.',
      technologies: ['Java 17', 'Spring', 'Hibernate 6', 'Migration strategy'],
    },
    {
      number: '02', title: 'Distributed caching', tone: 'red',
      summary: 'A new cache architecture designed to coexist with the legacy one during migration.',
      problem: 'Modern Hibernate adoption required a distributed cache while existing components still depended on Ehcache 2.',
      approach: 'Designed Caffeine L1 and Redis L2 caching with cross-node invalidation, JCache/Hibernate integration, and composite cache management.',
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
      number: '04', title: 'Migration & integration', tone: 'slate',
      summary: 'Clean boundaries that let old and new interfaces operate during long-running change.',
      problem: 'UI, kiosk, and localization systems needed to evolve without interrupting established workflows.',
      approach: 'Used UI-neutral contracts and Flow adapters for Vaadin migration, durable UTC batches for offline replay, and parent-child localization with fallback.',
      outcome: 'Each subsystem gained a controlled transition path with compatibility, duplicate protection, and clear ownership of behavior.',
      technologies: ['Vaadin 7 → 23', 'Offline sync', 'Localization', 'Adapters'],
    },
  ],
  experience: [
    {
      company: 'Workflow GmbH', role: 'Software Engineer · Previously Software Engineering Intern', period: 'Sep 2024 – Present', location: 'Vienna, Austria', tone: 'teal',
      summary: 'Modernizing enterprise platforms across runtime, persistence, caching, user-interface, synchronization, and localization layers. The work combines hands-on implementation with system design, technical ownership, code reviews, and collaboration across teams.',
      technologies: ['Java', 'Spring Boot', 'Hibernate / JPA', 'Redis', 'Vaadin', 'SQL'],
    },
    {
      company: 'Karyar College', role: 'Programming Mentor & Course Supervisor', period: 'Jul 2020 – Oct 2024', location: 'Tehran, Iran', tone: 'sand',
      summary: 'Mentored students, reviewed code, debugged programming problems, and delivered workshops in Python, Django, REST APIs, SQL, Pandas, NumPy, socket programming, and object-oriented programming.',
      technologies: ['Python', 'Django', 'REST APIs', 'SQL', 'Mentoring'],
    },
    {
      company: 'Tadbir Pardaz Company', role: 'Part-time Backend Developer', period: 'Dec 2022 – Dec 2023', location: 'Tehran, Iran', tone: 'red',
      summary: 'Developed backend services for financial and trading systems using C#, ASP.NET, microservice-based architecture, and RabbitMQ for asynchronous communication and transaction-processing workflows.',
      technologies: ['C#', 'ASP.NET', 'RabbitMQ', 'Microservices', 'Confluence'],
    },
  ] satisfies ExperienceEntry[],
  research: {
    intro: 'My interest in information retrieval and NLP began with a university course during my bachelor’s degree. It grew into research on Transformer models, sentiment analysis, model efficiency, and trustworthy machine learning.',
    featured: [
      {
        title: 'Enhancing Sentiment Analysis of Persian Tweets: A Transformer-Based Approach', area: 'Featured research · NLP', tone: 'teal', indicator: 'Research project', citationCount: 12,
        summary: 'A hybrid sentiment-analysis architecture in which Naive Bayes and a custom rule-based model produce contextual hints that are appended to the original Persian text before final classification with BERT.',
        contribution: 'I contributed to the model design and directly to writing the paper.',
        result: 'The proposed model reported approximately 89% accuracy, compared with 86% for BERT alone.',
        tags: ['Persian NLP', 'BERT', 'Hybrid models'],
        url: 'https://ieeexplore.ieee.org/document/10533353/',
      },
      {
        title: 'Distilled BERT Model in Natural Language Processing', area: 'Bachelor thesis · Review paper', tone: 'red', indicator: 'Review paper', citationCount: 22,
        summary: 'A research review of NLP model evolution with emphasis on knowledge distillation and the efficiency-performance tradeoffs of TinyBERT, DistilBERT, MobileBERT, and MiniLM.',
        contribution: 'My work centered on reviewing the research landscape, comparing compact Transformer models, and synthesizing deployment tradeoffs.',
        result: 'The paper examines how compact models reduce compute and deployment footprint while retaining useful language capabilities.',
        tags: ['Knowledge distillation', 'Transformers', 'Model efficiency'],
        url: 'https://ieeexplore.ieee.org/document/10874673',
      },
    ] satisfies PublicationEntry[],
    all: [
      { title: 'AI-driven Approaches for Dysgraphia Diagnosis Using Online and Offline Handwriting Data', area: 'Healthcare AI / Handwriting', summary: 'Multimodal handwriting analysis for dysgraphia diagnosis.', tone: 'sand', tags: ['Healthcare AI'], citationCount: 3, indicator: 'Published', url: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0328722' },
      { title: 'Revolutionizing Dysgraphia Detection: Combining Feature Fusion with Non-Discriminatory Regularization', area: 'Healthcare AI / Model Design', summary: 'Feature fusion and neural ensemble research for dysgraphia classification.', tone: 'slate', tags: ['Feature fusion'], citationCount: 3, indicator: 'Published', url: 'https://ieeexplore.ieee.org/document/11006233' },
      { title: 'An Approach to Accurate Recognition of Emotions through Speech-to-Image Signal Conversion and Deep CNNs', area: 'Speech Emotion Recognition', summary: 'Image-based representation learning for speech emotion recognition.', tone: 'teal', tags: ['Speech emotion'], citationCount: 0, indicator: 'Published', url: 'https://link.springer.com/article/10.1007/s11042-025-20956-2' },
      { title: 'A Comprehensive Comparison of Various Drug Synergy Score Prediction Methods', area: 'Biomedical ML', summary: 'A comparative study of drug synergy prediction methods.', tone: 'red', tags: ['Biomedical ML'], citationCount: 0, indicator: 'Published', url: 'https://doi.org/10.1109/ICRoM60803.2023.10412510' },
      { title: 'Cross-Corpus Speech Emotion Recognition Using a Three-Dimensional CNN with Gray Wolf Optimizer', area: 'Speech Emotion Recognition', summary: 'Cross-corpus speech emotion recognition using 3D CNNs and optimization.', tone: 'sand', tags: ['3D CNN'], citationCount: 0, indicator: 'Submitted', ctaLabel: 'Submitted' },
      { title: 'Combining Minimum Spanning Tree and Label Propagation for Robust Pathway Enrichment', area: 'Graph Learning / Bioinformatics', summary: 'Graph-based pathway enrichment using minimum spanning trees and label propagation.', tone: 'slate', tags: ['Bioinformatics'], citationCount: 0, indicator: 'Submitted', ctaLabel: 'Submitted' },
    ] satisfies PublicationEntry[],
  },
  publications: {
    stats: [{ label: 'Publications', value: '6+' }, { label: 'Citations', value: '40' }, { label: 'h-index', value: '3' }] satisfies Stat[],
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
      'I am a full-stack software engineer based in Vienna. My current work focuses on modernizing mature enterprise software: understanding the behavior people already rely on, finding the right technical boundary, and introducing change in stages.',
      'Research gives me a complementary way of thinking. It taught me to compare alternatives carefully, make assumptions explicit, and treat evaluation as part of the design—not an afterthought.',
      'Across both settings, I am drawn to the same kind of problem: making complex systems easier to evolve without losing the reliability they have earned.',
    ],
    metrics: [], cards: [],
  },
  researchInterests: [],
  contact: {
    summary: 'I am exploring software engineering opportunities in full-stack, backend, Java/Spring, distributed systems, and platform engineering. I am also open to exceptional research opportunities in IR, NLP, and machine learning.',
    socials: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yazdanzv/', icon: 'linkedin' },
      { label: 'GitHub', href: 'https://github.com/yazdanzv', icon: 'github' },
      { label: 'Google Scholar', href: 'https://scholar.google.com/citations?hl=en&user=BWUk8wIAAAAJ', icon: 'scholar' },
      { label: 'Email', href: 'mailto:yazdanzv.1378@gmail.com', icon: 'mail' },
    ] satisfies SocialLink[],
  },
} as const;
