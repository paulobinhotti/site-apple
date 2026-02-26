"use client"

import Image from "next/image"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"
import { type Product, formatPrice } from "@/lib/products"
import { useCart } from "@/contexts/cart-context"
import { useState } from "react"

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsAdding(true)
    addItem(product, 1)
    setTimeout(() => setIsAdding(false), 500)
  }

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
      <Link href={`/produto/${product.slug}`}>
        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-secondary">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {product.badge && (
            <div className="absolute top-3 left-3">
              <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                {product.badge}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-2 p-5">
          <p className="text-xs font-medium uppercase tracking-wider text-primary">
            {product.category}
          </p>
          <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
            {product.tagline}
          </p>
          <div className="mt-auto flex items-baseline gap-2 pt-3">
            <span className="text-lg font-bold text-foreground">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
        </div>
      </Link>

      {/* Add to Cart Button */}
      <div className="p-5 pt-0">
        <button
          onClick={handleAddToCart}
          disabled={isAdding}
          className={`flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-50 ${
            isAdding ? "scale-95" : ""
          }`}
        >
          <ShoppingBag className="h-4 w-4" />
          {isAdding ? "Adicionado!" : "Adicionar"}
        </button>
      </div>
    </div>
  )
}
