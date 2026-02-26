"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ShoppingBag, Search } from "lucide-react"
import { categories } from "@/lib/products"
import { useCart } from "@/contexts/cart-context"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { itemCount, openCart } = useCart()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <span className="text-sm font-bold text-primary-foreground">iS</span>
          </div>
          <span className="text-lg font-semibold tracking-tight text-foreground">
            iStore
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/categoria/${cat.slug}`}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {cat.name}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <button
            aria-label="Buscar produtos"
            className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <Search className="h-4 w-4" />
          </button>
          <button
            aria-label="Carrinho de compras"
            className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <ShoppingBag className="h-4 w-4" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            aria-label="Carrinho de compras"
            className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground"
          >
            <ShoppingBag className="h-4 w-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="flex flex-col px-6 py-6 gap-1">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/categoria/${cat.slug}`}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
              >
                {cat.name}
                <span className="text-xs text-muted-foreground">{cat.description}</span>
              </Link>
            ))}
            <div className="mt-4 border-t border-border pt-4">
              <button className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-base font-medium text-muted-foreground hover:bg-secondary hover:text-foreground">
                <Search className="h-4 w-4" />
                Buscar produtos
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
