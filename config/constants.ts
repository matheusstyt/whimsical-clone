/**
 * 🎯 CONSTANTES GLOBAIS DO PROJETO
 *
 * Este arquivo centraliza todas as constantes usadas no projeto,
 * facilitando manutenção e evitando valores "mágicos" no código.
 */

// 🎨 CONFIGURAÇÕES DE DESIGN
export const DESIGN_TOKENS = {
  // Cores principais do tema
  COLORS: {
    PRIMARY: "#6a5575",
    SECONDARY: "#92819b",
    ACCENT: "#f6f2f7",
    GRADIENT_START: "#a855f7", // purple-500
    GRADIENT_END: "#ec4899", // pink-500
  },

  // Tamanhos e espaçamentos
  SPACING: {
    SIDEBAR_WIDTH: "300px",
    SIDEBAR_WIDTH_MOBILE: "280px",
    HEADER_HEIGHT: "64px",
    CONTENT_MAX_WIDTH: "1200px",
  },

  // Tipografia
  TYPOGRAPHY: {
    TITLE_SIZE_DESKTOP: "72px",
    TITLE_SIZE_MOBILE: "36px",
    SUBTITLE_SIZE: "20px",
  },
} as const

// ⚡ CONFIGURAÇÕES DE PERFORMANCE
export const PERFORMANCE = {
  // Tempos de animação (em ms)
  ANIMATION_DURATION: {
    FAST: 150,
    NORMAL: 300,
    SLOW: 500,
  },

  // Debounce para busca
  SEARCH_DEBOUNCE_MS: 300,

  // Limite de itens por página
  ITEMS_PER_PAGE: 10,
} as const

// 🔍 CONFIGURAÇÕES DE BUSCA
export const SEARCH_CONFIG = {
  // Placeholder texts
  PLACEHOLDERS: {
    HEADER: "Search",
    MAIN: "Search help articles (e.g. flowcharts, integrations or settings)",
    MODAL: "Search help articles (e.g. flowcharts or settings)",
  },

  // Atalhos de teclado
  SHORTCUTS: {
    OPEN_SEARCH: "ctrl+k",
    CLOSE_MODAL: "escape",
    NAVIGATE_UP: "arrowup",
    NAVIGATE_DOWN: "arrowdown",
    SELECT_ITEM: "enter",
  },
} as const

// 💾 CONFIGURAÇÕES DE ARMAZENAMENTO
export const STORAGE = {
  // Chaves do localStorage
  KEYS: {
    CONTENT: "whimsical-content",
    USER_PREFERENCES: "whimsical-preferences",
    SIDEBAR_STATE: "whimsical-sidebar-state",
  },

  // Tempo de expiração (em dias)
  EXPIRATION_DAYS: 30,
} as const

// 🌐 CONFIGURAÇÕES DE NAVEGAÇÃO
export const NAVIGATION = {
  // Rotas principais
  ROUTES: {
    HOME: "/",
    ARTICLE: "/article",
    ADMIN: "/admin",
  },

  // Parâmetros de URL
  PARAMS: {
    ARTICLE_SLUG: "slug",
  },
} as const

// 📱 BREAKPOINTS RESPONSIVOS
export const BREAKPOINTS = {
  MOBILE: "640px",
  TABLET: "768px",
  DESKTOP: "1024px",
  LARGE_DESKTOP: "1280px",
  EXTRA_LARGE: "1536px",
} as const

// 🎯 CONFIGURAÇÕES DE ACESSIBILIDADE
export const ACCESSIBILITY = {
  // ARIA labels
  LABELS: {
    SEARCH_INPUT: "Buscar artigos de ajuda",
    CLOSE_MODAL: "Fechar modal de busca",
    TOGGLE_SIDEBAR: "Alternar menu lateral",
    COPY_LINK: "Copiar link da seção",
  },

  // Roles ARIA
  ROLES: {
    SEARCH: "search",
    NAVIGATION: "navigation",
    MAIN: "main",
    COMPLEMENTARY: "complementary",
  },
} as const

// 🔧 CONFIGURAÇÕES DE DESENVOLVIMENTO
export const DEV_CONFIG = {
  // Logs de debug
  ENABLE_LOGS: process.env.NODE_ENV === "development",

  // Modo de demonstração
  DEMO_MODE: false,

  // Dados de exemplo
  MOCK_DATA: true,
} as const
