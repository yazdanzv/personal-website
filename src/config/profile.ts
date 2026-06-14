export type AccentTone = 'cyan' | 'violet' | 'emerald' | 'amber' | 'rose' | 'blue';

export interface NavLink {
  label: string;
  href: string;
}

export interface ActionLink {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  icon?: 'download' | 'arrow' | 'spark' | 'external';
  external?: boolean;
  download?: boolean;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'scholar' | 'mail';
}

export interface Stat {
  label: string;
  value: string;
}

export interface HighlightCard {
  title: string;
  description: string;
  tone: AccentTone;
}

export interface AboutMetric {
  value: string;
  label: string;
  tone: AccentTone;
}

export interface AboutCard {
  title: string;
  description: string;
  tone: AccentTone;
  icon: 'academic' | 'engineering' | 'research';
}

export interface InterestCard {
  title: string;
  description: string;
  tone: AccentTone;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  location: string;
  summary: string;
  technologies: string[];
  tone: AccentTone;
}

export interface PublicationEntry {
  title: string;
  area: string;
  summary: string;
  tone: AccentTone;
  tags: string[];
  citationCount: number;
  url?: string;
  ctaLabel?: string;
  indicator: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
  tone: AccentTone;
}

export interface EducationEntry {
  institution: string;
  degree: string;
  detail: string;
  tone: AccentTone;
}

export interface LanguageEntry {
  language: string;
  detail: string;
  tone: AccentTone;
  href?: string;
  linkLabel?: string;
  download?: boolean;
}

export interface AchievementEntry {
  title: string;
  year: string;
  detail: string;
  tone: AccentTone;
  href?: string;
  linkLabel?: string;
  download?: boolean;
}

export const profile = {
  name: 'Yazdan Zandiye Vakili',
  title: 'Software Engineer | AI & Information Retrieval Researcher',
  location: 'Vienna, Austria',
  locationMapQuery: 'Eichenstraße, Vienna, Austria',
  email: 'yazdanzv.1378@gmail.com',
  photo: {
    src: '/headshot.jpg',
    alt: 'Portrait of Yazdan Zandiye Vakili',
  },
  seo: {
    title: 'Yazdan Zandiye Vakili | Software Engineer & AI Researcher',
    description:
      'Software Engineer and AI Researcher specializing in Information Retrieval, Natural Language Processing, Trustworthy AI, and Modern Software Engineering.',
    siteUrl: 'https://yazdanzv.github.io/personal-website',
    ogImage: '/og-image.svg',
  },
  links: {
    github: 'https://github.com/yazdanzv',
    linkedin: 'https://www.linkedin.com/in/yazdanzv/',
    scholar: 'https://scholar.google.com/citations?hl=en&user=BWUk8wIAAAAJ',
    cv: 'cv.pdf',
  },
  navigation: [
    { label: 'About', href: '#about' },
    { label: 'Research', href: '#research-interests' },
    { label: 'Experience', href: '#experience' },
    { label: 'Publications', href: '#publications' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ] satisfies NavLink[],
  hero: {
    intro:
      'I design and ship software systems that are fast, dependable, and deeply informed by modern AI research.',
    subline:
      'My work sits at the intersection of production engineering, information retrieval, NLP, and trustworthy AI.',
    focus: [
      'Software Engineering',
      'Information Retrieval',
      'Natural Language Processing',
      'Artificial Intelligence',
      'Trustworthy AI',
      'AI Systems',
    ],
    stats: [
      { label: 'Publications', value: '6+' },
      { label: 'Citations', value: '26' },
      { label: 'h-index', value: '2' },
    ] satisfies Stat[],
    primaryActions: [
      {
        label: 'Download CV',
        href: 'cv.pdf',
        variant: 'primary',
        icon: 'download',
        download: true,
      },
      {
        label: 'View Publications',
        href: '#publications',
        variant: 'secondary',
        icon: 'spark',
      },
      {
        label: 'Contact Me',
        href: '#contact',
        variant: 'ghost',
        icon: 'arrow',
      },
    ] satisfies ActionLink[],
    socialActions: [
      {
        label: 'GitHub',
        href: 'https://github.com/yazdanzv',
        icon: 'github',
      },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/yazdanzv/',
        icon: 'linkedin',
      },
      {
        label: 'Google Scholar',
        href: 'https://scholar.google.com/citations?hl=en&user=BWUk8wIAAAAJ',
        icon: 'scholar',
      },
    ] satisfies SocialLink[],
    highlights: [
      {
        title: 'Academic depth',
        description:
          'Research experience across retrieval, NLP, speech, and trustworthy AI.',
        tone: 'violet',
      },
      {
        title: 'Production systems',
        description:
          'Industry experience building backend and frontend systems with cloud-ready tooling.',
        tone: 'cyan',
      },
      {
        title: 'Collaboration-ready',
        description:
          'Comfortable working with professors, recruiters, and engineering teams across goals and constraints.',
        tone: 'emerald',
      },
    ] satisfies HighlightCard[],
  },
  about: {
    title: 'Software Engineering & Machine Learning Research',
    subtitle:
      'Combining production-grade software engineering with academic research in Information Retrieval, Machine Learning, and Trustworthy AI.',
    paragraphs: [
      'I am a Software Engineer and AI Researcher working at the intersection of software systems, machine learning, and intelligent information retrieval. My background combines professional software engineering experience with academic research, allowing me to bridge the gap between cutting-edge ideas and real-world applications.',
      'Professionally, I design and develop enterprise software platforms and distributed systems using Java, Spring Boot, PostgreSQL, Redis, Docker, Kubernetes, AWS, and modern cloud-native technologies. My work includes backend architecture, performance optimization, platform modernization, caching infrastructure, and scalable production systems.',
      'Alongside industry work, I actively conduct research in Information Retrieval, Natural Language Processing, Trustworthy AI, Adversarial Machine Learning, and AI Security. I have authored multiple peer-reviewed publications and remain focused on developing intelligent systems that are reliable, secure, interpretable, and effective in real-world environments.',
      'My goal is to build technologies that combine strong engineering foundations with meaningful advances in artificial intelligence.',
    ],
    metrics: [
      {
        value: '6+',
        label: 'Research Publications',
        tone: 'cyan',
      },
      {
        value: '26',
        label: 'Academic Citations',
        tone: 'violet',
      },
      {
        value: '2+',
        label: 'Years Industry Experience',
        tone: 'emerald',
      },
      {
        value: 'AI + Software Engineering',
        label: 'Research & Development',
        tone: 'amber',
      },
    ] satisfies AboutMetric[],
    cards: [
      {
        title: 'Academic Research',
        description:
          'Research experience across Information Retrieval, Natural Language Processing, Machine Learning, Bioinformatics, and Trustworthy AI. Author of multiple peer-reviewed publications with a growing citation record and a strong foundation in algorithms, mathematics, and data-driven systems.',
        tone: 'violet',
        icon: 'academic',
      },
      {
        title: 'Software Engineering',
        description:
          'Professional experience building enterprise applications and distributed systems using Java, Spring Boot, PostgreSQL, Redis, AWS, Docker, Kubernetes, and modern software architecture principles. Focused on scalability, maintainability, performance, and production reliability.',
        tone: 'cyan',
        icon: 'engineering',
      },
      {
        title: 'Research Interests',
        description:
          'Information Retrieval, Trustworthy AI, Adversarial Machine Learning, AI Security, Privacy-Preserving Learning, Large Language Models, Neural Ranking Systems, and intelligent systems designed for robust real-world deployment.',
        tone: 'emerald',
        icon: 'research',
      },
    ] satisfies AboutCard[],
  },
  researchInterests: [
    {
      title: 'Information Retrieval',
      description:
        'Search, ranking, semantic retrieval, and systems that surface the right information efficiently.',
      tone: 'cyan',
    },
    {
      title: 'Natural Language Processing',
      description:
        'Transformer-based modeling, sentiment analysis, language understanding, and text mining.',
      tone: 'violet',
    },
    {
      title: 'Security & Privacy',
      description:
        'Designing systems that respect data sensitivity, robustness, and responsible deployment.',
      tone: 'amber',
    },
    {
      title: 'Applied Machine Learning',
      description:
        'Practical ML pipelines, evaluation, feature engineering, and model-driven product work.',
      tone: 'emerald',
    },
    {
      title: 'Software Engineering',
      description:
        'Architecture, maintainability, backend systems, frontend experiences, and delivery discipline.',
      tone: 'blue',
    },
    {
      title: 'Image Processing',
      description:
        'Visual representations, segmentation, and feature extraction for real-world pipelines.',
      tone: 'rose',
    },
    {
      title: 'Trustworthy AI',
      description:
        'Interpretability, reliability, fairness, and user trust for AI-assisted products.',
      tone: 'cyan',
    },
  ] satisfies InterestCard[],
  experience: [
    {
      company: 'Workflow Company GmbH',
      role: 'Software Engineer',
      location: 'Vienna, Austria',
      summary:
        'Built and maintained production software with a focus on reliability, modern UX, and cloud-native delivery.',
      technologies: ['Java', 'Spring Boot', 'Hibernate', 'React', 'Docker', 'Kubernetes', 'SQL'],
      tone: 'cyan',
    },
    {
      company: 'Workflow Company GmbH',
      role: 'Software Engineering Intern (IAESTE)',
      location: 'Vienna, Austria',
      summary:
        'Contributed to engineering workflows, feature delivery, and team collaboration in a professional software environment.',
      technologies: ['Software Engineering', 'Product Development', 'Team Collaboration'],
      tone: 'violet',
    },
    {
      company: 'University of Tehran',
      role: 'Teaching Assistant',
      location: 'Tehran, Iran',
      summary:
        'Supported instruction, problem solving, and lab guidance across AI and systems-focused coursework.',
      technologies: [
        'Artificial Intelligence',
        'Data Mining',
        'Advanced Information Retrieval',
        'Image Processing',
        'Operating Systems',
        'Theory of Computation',
        'Bioinformatics',
      ],
      tone: 'emerald',
    },
    {
      company: 'Karyar College',
      role: 'Python, Django & Data Analysis Tutor / Course Supervisor',
      location: 'Tehran, Iran',
      summary:
        'Guided learners through practical Python and Django development, REST APIs, analysis workflows, and core CS foundations.',
      technologies: ['Python', 'Django', 'REST APIs', 'Data Analysis', 'Algorithms', 'Data Structures'],
      tone: 'amber',
    },
    {
      company: 'Tadbir Pardaz Company',
      role: 'Backend Developer',
      location: 'Tehran, Iran',
      summary:
        'Developed backend services using distributed and message-driven architecture patterns.',
      technologies: ['ASP.NET', 'C#', 'SQL Server', 'RabbitMQ', 'Microservices'],
      tone: 'rose',
    },
    {
      company: 'TaarLab Laboratory',
      role: 'AI Research Assistant',
      location: 'Tehran, Iran',
      summary:
        'Worked on deep learning research with a focus on image segmentation, computer vision, and model experimentation.',
      technologies: ['Deep Learning', 'Image Segmentation', 'Computer Vision', 'TensorFlow', 'PyTorch'],
      tone: 'blue',
    },
  ] satisfies ExperienceEntry[],
  publications: {
    stats: [
      { label: 'Publications', value: '6+' },
      { label: 'Citations', value: '26' },
      { label: 'h-index', value: '2' },
    ] satisfies Stat[],
    featured: [
      {
        title: 'Distilled BERT Model in Natural Language Processing',
        area: 'NLP / Representation Learning',
        summary:
          'A compact transformer-focused study that balances performance, efficiency, and practical deployment considerations.',
        tone: 'cyan',
        tags: ['BERT', 'Distillation', 'NLP'],
        citationCount: 14,
        indicator: 'Scholar indexed',
        url: 'https://ieeexplore.ieee.org/document/10874673',
      },
      {
        title: 'Enhancing Sentiment Analysis of Persian Tweets: A Transformer-Based Approach',
        area: 'NLP / Social Media Analysis',
        summary:
          'Transformer modeling for Persian sentiment analysis with an emphasis on language-specific signal and robustness.',
        tone: 'violet',
        tags: ['Persian NLP', 'Sentiment Analysis', 'Transformers'],
        citationCount: 10,
        indicator: 'Scholar indexed',
        url: 'https://ieeexplore.ieee.org/document/10533353/',
      },
      {
        title: 'AI-driven Approaches for Dysgraphia Diagnosis Using Online and Offline Handwriting Data',
        area: 'Healthcare AI / Handwriting',
        summary:
          'A multimodal diagnostic approach that combines handwriting sources for stronger clinical decision support.',
        tone: 'emerald',
        tags: ['Healthcare AI', 'Handwriting', 'Multimodal'],
        citationCount: 1,
        indicator: 'Scholar indexed',
        url: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0328722',
      },
      {
        title: 'Revolutionizing Dysgraphia Detection: Combining Feature Fusion with Non-Discriminatory Regularization',
        area: 'Healthcare AI / Model Design',
        summary:
          'Feature fusion and regularization strategies for more resilient handwriting-based dysgraphia detection.',
        tone: 'amber',
        tags: ['Feature Fusion', 'Regularization', 'Detection'],
        citationCount: 1,
        indicator: 'Scholar indexed',
        url: 'https://ieeexplore.ieee.org/document/11006233',
      },
      {
        title: 'An Approach to Accurate Recognition of Emotions through Speech-to-Image Signal Conversion and Deep CNNs',
        area: 'Speech Emotion Recognition',
        summary:
          'A signal transformation pipeline that rethinks speech emotion recognition through image-based representation learning.',
        tone: 'rose',
        tags: ['Speech Emotion', 'Deep CNNs', 'Signal Conversion'],
        citationCount: 0,
        indicator: 'Scholar indexed',
        url: 'https://link.springer.com/article/10.1007/s11042-025-20956-2',
      },
      {
        title: 'A Comprehensive Comparison of Various Drug Synergy Score Prediction Methods',
        area: 'Biomedical ML',
        summary:
          'A comparative analysis of drug synergy prediction methods with an eye toward practical biomedical modeling choices.',
        tone: 'blue',
        tags: ['Drug Synergy', 'Benchmarking', 'Biomedical ML'],
        citationCount: 0,
        indicator: 'Scholar indexed',
        url: 'https://doi.org/10.1109/ICRoM60803.2023.10412510',
      },
      {
        title: 'Cross-Corpus Speech Emotion Recognition Using a Three-Dimensional CNN with Gray Wolf Optimizer',
        area: 'Speech Emotion Recognition',
        summary:
          'Cross-corpus transfer for speech emotion recognition with 3D CNNs and optimization-driven search.',
        tone: 'cyan',
        tags: ['3D CNN', 'Optimization', 'Transfer Learning'],
        citationCount: 0,
        indicator: 'Submitted',
        ctaLabel: 'Submitted',
      },
      {
        title: 'Combining Minimum Spanning Tree and Label Propagation for Robust Pathway Enrichment',
        area: 'Graph Learning / Bioinformatics',
        summary:
          'A graph-based enrichment approach designed for stability and interpretability in pathway analysis.',
        tone: 'violet',
        tags: ['Graph Learning', 'Bioinformatics', 'Label Propagation'],
        citationCount: 0,
        indicator: 'Submitted',
        ctaLabel: 'Submitted',
      },
    ] satisfies PublicationEntry[],
  },
  skills: [
    {
      title: 'Backend',
      items: ['Java', 'Spring Boot', 'Hibernate', 'Django', 'ASP.NET', 'C#'],
      tone: 'cyan',
    },
    {
      title: 'Frontend',
      items: ['React', 'Vaadin', 'JavaScript', 'HTML', 'CSS'],
      tone: 'violet',
    },
    {
      title: 'Databases',
      items: ['PostgreSQL', 'MySQL', 'SQL Server'],
      tone: 'emerald',
    },
    {
      title: 'AI & Data Science',
      items: ['Python', 'TensorFlow', 'PyTorch', 'NumPy', 'Pandas', 'Scikit-Learn'],
      tone: 'amber',
    },
    {
      title: 'DevOps',
      items: ['Docker', 'Kubernetes', 'Git'],
      tone: 'rose',
    },
    {
      title: 'Messaging & Caching',
      items: ['Redis', 'RabbitMQ', 'Kafka'],
      tone: 'blue',
    },
  ] satisfies SkillGroup[],
  education: [
    {
      institution: 'University of Tehran',
      degree: 'Bachelor of Computer Science',
      detail: 'GPA: 17.6 / 20',
      tone: 'cyan',
    },
    {
      institution: 'National Organization for Development of Exceptional Talents',
      degree: 'Diploma in Mathematics and Physics',
      detail: 'GPA: 19.51 / 20',
      tone: 'violet',
    },
  ] satisfies EducationEntry[],
  achievements: [
    {
      title: 'Faculty of Engineering Top Student of the Year Award',
      year: '2019',
      detail: 'Recognized for strong academic performance and overall contribution.',
      tone: 'amber',
      href: '/FOE_merged.pdf',
      linkLabel: 'Download certificate',
      download: true,
    },
  ] satisfies AchievementEntry[],
  languages: [
    {
      language: 'Persian',
      detail: 'Native',
      tone: 'cyan',
    },
    {
      language: 'English',
      detail: 'IELTS Overall Score: 8',
      tone: 'violet',
      href: '/IELTS.png',
      linkLabel: 'Download IELTS',
      download: true,
    },
    {
      language: 'German',
      detail: 'A2',
      tone: 'emerald',
    },
  ] satisfies LanguageEntry[],
  contact: {
    summary:
      'Open to research conversations, engineering opportunities, and collaborations that bridge product quality with AI rigor.',
    socials: [
      {
        label: 'GitHub',
        href: 'https://github.com/yazdanzv',
        icon: 'github',
      },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/yazdanzv/',
        icon: 'linkedin',
      },
      {
        label: 'Google Scholar',
        href: 'https://scholar.google.com/citations?hl=en&user=BWUk8wIAAAAJ',
        icon: 'scholar',
      },
      {
        label: 'Email',
        href: 'mailto:yazdanzv.1378@gmail.com',
        icon: 'mail',
      },
    ] satisfies SocialLink[],
  },
} as const;
