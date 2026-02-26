import Image from "next/image"
import Link from "next/link"

export function PromoBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Banner 1 */}
        <Link
          href="/produto/airpods-pro-2"
          className="group relative flex flex-col justify-end overflow-hidden rounded-2xl p-8 md:p-10 aspect-[4/3] md:aspect-auto md:min-h-[360px]"
        >
          <div className="absolute inset-0">
            <Image
              src="/images/airpods-hero.jpg"
              alt="AirPods Pro 2"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          </div>
          <div className="relative z-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Mais Vendido
            </p>
            <h3 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
              AirPods Pro 2
            </h3>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Cancelamento de ruido 2x mais eficaz. Audio que se adapta a voce.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
              Comprar agora
              <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </div>
          </div>
        </Link>

        {/* Banner 2 */}
        <Link
          href="/produto/apple-watch-ultra-2"
          className="group relative flex flex-col justify-end overflow-hidden rounded-2xl p-8 md:p-10 aspect-[4/3] md:aspect-auto md:min-h-[360px]"
        >
          <div className="absolute inset-0">
            <Image
              src="/images/watch-hero.jpg"
              alt="Apple Watch Ultra 2"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          </div>
          <div className="relative z-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Premium
            </p>
            <h3 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
              Apple Watch Ultra 2
            </h3>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Titanio. GPS de dupla frequencia. Ate 36 horas de bateria.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
              Conhecer
              <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}
