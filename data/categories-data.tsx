import { Keyboard, Layout, FolderOpen, FileText, HelpCircle, Palette, CreditCard } from "lucide-react"

export const categories = [
  {
    icon: (
      <div
        className="w-4 h-4 rounded-full bg-slate-600 flex items-center justify-center group-hover:bg-slate-700 transition-colors"
        style={{ color: "#fff" }}
      >
        <div className="w-2 h-2 bg-white rounded-full"></div>
      </div>
    ),
    title: "Getting started",
    description: "Get to know Whimsical at a high level so you can start creating.",
    articles: "(19 ARTICLES)",
    link: "/article/getting-started/sequence-diagrams",
  },
  {
    icon: (
      <Keyboard
        className="w-4 h-4 text-slate-600 group-hover:text-slate-700 transition-colors"
        style={{ color: "#fff" }}
      />
    ),
    title: "Keyboard shortcuts",
    description: "Keep your hands off the mouse, and use Whimsical at speed.",
    articles: "(2 ARTICLES)",
    link: "/article/keyboard-shortcuts/general",
  },
  {
    icon: (
      <Layout
        className="w-4 h-4 text-slate-600 group-hover:text-slate-700 transition-colors"
        style={{ color: "#fff" }}
      />
    ),
    title: "Whimsical boards",
    description: "Build diagrams, design wireframes & manage cards.",
    articles: "(27 ARTICLES)",
    link: "/article/whimsical-boards/creating",
  },
  {
    icon: (
      <FolderOpen
        className="w-4 h-4 text-slate-600 group-hover:text-slate-700 transition-colors"
        style={{ color: "#fff" }}
      />
    ),
    title: "Whimsical projects",
    description: "Manage your projects calmly from idea to completion.",
    articles: "(5 ARTICLES)",
    link: "/article/whimsical-projects/creating",
  },
  {
    icon: (
      <FileText
        className="w-4 h-4 text-slate-600 group-hover:text-slate-700 transition-colors"
        style={{ color: "#fff" }}
      />
    ),
    title: "Whimsical docs",
    description: "Create rich and connected long form content.",
    articles: "(16 ARTICLES)",
    link: "/article/whimsical-docs/creating",
  },
  {
    icon: (
      <HelpCircle
        className="w-4 h-4 text-slate-500 group-hover:text-slate-600 transition-colors"
        style={{ color: "#fff" }}
      />
    ),
    title: "FAQs",
    description: "Get answers to frequently asked questions.",
    articles: "(33 ARTICLES)",
    link: "/article/faqs/general",
  },
  {
    icon: (
      <Palette
        className="w-4 h-4 text-slate-600 group-hover:text-slate-700 transition-colors"
        style={{ color: "#fff" }}
      />
    ),
    title: "Themes & templates",
    description: "Produce consistent, quick and beautiful content easily.",
    articles: "(5 ARTICLES)",
    link: "/article/themes-templates/themes",
  },
  {
    icon: (
      <CreditCard
        className="w-4 h-4 text-slate-600 group-hover:text-slate-700 transition-colors"
        style={{ color: "#fff" }}
      />
    ),
    title: "Subscription & billing",
    description: "Understand your invoices and updating your billing information.",
    articles: "(9 ARTICLES)",
    link: "/article/subscription-billing/plans",
  },
]
