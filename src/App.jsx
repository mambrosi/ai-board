import { useState, useEffect, useRef, useCallback } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Zap, Copy, Eye, DollarSign, TrendingUp, Settings, Users,
  ShieldAlert, Compass, Github, User, BookOpen,
  UserPlus, XCircle, Menu, X
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

// ─── Data ───────────────────────────────────────────────────

const directors = [
  {
    role: 'CFO',
    nickname: '"The Number"',
    desc: 'If the numbers don\'t add up, he says it. Analyzes cash flow, margins, ROI, and the cost of inaction. Zero tolerance for "I\'ll figure it out later."',
    question: '"How much does this cost? And how much does NOT doing it cost?"',
    accent: 'gold',
    icon: DollarSign,
  },
  {
    role: 'Head of Revenue',
    nickname: '"The Growth"',
    desc: 'Obsessed with one question: does this bring revenue closer or push it further away? Detects when you\'re confusing busy with productive.',
    question: '"Does this bring us closer to or further from more revenue?"',
    accent: 'green',
    icon: TrendingUp,
  },
  {
    role: 'COO',
    nickname: '"The Executor"',
    desc: 'Who executes, with what resources, in what timeframe. Doesn\'t care how brilliant the idea is if there\'s no capacity.',
    question: '"Do we have the people and processes for this?"',
    accent: 'blue',
    icon: Settings,
  },
  {
    role: 'Head of People',
    nickname: '"The Leader"',
    desc: 'Every decision has a human cost. She sees the one you\'re ignoring — the burned-out team, the broken trust, the talent walking out the door.',
    question: '"Are we building trust or eroding it?"',
    accent: 'teal',
    icon: Users,
  },
  {
    role: "Devil's Advocate",
    nickname: '"The Destroyer"',
    desc: "Only job is to find why it will fail. Doesn't build — destroys. And that's exactly what you need.",
    question: '"What are you assuming without verifying?"',
    accent: 'red',
    icon: ShieldAlert,
  },
  {
    role: 'Strategic Mentor',
    nickname: '"The Mirror"',
    desc: "Doesn't look at the problem — looks at you. Asks the questions nobody else dares to ask.",
    question: '"Does this bring you closer to the life you want to live?"',
    accent: 'purple',
    icon: Compass,
  },
]

const modes = [
  {
    trigger: 'Present a topic',
    desc: 'All 6 directors automatically weigh in from their perspective.',
    templateKey: 'topic-en',
  },
  {
    trigger: '"I want to talk only with [director]"',
    desc: 'Go deeper with a specific director until you say otherwise.',
    templateKey: 'solo-en',
    isCode: true,
  },
  {
    trigger: '"I need to make a decision"',
    desc: 'All 6 vote: in favor, against, or with conditions.',
    templateKey: 'decision-en',
    isCode: true,
  },
  {
    trigger: '"I want to explore options"',
    desc: 'Each director proposes a different course of action.',
    templateKey: 'options-en',
    isCode: true,
  },
  {
    trigger: 'Upload a Key Topic',
    desc: 'They analyze it like a board session: blind spots, assumptions, risks.',
    templateKey: 'keytopic-en',
  },
  {
    trigger: '"Play it forward 90 days"',
    desc: 'Each director projects what happens if you go ahead. Risks, wins, and blind spots — 90 days out.',
    templateKey: 'forward-en',
    isCode: true,
  },
]

const skills = [
  {
    name: 'Hire or Promote',
    triggerPhrase: 'Say: "Should I promote or hire externally?"',
    desc: 'Structured analysis of role requirements vs. candidate readiness, real cost comparison, and the question nobody asks: are you optimizing for comfort or for the role?',
    output: 'Generates a 1-2 page PDF with a clear position',
    link: 'https://github.com/mambrosi/ai-board/tree/main/skills/hire-or-promote',
    icon: UserPlus,
  },
  {
    name: 'Kill or Pivot',
    triggerPhrase: 'Say: "This isn\'t working, should I kill it?"',
    desc: 'Surgical analysis: original bet vs. reality, sunk cost trap check, three options with concrete trade-offs, and a verdict. Because most people kill things too late.',
    output: 'Generates a 1-2 page PDF with a clear position',
    link: 'https://github.com/mambrosi/ai-board/tree/main/skills/kill-or-pivot',
    icon: XCircle,
  },
  {
    name: 'Raise Price or Absorb Cost',
    triggerPhrase: 'Say: "My costs went up, should I raise prices?"',
    desc: 'Full margin impact math, three pricing strategies, client segmentation by sensitivity, and conversation scripts for each tier. Challenges the fear of losing clients with data.',
    output: 'Generates a 1-2 page PDF with a clear position',
    link: 'https://github.com/mambrosi/ai-board/tree/main/skills/raise-or-absorb',
    icon: DollarSign,
  },
]

const testimonials = [
  {
    text: '"I was about to hire a senior dev at $140k. The board made me realize I needed two juniors and a better process instead. Saved $60k/year."',
    author: 'SaaS Founder',
    role: 'B2B, 12-person team',
  },
  {
    text: '"The Devil\'s Advocate caught an assumption I\'d been carrying for 3 months. Killed the project before it burned more cash."',
    author: 'Agency Owner',
    role: 'Digital marketing, 8 clients',
  },
  {
    text: '"I use it before every client pitch now. Having 6 perspectives on my proposal means I walk in with answers to questions they haven\'t asked yet."',
    author: 'Management Consultant',
    role: 'Independent, strategy focus',
  },
]

const useCaseTags = [
  'Startup founders', 'Agency owners', 'Solo operators',
  'Consultants', 'Product managers', 'Team leads',
]

const templates = {
  'topic-en': `**Situation:** [What's happening? 2-3 sentences.]

**The decision or problem:** [What do you need to resolve or decide?]

**What's at stake:** [What happens if it goes well? What happens if it goes wrong?]

**What I'm leaning toward:** [What are you thinking of doing today?]

**What's holding me back:** [What doubt, fear, or piece of data has you stuck?]`,

  'solo-en': `I want to talk only with [director name].

[Describe your situation or question here.]`,

  'decision-en': `I need to make a decision.

[Describe the decision you're facing and any relevant context.]`,

  'options-en': `I want to explore options.

[Describe the situation you want to explore alternatives for.]`,

  'forward-en': `Play it forward 90 days.

[Describe the decision or plan you want to stress-test over the next 90 days.]`,

  'keytopic-en': `# KEY TOPIC

**MEMBER:**
**DATE:**
**MONETARY VALUE:**

---

## THE ISSUE IS: HOW DO I...?

[Write your problem or decision as a question. Be specific.]

---

## MY IDEAL OUTCOME
*(next 3-6 months)*

1.
2.
3.

---

## IT IS IMPORTANT OR SIGNIFICANT BECAUSE:

**MONEY AND TIME:**
-

**PEOPLE / TEAM:**
-

**REPUTATION / MARKET:**
-

**FUTURE:**
-

---

## RELEVANT INFORMATION:

[Everything the board needs to know to give a good opinion: numbers, context, history, relationships, previous attempts, constraints.]

---

## WHAT I PLAN TO DO:

**SHORT TERM (next 2-4 weeks):**
-

**MEDIUM TERM (1-3 months):**
-

**RULED OUT:**
-

---

## WHERE I NEED HELP:

1.
2.
3.`,
}

// ─── Color map ──────────────────────────────────────────────

const accentColors = {
  gold: { text: 'text-gold', bg: 'bg-gold/10', border: 'border-gold/15', bar: 'bg-gold' },
  green: { text: 'text-green', bg: 'bg-green/10', border: 'border-green/15', bar: 'bg-green' },
  blue: { text: 'text-blue', bg: 'bg-blue/10', border: 'border-blue/15', bar: 'bg-blue' },
  teal: { text: 'text-teal', bg: 'bg-teal/10', border: 'border-teal/15', bar: 'bg-teal' },
  red: { text: 'text-red', bg: 'bg-red/10', border: 'border-red/15', bar: 'bg-red' },
  purple: { text: 'text-purple', bg: 'bg-purple/10', border: 'border-purple/15', bar: 'bg-purple' },
}

// ─── Hooks ──────────────────────────────────────────────────

function useScrolled(threshold = 40) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [threshold])
  return scrolled
}

function useScrollAnimations(containerRef) {
  useEffect(() => {
    if (!containerRef.current) return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      // Fade-up reveals for all .reveal elements
      gsap.utils.toArray('.reveal').forEach((el) => {
        gsap.fromTo(el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // Staggered grid items
      gsap.utils.toArray('.stagger-grid').forEach((grid) => {
        gsap.fromTo(grid.children,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: grid,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // Hero entrance
      gsap.from('.hero-content > *', {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.3,
      })

      // Demo staggered response cards
      gsap.fromTo('.demo-response-card',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.demo-responses-container',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )

      // Parallax on social proof section
      const parallaxBg = document.querySelector('.parallax-bg')
      if (parallaxBg) {
        gsap.to(parallaxBg, {
          yPercent: -20,
          ease: 'none',
          scrollTrigger: {
            trigger: '.social-proof-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        })
      }
    }, containerRef)

    return () => ctx.revert()
  }, [containerRef])
}

// ─── Components ─────────────────────────────────────────────

function NoiseOverlay() {
  return (
    <svg className="noise-overlay" aria-hidden="true">
      <filter id="noise">
        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)" />
    </svg>
  )
}

function Navbar() {
  const scrolled = useScrolled()
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { href: '#board', label: 'Board' },
    { href: '#setup', label: 'Setup' },
    { href: '#modes', label: 'Modes' },
    { href: '#powerups', label: 'Power-ups' },
  ]

  // Close mobile menu on Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && mobileOpen) setMobileOpen(false)
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [mobileOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/85 backdrop-blur-xl border-b border-border'
          : 'border-b border-transparent'
      }`}
    >
      <div className="max-w-[1120px] mx-auto flex items-center justify-between h-14">
        <a
          href="#"
          className="font-display text-[15px] font-bold text-white tracking-tight no-underline"
        >
          AI Board
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1.5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-[13px] font-medium text-gray no-underline px-3 py-1.5 rounded-md transition-colors duration-200 hover:text-white hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="es/index.html"
            className="font-body text-[13px] font-semibold text-gray no-underline px-3 py-1 border border-border rounded-md ml-2 transition-colors duration-200 hover:text-white hover:border-border-hover"
          >
            ES
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray hover:text-white transition-colors p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden pb-4 border-t border-border mt-1">
          <div className="flex flex-col gap-1 pt-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-[14px] font-medium text-gray no-underline px-3 py-3 rounded-md hover:text-white hover:bg-white/5"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="es/index.html"
              className="font-body text-[14px] font-semibold text-gray no-underline px-3 py-3"
            >
              Español
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

function Hero() {
  return (
    <section className="relative pt-[110px] sm:pt-[140px] pb-10 sm:pb-14 text-center overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-[55%] w-[800px] h-[500px] pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(232,168,56,0.07) 0%, rgba(232,168,56,0.02) 40%, transparent 70%)',
        }}
      />

      <div className="hero-content relative z-10 max-w-[1120px] mx-auto px-6">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-dim border border-amber/15 rounded-full text-[13px] font-medium text-amber mb-8">
          <Zap size={14} aria-hidden="true" />
          Free forever — set up in 5 minutes
        </span>

        <h1 className="font-display text-[clamp(36px,5.5vw,64px)] font-bold leading-[1.08] text-white max-w-[680px] mx-auto mb-6 tracking-[-0.03em]">
          Stop deciding <em className="not-italic text-amber">alone.</em>
        </h1>

        <p className="text-[clamp(15px,1.8vw,17px)] text-gray max-w-[540px] mx-auto mb-10 leading-[1.7]">
          6 AI directors. 6 perspectives. One prompt. They stress-test your business
          decisions from finance, revenue, operations, people, risk, and strategy.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
          <a
            href="https://github.com/mambrosi/ai-board/blob/main/prompts/board.md?plain=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto max-w-[300px] px-7 py-3.5 bg-amber text-[#1a1400] rounded-xl font-body text-[14px] font-semibold no-underline shadow-[0_4px_24px_rgba(232,168,56,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(232,168,56,0.28)] hover:bg-[#f0b444]"
          >
            <Copy size={16} aria-hidden="true" />
            Get the prompt — it's free
          </a>
          <a
            href="https://github.com/mambrosi/ai-board/blob/main/examples/example-decision.md"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto max-w-[300px] px-7 py-3.5 bg-transparent text-white border border-border rounded-xl font-body text-[14px] font-semibold no-underline transition-all duration-200 hover:-translate-y-0.5 hover:border-border-hover hover:bg-white/[0.03]"
          >
            <Eye size={16} aria-hidden="true" />
            See a real decision
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 flex-wrap">
          <div className="flex items-center gap-2 text-[13px] text-gray-dim">
            <Github size={15} aria-hidden="true" />
            Open source
          </div>
          <div className="hidden sm:block w-px h-4 bg-border" />
          <div className="flex items-center gap-2 text-[13px] text-gray-dim">
            <Users size={15} aria-hidden="true" />
            Used by founders, operators & consultants
          </div>
        </div>
      </div>
    </section>
  )
}

function Demo() {
  return (
    <section className="py-6 pb-14">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="reveal max-w-[820px] mx-auto bg-surface border border-border rounded-2xl overflow-hidden">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-[18px] py-3.5 border-b border-border bg-white/[0.02]">
            <div className="w-2.5 h-2.5 rounded-full bg-border" />
            <div className="w-2.5 h-2.5 rounded-full bg-border" />
            <div className="w-2.5 h-2.5 rounded-full bg-border" />
            <div className="flex-1 text-center text-[12px] font-medium text-gray-dim tracking-wide">
              My Board of Advisors
            </div>
          </div>

          {/* Body */}
          <div className="p-6">
            {/* User message */}
            <div className="flex gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-amber-dim border border-amber/15 flex items-center justify-center shrink-0">
                <User size={16} className="text-amber" />
              </div>
              <div className="bg-white/[0.04] border border-border rounded-[10px] px-4 py-3.5 text-[14px] text-gray leading-relaxed max-w-[600px]">
                <strong className="text-white font-semibold">
                  Should I raise prices 20% on my SaaS?
                </strong>{' '}
                We have 340 customers, 4% monthly churn, and margins are getting squeezed
                by infrastructure costs.
              </div>
            </div>

            {/* Director responses */}
            <div className="demo-responses-container flex flex-col md:flex-row gap-3 mt-1">
              <DemoResponse
                tag="CFO"
                tagColor="gold"
                icon={DollarSign}
                text={
                  <>
                    <strong className="text-white font-semibold">Run the math first.</strong>{' '}
                    A 20% hike on 340 seats means ~$X more MRR, but if churn jumps from 4% to
                    6%, you net negative by month 5. Model three scenarios before you move.
                  </>
                }
              />
              <DemoResponse
                tag="Revenue"
                tagColor="green"
                icon={TrendingUp}
                text={
                  <>
                    <strong className="text-white font-semibold">Don't raise flat.</strong>{' '}
                    Segment by usage tier. Your top 20% of accounts are under-paying — start
                    there. Grandfather the long-tail.
                  </>
                }
              />
              <DemoResponse
                tag="Devil's Advocate"
                tagColor="red"
                icon={ShieldAlert}
                text={
                  <>
                    <strong className="text-white font-semibold">
                      What if it's not a pricing problem?
                    </strong>{' '}
                    Your margins are squeezed by infra costs. Have you optimized your stack, or
                    are you passing engineering debt to customers?
                  </>
                }
              />
            </div>

            {/* Fade hint */}
            <div className="relative mt-4 text-center">
              <div className="h-10 bg-gradient-to-b from-transparent to-surface -mt-10 relative z-10" />
              <p className="text-[13px] text-gray-dim italic">
                + 3 more directors weigh in…
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function DemoResponse({ tag, tagColor, icon: Icon, text }) {
  const colors = accentColors[tagColor]
  return (
    <div className="demo-response-card flex-1 bg-white/[0.03] border border-border rounded-[10px] px-4 py-3.5">
      <div
        className={`inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wide mb-2 px-2 py-0.5 rounded ${colors.text} ${colors.bg}`}
      >
        <Icon size={12} />
        {tag}
      </div>
      <p className="text-[13px] text-gray leading-relaxed">{text}</p>
    </div>
  )
}

function Directors() {
  return (
    <section id="board" className="py-10 sm:py-14 pb-12 sm:pb-16">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="text-center mb-10">
          <div className="reveal font-body text-[11px] font-semibold tracking-[0.18em] uppercase text-amber mb-4">
            YOUR BOARD
          </div>
          <h2 className="reveal font-display text-[clamp(26px,3.8vw,40px)] font-bold text-white leading-[1.18] mb-3.5 tracking-[-0.02em]">
            6 perspectives. Zero blind spots.
          </h2>
          <p className="reveal text-[16px] text-gray max-w-[560px] mx-auto leading-relaxed">
            Each director attacks your problem from a different angle. The value is in
            the friction between them.
          </p>
        </div>

        <div className="stagger-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {directors.map((d) => {
            const colors = accentColors[d.accent]
            return (
              <div
                key={d.role}
                className="group bg-surface border border-border rounded-[14px] p-6 relative overflow-hidden transition-all duration-[250ms] hover:-translate-y-[3px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] hover:border-border-hover"
              >
                {/* Top accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 ${colors.bar}`} />

                <div
                  className={`w-10 h-10 flex items-center justify-center bg-white/[0.04] rounded-[10px] mb-4`}
                >
                  <d.icon size={20} className={colors.text} />
                </div>

                <div className="font-body text-[15px] font-bold text-white mb-0.5">
                  {d.role}
                </div>
                <div className="text-[13px] text-gray-dim italic mb-2.5">
                  {d.nickname}
                </div>
                <p className="text-[13.5px] text-gray leading-relaxed mb-3.5">
                  {d.desc}
                </p>
                <p className="italic text-[13px] text-gray/80 pt-3 border-t border-border leading-relaxed">
                  {d.question}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Setup() {
  const steps = [
    {
      num: 1,
      title: 'Copy the prompt',
      desc: (
        <>
          Open{' '}
          <a
            href="https://github.com/mambrosi/ai-board/blob/main/prompts/board.md?plain=1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber no-underline border-b border-amber/30 hover:border-amber transition-colors"
          >
            board.md
          </a>{' '}
          on GitHub and copy the entire content.
        </>
      ),
    },
    {
      num: 2,
      title: 'Paste into a project',
      desc: 'Create a new project in Claude (or a custom GPT) and paste it as the system instructions.',
    },
    {
      num: 3,
      title: 'Present a decision',
      desc: 'Describe a real decision you\'re facing. The board responds with 6 different perspectives.',
    },
  ]

  return (
    <section id="setup" className="py-10 sm:py-14 pb-12 sm:pb-16">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="text-center mb-10">
          <div className="reveal font-body text-[11px] font-semibold tracking-[0.18em] uppercase text-amber mb-4">
            SETUP
          </div>
          <h2 className="reveal font-display text-[clamp(26px,3.8vw,40px)] font-bold text-white leading-[1.18] mb-3.5 tracking-[-0.02em]">
            Three steps. Five minutes.
          </h2>
          <p className="reveal text-[16px] text-gray max-w-[560px] mx-auto leading-relaxed">
            Works with Claude or ChatGPT. No app, no subscription, no catch.
          </p>
        </div>

        <div className="stagger-grid grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-[400px] sm:max-w-[900px] mx-auto">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-surface border border-border rounded-[14px] p-7 text-center"
            >
              <div className="inline-flex items-center justify-center w-9 h-9 bg-amber-dim border border-amber/15 rounded-[10px] font-display font-bold text-[16px] text-amber mb-4">
                {step.num}
              </div>
              <h4 className="font-body text-[15px] font-bold text-white mb-2">
                {step.title}
              </h4>
              <p className="text-[14px] text-gray leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Modes() {
  const [copiedKey, setCopiedKey] = useState(null)

  const handleCopy = useCallback((key) => {
    const text = templates[key]
    if (!text) return
    navigator.clipboard.writeText(text).then(() => {
      setCopiedKey(key)
      setTimeout(() => setCopiedKey(null), 1500)
    }).catch(() => {
      // Fallback: silently fail if clipboard unavailable
    })
  }, [])

  return (
    <section id="modes" className="py-10 sm:py-14 pb-12 sm:pb-16">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="text-center mb-10">
          <div className="reveal font-body text-[11px] font-semibold tracking-[0.18em] uppercase text-amber mb-4">
            MODES
          </div>
          <h2 className="reveal font-display text-[clamp(26px,3.8vw,40px)] font-bold text-white leading-[1.18] mb-3.5 tracking-[-0.02em]">
            Say it. They'll fight about it.
          </h2>
          <p className="reveal text-[16px] text-gray max-w-[560px] mx-auto leading-relaxed">
            Present your topic and let the directors work. Then steer the conversation.
          </p>
        </div>

        <div className="stagger-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {modes.map((mode) => (
            <div
              key={mode.templateKey}
              className="bg-surface border border-border rounded-[14px] p-[22px] transition-all duration-[250ms] hover:-translate-y-[3px] hover:shadow-[0_10px_32px_rgba(0,0,0,0.25)] hover:border-border-hover"
            >
              <div className="font-body text-[15px] font-bold text-white mb-2">
                {mode.isCode ? (
                  <code className="font-body italic font-bold">{mode.trigger}</code>
                ) : (
                  mode.trigger
                )}
              </div>
              <p className="text-[13.5px] text-gray leading-relaxed mb-3.5">
                {mode.desc}
              </p>
              <button
                onClick={() => handleCopy(mode.templateKey)}
                className="relative inline-flex items-center gap-1.5 px-3.5 py-2.5 min-h-[44px] bg-amber-dim border border-amber/15 rounded-lg font-body text-[12px] font-semibold text-amber cursor-pointer transition-colors duration-200 hover:bg-amber/[0.16] hover:border-amber/30"
              >
                {/* Tooltip */}
                <span
                  className={`absolute bottom-[calc(100%+8px)] left-1/2 -translate-x-1/2 px-3 py-1 bg-green text-[#0B0E11] font-body text-[11px] font-bold rounded-md whitespace-nowrap pointer-events-none transition-opacity duration-200 ${
                    copiedKey === mode.templateKey ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  Copied!
                  <span className="absolute top-full left-1/2 -translate-x-1/2 border-[5px] border-transparent border-t-green" />
                </span>
                <Copy size={13} aria-hidden="true" />
                Copy template
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PowerUps() {
  return (
    <section id="powerups" className="py-10 sm:py-14 pb-12 sm:pb-16">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="text-center mb-10">
          <div className="reveal font-body text-[11px] font-semibold tracking-[0.18em] uppercase text-amber mb-4">
            POWER-UPS
          </div>
          <h2 className="reveal font-display text-[clamp(26px,3.8vw,40px)] font-bold text-white leading-[1.18] mb-3.5 tracking-[-0.02em]">
            Go deeper on the decisions that keep you up at night
          </h2>
          <p className="reveal text-[16px] text-gray max-w-[560px] mx-auto leading-relaxed">
            Install a skill, describe your situation, get a structured PDF with a clear
            recommendation. No hedging.
          </p>
        </div>

        <div className="stagger-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-surface border border-border rounded-[14px] p-6 relative overflow-hidden transition-all duration-[250ms] hover:-translate-y-[3px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] hover:border-border-hover"
            >
              {/* Amber top bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-amber" />

              <div className="w-10 h-10 flex items-center justify-center bg-white/[0.04] rounded-[10px] mb-4">
                <skill.icon size={20} className="text-amber" />
              </div>

              <div className="font-body text-[15px] font-bold text-white mb-1">
                {skill.name}
              </div>
              <div className="italic text-[13px] text-gray-dim mb-2.5">
                {skill.triggerPhrase}
              </div>
              <p className="text-[13.5px] text-gray leading-relaxed mb-3.5">
                {skill.desc}
              </p>
              <div className="text-[12px] text-gray-dim mb-3.5 pt-3 border-t border-border">
                {skill.output}
              </div>
              <a
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 min-h-[44px] bg-amber-dim border border-amber/15 rounded-lg font-body text-[12px] font-semibold text-amber no-underline transition-colors duration-200 hover:bg-amber/[0.16] hover:border-amber/30"
              >
                Learn more & install
              </a>
            </div>
          ))}
        </div>

        <p className="reveal text-center mt-7 text-[13px] text-gray-dim leading-relaxed">
          Requires Claude Pro, Max, Team, or Enterprise plan. Install via Settings →
          Capabilities → Skills.{' '}
          <a
            href="https://github.com/mambrosi/ai-board/tree/main/skills"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber no-underline border-b border-amber/30 hover:border-amber transition-colors"
          >
            Learn more
          </a>
        </p>
      </div>
    </section>
  )
}

function SocialProof() {
  return (
    <section className="social-proof-section relative py-10 sm:py-14 pb-12 sm:pb-16 overflow-hidden">
      {/* Subtle parallax texture bg */}
      <div
        className="parallax-bg absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(232,168,56,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(91,156,245,0.1) 0%, transparent 50%)',
          backgroundSize: '100% 200%',
        }}
      />

      <div className="relative z-10 max-w-[1120px] mx-auto px-6">
        <div className="text-center mb-10">
          <div className="reveal font-body text-[11px] font-semibold tracking-[0.18em] uppercase text-amber mb-4">
            BUILT FOR
          </div>
          <h2 className="reveal font-display text-[clamp(26px,3.8vw,40px)] font-bold text-white leading-[1.18] tracking-[-0.02em]">
            People who decide for a living
          </h2>
        </div>

        <div className="stagger-grid flex justify-center gap-3 flex-wrap mb-12">
          {useCaseTags.map((tag) => (
            <span
              key={tag}
              className="px-[18px] py-2 bg-surface border border-border rounded-full text-[13px] font-medium text-gray transition-colors duration-200 hover:border-border-hover hover:text-white"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="stagger-grid grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-[480px] lg:max-w-[900px] mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-surface border border-border rounded-[14px] p-6"
            >
              <p className="text-[14px] text-gray leading-relaxed mb-4 italic">
                {t.text}
              </p>
              <div className="text-[13px] font-semibold text-white">{t.author}</div>
              <div className="text-[12px] text-gray-dim">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="relative py-12 sm:py-16 pb-14 sm:pb-20 text-center overflow-hidden">
      {/* Amber glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(232,168,56,0.06) 0%, transparent 65%)',
        }}
      />

      <div className="relative z-10 max-w-[1120px] mx-auto px-6">
        <h2 className="reveal font-display text-[clamp(28px,4.2vw,44px)] font-bold text-white leading-[1.18] mb-4 tracking-[-0.02em]">
          Your next decision is already half-made.
        </h2>
        <p className="reveal text-[16px] text-gray max-w-[480px] mx-auto leading-relaxed mb-10">
          That's the problem. Get 6 perspectives before you commit to the wrong one.
        </p>
        <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://github.com/mambrosi/ai-board/blob/main/prompts/board.md?plain=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto max-w-[300px] px-7 py-3.5 bg-amber text-[#1a1400] rounded-xl font-body text-[14px] font-semibold no-underline shadow-[0_4px_24px_rgba(232,168,56,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(232,168,56,0.28)] hover:bg-[#f0b444]"
          >
            <Copy size={16} aria-hidden="true" />
            Get your board — it's free
          </a>
          <a
            href="https://github.com/mambrosi/ai-board/blob/main/docs/usage-guide.md"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto max-w-[300px] px-7 py-3.5 bg-transparent text-white border border-border rounded-xl font-body text-[14px] font-semibold no-underline transition-all duration-200 hover:-translate-y-0.5 hover:border-border-hover hover:bg-white/[0.03]"
          >
            <BookOpen size={16} aria-hidden="true" />
            Quick start guide
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-border py-7 text-center">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="flex justify-center items-center gap-5 text-[13px] text-gray-dim">
          <span>
            Created by{' '}
            <a
              href="https://www.linkedin.com/in/marcosambrosi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray no-underline hover:text-white transition-colors"
            >
              Marcos
            </a>
          </span>
          <span className="text-border">·</span>
          <a
            href="https://github.com/mambrosi/ai-board"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray no-underline hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}

// ─── App ────────────────────────────────────────────────────

export default function App() {
  const appRef = useRef(null)
  useScrollAnimations(appRef)

  return (
    <div ref={appRef} className="min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-amber focus:text-[#1a1400] focus:rounded-lg focus:font-semibold focus:text-sm"
      >
        Skip to content
      </a>
      <NoiseOverlay />
      <Navbar />
      <main id="main">
        <Hero />
        <Demo />
        <Directors />
        <Setup />
        <Modes />
        <PowerUps />
        <SocialProof />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
