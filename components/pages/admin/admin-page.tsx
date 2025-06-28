"use client"

import { useState } from "react"
import { useContent } from "@/contexts/content-context"
import { Button } from "@/components/atoms/button/button"
import { Input } from "@/components/atoms/input/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heading } from "@/components/atoms/typography/heading"
import { Text } from "@/components/atoms/typography/text"
import { Plus, Edit, Trash2, Save } from "lucide-react"

export function AdminPage() {
  const { content, updateContent } = useContent()
  const [editingItem, setEditingItem] = useState<any>(null)
  const [editingType, setEditingType] = useState<string>("")

  const handleSave = () => {
    if (editingItem && editingType) {
      updateContent(editingType, editingItem)
      setEditingItem(null)
      setEditingType("")
    }
  }

  const handleEdit = (type: string, item: any) => {
    setEditingType(type)
    setEditingItem({ ...item })
  }

  const handleDelete = (type: string, id: string) => {
    // Implement delete logic
    console.log(`Delete ${type} with id ${id}`)
  }

  const handleAdd = (type: string) => {
    const newItem = {
      id: Date.now().toString(),
      title: "New Item",
      description: "",
    }
    setEditingType(type)
    setEditingItem(newItem)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Heading level={1} className="text-3xl font-bold text-gray-900 mb-2">
            Content Management
          </Heading>
          <Text variant="body" className="text-gray-600">
            Manage all content for the Whimsical Help Center
          </Text>
        </div>

        <Tabs defaultValue="homepage" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="homepage">Homepage</TabsTrigger>
            <TabsTrigger value="sidebar">Sidebar</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
            <TabsTrigger value="articles">Articles</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Homepage Content */}
          <TabsContent value="homepage" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Hero Section</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Title</label>
                  <Input
                    value={content.homepage.hero.title}
                    onChange={(e) => {
                      const newContent = {
                        ...content,
                        homepage: {
                          ...content.homepage,
                          hero: {
                            ...content.homepage.hero,
                            title: e.target.value,
                          },
                        },
                      }
                      updateContent("homepage", newContent.homepage)
                    }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subtitle</label>
                  <Textarea
                    value={content.homepage.hero.subtitle}
                    onChange={(e) => {
                      const newContent = {
                        ...content,
                        homepage: {
                          ...content.homepage,
                          hero: {
                            ...content.homepage.hero,
                            subtitle: e.target.value,
                          },
                        },
                      }
                      updateContent("homepage", newContent.homepage)
                    }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Search Placeholder</label>
                  <Input
                    value={content.homepage.hero.searchPlaceholder}
                    onChange={(e) => {
                      const newContent = {
                        ...content,
                        homepage: {
                          ...content.homepage,
                          hero: {
                            ...content.homepage.hero,
                            searchPlaceholder: e.target.value,
                          },
                        },
                      }
                      updateContent("homepage", newContent.homepage)
                    }}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Sidebar Content */}
          <TabsContent value="sidebar" className="space-y-6">
            <div className="flex justify-between items-center">
              <Heading level={2} className="text-xl font-semibold">
                Sidebar Items
              </Heading>
              <Button onClick={() => handleAdd("sidebar")}>
                <Plus className="w-4 h-4 mr-2" />
                Add Item
              </Button>
            </div>
            <div className="grid gap-4">
              {content.sidebar.items.map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <Heading level={3} className="font-medium">
                          {item.title}
                        </Heading>
                        <Text variant="caption">{item.description}</Text>
                        {item.subitems && (
                          <Text variant="small" className="mt-1">
                            {item.subitems.length} subitems
                          </Text>
                        )}
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" onClick={() => handleEdit("sidebar", item)}>
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => handleDelete("sidebar", index.toString())}>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Categories Content */}
          <TabsContent value="categories" className="space-y-6">
            <div className="flex justify-between items-center">
              <Heading level={2} className="text-xl font-semibold">
                Category Cards
              </Heading>
              <Button onClick={() => handleAdd("categories")}>
                <Plus className="w-4 h-4 mr-2" />
                Add Category
              </Button>
            </div>
            <div className="grid gap-4">
              {content.homepage.categories.items.map((category, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <Heading level={3} className="font-medium">
                          {category.title}
                        </Heading>
                        <Text variant="caption">{category.description}</Text>
                        <Text variant="small">{category.articles}</Text>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" onClick={() => handleEdit("categories", category)}>
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDelete("categories", index.toString())}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Articles Content */}
          <TabsContent value="articles" className="space-y-6">
            <div className="flex justify-between items-center">
              <Heading level={2} className="text-xl font-semibold">
                Articles
              </Heading>
              <Button onClick={() => handleAdd("articles")}>
                <Plus className="w-4 h-4 mr-2" />
                Add Article
              </Button>
            </div>
            <div className="grid gap-4">
              {Object.entries(content.articles).map(([slug, article]) => (
                <Card key={slug}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <Heading level={3} className="font-medium">
                          {article.title}
                        </Heading>
                        <Text variant="caption">Slug: {slug}</Text>
                        <Text variant="small">{article.summary.length} sections</Text>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEdit("articles", { slug, ...article })}
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => handleDelete("articles", slug)}>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Settings */}
          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>General Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Site Title</label>
                  <Input value={content.settings.siteTitle} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Site Description</label>
                  <Textarea value={content.settings.siteDescription} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Brand Name</label>
                  <Input value={content.settings.brandName} />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Edit Modal */}
        {editingItem && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[80vh] overflow-y-auto">
              <Heading level={2} className="text-xl font-semibold mb-4">
                Edit {editingType.charAt(0).toUpperCase() + editingType.slice(1)}
              </Heading>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Title</label>
                  <Input
                    value={editingItem.title || ""}
                    onChange={(e) => setEditingItem({ ...editingItem, title: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <Textarea
                    value={editingItem.description || ""}
                    onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })}
                  />
                </div>
                {editingType === "articles" && (
                  <div>
                    <label className="block text-sm font-medium mb-2">Content</label>
                    <Textarea
                      rows={10}
                      value={editingItem.content || ""}
                      onChange={(e) => setEditingItem({ ...editingItem, content: e.target.value })}
                    />
                  </div>
                )}
              </div>
              <div className="flex justify-end space-x-2 mt-6">
                <Button
                  variant="outline"
                  onClick={() => {
                    setEditingItem(null)
                    setEditingType("")
                  }}
                >
                  Cancel
                </Button>
                <Button onClick={handleSave}>
                  <Save className="w-4 h-4 mr-2" />
                  Save
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
