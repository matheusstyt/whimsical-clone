import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6">
          <div className="w-8 h-8 bg-white rounded-sm"></div>
        </div>

        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Página não encontrada</h2>

        <p className="text-gray-600 mb-8 max-w-md">
          A página que você está procurando não existe ou foi movida para outro local.
        </p>

        <div className="space-x-4">
          <Button asChild>
            <Link href="/">Voltar ao Início</Link>
          </Button>

          <Button variant="outline" asChild>
            <Link href="/help">Central de Ajuda</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
