"use client"

import Image from "next/image"
import Link from "next/link"
import { useRef, useState, useCallback, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { categories } from "@/lib/products"

const categoryImages: Record<string, string> = {
  mac: "/images/macbook-hero.jpg",
  iphone: "/images/iphone-hero.jpg",
  ipad: "/images/ipad-hero.jpg",
  watch: "/images/watch-hero.jpg",
  airpods: "/images/airpods-hero.jpg",
}

export function CategoryGrid() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  const updateActiveIndex = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const children = Array.from(el.children) as HTMLElement[]
    const center = el.scrollLeft + el.clientWidth / 2
    let closest = 0
    let minDist = Infinity
    children.forEach((child, i) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2
      const dist = Math.abs(center - childCenter)
      if (dist < minDist) {
        minDist = dist
        closest = i
      }
    })
    setActiveIndex(closest)
  }, [])

  const scrollToIndex = (index: number) => {
    const el = scrollRef.current
    if (!el) return
    const children = Array.from(el.children) as HTMLElement[]
    if (!children[index]) return
    const child = children[index]
    const scrollPos = child.offsetLeft - (el.clientWidth / 2 - child.offsetWidth / 2)
    el.scrollTo({ left: scrollPos, behavior: "smooth" })
    setActiveIndex(index)
  }

  const scroll = (direction: "left" | "right") => {
    const next = direction === "left"
      ? Math.max(0, activeIndex - 1)
      : Math.min(categories.length - 1, activeIndex + 1)
    scrollToIndex(next)
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <div className="mb-12 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Categorias
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
          Explore o universo Apple
        </h2>
      </div>

      {/* Horizontal scroll on mobile, grid on desktop */}
      <div
        ref={scrollRef}
        onScroll={updateActiveIndex}
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory lg:grid lg:grid-cols-5 lg:overflow-visible"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/categoria/${cat.slug}`}
            className="group relative flex shrink-0 flex-col items-center justify-end overflow-hidden rounded-2xl bg-secondary snap-center aspect-[3/4] w-[65vw] sm:w-[45vw] lg:w-auto transition-all hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="absolute inset-0">
              <Image
                src={categoryImages[cat.slug]}
                alt={cat.name}
                fill
                className="object-cover opacity-50 transition-all duration-500 group-hover:opacity-70 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            </div>
            <div className="relative z-10 p-6 text-center">
              <h3 className="text-lg font-bold text-foreground">{cat.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{cat.description}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Navigation controls below cards - mobile only */}
      {isMobile && (
        <div className="mt-8 flex items-center justify-center gap-5">
          <button
            onClick={() => scroll("left")}
            disabled={activeIndex === 0}
            aria-label="Anterior"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-secondary text-foreground transition-all hover:bg-secondary/80 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2">
            {categories.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                aria-label={`Ir para categoria ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "h-2.5 w-7 bg-primary"
                    : "h-2.5 w-2.5 bg-muted-foreground/40 hover:bg-muted-foreground/60"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            disabled={activeIndex === categories.length - 1}
            aria-label="Proximo"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-secondary text-foreground transition-all hover:bg-secondary/80 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </section>
  )
}
