import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/client/sidebar";
import Header from "@/components/client/header";
import {LayoutProps} from './types'
const PageLayout = ({children}:LayoutProps) => {
  return (
    <SidebarProvider className="flex overflow-hidden">
      <AppSidebar />

      <div className="flex-col w-full">
        <Header />
        <main className="w-full h-full">{children}</main>
      </div>
    </SidebarProvider>
  );
};

export default PageLayout;
