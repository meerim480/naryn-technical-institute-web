import type React from "react"
import Link from "next/link"
import { Mountain } from "lucide-react"

import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

export const metadata = {
  title: "Naryn Technical Institute",
  description: "A leading institution for technical education and innovation",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-16 items-center">
                <Link href="/" className="flex items-center gap-2">
                  <Mountain className="h-6 w-6" />
                  <span className="font-bold">Naryn Technical Institute</span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                  <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
                    Home
                  </Link>
                  <Link href="/news" className="text-sm font-medium hover:underline underline-offset-4">
                    News
                  </Link>
                  <Link href="/admissions" className="text-sm font-medium hover:underline underline-offset-4">
                    Admissions
                  </Link>
                  <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
                    About
                  </Link>
                </nav>
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <footer className="border-t py-6">
              <div className="container flex flex-col gap-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                    &copy; {new Date().getFullYear()} Naryn Technical Institute. All rights reserved.
                  </p>
                  <div className="flex gap-4">
                    <Link href="/about" className="text-sm text-muted-foreground hover:underline underline-offset-4">
                      Contact
                    </Link>
                    <Link href="#" className="text-sm text-muted-foreground hover:underline underline-offset-4">
                      Privacy
                    </Link>
                    <Link href="#" className="text-sm text-muted-foreground hover:underline underline-offset-4">
                      Terms
                    </Link>
                  </div>
                </div>
                <div className="border-t pt-4 text-sm text-muted-foreground">
                  <div className="flex flex-col md:flex-row justify-between gap-2">
                    <div>
                      <p>
                        <strong>Address:</strong> 123 University Avenue, Naryn, Kyrgyzstan 722900
                      </p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                      <p>
                        <strong>Email:</strong> contact@nit.edu.kg
                      </p>
                      <p>
                        <strong>Phone:</strong> +996 (3522) 51-234
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
