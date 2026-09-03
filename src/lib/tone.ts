import type { AccentTone } from '../config/profile';

export const toneStyles: Record<
  AccentTone,
  {
    text: string;
    softText: string;
    pill: string;
    glow: string;
    ring: string;
    orb: string;
    line: string;
  }
> = {
  teal: {
    text: 'text-accent-300',
    softText: 'text-accent-300/85',
    pill: 'border-accent-300/25 bg-accent-400/10 text-accent-300',
    glow: '',
    ring: 'ring-accent-300/20',
    orb: 'bg-accent-300',
    line: 'from-accent-300/70 to-transparent',
  },
  red: {
    text: 'text-signal',
    softText: 'text-signal/85',
    pill: 'border-signal/30 bg-signal/10 text-signal',
    glow: '',
    ring: 'ring-signal/20',
    orb: 'bg-signal',
    line: 'from-signal/70 to-transparent',
  },
  sand: {
    text: 'text-[#d8bd83]',
    softText: 'text-[#d8bd83]/85',
    pill: 'border-[#d8bd83]/25 bg-[#d8bd83]/10 text-[#d8bd83]',
    glow: '',
    ring: 'ring-[#d8bd83]/20',
    orb: 'bg-[#d8bd83]',
    line: 'from-[#d8bd83]/70 to-transparent',
  },
  slate: {
    text: 'text-ink-300',
    softText: 'text-ink-300/85',
    pill: 'border-white/15 bg-white/5 text-ink-300',
    glow: '',
    ring: 'ring-white/10',
    orb: 'bg-ink-400',
    line: 'from-ink-400/50 to-transparent',
  },
  cyan: {
    text: 'text-cyan-300',
    softText: 'text-cyan-200/[0.85]',
    pill: 'border-cyan-400/20 bg-cyan-400/10 text-cyan-200',
    glow: 'shadow-[0_0_30px_rgba(56,189,248,0.18)]',
    ring: 'ring-cyan-400/20',
    orb: 'bg-cyan-500/20',
    line: 'from-cyan-400/80 via-cyan-300/30 to-transparent',
  },
  violet: {
    text: 'text-violet-300',
    softText: 'text-violet-200/[0.85]',
    pill: 'border-violet-400/20 bg-violet-400/10 text-violet-200',
    glow: 'shadow-[0_0_30px_rgba(167,139,250,0.18)]',
    ring: 'ring-violet-400/20',
    orb: 'bg-violet-500/20',
    line: 'from-violet-400/80 via-violet-300/30 to-transparent',
  },
  emerald: {
    text: 'text-emerald-300',
    softText: 'text-emerald-200/[0.85]',
    pill: 'border-emerald-400/20 bg-emerald-400/10 text-emerald-200',
    glow: 'shadow-[0_0_30px_rgba(52,211,153,0.18)]',
    ring: 'ring-emerald-400/20',
    orb: 'bg-emerald-500/20',
    line: 'from-emerald-400/80 via-emerald-300/30 to-transparent',
  },
  amber: {
    text: 'text-amber-300',
    softText: 'text-amber-200/[0.85]',
    pill: 'border-amber-400/20 bg-amber-400/10 text-amber-200',
    glow: 'shadow-[0_0_30px_rgba(251,191,36,0.18)]',
    ring: 'ring-amber-400/20',
    orb: 'bg-amber-500/20',
    line: 'from-amber-400/80 via-amber-300/30 to-transparent',
  },
  rose: {
    text: 'text-rose-300',
    softText: 'text-rose-200/[0.85]',
    pill: 'border-rose-400/20 bg-rose-400/10 text-rose-200',
    glow: 'shadow-[0_0_30px_rgba(251,113,133,0.18)]',
    ring: 'ring-rose-400/20',
    orb: 'bg-rose-500/20',
    line: 'from-rose-400/80 via-rose-300/30 to-transparent',
  },
  blue: {
    text: 'text-sky-300',
    softText: 'text-sky-200/[0.85]',
    pill: 'border-sky-400/20 bg-sky-400/10 text-sky-200',
    glow: 'shadow-[0_0_30px_rgba(96,165,250,0.18)]',
    ring: 'ring-sky-400/20',
    orb: 'bg-sky-500/20',
    line: 'from-sky-400/80 via-sky-300/30 to-transparent',
  },
};
