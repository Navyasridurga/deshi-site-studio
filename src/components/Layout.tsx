import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          <header className="h-16 border-b bg-card/50 backdrop-blur-sm sticky top-0 z-40">
            <div className="flex items-center justify-between px-6 h-full">
              <div className="flex items-center gap-4">
                <SidebarTrigger className="text-saffron hover:bg-saffron-light" />
                <h1 className="font-bold text-xl bg-gradient-to-r from-saffron to-navy bg-clip-text text-transparent">
                  No-Code Website Builder Guide
                </h1>
              </div>
              
              <Button 
                variant="default" 
                className="bg-gradient-to-r from-saffron to-navy hover:opacity-90 text-white"
              >
                Get Started
              </Button>
            </div>
          </header>

          <main className="flex-1 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}