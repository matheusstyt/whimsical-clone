/**
 * 📝 COMPONENTE INPUT (ATOM)
 *
 * Input reutilizável com validação e estados visuais.
 * Base para todos os campos de entrada da aplicação.
 */

import { forwardRef } from "react"
import { Input as ShadcnInput } from "@/components/ui/input"
import type { InputProps as ShadcnInputProps } from "@/components/ui/input"

// 🎯 Interface do componente
export interface InputProps extends ShadcnInputProps {
  /** Texto de ajuda exibido abaixo do input */
  helperText?: string
  /** Se o input tem erro */
  error?: boolean
  /** Mensagem de erro */
  errorMessage?: string
}

/**
 * Componente Input - Atom para entrada de dados
 *
 * @example
 * ```tsx
 * <Input
 *   placeholder="Digite seu nome"
 *   helperText="Nome completo"
 *   error={hasError}
 *   errorMessage="Nome é obrigatório"
 * />
 * ```
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ helperText, error, errorMessage, className = "", ...props }, ref) => {
    // 🎨 Classes CSS baseadas no estado
    const inputClasses = `
      ${className}
      ${error ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}
    `.trim()

    return (
      <div className="w-full">
        {/* Input principal */}
        <ShadcnInput ref={ref} className={inputClasses} {...props} />

        {/* Texto de ajuda ou erro */}
        {(helperText || errorMessage) && (
          <p className={`mt-1 text-sm ${error ? "text-red-600" : "text-gray-500"}`}>
            {error ? errorMessage : helperText}
          </p>
        )}
      </div>
    )
  },
)

Input.displayName = "Input"
