import { type LucideIcon } from "lucide-react"

export type SystemTitle = {
    name: string
    system: string
}

export type Item = {
    title: string
    url: string
    icon: LucideIcon
}
export interface NavMainProps {
    items: Item[]
}

export type UserItem = {
    name: string
    email: string
    avatar: string
}

export interface NavUserProps {
    user: UserItem
}