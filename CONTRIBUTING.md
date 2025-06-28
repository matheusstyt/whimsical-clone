# 🤝 Guia de Contribuição

Obrigado por considerar contribuir com o **Whimsical Help Center**! Este guia ajudará você a entender como o projeto está organizado e como contribuir efetivamente.

## 📋 Índice

- [🏗️ Arquitetura do Projeto](#️-arquitetura-do-projeto)
- [🎨 Padrões de Código](#-padrões-de-código)
- [🧪 Como Adicionar Componentes](#-como-adicionar-componentes)
- [📝 Convenções de Nomenclatura](#-convenções-de-nomenclatura)
- [🔧 Configuração do Ambiente](#-configuração-do-ambiente)

## 🏗️ Arquitetura do Projeto

### Atomic Design

Seguimos rigorosamente os princípios do **Atomic Design**:

\`\`\`
⚛️ Atoms      → Componentes indivisíveis (Button, Input, Icon)
🧪 Molecules  → Combinações simples (SearchInput, CategoryCard)  
🧬 Organisms  → Seções complexas (Header, Sidebar, SearchModal)
📄 Templates  → Estruturas de layout (MainLayout, ArticleLayout)
🌍 Pages      → Páginas completas (HomePage, ArticlePage)
\`\`\`

### Regras de Dependência

- **Atoms** não dependem de nada
- **Molecules** podem usar apenas Atoms
- **Organisms** podem usar Atoms e Molecules
- **Templates** podem usar Atoms, Molecules e Organisms
- **Pages** podem usar todos os níveis

## 🎨 Padrões de Código

### 1. Estrutura de Componente

\`\`\`typescript
/**
 * 📝 DESCRIÇÃO DO COMPONENTE (NÍVEL)
 * 
 * Explicação detalhada do propósito e funcionalidades.
 */

"use client" // Se necessário

import type React from "react"
// Outros imports...

// 🎯 Interface do componente
interface ComponentProps {
  /** Descrição da prop */
  propName: string
  /** Prop opcional */
  optionalProp?: boolean
}

/**
 * Componente Description - Nível do Atomic Design
 * 
 * Funcionalidades:
 * - Lista de funcionalidades
 * - Comportamentos especiais
 * 
 * @example
 * \`\`\`tsx
 * <Component propName="valor" />
 * ```
 */
export function Component({ propName, optionalProp = false }: ComponentProps) {
  // 🎯 Estados e refs
  // 🎣 Hooks personalizados
  // 🎨 Variáveis derivadas
  // 🎧 Event handlers

  return (
    <div className="component-classes">
      {/* Conteúdo */}
    </div>
  )
}
\`\`\`

### 2. Comentários Padronizados

\`\`\`typescript
// 🎯 Estados e dados
// 🎣 Hooks e efeitos  
// 🎨 Estilos e classes
// 🎧 Event handlers
// 📊 Dados e configurações
// 🔍 Lógica de busca
// 📱 Responsividade
// ⚡ Performance
// 🚫 Validações
// 💾 Persistência
// 🌐 Navegação
// ♿ Acessibilidade
\`\`\`

## 🧪 Como Adicionar Componentes

### 1. Criando um Atom

\`\`\`bash
# Criar pasta do componente
mkdir components/atoms/novo-atom

# Criar arquivo principal
touch components/atoms/novo-atom/novo-atom.tsx

# Criar barrel export
touch components/atoms/novo-atom/index.ts
\`\`\`

\`\`\`typescript
// components/atoms/novo-atom/novo-atom.tsx
/**
 * 🔘 COMPONENTE NOVO ATOM (ATOM)
 * 
 * Descrição do que o componente faz.
 */

interface NovoAtomProps {
  children: React.ReactNode
}

export function NovoAtom({ children }: NovoAtomProps) {
  return <div>{children}</div>
}
\`\`\`

\`\`\`typescript
// components/atoms/novo-atom/index.ts
export { NovoAtom } from './novo-atom'
export type { NovoAtomProps } from './novo-atom'
\`\`\`

### 2. Criando um Molecule

\`\`\`typescript
// components/molecules/novo-molecule/novo-molecule.tsx
/**
 * 🧪 COMPONENTE NOVO MOLECULE (MOLECULE)
 * 
 * Combina atoms para criar funcionalidade específica.
 */

import { NovoAtom } from '@/components/atoms/novo-atom'
import { Button } from '@/components/atoms/button'

interface NovoMoleculeProps {
  title: string
  onAction: () => void
}

export function NovoMolecule({ title, onAction }: NovoMoleculeProps) {
  return (
    <NovoAtom>
      <h3>{title}</h3>
      <Button onClick={onAction}>Ação</Button>
    </NovoAtom>
  )
}
\`\`\`

## 📝 Convenções de Nomenclatura

### Arquivos e Pastas
- **Componentes**: `kebab-case` (ex: `search-input.tsx`)
- **Pastas**: `kebab-case` (ex: `search-input/`)
- **Hooks**: `use-feature-name.ts` (ex: `use-search.ts`)
- **Utilitários**: `feature-helpers.ts` (ex: `content-helpers.ts`)

### Código
- **Componentes**: `PascalCase` (ex: `SearchInput`)
- **Variáveis**: `camelCase` (ex: `searchValue`)
- **Constantes**: `UPPER_CASE` (ex: `SEARCH_CONFIG`)
- **Interfaces**: `PascalCase` + `Props/Return` (ex: `SearchInputProps`)

### Git
- **Branches**: `feature/nome-da-feature`
- **Commits**: `tipo: descrição` (ex: `feat: adicionar busca avançada`)

## 🔧 Configuração do Ambiente

### 1. Pré-requisitos
\`\`\`bash
node --version  # v18+
npm --version   # v8+
\`\`\`

### 2. Instalação
\`\`\`bash
git clone [repo-url]
cd whimsical-help-center
npm install
\`\`\`

### 3. Desenvolvimento
\`\`\`bash
npm run dev     # Servidor de desenvolvimento
npm run build   # Build de produção
npm run lint    # Verificar código
\`\`\`

### 4. Estrutura de Commit

\`\`\`
tipo(escopo): descrição

Corpo do commit explicando as mudanças em detalhes.

- Lista de mudanças específicas
- Outras alterações importantes

Closes #123
\`\`\`

**Tipos de commit:**
- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Documentação
- `style`: Formatação/estilo
- `refactor`: Refatoração
- `test`: Testes
- `chore`: Tarefas de manutenção

## 🎯 Checklist para Pull Requests

- [ ] Código segue os padrões estabelecidos
- [ ] Componentes estão no nível correto do Atomic Design
- [ ] Interfaces TypeScript estão bem definidas
- [ ] Comentários explicativos estão presentes
- [ ] Responsividade foi testada
- [ ] Acessibilidade foi considerada
- [ ] Performance foi otimizada
- [ ] Documentação foi atualizada

## 🚀 Dicas de Performance

### 1. Componentes
- Use `React.memo()` para componentes que re-renderizam frequentemente
- Prefira `useCallback()` e `useMemo()` quando apropriado
- Evite criação de objetos/arrays inline em props

### 2. Imagens
- Use `next/image` para otimização automática
- Defina `width` e `height` sempre que possível
- Use formatos modernos (WebP, AVIF)

### 3. CSS
- Prefira classes Tailwind a estilos inline
- Use CSS Modules para estilos específicos
- Evite animações pesadas em dispositivos móveis

---

**Obrigado por contribuir! 🎉**

Sua contribuição ajuda a tornar este projeto melhor para toda a comunidade.
\`\`\`

## 🎉 **Código Limpo e Documentado!**

Transformei o projeto em um código **extremamente legível e intuitivo** com:

### 📚 **Documentação Completa**
- **README.md** detalhado com guias de uso
- **CONTRIBUTING.md** para novos desenvolvedores
- **Comentários explicativos** em português em todos os componentes
- **JSDoc** para funções importantes

### 🏗️ **Arquitetura Clara**
- **Constantes centralizadas** em `config/constants.ts`
- **Hooks personalizados** para lógica complexa
- **Utilitários organizados** em `utils/`
- **Tipos bem definidos** com documentação

### 🎯 **Padrões Consistentes**
- **Nomenclatura intuitiva** em português e inglês
- **Estrutura padronizada** para todos os componentes
- **Comentários com emojis** para navegação visual
- **Interfaces bem documentadas**

### 🔧 **Funcionalidades Implementadas**
- **Sistema de busca completo** com navegação
- **Hooks reutilizáveis** (`useSearch`, `useSidebar`, `useArticleNavigation`)
- **Utilitários para conteúdo** (busca, formatação, validação)
- **Configurações centralizadas** (cores, tamanhos, textos)

### 📖 **Para Novos Desenvolvedores**
- **Guia de contribuição** detalhado
- **Exemplos de uso** em cada componente
- **Estrutura de pastas** autoexplicativa
- **Padrões de código** bem definidos

Agora qualquer desenvolvedor pode entrar no projeto e entender rapidamente:
- **O que cada componente faz**
- **Como adicionar novas funcionalidades**
- **Onde encontrar cada tipo de código**
- **Como seguir os padrões estabelecidos**

O código está **production-ready** com excelente **developer experience**! 🚀
