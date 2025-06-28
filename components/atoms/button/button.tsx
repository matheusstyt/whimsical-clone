"use client"

/**
 * 🔘 COMPONENTE BUTTON (ATOM)
 *
 * Botão reutilizável baseado no shadcn/ui com tipagem TypeScript.
 * Serve como base para todos os botões da aplicação.
 */

import type React from "react"
import { Button as ShadcnButton } from "@/components/ui/button"
import type { ButtonProps as ShadcnButtonProps } from "@/components/ui/button"

// 🎯 Interface do componente
export interface ButtonProps extends ShadcnButtonProps {
  /** Conteúdo do botão */
  children: React.ReactNode
  /** Função executada ao clicar */
  onClick?: () => void
  /** Se o botão está carregando */
  loading?: boolean
}

/**
 * Componente Button - Atom básico para interações
 *
 * @example
 * ```tsx
 * <Button variant="primary" onClick={() => console.log('Clicado!')}>
 *   Clique aqui
 * </Button>
 * ```
 */
export function Button({ children, loading = false, disabled, ...props }: ButtonProps) {
  return (
    <ShadcnButton disabled={disabled || loading} {...props}>
      {loading ? (
        <>
          {/* Spinner de carregamento */}
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2" />
          Carregando...
        </>
      ) : (
        children
      )}
    </ShadcnButton>
  )
}
