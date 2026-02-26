"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { type Product } from "@/lib/products"

export interface CartItem extends Product {
  quantity: number
  selectedColor?: string
}

interface CartContextType {
  items: CartItem[]
  itemCount: number
  total: number
  addItem: (product: Product, quantity?: number, selectedColor?: string) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Load cart from localStorage on mount
  useEffect(() => {
    setMounted(true)
    const savedCart = localStorage.getItem("istore-cart")
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart))
      } catch (e) {
        console.error("Error loading cart:", e)
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("istore-cart", JSON.stringify(items))
    }
  }, [items, mounted])

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const addItem = (product: Product, quantity = 1, selectedColor?: string) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.id === product.id && item.selectedColor === selectedColor
      )

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id && item.selectedColor === selectedColor
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }

      return [...currentItems, { ...product, quantity, selectedColor }]
    })
    setIsOpen(true)
  }

  const removeItem = (productId: string) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== productId))
  }

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId)
      return
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => {
    setItems([])
  }

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  return (
    <CartContext.Provider
      value={{
        items,
        itemCount,
        total,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        isOpen,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
