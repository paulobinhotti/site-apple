import Link from "next/link"
import { Mail } from "lucide-react"

export function NewsletterSection() {
  return (
    <section className="bg-[#f5f5f7] py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-10 text-center shadow-sm md:p-16">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0071e3]/10">
            <Mail className="h-6 w-6 text-[#0071e3]" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-[#1d1d1f] md:text-4xl text-balance">
            Fique por dentro das novidades
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-[#6e6e73] text-pretty">
            Receba em primeira mao ofertas exclusivas, lancamentos e novidades do mundo Apple diretamente no seu e-mail.
          </p>
          <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 rounded-full border border-[#d2d2d7] bg-[#f5f5f7] px-5 py-3.5 text-sm text-[#1d1d1f] placeholder:text-[#86868b] focus:border-[#0071e3] focus:outline-none focus:ring-2 focus:ring-[#0071e3]/20"
            />
            <button
              type="submit"
              className="rounded-full bg-[#0071e3] px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#0077ed] active:scale-[0.98]"
            >
              Inscrever-se
            </button>
          </form>
          <p className="mt-5 text-xs text-[#86868b]">
            Ao se inscrever, voce concorda com nossa{" "}
            <Link href="#" className="text-[#0071e3] underline underline-offset-2 hover:text-[#0077ed]">
              Politica de Privacidade
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
