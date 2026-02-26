import Link from "next/link"
import { Apple, ArrowRight } from "lucide-react"

export function CtaBanner() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:text-left">
          {/* Left side */}
          <div className="flex-1">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#f5f5f7] px-4 py-2">
              <Apple className="h-4 w-4 text-[#1d1d1f]" />
              <span className="text-xs font-semibold text-[#1d1d1f]">Apple Authorized Reseller</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-[#1d1d1f] md:text-5xl text-balance">
              Trade-in: troque seu usado e ganhe desconto
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#6e6e73] text-pretty">
              Traga seu produto Apple antigo e receba credito para usar na compra de um novo. Sustentavel, economico e simples.
            </p>
          </div>

          {/* Right side */}
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Link
              href="/categoria/mac"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0071e3] px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#0077ed] active:scale-[0.98]"
            >
              Avaliar meu produto
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/categoria/iphone"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d2d2d7] px-8 py-3.5 text-sm font-semibold text-[#1d1d1f] transition-all hover:bg-[#f5f5f7] active:scale-[0.98]"
            >
              Saiba mais
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
