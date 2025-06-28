import Link from "next/link"
import { Icon } from "@/components/atoms/icon/icon"
import { Heading } from "@/components/atoms/typography/heading"
import { Text } from "@/components/atoms/typography/text"
import type { CategoryItem } from "@/types/content"

interface CategoryCardProps {
  category: CategoryItem
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={category.link}
      className="bg-white rounded-lg border border-gray-200 p-4 lg:p-6 hover:shadow-lg hover:border-purple-200 transition-all duration-200 cursor-pointer group aspect-square flex flex-col relative overflow-hidden"
      style={{ maxHeight: "225px", width: "256px" }}
    >
      <div className="flex flex-col h-full relative z-10">
        <div className="flex-shrink-0 mb-3 lg:mb-4">
          <div
            className="w-8 lg:w-10 h-8 lg:h-10 rounded-full bg-slate-100 flex items-center justify-center 
               group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:via-purple-500 group-hover:to-pink-500
               transition-all duration-300 icon-color"
          >
            <Icon
              html={category.iconHtml}
              className="text-gray-600 group-hover:text-white transition-colors duration-300"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <Heading level={3} className="text-gray-900 mb-2 lg:mb-3 text-sm lg:text-base leading-tight">
            {category.title}
          </Heading>
          {category.description && (
            <Text
              variant="caption"
              className="text-xs lg:text-sm mb-2 lg:mb-3 leading-relaxed flex-1"
              style={{ fontSize: "13px", color: "#92819b", fontWeight: 500 }}
            >
              {category.description}
            </Text>
          )}
          {category.articles && (
            <Text variant="small" className="font-medium tracking-wide mt-auto" style={{ fontSize: "9px" }}>
              {category.articles}
            </Text>
          )}
        </div>
      </div>
    </Link>
  )
}
