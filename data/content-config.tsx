import type { ContentConfig } from "@/types/content"
import {
  Rocket,
  Keyboard,
  LayoutDashboard,
  Briefcase,
  FileText,
  HelpCircle,
  Palette,
  CreditCard,
  User,
  Users,
  ArrowDownCircle,
  ArrowUpCircle,
  Link2,
  Mail,
  ArrowLeftRight
} from 'lucide-react';

export const defaultContent: ContentConfig = {
  settings: {
    siteTitle: "Whimsical Help Center",
    siteDescription: "Get answers, gain understanding, and learn how to work faster in Whimsical.",
    brandName: "Whimsical",
  },
  homepage: {
    hero: {
      title: "Como podemos ajudar?",
      subtitle:
        'Encontre respostas, compreenda melhor e aprenda a <br> trabalhar de forma mais agil no Pass.',
      searchPlaceholder: "Procure ajuda nos artigos (ex: como configurar seu site)",
    },
    categories: {
      title: "Todas as categorias",
      items: [
        {
          iconHtml:
            '<div class="w-4 h-4 rounded-full bg-slate-600 flex items-center justify-center group-hover:bg-slate-700 transition-colors" style="color: #000000 "><div class="w-2 h-2 bg-white rounded-full"></div></div>',
          title: "Getting started",
          description: "Get to know Whimsical at a high level so you can start creating.",
          articles: "(19 ARTICLES)",
          link: "/article/getting-started/sequence-diagrams",
        },
        {
          iconHtml:
            '<svg class="w-4 h-4 text-slate-600 group-hover:text-slate-700 transition-colors" style="color: #000000 " fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path></svg>',
          title: "Keyboard shortcuts",
          description: "Keep your hands off the mouse, and use Whimsical at speed.",
          articles: "(2 ARTICLES)",
          link: "/article/keyboard-shortcuts/general",
        },
        {
          iconHtml:
            '<svg class="w-4 h-4 text-slate-600 group-hover:text-slate-700 transition-colors" style="color: #000000 " fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg>',
          title: "Whimsical boards",
          description: "Build diagrams, design wireframes & manage cards.",
          articles: "(27 ARTICLES)",
          link: "/article/whimsical-boards/creating",
        },
        {
          iconHtml:
            '<svg class="w-4 h-4 text-slate-600 group-hover:text-slate-700 transition-colors" style="color: #000000 " fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 1v6m8-6v6"></path></svg>',
          title: "Whimsical projects",
          description: "Manage your projects calmly from idea to completion.",
          articles: "(5 ARTICLES)",
          link: "/article/whimsical-projects/creating",
        },
        {
          iconHtml:
            '<svg class="w-4 h-4 text-slate-600 group-hover:text-slate-700 transition-colors" style="color: #000000 " fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>',
          title: "Whimsical docs",
          description: "Create rich and connected long form content.",
          articles: "(16 ARTICLES)",
          link: "/article/whimsical-docs/creating",
        },
        {
          iconHtml:
            '<svg class="w-4 h-4 text-slate-500 group-hover:text-slate-600 transition-colors" style="color: #000000 " fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
          title: "FAQs",
          description: "Get answers to frequently asked questions.",
          articles: "(33 ARTICLES)",
          link: "/article/faqs/general",
        },
        {
          iconHtml:
            '<svg class="w-4 h-4 text-slate-600 group-hover:text-slate-700 transition-colors" style="color: #000000 " fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path></svg>',
          title: "Themes & templates",
          description: "Produce consistent, quick and beautiful content easily.",
          articles: "(5 ARTICLES)",
          link: "/article/themes-templates/themes",
        },
        {
          iconHtml:
            '<svg class="w-4 h-4 text-slate-600 group-hover:text-slate-700 transition-colors" style="color: #000000 " fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>',
          title: "Subscription & billing",
          description: "Understand your invoices and updating your billing information.",
          articles: "(9 ARTICLES)",
          link: "/article/subscription-billing/plans",
        },
      ],
    },
  },
  sidebar: {
    items: [
      {
        title: "Getting started",
        description: "Get to know Whimsical at a high level so you can start creating.",
        hasChevron: true,
        iconHtml: <Rocket className="w-5 h-5 inline-block mr-2" />,
        subitems: [
          { title: "Getting started with sequence diagrams", slug: "getting-started/sequence-diagrams" },
          { title: "What is Whimsical?", slug: "getting-started/what-is-whimsical" },
          { title: "Getting started with docs", slug: "getting-started/docs" },
          { title: "What can you do with Whimsical?", slug: "getting-started/what-can-you-do" },
          { title: "Getting to know Whimsical - video overview", slug: "getting-started/video-overview" },
        ],
      },
      {
        title: "Keyboard shortcuts",
        description: "Keep your hands off the mouse, and use Whimsical at speed.",
        hasChevron: true,
        iconHtml: <Keyboard className="w-5 h-5 inline-block mr-2" />,
        subitems: [
          { title: "General shortcuts", slug: "keyboard-shortcuts/general" },
          { title: "Board shortcuts", slug: "keyboard-shortcuts/board" },
        ],
      },
      {
        title: "Whimsical boards",
        description: "Build diagrams, design wireframes & manage cards.",
        hasChevron: true,
        iconHtml: <LayoutDashboard className="w-5 h-5 inline-block mr-2" />,
        subitems: [
          { title: "Creating boards", slug: "whimsical-boards/creating" },
          { title: "Board templates", slug: "whimsical-boards/templates" },
        ],
      },
      {
        title: "Whimsical projects",
        description: "Manage your projects calmly from idea to completion.",
        hasChevron: true,
        iconHtml: <Briefcase className="w-5 h-5 inline-block mr-2" />,
        subitems: [
          { title: "Creating projects", slug: "whimsical-projects/creating" },
          { title: "Project management", slug: "whimsical-projects/management" },
        ],
      },
      {
        title: "Whimsical docs",
        description: "Create rich and connected long form content.",
        hasChevron: true,
        iconHtml: <FileText className="w-5 h-5 inline-block mr-2" />,
        subitems: [
          { title: "Creating docs", slug: "whimsical-docs/creating" },
          { title: "Formatting text", slug: "whimsical-docs/formatting" },
        ],
      },
      {
        title: "FAQs",
        description: "Get answers to frequently asked questions.",
        hasChevron: true,
        iconHtml: <HelpCircle className="w-5 h-5 inline-block mr-2" />,
        subitems: [
          { title: "General questions", slug: "faqs/general" },
          { title: "Billing questions", slug: "faqs/billing" },
        ],
      },
      {
        title: "Themes & templates",
        description: "Produce consistent, quick and beautiful content easily.",
        hasChevron: true,
        iconHtml: <Palette className="w-5 h-5 inline-block mr-2" />,
        subitems: [
          { title: "Using themes", slug: "themes-templates/themes" },
          { title: "Creating templates", slug: "themes-templates/templates" },
        ],
      },
      {
        title: "Subscription & billing",
        description: "Understand your invoices and update your billing information.",
        hasChevron: true,
        iconHtml: <CreditCard className="w-5 h-5 inline-block mr-2" />,
        subitems: [
          { title: "Plans & pricing", slug: "subscription-billing/plans" },
          { title: "Payment methods", slug: "subscription-billing/payment" },
        ],
      },
      {
        title: "Account settings",
        description: "",
        hasChevron: true,
        iconHtml: <User className="w-5 h-5 inline-block mr-2" />,
        subitems: [
          { title: "Profile settings", slug: "account-settings/profile" },
          { title: "Notification preferences", slug: "account-settings/notifications" },
        ],
      },
      {
        title: "Workspace settings",
        description: "",
        hasChevron: true,
        iconHtml: <Users className="w-5 h-5 inline-block mr-2" />,
        subitems: [
          { title: "Workspace settings", slug: "managing-workspaces/settings" },
          { title: "Member management", slug: "managing-workspaces/members" },
        ],
      },
      {
        title: "Imports & exports",
        description: "",
        hasChevron: true,
        iconHtml: <ArrowLeftRight />,
        subitems: [
          { title: "Importing files", slug: "imports-exports/importing" },
          { title: "Exporting content", slug: "imports-exports/exporting" },
        ],
      },
      {
        title: "Integrations",
        description: "",
        hasChevron: true,
        iconHtml: <Link2 className="w-5 h-5 inline-block mr-2" />,
        subitems: [
          { title: "Available integrations", slug: "integrations/available" },
          { title: "Setting up integrations", slug: "integrations/setup" },
        ],
      },
      {
        title: "Contact us",
        description: "",
        hasChevron: false,
        hasExternalLink: true,
        iconHtml: <Mail className="w-5 h-5 inline-block mr-2" />,
      },
    ]
  },
  articles: {
    "getting-started/sequence-diagrams": {
      title: "Getting started with sequence diagrams",
      breadcrumb: [
        { text: "Help Center", goTo: "/" },
        // { text: "Getting started", goTo: "/getting-started/" },
        { text: "Getting started with sequence diagrams", goTo: "" },
      ],
      summary: [
        { title: "Getting started with sequence diagrams", id: "getting-started" },
        { title: "How to create a sequence diagram", id: "how-to-create" },
      ],
      content: `
        <div class="mb-8">
          <p class="text-md text-gray-700 leading-relaxed mb-6">
            A <a href="#" class="text-purple-600 hover:text-purple-700 underline">sequence diagram</a> is a type of UML (Unified Modeling Language) diagram that shows the interactions between various components or objects in a system. It provides a visual representation of the order of messages or events over time.
          </p>
        </div>

        <div class="mb-12">
          <div class="bg-purple-600 rounded-lg overflow-hidden shadow-lg">
            <div class="aspect-video bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center relative">
              <div class="absolute inset-0 bg-black bg-opacity-20"></div>
              <div class="relative z-10 text-center text-white">
                <div class="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <div class="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-white ml-1"></div>
                </div>
                <p class="text-sm opacity-90 mb-2">WHAT'S NEW</p>
                <h3 class="text-2xl font-bold">Creating sequence diagrams in Whimsical</h3>
              </div>
            </div>
          </div>
        </div>

        <div id="how-to-create" class="scroll-mt-24">
          <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center justify-between">
            How to create a sequence diagram
            <button class="flex items-center space-x-2 text-sm text-gray-500 hover:text-gray-700 transition-colors">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
              </svg>
              <span>Copy Link</span>
            </button>
          </h2>
          <div class="prose prose-lg max-w-none">
            <p class="text-gray-700 leading-relaxed mb-4">
              Creating sequence diagrams in Whimsical is straightforward and intuitive. Follow these steps to get started:
            </p>
            <ol class="list-decimal list-inside space-y-3 text-gray-700">
              <li>Open Whimsical and create a new board</li>
              <li>Select the sequence diagram template from the template library</li>
              <li>Add actors and objects to your diagram</li>
              <li>Connect them with messages and interactions</li>
              <li>Customize the styling and layout as needed</li>
            </ol>
          </div>
        </div>
      `,
    },
    "getting-started/what-is-whimsical": {
      title: "What is Whimsical?",
      breadcrumb: [
        { text: "Help Center", goTo: "/" },
        // { text: "Getting started", goTo: "" },
        { text: "What is Whimsical?", goTo: "" },
      ],
      summary: [
        { title: "What is Whimsical?", id: "what-is-whimsical" },
        { title: "Key Features", id: "key-features" },
      ],
      content: `
        <div class="mb-8">
          <p class="text-lg text-gray-700 leading-relaxed mb-6">
            Whimsical is a collaborative workspace for visual thinking. It combines flowcharts, wireframes, sticky notes, and mind maps in one unified platform.
          </p>
        </div>

        <div id="key-features" class="scroll-mt-24">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
          <div class="prose prose-lg max-w-none">
            <ul class="list-disc list-inside space-y-3 text-gray-700">
              <li>Flowcharts and diagrams</li>
              <li>Wireframes and mockups</li>
              <li>Mind maps</li>
              <li>Sticky notes</li>
              <li>Real-time collaboration</li>
            </ul>
          </div>
        </div>
      `,
    },
    "keyboard-shortcuts/general": {
      title: "General Keyboard Shortcuts",
      breadcrumb: [
        { text: "Help Center", goTo: "/" },
        // { text: "Getting started", goTo: "" },
        { text: "General shortcuts", goTo: "" },
      ],
      summary: [
        { title: "General Shortcuts", id: "general-shortcuts" },
        { title: "Navigation", id: "navigation" },
      ],
      content: `
        <div class="mb-8">
          <p class="text-lg text-gray-700 leading-relaxed mb-6">
            Master these keyboard shortcuts to work faster in Whimsical.
          </p>
        </div>

        <div id="navigation" class="scroll-mt-24">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">Navigation Shortcuts</h2>
          <div class="prose prose-lg max-w-none">
            <ul class="list-disc list-inside space-y-3 text-gray-700">
              <li><kbd>Ctrl + K</kbd> - Open search</li>
              <li><kbd>Ctrl + N</kbd> - New document</li>
              <li><kbd>Ctrl + S</kbd> - Save</li>
              <li><kbd>Ctrl + Z</kbd> - Undo</li>
              <li><kbd>Ctrl + Y</kbd> - Redo</li>
            </ul>
          </div>
        </div>
      `,
    },
  },
}
