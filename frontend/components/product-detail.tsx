"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ShoppingBag, Heart, Check, Minus, Plus, Share2 } from "lucide-react"
import { type Product, formatPrice, getProductsByCategory } from "@/lib/products"
import { ProductCard } from "./product-card"
import { useCart } from "@/contexts/cart-context"

function getWhatsAppUrl(product: Product, selectedColor: string, quantity: number) {
  const message = [
    "Ola! Tenho interesse em comprar:",
    "",
    "Produto: " + product.name,
    "Cor: " + (selectedColor || "Padrao"),
    "Quantidade: " + quantity,
    "Preco: " + formatPrice(product.price),
    "",
    "Podemos prosseguir com a compra?",
  ].join("\n")
  return "https://wa.me/5548996708490?text=" + encodeURIComponent(message)
}

export function ProductDetail({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || "")
  const [isAdding, setIsAdding] = useState(false)
  const { addItem } = useCart()

  const related = getProductsByCategory(product.categorySlug).filter(
    (p) => p.id !== product.id
  )

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  const handleAddToCart = () => {
    setIsAdding(true)
    addItem(product, quantity, selectedColor)
    setTimeout(() => setIsAdding(false), 1000)
  }

  return (
    <div className="pt-16">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="transition-colors hover:text-foreground">
            Inicio
          </Link>
          <span>/</span>
          <Link
            href={`/categoria/${product.categorySlug}`}
            className="transition-colors hover:text-foreground"
          >
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>
      </div>

      {/* Product Section */}
      <section className="mx-auto max-w-7xl px-4 pb-20 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Product Image */}
          <div className="relative">
            <div className="sticky top-24">
              <div className="relative aspect-square overflow-hidden rounded-3xl bg-secondary">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
                {product.badge && (
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground">
                      {product.badge}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <Link
              href={`/categoria/${product.categorySlug}`}
              className="mb-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              <ChevronLeft className="h-3.5 w-3.5" />
              {product.category}
            </Link>

            <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance">
              {product.name}
            </h1>

            <p className="mt-3 text-lg text-muted-foreground">{product.tagline}</p>

            {/* Price */}
            <div className="mt-8 flex items-baseline gap-3">
              <span className="text-3xl font-bold text-foreground">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-lg text-muted-foreground line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    -{discount}%
                  </span>
                </>
              )}
            </div>

            <p className="mt-2 text-sm text-muted-foreground">
              ou 12x de{" "}
              <span className="font-semibold text-foreground">
                {formatPrice(product.price / 12)}
              </span>{" "}
              sem juros
            </p>

            {/* Colors */}
            {product.colors && product.colors.length > 1 && (
              <div className="mt-8">
                <p className="mb-3 text-sm font-semibold text-foreground">
                  Cor: <span className="font-normal text-muted-foreground">{selectedColor}</span>
                </p>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`rounded-full border-2 px-4 py-2 text-xs font-medium transition-all ${
                        selectedColor === color
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border text-muted-foreground hover:border-muted-foreground"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-8">
              <p className="mb-3 text-sm font-semibold text-foreground">Quantidade</p>
              <div className="inline-flex items-center rounded-full border border-border">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Diminuir quantidade"
                  className="flex h-10 w-10 items-center justify-center rounded-l-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="flex h-10 w-12 items-center justify-center text-sm font-semibold text-foreground">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Aumentar quantidade"
                  className="flex h-10 w-10 items-center justify-center rounded-r-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-4">
              <div className="flex gap-3">
                <button 
                  onClick={handleAddToCart}
                  disabled={isAdding}
                  className={`flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 disabled:opacity-50 ${
                    isAdding ? "scale-95" : ""
                  }`}
                >
                  <ShoppingBag className="h-4 w-4" />
                  {isAdding ? "Adicionado ao carrinho!" : "Adicionar ao carrinho"}
                </button>
                <button
                  aria-label="Adicionar aos favoritos"
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  <Heart className="h-4 w-4" />
                </button>
                <button
                  aria-label="Compartilhar"
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  <Share2 className="h-4 w-4" />
                </button>
              </div>

              <a
                href={getWhatsAppUrl(product, selectedColor, quantity)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-3 rounded-full border-2 border-primary bg-background px-8 py-4 text-sm font-semibold text-foreground transition-all hover:bg-primary/5 active:scale-[0.98]"
              >
                Comprar agora
              </a>
            </div>

            {/* Description */}
            <div className="mt-12 border-t border-border pt-8">
              <h2 className="text-lg font-semibold text-foreground">Sobre o produto</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {product.description}
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-8">
              <h3 className="text-sm font-semibold text-foreground">Destaques</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {product.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Specs */}
            <div className="mt-12 border-t border-border pt-8">
              <h2 className="text-lg font-semibold text-foreground">
                Especificacoes tecnicas
              </h2>
              <div className="mt-6 flex flex-col">
                {product.specs.map((spec, i) => (
                  <div
                    key={spec.label}
                    className={`flex items-center justify-between py-3 text-sm ${
                      i < product.specs.length - 1 ? "border-b border-border" : ""
                    }`}
                  >
                    <span className="font-medium text-muted-foreground">{spec.label}</span>
                    <span className="text-right font-medium text-foreground">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="border-t border-border bg-secondary/20">
          <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground">
              Produtos relacionados
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.slice(0, 3).map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
