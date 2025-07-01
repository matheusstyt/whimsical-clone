import type { ContentConfig } from "@/types/content"

export const defaultContent: ContentConfig = {
  settings: {
    siteTitle: "Whimsical Help Center",
    siteDescription: "Get answers, gain understanding, and learn how to work faster in Whimsical.",
    brandName: "Whimsical",
  },
  homepage: {
    hero: {
      title: "How {can we help?}",
      subtitle:
        'Get answers, gain understanding, and<br className="hidden sm:block" />learn how to work faster in Whimsical.',
      searchPlaceholder: "Search help articles (e.g. flowcharts, integrations or settings)",
    },
    categories: {
      title: "All categories",
      items: [
        {
          iconHtml:
            '<div class="w-4 h-4 rounded-full bg-slate-600 flex items-center justify-center group-hover:bg-slate-700 transition-colors" style="color: #fff"><div class="w-2 h-2 bg-white rounded-full"></div></div>',
          title: "Getting started",
          description: "Get to know Whimsical at a high level so you can start creating.",
          articles: "(19 ARTICLES)",
          link: "/article/getting-started/sequence-diagrams",
        },
        {
          iconHtml:
            '<svg class="w-4 h-4 text-slate-600 group-hover:text-slate-700 transition-colors" style="color: #fff" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path></svg>',
          title: "Keyboard shortcuts",
          description: "Keep your hands off the mouse, and use Whimsical at speed.",
          articles: "(2 ARTICLES)",
          link: "/article/keyboard-shortcuts/general",
        },
        {
          iconHtml:
            '<svg class="w-4 h-4 text-slate-600 group-hover:text-slate-700 transition-colors" style="color: #fff" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg>',
          title: "Whimsical boards",
          description: "Build diagrams, design wireframes & manage cards.",
          articles: "(27 ARTICLES)",
          link: "/article/whimsical-boards/creating",
        },
        {
          iconHtml:
            '<svg class="w-4 h-4 text-slate-600 group-hover:text-slate-700 transition-colors" style="color: #fff" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 1v6m8-6v6"></path></svg>',
          title: "Whimsical projects",
          description: "Manage your projects calmly from idea to completion.",
          articles: "(5 ARTICLES)",
          link: "/article/whimsical-projects/creating",
        },
        {
          iconHtml:
            '<svg class="w-4 h-4 text-slate-600 group-hover:text-slate-700 transition-colors" style="color: #fff" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>',
          title: "Whimsical docs",
          description: "Create rich and connected long form content.",
          articles: "(16 ARTICLES)",
          link: "/article/whimsical-docs/creating",
        },
        {
          iconHtml:
            '<svg class="w-4 h-4 text-slate-500 group-hover:text-slate-600 transition-colors" style="color: #fff" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
          title: "FAQs",
          description: "Get answers to frequently asked questions.",
          articles: "(33 ARTICLES)",
          link: "/article/faqs/general",
        },
        {
          iconHtml:
            '<svg class="w-4 h-4 text-slate-600 group-hover:text-slate-700 transition-colors" style="color: #fff" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path></svg>',
          title: "Themes & templates",
          description: "Produce consistent, quick and beautiful content easily.",
          articles: "(5 ARTICLES)",
          link: "/article/themes-templates/themes",
        },
        {
          iconHtml:
            '<svg class="w-4 h-4 text-slate-600 group-hover:text-slate-700 transition-colors" style="color: #fff" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>',
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
        iconHtml:
          '<div class="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center icon-sidebar"><div class="w-2 h-2 bg-white rounded-full"></div></div>',
        title: "Getting started",
        description: "Get to know Whimsical at a high level so you can start creating.",
        hasChevron: true,
        subitems: [
          { title: "Getting started with sequence diagrams", slug: "getting-started/sequence-diagrams" },
          { title: "What is Whimsical?", slug: "getting-started/what-is-whimsical" },
          { title: "Getting started with docs", slug: "getting-started/docs" },
          { title: "What can you do with Whimsical?", slug: "getting-started/what-can-you-do" },
          { title: "Getting to know Whimsical - video overview", slug: "getting-started/video-overview" },
        ],
      },
      {
        iconHtml:
          '<svg class="w-4 h-4 text-gray-600 icon-sidebar" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path></svg>',
        title: "Keyboard shortcuts",
        description: "Keep your hands off the mouse, and use Whimsical at speed.",
        hasChevron: true,
        subitems: [
          { title: "General shortcuts", slug: "keyboard-shortcuts/general" },
          { title: "Board shortcuts", slug: "keyboard-shortcuts/board" },
        ],
      },
      {
        iconHtml:
          '<svg class="w-4 h-4 text-gray-600 icon-sidebar" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg>',
        title: "Whimsical boards",
        description: "Build diagrams, design wireframes & manage cards.",
        hasChevron: true,
        subitems: [
          { title: "Creating boards", slug: "whimsical-boards/creating" },
          { title: "Board templates", slug: "whimsical-boards/templates" },
        ],
      },
      {
        iconHtml:
          '<svg class="w-4 h-4 text-gray-600 icon-sidebar" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 1v6m8-6v6"></path></svg>',
        title: "Whimsical projects",
        description: "Manage your projects calmly from idea to completion.",
        hasChevron: true,
        subitems: [
          { title: "Creating projects", slug: "whimsical-projects/creating" },
          { title: "Project management", slug: "whimsical-projects/management" },
        ],
      },
      {
        iconHtml:
          '<svg class="w-4 h-4 text-gray-600 icon-sidebar" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>',
        title: "Whimsical docs",
        description: "Create rich and connected long form content.",
        hasChevron: true,
        subitems: [
          { title: "Creating docs", slug: "whimsical-docs/creating" },
          { title: "Formatting text", slug: "whimsical-docs/formatting" },
        ],
      },
      {
        iconHtml:
          '<svg class="w-4 h-4 text-gray-600 icon-sidebar" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
        title: "FAQs",
        description: "Get answers to frequently asked questions.",
        hasChevron: true,
        subitems: [
          { title: "General questions", slug: "faqs/general" },
          { title: "Billing questions", slug: "faqs/billing" },
        ],
      },
      {
        iconHtml:
          '<svg class="w-4 h-4 text-gray-600 icon-sidebar" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path></svg>',
        title: "Themes & templates",
        description: "Produce consistent, quick and beautiful content easily.",
        hasChevron: true,
        subitems: [
          { title: "Using themes", slug: "themes-templates/themes" },
          { title: "Creating templates", slug: "themes-templates/templates" },
        ],
      },
      {
        iconHtml:
          '<svg class="w-4 h-4 text-gray-600 icon-sidebar" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>',
        title: "Subscription & billing",
        description: "Understand your invoices and updating your billing information.",
        hasChevron: true,
        subitems: [
          { title: "Plans & pricing", slug: "subscription-billing/plans" },
          { title: "Payment methods", slug: "subscription-billing/payment" },
        ],
      },
      {
        iconHtml:
          '<svg class="w-4 h-4 text-gray-600 icon-sidebar" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>',
        title: "Account settings",
        description: "",
        hasChevron: true,
        subitems: [
          { title: "Profile settings", slug: "account-settings/profile" },
          { title: "Notification preferences", slug: "account-settings/notifications" },
        ],
      },
      {
        iconHtml:
          '<svg class="w-4 h-4 text-gray-600 icon-sidebar" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path></svg>',
        title: "Managing workspaces",
        description: "",
        hasChevron: true,
        subitems: [
          { title: "Workspace settings", slug: "managing-workspaces/settings" },
          { title: "Member management", slug: "managing-workspaces/members" },
        ],
      },
      {
        iconHtml:
          '<svg class="w-4 h-4 text-gray-600 icon-sidebar" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>',
        title: "Imports & exports",
        description: "",
        hasChevron: true,
        subitems: [
          { title: "Importing files", slug: "imports-exports/importing" },
          { title: "Exporting content", slug: "imports-exports/exporting" },
        ],
      },
      {
        iconHtml:
          '<svg class="w-4 h-4 text-gray-600 icon-sidebar" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>',
        title: "Integrations",
        description: "",
        hasChevron: true,
        subitems: [
          { title: "Available integrations", slug: "integrations/available" },
          { title: "Setting up integrations", slug: "integrations/setup" },
        ],
      },
      {
        iconHtml: '<div class="w-4 h-4 rounded bg-gray-300"></div>',
        title: "Contact us",
        description: "",
        hasChevron: false,
        hasExternalLink: true,
      },
    ],
  },
  articles: {
    "getting-started/sequence-diagrams": {
      title: "Getting started with sequence diagrams",
      breadcrumb: ["Help Center", "Getting started", "Getting started with sequence diagrams"],
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
      breadcrumb: ["Help Center", "Getting started", "What is Whimsical?"],
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
      breadcrumb: ["Help Center", "Keyboard shortcuts", "General shortcuts"],
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
