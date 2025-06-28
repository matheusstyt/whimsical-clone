/**
 * 📰 COMPONENTE HEADING (ATOM)
 *
 * Títulos semânticos com tipografia consistente.
 * Garante hierarquia visual e acessibilidade.
 */

import type React from "react"
import type { JSX } from "react" // Import JSX to declare the variable

// 🎯 Interface do componente
interface HeadingProps {
  /** Nível semântico do título (h1, h2, etc.) */
  level: 1 | 2 | 3 | 4 | 5 | 6
  /** Conteúdo do título */
  children: React.ReactNode
  /** Classes CSS adicionais */
  className?: string
  /** Variante visual (pode diferir do nível semântico) */
  variant?: "hero" | "section" | "subsection" | "small"
  /** Cor do texto */
  color?: "default" | "primary" | "secondary" | "gradient"
}

// 🎨 Classes base por nível semântico
const SEMANTIC_CLASSES = {
  1: "text-4xl md:text-5xl font-bold",
  2: "text-2xl md:text-3xl font-bold",
  3: "text-xl md:text-2xl font-semibold",
  4: "text-lg md:text-xl font-semibold",
  5: "text-base md:text-lg font-semibold",
  6: "text-sm md:text-base font-semibold",
} as const

// 🎨 Classes por variante visual
const VARIANT_CLASSES = {
  hero: "text-5xl md:text-6xl lg:text-7xl font-bold leading-tight",
  section: "text-2xl md:text-3xl font-bold",
  subsection: "text-xl md:text-2xl font-semibold",
  small: "text-base font-semibold",
} as const

// 🎨 Classes de cor
const COLOR_CLASSES = {
  default: "text-gray-900",
  primary: "text-purple-600",
  secondary: "text-gray-600",
  gradient: "bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 bg-clip-text text-transparent",
} as const

/**
 * Componente Heading - Atom para títulos semânticos
 *
 * @example
 * \`\`\`tsx
 * <Heading level={1} variant="hero" color="gradient">
 *   Título Principal
 * </Heading>
 *
 * <Heading level={2} variant="section">
 *   Seção Importante
 * </Heading>
 * \`\`\`
 */
export function Heading({ level, children, className = "", variant, color = "default" }: HeadingProps) {
  // 🏷️ Tag HTML baseada no nível semântico
  const Tag = `h${level}` as keyof JSX.IntrinsicElements

  // 🎨 Determinar classes CSS
  const baseClasses = variant ? VARIANT_CLASSES[variant] : SEMANTIC_CLASSES[level]

  const colorClasses = COLOR_CLASSES[color]

  const finalClasses = `${baseClasses} ${colorClasses} ${className}`.trim()

  return <Tag className={finalClasses}>{children}</Tag>
}
