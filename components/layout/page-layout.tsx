import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/client/sidebar";
import Header from "@/components/client/header";
import {LayoutProps} from './types'
import { withAuth } from "@/lib/withAuth";
const PageLayout = async({children}:LayoutProps) => {
  const user = await withAuth()
  return (
    <SidebarProvider className="flex overflow-hidden">
      <AppSidebar user={user}/>

      <div className="flex-col w-full">
        <Header />
        <main className="w-full h-full">{children}</main>
      </div>
    </SidebarProvider>
  );
};

export default PageLayout;
