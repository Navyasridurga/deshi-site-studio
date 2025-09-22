import { useState } from "react";
import { 
  BookOpen, 
  MousePointer, 
  Layout, 
  Palette, 
  Search, 
  Shield, 
  Users, 
  DollarSign,
  Rocket,
  Target
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const sections = [
  { title: "Introduction", url: "#introduction", icon: BookOpen },
  { title: "Drag & Drop", url: "#drag-drop", icon: MousePointer },
  { title: "Templates", url: "#templates", icon: Layout },
  { title: "Customization", url: "#customization", icon: Palette },
  { title: "SEO Tools", url: "#seo", icon: Search },
  { title: "Secure Hosting", url: "#hosting", icon: Shield },
  { title: "User Experience", url: "#ux", icon: Users },
  { title: "Marketing", url: "#marketing", icon: Target },
  { title: "Monetization", url: "#monetization", icon: DollarSign },
  { title: "Launch Strategy", url: "#launch", icon: Rocket },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  
  const scrollToSection = (url: string) => {
    const element = document.querySelector(url);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Sidebar className={isCollapsed ? "w-16" : "w-64"} collapsible="icon">
      <SidebarContent className="bg-gradient-to-b from-saffron-light to-background">
        <div className="p-4 border-b">
          <h2 className={`font-bold text-saffron ${isCollapsed ? 'hidden' : 'block'}`}>
            No-Code Builder Guide
          </h2>
          {isCollapsed && (
            <div className="w-8 h-8 bg-saffron rounded-md flex items-center justify-center">
              <BookOpen className="h-4 w-4 text-white" />
            </div>
          )}
        </div>
        
        <SidebarGroup>
          <SidebarGroupLabel className={isCollapsed ? "hidden" : "block"}>
            Guide Sections
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sections.map((section) => (
                <SidebarMenuItem key={section.title}>
                  <SidebarMenuButton 
                    onClick={() => scrollToSection(section.url)}
                    className="cursor-pointer hover:bg-saffron-light transition-colors"
                  >
                    <section.icon className="h-4 w-4 text-saffron" />
                    {!isCollapsed && <span>{section.title}</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}