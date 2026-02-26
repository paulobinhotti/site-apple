"use client"

import { useCart } from "@/contexts/cart-context"
import { formatPrice } from "@/lib/products"
import { X, Plus, Minus, ShoppingBag, Trash2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"

function getCartWhatsAppUrl(items: any[], total: number) {
  const message = [
    "Ola! Gostaria de finalizar minha compra:",
    "",
    "🛒 *ITENS DO CARRINHO:*",
    "",
    ...items.map((item) => {
      const itemTotal = item.price * item.quantity
      return [
        `📦 *${item.name}*`,
        item.selectedColor ? `   Cor: ${item.selectedColor}` : "",
        `   Quantidade: ${item.quantity}`,
        `   Preço unitário: ${formatPrice(item.price)}`,
        `   Subtotal: ${formatPrice(itemTotal)}`,
        "",
      ]
        .filter(Boolean)
        .join("\n")
    }),
    "━━━━━━━━━━━━━━━━━",
    `💰 *TOTAL: ${formatPrice(total)}*`,
    "",
    "Podemos prosseguir com o pagamento?",
  ].join("\n")

  return "https://wa.me/5548996708490?text=" + encodeURIComponent(message)
}

export function CartDrawer() {
  const { items, itemCount, total, updateQuantity, removeItem, isOpen, closeCart } = useCart()

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const handleCheckout = () => {
    const whatsappUrl = getCartWhatsAppUrl(items, total)
    window.open(whatsappUrl, "_blank")
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 z-50 h-full w-full max-w-md border-l border-border bg-background shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border p-6">
          <div className="flex items-center gap-3">
            <ShoppingBag className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold text-foreground">
              Carrinho {itemCount > 0 && `(${itemCount})`}
            </h2>
          </div>
          <button
            onClick={closeCart}
            className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            aria-label="Fechar carrinho"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 p-6">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-secondary">
              <ShoppingBag className="h-10 w-10 text-muted-foreground" />
            </div>
            <p className="text-center text-sm text-muted-foreground">
              Seu carrinho está vazio
            </p>
            <Link
              href="/"
              onClick={closeCart}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
            >
              Continuar comprando
            </Link>
          </div>
        ) : (
          <>
            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="flex flex-col gap-4">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.selectedColor || "default"}`}
                    className="flex gap-4 rounded-2xl border border-border bg-card p-4 transition-all hover:border-primary/30"
                  >
                    {/* Image */}
                    <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-secondary">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex flex-1 flex-col gap-2">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="text-sm font-semibold text-foreground line-clamp-2">
                            {item.name}
                          </h3>
                          {item.selectedColor && (
                            <p className="mt-1 text-xs text-muted-foreground">
                              Cor: {item.selectedColor}
                            </p>
                          )}
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                          aria-label="Remover item"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        {/* Quantity Controls */}
                        <div className="inline-flex items-center rounded-full border border-border">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            aria-label="Diminuir quantidade"
                            className="flex h-7 w-7 items-center justify-center rounded-l-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="flex h-7 w-8 items-center justify-center text-xs font-semibold text-foreground">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            aria-label="Aumentar quantidade"
                            className="flex h-7 w-7 items-center justify-center rounded-r-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>

                        {/* Price */}
                        <span className="text-sm font-bold text-foreground">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-border bg-secondary/20 p-6">
              {/* Subtotal */}
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Subtotal</span>
                <span className="text-lg font-semibold text-foreground">
                  {formatPrice(total)}
                </span>
              </div>

              {/* Info */}
              <p className="mb-4 text-xs text-muted-foreground">
                Frete e impostos calculados no checkout
              </p>

              {/* Actions */}
              <div className="flex flex-col gap-3">
                <button className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 active:scale-[0.98]">
                  Finalizar compra
                </button>
                <button
                  onClick={closeCart}
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-secondary active:scale-[0.98]"
                >
                  Continuar comprando
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}
