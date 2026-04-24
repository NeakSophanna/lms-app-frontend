'use client'
import { navItems, user } from "@/app/config";
import { NavHeader, NavMain, NavUser } from "./sidebar-component";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "@/components/ui/sidebar";
import { AppSidebarProps } from "./sidebar-component/types";

export function AppSidebar({user}:AppSidebarProps){
  return (
    <Sidebar>
      <SidebarHeader>
        <NavHeader />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navItems} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  )
}