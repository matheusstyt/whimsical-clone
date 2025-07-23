"use client"

import type { SidebarItem, SidebarSubitem } from "@/types/content"
import clsx from "clsx"
import LogoPass from "../ui/logo-pass"
import { Accordion } from "radix-ui";
import { AccordionContent, AccordionTrigger } from "@radix-ui/react-accordion"
import { FC, ReactElement, useState } from "react"
import { ChevronDown, ChevronRight, List } from "lucide-react";

interface AppSidebarProps {
  items: SidebarItem[]
  expandedItems: number[]
  onToggleExpanded: (index: number) => void
  onClose: () => void
  currentSlug?: string
}

export function AppSidebar({ items, expandedItems, onToggleExpanded, onClose, currentSlug }: AppSidebarProps) {
  
  const [openValue, setOpenValue] = useState<string>();
  const [openValueCategories, setOpenValueCategories] = useState<string>();

  const SideBarItem: FC<{ name: string, icon: ReactElement, subitems: SidebarSubitem[], isOpen: boolean}> = ({name, icon, subitems, isOpen}) => {
    
    return (
      <Accordion.Item className="AccordionItem cursor-pointer " value={name}>
        <AccordionTrigger className=" w-full flex items-center justify-between gap-1 font-semibold text-gray-600 hover:bg-gray-200 rounded-xl p-2 px-3"> 
          <div className="flex items-center gap-2">
            {icon}
            {name}
          </div>
          <div className="hover:border-gray-200 rounded-[6px] hover:bg-gray-100">
          <ChevronRight
            className={
              clsx(
                "w-5 h-5 transition-transform duration-200",
                isOpen ? "rotate-90" : "rotate-0"
              )
            }
          />

          </div>
        </AccordionTrigger>
        <AccordionContent>  
          { subitems && (
            <ul className="ml-7 mt-1 space-y-4">
              {
                subitems.map((subitem) => (
                  <li key={subitem.title} className={
                    clsx(
                      "hover:text-gray-500",
                      "w-full",
                      "overflow-hidden whitespace-nowrap",
                      "truncate "
                    )
                  }>
                    {subitem.title}
                  </li>
                ))
              }
            </ul>
          )}
        </AccordionContent>
      </Accordion.Item>
    )
  }

  const SideBarAccordion = () => {
    return (
      <Accordion.Root
        className="AccordionRoot space-y-2"
        type="single"
        value={openValue}
        onValueChange={(val) => setOpenValue(val)}
        collapsible
      >
        {
          items.map(
            item => (
              <SideBarItem 
                name={item.title}
                icon={item.iconHtml}
                subitems={item.subitems ?? []}
                isOpen={openValue === item.title}
              />
            )
          )
        }
      </Accordion.Root>
    )
  }

  return (
    <>
      <div>
        <Accordion.Root
          className="AccordionRoot space-y-2"
          type="single"
          value={openValueCategories}
          onValueChange={(val) => setOpenValueCategories(val)}
          collapsible
        >
          <Accordion.Item className="AccordionItem cursor-pointer " value={"categories"}>
            <AccordionTrigger className=" w-full flex items-center justify-between gap-1 font-semibold text-gray-600 hover:bg-gray-200 p-2 px-3 border-b"> 
              <div className="flex items-center gap-2">
                <List />
                Categories
              </div>
              <div className="hover:border-gray-200 rounded-[6px] hover:bg-gray-100">
              <ChevronRight
                className={
                  clsx(
                    "w-5 h-5 transition-transform duration-200",
                    openValueCategories === "categories" ? "rotate-90" : "rotate-0"
                  )
                }
              />

              </div>
            </AccordionTrigger>
            <AccordionContent>  
              <SideBarAccordion />
            </AccordionContent>
          </Accordion.Item>
        </Accordion.Root>
      
      </div>
      <aside
        className={
          clsx(
            "hidden lg:block",
            "bg-[#F5F5F5] border-r border-gray-200",
            "p-3 w-72",
            "fixed inset-y-0 left-0 z-50",
            "transform transition-transform duration-300 ease-in-out xl:transform-none",
          )
        }
      >
        {/* Sidebar Header */}
        <div
          className="border-gray-200 pl-7 pr-5 py-2"
          style={{
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <LogoPass className="w-[100px]"/>
          <div className="border-r border-gray-300"></div>
          <span
            className={
              clsx(
                "mt-1 py-1 px-2",
                "text-gray-700 hover:text-gray-500 font-bold text-xs",
                "bg-gray-300 cursor-pointer rounded"
              )
            }
          >Help Center</span>
        </div>
        <SideBarAccordion />
      </aside>
    </>
  )
}