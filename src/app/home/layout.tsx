import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body>
        <SidebarProvider>
          <AppSidebar />
          <SidebarTrigger />
          <main>{children}</main>
        </SidebarProvider>
      </body>
    </html>
  );
}