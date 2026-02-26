import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { categories, getProductsByCategory } from "@/lib/products"
import { ProductCard } from "@/components/product-card"

const categoryImages: Record<string, string> = {
  mac: "/images/macbook-hero.jpg",
  iphone: "/images/iphone-hero.jpg",
  ipad: "/images/ipad-hero.jpg",
  watch: "/images/watch-hero.jpg",
  airpods: "/images/airpods-hero.jpg",
}

export function generateStaticParams() {
  return categories.map((cat) => ({
    slug: cat.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const category = categories.find((c) => c.slug === slug)
  if (!category) return { title: "Categoria nao encontrada" }

  return {
    title: `${category.name} - iStore`,
    description: `Compre ${category.name} na iStore. ${category.description}`,
  }
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const category = categories.find((c) => c.slug === slug)

  if (!category) {
    notFound()
  }

  const categoryProducts = getProductsByCategory(slug)

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative flex items-center justify-center overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0">
          <Image
            src={categoryImages[slug]}
            alt={category.name}
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Categoria
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            {category.name}
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
            {category.description}
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="transition-colors hover:text-foreground">
            Inicio
          </Link>
          <span>/</span>
          <span className="text-foreground">{category.name}</span>
        </div>
      </div>

      {/* Products */}
      <section className="mx-auto max-w-7xl px-4 pb-20 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {categoryProducts.length}{" "}
            {categoryProducts.length === 1 ? "produto" : "produtos"}
          </p>
        </div>
        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <p className="text-lg font-semibold text-foreground">
              Nenhum produto encontrado
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Em breve teremos novidades nesta categoria.
            </p>
            <Link
              href="/"
              className="mt-6 inline-flex items-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              Voltar ao inicio
            </Link>
          </div>
        )}
      </section>
    </div>
  )
}
