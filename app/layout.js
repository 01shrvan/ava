import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ava- your ai career coach",
  description: "your ai buddy for career clarity and growth",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo.png" sizes="any" />
        </head>
        <body className={`${inter.className} antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors position="bottom-right" />

            <footer className="border-t border-border/40 py-8 mt-20">
              <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <p className="text-sm text-muted-foreground font-light italic">
                    the future belongs to those who learn, unlearn & relearn.
                  </p>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    made with <span className="text-red-400 animate-pulse">♥</span> by
                    <span className="font-medium text-foreground">team aether</span>
                  </p>
                </div>
              </div>
            </footer>

          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}