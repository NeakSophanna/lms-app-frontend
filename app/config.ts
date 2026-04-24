import { Item, SystemTitle, UserItem } from "@/components/client/sidebar/sidebar-component/types";
import { BookText, Gauge, SquareChartGantt, User } from "lucide-react";

export const systemTitle: SystemTitle = {
    name: "Sword Horizon",
    system: "Library Management System"
}

export const PAGE_ROUTE = {
    Dashboard: "/dashboard",
    BookManagement: "/book-management",
    UserManagement: "/user-management",
    BorrowRecord: "/borrow-record"
}

export const navItems: Item[] = [
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: Gauge
    },
    {
        title: "Book Management",
        url: "/book-management",
        icon: BookText
    },
    {
        title: "User Management",
        url: "/user-management",
        icon: User
    }
    ,
    {
        title: "Borrow Record",
        url: "/borrow-record",
        icon: SquareChartGantt
    }
]

export const user:UserItem={
    name:"Normal User",
    email:"user@normal.com",
    avatar:"/avatars/shadcn.jpg"
}