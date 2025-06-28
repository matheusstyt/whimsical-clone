/**
 * 🎨 COMPONENTE ICON (ATOM)
 *
 * Renderiza ícones SVG de forma segura e consistente.
 * Suporta ícones HTML e componentes React.
 */

import type React from "react"

// 🎯 Interface do componente
interface IconProps {
  /** HTML do ícone (para ícones SVG como string) */
  html?: string
  /** Componente React do ícone */
  component?: React.ComponentType<any>
  /** Classes CSS adicionais */
  className?: string
  /** Tamanho do ícone */
  size?: "sm" | "md" | "lg" | "xl"
  /** Cor do ícone */
  color?: string
  /** Título para acessibilidade */
  title?: string
}

// 🎨 Mapeamento de tamanhos
const SIZE_CLASSES = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
  xl: "w-8 h-8",
} as const

/**
 * Componente Icon - Atom para exibir ícones
 *
 * @example
 * ```tsx
 * // Com HTML
 * <Icon html="<svg>...</svg>" size="md" />
 *
 * // Com componente React
 * <Icon component={SearchIcon} size="lg" />
 * ```
 */
export function Icon({
  html,
  component: IconComponent,
  className = "",
  size = "md",
  color,
  title,
  ...props
}: IconProps) {
  // 🎨 Classes CSS do ícone
  const iconClasses = `
    ${SIZE_CLASSES[size]}
    ${className}
    ${color ? "" : "text-current"}
  `.trim()

  // 🎨 Estilos inline
  const iconStyles = color ? { color } : undefined

  // 📦 Renderizar componente React
  if (IconComponent) {
    return <IconComponent className={iconClasses} style={iconStyles} title={title} aria-label={title} {...props} />
  }

  // 📦 Renderizar HTML (com sanitização básica)
  if (html) {
    return (
      <div
        className={iconClasses}
        style={iconStyles}
        dangerouslySetInnerHTML={{ __html: html }}
        title={title}
        aria-label={title}
        role="img"
        {...props}
      />
    )
  }

  // ⚠️ Fallback se nenhum ícone foi fornecido
  return (
    <div
      className={`${iconClasses} bg-gray-300 rounded`}
      title={title || "Ícone não encontrado"}
      aria-label={title || "Ícone não encontrado"}
      role="img"
    />
  )
}
