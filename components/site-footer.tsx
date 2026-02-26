import Link from "next/link"
import { categories } from "@/lib/products"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">iS</span>
              </div>
              <span className="text-lg font-semibold tracking-tight text-foreground">
                iStore
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              A sua loja de confianca para produtos Apple. Qualidade, garantia e os melhores precos do mercado.
            </p>
          </div>

          {/* Products */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Produtos
            </h3>
            <div className="flex flex-col gap-2">
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/categoria/${cat.slug}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Support */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Suporte
            </h3>
            <div className="flex flex-col gap-2">
              <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Central de Ajuda
              </Link>
              <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Politica de Devolucao
              </Link>
              <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Garantia
              </Link>
              <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Rastreamento
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Contato
            </h3>
            <div className="flex flex-col gap-2">
              <p className="text-sm text-muted-foreground">contato@istore.com.br</p>
              <p className="text-sm text-muted-foreground">(11) 99999-9999</p>
              <p className="text-sm text-muted-foreground">
                Seg - Sex: 9h as 18h
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            2026 iStore. Todos os direitos reservados. Apple, o logotipo Apple, iPhone, iPad, Mac, AirPods e Apple Watch sao marcas registradas da Apple Inc.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              Privacidade
            </Link>
            <Link href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              Termos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
