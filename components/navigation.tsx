"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function Navigation() {
  const pathname = usePathname()

  const links = [
    { href: "/", label: "HOME" },
    { href: "/regras", label: "REGRAS & DICAS" },
    { href: "/metas", label: "METAS" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-accent/30">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-wider text-accent hover:text-accent/80 transition-colors">
          BROTHERS
        </Link>

        <div className="flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-semibold tracking-wider transition-all relative",
                pathname === link.href ? "text-accent" : "text-foreground hover:text-accent",
              )}
            >
              {link.label}
              {pathname === link.href && <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent" />}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
