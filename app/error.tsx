"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-6">
          <div className="w-8 h-8 bg-red-500 rounded-sm"></div>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-4">Algo deu errado!</h1>

        <p className="text-gray-600 mb-8 max-w-md">
          Ocorreu um erro inesperado. Nossa equipe foi notificada e está trabalhando para resolver o problema.
        </p>

        <div className="space-x-4">
          <Button onClick={reset}>Tentar Novamente</Button>

          <Button variant="outline" onClick={() => (window.location.href = "/")}>
            Voltar ao Início
          </Button>
        </div>
      </div>
    </div>
  )
}
