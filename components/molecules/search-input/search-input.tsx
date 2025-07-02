/**
 * 🔍 COMPONENTE SEARCH INPUT (MOLECULE)
 *
 * Input de busca com ícone e atalho de teclado.
 * Combina Input + Icon + Shortcut para criar uma experiência completa.
 */

"use client"

import { Search } from "lucide-react"
import { ACCESSIBILITY } from "@/config/constants"
import { Input } from "@/components/ui/input"

// 🎯 Interface do componente
interface SearchInputProps {
  /** Texto placeholder */
  placeholder: string
  /** Valor atual da busca */
  value: string
  /** Função chamada quando o valor muda */
  onChange: (value: string) => void
  /** Função chamada quando o input recebe foco */
  onFocus?: () => void
  /** Se deve mostrar o atalho de teclado */
  showShortcut?: boolean
  /** Classes CSS adicionais */
  className?: string
  /** Tamanho do input */
  size?: "sm" | "md" | "lg"
}

// 🎨 Classes de tamanho
const SIZE_CLASSES = {
  sm: "h-8 text-sm",
  md: "h-10 text-base",
  lg: "h-12 text-lg",
} as const

/**
 * Componente SearchInput - Molecule para busca
 *
 * Combina:
 * - Input (atom) para entrada de texto
 * - Icon (atom) para ícone de busca
 * - Shortcut visual para UX
 *
 * @example
 * ```tsx
 * <SearchInput
 *   placeholder="Buscar artigos..."
 *   value={searchTerm}
 *   onChange={setSearchTerm}
 *   showShortcut={true}
 * />
 * ```
 */
export function SearchInput({
  placeholder,
  value,
  onChange,
  onFocus,
  showShortcut = false,
  className = "",
  size = "md",
}: SearchInputProps) {
  // 🎨 Classes CSS do container
  const containerClasses = `relative ${className}`

  // 🎨 Classes CSS do input
  const inputClasses = `
    pl-10 
    ${showShortcut ? "pr-16" : "pr-4"}
    ${SIZE_CLASSES[size]}
  `.trim()

  return (
    <div className={containerClasses}>
      {/* 🔍 Ícone de busca */}
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" aria-hidden="true" />

      {/* 📝 Input principal */}
      <Input
        type={"text"}
        placeholder={placeholder}
        value={value}
        onChange={(e: any) => onChange(e.target.value)}
        onFocus={onFocus}
        className={inputClasses}
        aria-label={ACCESSIBILITY.LABELS.SEARCH_INPUT}
        role={ACCESSIBILITY.ROLES.SEARCH}
      />

      {/* ⌨️ Atalho de teclado visual */}
      {showShortcut && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded hidden lg:block">
          CTRL K
        </div>
      )}
    </div>
  )
}
