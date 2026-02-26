import { HeroBanner } from "@/components/hero-banner"
import { CategoryGrid } from "@/components/category-grid"
import { ProductCard } from "@/components/product-card"
import { PromoBanner } from "@/components/promo-banner"
import { FeaturesSection, TrustSection } from "@/components/features-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { CtaBanner } from "@/components/cta-banner"
import { getFeaturedProducts } from "@/lib/products"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const featured = getFeaturedProducts()

  return (
    <>
      {/* Hero Banner Carousel (escuro) */}
      <HeroBanner />

      {/* Features Bar (branco/cinza claro) */}
      <FeaturesSection />

      {/* Category Grid (escuro) */}
      <CategoryGrid />

      {/* CTA Trade-in (branco) */}
      <CtaBanner />

      {/* Featured Products (escuro) */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Destaques
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Produtos em destaque
            </h2>
          </div>
          <Link
            href="/categoria/mac"
            className="hidden items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80 md:flex"
          >
            Ver todos
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-8 flex justify-center md:hidden">
          <Link
            href="/categoria/mac"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            Ver todos
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Trust Section (branco) */}
      <TrustSection />

      {/* Promo Banners (escuro) */}
      <PromoBanner />

      {/* Newsletter (branco/cinza claro) */}
      <NewsletterSection />
    </>
  )
}
