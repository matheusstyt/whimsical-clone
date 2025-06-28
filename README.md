# 🎨 Whimsical Help Center

Um centro de ajuda moderno e responsivo construído com **Next.js 14**, **TypeScript** e **Tailwind CSS**, seguindo os princípios do **Atomic Design**.

## 📋 Índice

- [🚀 Funcionalidades](#-funcionalidades)
- [🏗️ Arquitetura](#️-arquitetura)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [🛠️ Tecnologias](#️-tecnologias)
- [⚡ Como Executar](#-como-executar)
- [📖 Guia de Desenvolvimento](#-guia-de-desenvolvimento)

## 🚀 Funcionalidades

### ✨ Principais Features
- **🔍 Busca Inteligente**: Modal de busca com navegação por teclado
- **📱 Design Responsivo**: Otimizado para todos os dispositivos
- **🎯 Navegação Intuitiva**: Sidebar expansível com categorias
- **📝 Sistema de Artigos**: Páginas de conteúdo com navegação interna
- **⚙️ Painel Admin**: Interface para gerenciar todo o conteúdo
- **💾 Persistência Local**: Dados salvos no localStorage

### 🎨 Interface
- Design inspirado no Whimsical original
- Animações suaves e micro-interações
- Tema roxo/rosa com gradientes
- Componentes acessíveis (a11y)

## 🏗️ Arquitetura

Este projeto segue os princípios do **Atomic Design**:

\`\`\`
🔬 Atoms      → Componentes básicos (Button, Input, Icon)
🧪 Molecules  → Combinações simples (SearchInput, CategoryCard)
🧬 Organisms  → Seções complexas (Header, Sidebar, HeroSection)
📄 Templates  → Layouts estruturais (MainLayout, ArticleLayout)
🌍 Pages      → Páginas completas (HomePage, ArticlePage)
\`\`\`

## 📁 Estrutura do Projeto

\`\`\`
whimsical-help-center/
├── 📱 app/                    # Next.js App Router
│   ├── page.tsx              # Página inicial
│   ├── article/[...slug]/    # Páginas de artigos dinâmicas
│   ├── admin/                # Painel administrativo
│   └── layout.tsx            # Layout raiz
│
├── 🧩 components/            # Componentes organizados por Atomic Design
│   ├── ⚛️ atoms/             # Componentes básicos
│   │   ├── button/           # Botões reutilizáveis
│   │   ├── input/            # Inputs de formulário
│   │   ├── icon/             # Ícones SVG
│   │   └── typography/       # Textos e títulos
│   │
│   ├── 🧪 molecules/         # Combinações de atoms
│   │   ├── search-input/     # Input de busca com ícone
│   │   ├── category-card/    # Cards das categorias
│   │   ├── sidebar-item/     # Itens do menu lateral
│   │   └── breadcrumb/       # Navegação hierárquica
│   │
│   ├── 🧬 organisms/         # Seções complexas
│   │   ├── header/           # Cabeçalho principal
│   │   ├── sidebar/          # Menu lateral
│   │   ├── hero-section/     # Seção hero da home
│   │   ├── categories-grid/  # Grid de categorias
│   │   └── search-modal/     # Modal de busca
│   │
│   ├── 📄 templates/         # Layouts estruturais
│   │   ├── main-layout/      # Layout principal
│   │   └── article-layout/   # Layout dos artigos
│   │
│   └── 🌍 pages/             # Páginas completas
│       ├── home/             # Página inicial
│       ├── article/          # Páginas de artigos
│       └── admin/            # Painel admin
│
├── 🎯 contexts/              # Context API do React
│   └── content-context.tsx   # Gerenciamento global de conteúdo
│
├── 📊 data/                  # Dados e configurações
│   └── content-config.ts     # Configuração de conteúdo
│
├── 🔧 types/                 # Definições TypeScript
│   └── content.ts            # Tipos do sistema de conteúdo
│
└── 🎨 styles/                # Estilos globais
    └── globals.css           # CSS global com Tailwind
\`\`\`

## 🛠️ Tecnologias

### Core
- **⚡ Next.js 14** - Framework React com App Router
- **🔷 TypeScript** - Tipagem estática
- **🎨 Tailwind CSS** - Framework CSS utilitário
- **⚛️ React 18** - Biblioteca de interface

### UI/UX
- **🎯 Shadcn/ui** - Componentes de interface
- **🎨 Lucide React** - Ícones SVG
- **✨ Framer Motion** - Animações (futuro)

### Estado e Dados
- **🔄 Context API** - Gerenciamento de estado
- **💾 localStorage** - Persistência local
- **🔗 React Hooks** - Lógica de estado

## ⚡ Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação
\`\`\`bash
# Clone o repositório
git clone [url-do-repo]

# Entre na pasta
cd whimsical-help-center

# Instale as dependências
npm install

# Execute em desenvolvimento
npm run dev
\`\`\`

### Acessar
- **🏠 Home**: http://localhost:3000
- **📝 Artigo**: http://localhost:3000/article/getting-started/sequence-diagrams
- **⚙️ Admin**: http://localhost:3000/admin

## 📖 Guia de Desenvolvimento

### 🎯 Criando Novos Componentes

#### 1. Atoms (Componentes Básicos)
\`\`\`typescript
// components/atoms/exemplo/exemplo.tsx
interface ExemploProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
}

export function Exemplo({ children, variant = 'primary' }: ExemploProps) {
  return (
    <div className={`exemplo-base ${variant}`}>
      {children}
    </div>
  )
}
\`\`\`

#### 2. Molecules (Combinações)
\`\`\`typescript
// components/molecules/exemplo-card/exemplo-card.tsx
import { Exemplo } from '@/components/atoms/exemplo/exemplo'

interface ExemploCardProps {
  title: string
  description: string
}

export function ExemploCard({ title, description }: ExemploCardProps) {
  return (
    <Exemplo variant="primary">
      <h3>{title}</h3>
      <p>{description}</p>
    </Exemplo>
  )
}
\`\`\`

### 🔧 Configurações

#### Adicionando Novo Conteúdo
1. Edite `data/content-config.ts`
2. Adicione novos tipos em `types/content.ts`
3. Use o painel admin em `/admin`

#### Customizando Estilos
1. Edite `app/globals.css` para estilos globais
2. Use classes Tailwind nos componentes
3. Customize o tema no `tailwind.config.js`

### 🎨 Padrões de Código

#### Nomenclatura
- **Componentes**: PascalCase (`SearchInput`)
- **Arquivos**: kebab-case (`search-input.tsx`)
- **Variáveis**: camelCase (`searchValue`)
- **Constantes**: UPPER_CASE (`MODAL_ANIMATION_DURATION`)

#### Estrutura de Arquivos
\`\`\`
component-name/
├── component-name.tsx     # Componente principal
├── index.ts              # Export barrel
└── component-name.test.tsx # Testes (futuro)
\`\`\`

### 🚀 Deploy

#### Vercel (Recomendado)
\`\`\`bash
# Instale a CLI da Vercel
npm i -g vercel

# Deploy
vercel
\`\`\`

#### Build Local
\`\`\`bash
# Gerar build de produção
npm run build

# Executar build
npm start
\`\`\`

---

## 📝 Notas de Desenvolvimento

- **🎯 Foco na UX**: Cada componente foi pensado para ser intuitivo
- **♿ Acessibilidade**: Seguimos as diretrizes WCAG
- **📱 Mobile First**: Design responsivo desde o início
- **⚡ Performance**: Otimizado para carregamento rápido
- **🔧 Manutenibilidade**: Código limpo e bem documentado

---

**Feito com ❤️ usando Next.js e TypeScript**
