"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    title: "MacBook Pro M4 Pro",
    subtitle: "Poder redefinido.",
    description: "O notebook profissional mais poderoso de todos os tempos. Ate 22 horas de bateria e desempenho extraordinario.",
    image: "/images/macbook-hero.jpg",
    cta: "Comprar agora",
    href: "/produto/macbook-pro-16-m4-pro",
    accent: true,
  },
  {
    title: "iPhone 16 Pro Max",
    subtitle: "Titanio. Inovacao.",
    description: "Camera de 48 MP, chip A18 Pro e Apple Intelligence. O iPhone mais avancado ja criado.",
    image: "/images/iphone-hero.jpg",
    cta: "Conhecer",
    href: "/produto/iphone-16-pro-max",
    accent: false,
  },
  {
    title: "iPad Pro M4",
    subtitle: "Fino demais. Poderoso demais.",
    description: "O dispositivo Apple mais fino de todos os tempos com a espetacular tela Ultra Retina XDR.",
    image: "/images/ipad-hero.jpg",
    cta: "Explorar",
    href: "/produto/ipad-pro-m4",
    accent: false,
  },
]

export function HeroBanner() {
  const [current, setCurrent] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000)
    return () => clearInterval(timer)
  }, [nextSlide])

  const slide = slides[current]

  return (
    <section className="relative h-[100svh] min-h-[600px] overflow-hidden bg-background">
      {/* Background Image */}
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={s.image}
              alt={s.title}
              fill
              className="object-cover opacity-40"
              priority={i === 0}
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <div className="mx-auto max-w-4xl">
          <p
            className={`mb-4 text-sm font-semibold uppercase tracking-[0.2em] transition-all duration-700 ${
              slide.accent ? "text-primary" : "text-muted-foreground"
            }`}
          >
            {slide.subtitle}
          </p>
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground md:text-7xl lg:text-8xl text-balance">
            {slide.title}
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg text-pretty">
            {slide.description}
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href={slide.href}
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
            >
              {slide.cta}
            </Link>
            <Link
              href={slide.href}
              className="inline-flex items-center justify-center rounded-full border border-border px-8 py-3 text-sm font-semibold text-foreground transition-all hover:bg-secondary"
            >
              Saiba mais
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <div className="absolute bottom-12 left-0 right-0 flex items-center justify-center gap-6">
          <button
            onClick={prevSlide}
            aria-label="Slide anterior"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:bg-secondary hover:text-foreground"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Ir para slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === current
                    ? "w-8 bg-primary"
                    : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            aria-label="Proximo slide"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:bg-secondary hover:text-foreground"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
