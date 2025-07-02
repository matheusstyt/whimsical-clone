interface BreadcrumbProps {
  items: { text: string; goTo: string; }[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          {index > 0 && <span>/</span>}
          <span className={index === items.length - 1 ? "text-gray-900 font-medium" : ""}>{item.text}</span>
        </div>
      ))}
    </nav>
  )
}
