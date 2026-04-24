'use client'
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { NavMainProps } from "./types";
import Link from "next/link";
import { usePathname } from "next/navigation";
export function NavMain({items}:NavMainProps){
    const pathname = usePathname()
    return (
        <SidebarMenu className="flex flex-col gap-1 p-2">
            {items.map((item)=>(
                <SidebarMenuItem key={item.url}>
                    <SidebarMenuButton 
                        asChild
                        isActive={item.url===pathname}>
                        <Link href={item.url}>
                            <item.icon aria-hidden="true"/>
                            <span>{item.title}</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            ))}
        </SidebarMenu>
    )
}