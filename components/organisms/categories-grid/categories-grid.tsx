/**
 * 📊 COMPONENTE CATEGORIES GRID (ORGANISM)
 *
 * Grid de categorias que replica exatamente o design do Whimsical.
 * Layout responsivo 4x2 com cards hover e ícones.
 */

import Link from "next/link"
import type { CategoryItem } from "@/types/content"

interface CategoriesGridProps {
  title: string
  categories: CategoryItem[]
}

export function CategoriesGrid({ title, categories }: CategoriesGridProps) {
  return (
    <section className="categories-section">
      {/* 🏷️ Título da seção */}
      <h2 className="categories-title">{title}</h2>

      {/* 📋 Grid de categorias */}
      <div className="categories-grid">
        {categories.map((category, index) => (
          <CategoryCard key={index} category={category} />
        ))}
      </div>
    </section>
  )
}

interface CategoryCardProps {
  category: CategoryItem
}

function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={category.link} className="category-card fade-in">
      {/* 🎨 Ícone da categoria */}
      <div className="category-icon">
        <span dangerouslySetInnerHTML={{ __html: category.iconHtml }} />
      </div>

      {/* 📝 Conteúdo do card */}
      <div className="flex-grow">
        <h3 className="category-title">{category.title}</h3>
        {category.description && <p className="category-description">{category.description}</p>}
      </div>

      {/* 📊 Contador de artigos */}
      {category.articles && <div className="category-count">{category.articles}</div>}
    </Link>
  )
}
