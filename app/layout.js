import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Career Coach",
  description: "",
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
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />

            <footer className="bg-muted/50 py-6 border-t">
              <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-300">
                {/* Left side - Quote */}
                <p className="mb-4 md:mb-0 italic text-muted-foreground">
                  “the future belongs to those who learn, unlearn & relearn.”
                </p>

                {/* Right side - Branding */}
                <p className="flex items-center gap-2">
                  made with <span className="text-red-500">♥️</span> by
                  <span className="font-semibold text-gray-100">team aether {'>.<'}</span>
                </p>
              </div>
            </footer>

          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
