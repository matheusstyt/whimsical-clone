/**
 * 🎨 DESIGN TOKENS DO WHIMSICAL
 *
 * Tokens de design que replicam exatamente o visual do Whimsical.
 * Valores extraídos do site original para máxima fidelidade.
 */

export const DESIGN_TOKENS = {
  // 🎨 CORES (extraídas do site original)
  COLORS: {
    // Cores principais
    BACKGROUND: "#fbfafc",
    SIDEBAR_BG: "#ffffff",
    TEXT_PRIMARY: "#2d2d2d",
    TEXT_SECONDARY: "#6b7280",
    TEXT_MUTED: "#9ca3af",

    // Cores do gradiente
    PURPLE: "#6366f1",
    PINK: "#ec4899",

    // Cores de estado
    BORDER: "#e5e7eb",
    HOVER: "#f9fafb",
    ACTIVE: "#f0f0ff",

    // Cores de feedback
    SUCCESS: "#10b981",
    WARNING: "#f59e0b",
    ERROR: "#ef4444",
  },

  // 📏 ESPAÇAMENTOS (em rem para responsividade)
  SPACING: {
    // Layout principal
    SIDEBAR_WIDTH: "15rem", // 240px
    HEADER_HEIGHT: "3.5rem", // 56px
    CONTENT_PADDING: "2rem", // 32px

    // Cards e componentes
    CARD_PADDING: "1.5rem", // 24px
    CARD_GAP: "1.5rem", // 24px
    CARD_HEIGHT: "12rem", // 192px

    // Micro espaçamentos
    ICON_SIZE: "1rem", // 16px
    ICON_SIZE_LG: "1.5rem", // 24px
    BORDER_RADIUS: "0.75rem", // 12px
    BORDER_RADIUS_SM: "0.5rem", // 8px
  },

  // 📝 TIPOGRAFIA (sistema de escalas)
  TYPOGRAPHY: {
    // Tamanhos de fonte
    FONT_SIZE: {
      XS: "0.75rem", // 12px
      SM: "0.875rem", // 14px
      BASE: "1rem", // 16px
      LG: "1.125rem", // 18px
      XL: "1.25rem", // 20px
      "2XL": "1.5rem", // 24px
      "3XL": "1.875rem", // 30px
      "4XL": "2.25rem", // 36px
      "5XL": "3rem", // 48px
    },

    // Pesos de fonte
    FONT_WEIGHT: {
      NORMAL: "400",
      MEDIUM: "500",
      SEMIBOLD: "600",
      BOLD: "700",
    },

    // Altura de linha
    LINE_HEIGHT: {
      TIGHT: "1.1",
      NORMAL: "1.5",
      RELAXED: "1.7",
    },
  },

  // 🎭 ANIMAÇÕES
  ANIMATION: {
    // Durações
    DURATION: {
      FAST: "150ms",
      NORMAL: "300ms",
      SLOW: "500ms",
    },

    // Easing
    EASING: {
      EASE_IN: "cubic-bezier(0.4, 0, 1, 1)",
      EASE_OUT: "cubic-bezier(0, 0, 0.2, 1)",
      EASE_IN_OUT: "cubic-bezier(0.4, 0, 0.2, 1)",
    },
  },

  // 📱 BREAKPOINTS (em em para acessibilidade)
  BREAKPOINTS: {
    SM: "40em", // 640px
    MD: "48em", // 768px
    LG: "64em", // 1024px
    XL: "80em", // 1280px
    "2XL": "96em", // 1536px
  },

  // 🎯 Z-INDEX (hierarquia de camadas)
  Z_INDEX: {
    DROPDOWN: 10,
    SIDEBAR: 20,
    HEADER: 30,
    MODAL: 50,
    TOOLTIP: 60,
  },

  // 🌊 SOMBRAS
  SHADOWS: {
    SM: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    MD: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    LG: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    XL: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  },
} as const

// 🎨 GRADIENTES ESPECÍFICOS DO WHIMSICAL
export const GRADIENTS = {
  PRIMARY: "linear-gradient(135deg, #6366f1 0%, #ec4899 100%)",
  HOVER: "linear-gradient(135deg, #4f46e5 0%, #db2777 100%)",
  SUBTLE: "linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)",
} as const

// 🎯 CONFIGURAÇÕES DE COMPONENTES
export const COMPONENT_CONFIG = {
  // Cards de categoria
  CATEGORY_CARD: {
    WIDTH: "16rem",
    HEIGHT: "12rem",
    PADDING: "1.5rem",
    BORDER_RADIUS: "0.75rem",
    ICON_SIZE: "2.5rem",
  },

  // Sidebar
  SIDEBAR: {
    WIDTH: "15rem",
    ITEM_HEIGHT: "2.5rem",
    ITEM_PADDING: "0.5rem 1rem",
    ICON_SIZE: "1rem",
  },

  // Header
  HEADER: {
    HEIGHT: "3.5rem",
    SEARCH_WIDTH: "20rem",
    BUTTON_HEIGHT: "2.25rem",
  },

  // Modal de busca
  SEARCH_MODAL: {
    MAX_WIDTH: "32rem",
    MAX_HEIGHT: "24rem",
    ITEM_HEIGHT: "3rem",
  },
} as const
