/**
 * 📝 COMPONENTE TEXT (ATOM)
 *
 * Texto com variantes tipográficas consistentes.
 * Base para todos os textos da aplicação.
 */

import type React from "react"

// 🎯 Interface do componente
interface TextProps {
  /** Conteúdo do texto */
  children?: React.ReactNode
  /** Variante tipográfica */
  variant?: "body" | "caption" | "small" | "lead"
  /** Classes CSS adicionais */
  className?: string
  /** HTML para renderizar (sanitizado) */
  html?: string
  /** Cor do texto */
  color?: "default" | "muted" | "primary" | "secondary"
  /** Peso da fonte */
  weight?: "normal" | "medium" | "semibold" | "bold"
  /** Alinhamento do texto */
  align?: "left" | "center" | "right" | "justify"
}

// 🎨 Classes por variante
const VARIANT_CLASSES = {
  lead: "text-lg md:text-xl leading-relaxed",
  body: "text-base leading-relaxed",
  caption: "text-sm text-gray-600",
  small: "text-xs text-gray-500",
} as const

// 🎨 Classes de cor
const COLOR_CLASSES = {
  default: "text-gray-900",
  muted: "text-gray-600",
  primary: "text-purple-600",
  secondary: "text-gray-500",
} as const

// 🎨 Classes de peso
const WEIGHT_CLASSES = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
} as const

// 🎨 Classes de alinhamento
const ALIGN_CLASSES = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
} as const

/**
 * Componente Text - Atom para textos
 *
 * @example
 * ```tsx
 * <Text variant="lead" color="primary">
 *   Texto principal destacado
 * </Text>
 *
 * <Text variant="caption" html="<strong>HTML</strong> formatado" />
 * ```
 */
export function Text({
  children,
  variant = "body",
  className = "",
  html,
  color = "default",
  weight = "normal",
  align = "left",
}: TextProps) {
  // 🎨 Construir classes CSS
  const classes = `
    ${VARIANT_CLASSES[variant]}
    ${COLOR_CLASSES[color]}
    ${WEIGHT_CLASSES[weight]}
    ${ALIGN_CLASSES[align]}
    ${className}
  `.trim()

  // 📦 Renderizar com HTML
  if (html) {
    return <p className={classes} dangerouslySetInnerHTML={{ __html: html }} />
  }

  // 📦 Renderizar com children
  return <p className={classes}>{children}</p>
}
