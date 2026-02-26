import { Truck, Shield, CreditCard, Headphones, CheckCircle, Star } from "lucide-react"

const features = [
  {
    icon: Truck,
    title: "Frete Gratis",
    description: "Para compras acima de R$ 500 em todo o Brasil com entrega expressa.",
  },
  {
    icon: Shield,
    title: "Garantia Apple",
    description: "Todos os produtos com garantia oficial de 1 ano direto com a Apple.",
  },
  {
    icon: CreditCard,
    title: "Ate 12x sem juros",
    description: "Parcele suas compras no cartao de credito sem nenhum acrescimo.",
  },
  {
    icon: Headphones,
    title: "Suporte Especializado",
    description: "Equipe certificada Apple para tirar todas as suas duvidas.",
  },
]

export function FeaturesSection() {
  return (
    <section className="bg-[#f5f5f7] py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#0071e3]">
            Diferenciais
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[#1d1d1f] md:text-4xl text-balance">
            Porque escolher a iStore
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-[#6e6e73] text-pretty">
            Oferecemos a melhor experiencia na compra de produtos Apple, com atendimento premium e garantia total.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group flex flex-col items-center gap-4 rounded-2xl bg-white p-8 text-center shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0071e3]/10 transition-colors duration-300 group-hover:bg-[#0071e3]/15">
                <feature.icon className="h-6 w-6 text-[#0071e3]" />
              </div>
              <h3 className="text-base font-semibold text-[#1d1d1f]">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-[#6e6e73]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function TrustSection() {
  const stats = [
    { value: "10.000+", label: "Clientes satisfeitos" },
    { value: "4.9", label: "Avaliacao media", suffix: "/5" },
    { value: "100%", label: "Produtos originais" },
    { value: "24h", label: "Envio expresso" },
  ]

  const reasons = [
    "Revenda autorizada Apple no Brasil",
    "Produtos 100% originais e lacrados",
    "Nota fiscal em todas as compras",
    "Troca e devolucao facilitada em ate 7 dias",
    "Atendimento por WhatsApp, chat e telefone",
    "Embalagem premium e segura",
  ]

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Stats */}
        <div className="mb-20 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-bold text-[#1d1d1f] md:text-5xl">
                {stat.value}
                {stat.suffix && <span className="text-2xl text-[#6e6e73] md:text-3xl">{stat.suffix}</span>}
              </p>
              <p className="mt-2 text-sm font-medium text-[#6e6e73]">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Trust Content */}
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#0071e3]">
              Confianca
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-[#1d1d1f] md:text-4xl text-balance">
              A sua loja Apple de confianca
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#6e6e73] text-pretty">
              Desde 2018 trazendo os melhores produtos Apple para voce com total seguranca, transparencia e precos competitivos.
            </p>
            <ul className="mt-8 flex flex-col gap-4">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 text-[#0071e3]" />
                  <span className="text-sm font-medium text-[#1d1d1f]">{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Reviews Cards */}
          <div className="flex flex-col gap-4">
            {[
              {
                name: "Mariana S.",
                text: "Produto original, entrega rapida e atendimento impecavel. Ja comprei 3 vezes aqui e sempre recomendo!",
                rating: 5,
              },
              {
                name: "Lucas R.",
                text: "Meu MacBook Pro chegou em 2 dias, muito bem embalado. Melhor loja Apple que ja comprei. Top demais!",
                rating: 5,
              },
              {
                name: "Ana C.",
                text: "Comprei meu iPhone 16 Pro Max e adorei. Preco justo e parcelamento excelente. Super satisfeita!",
                rating: 5,
              },
            ].map((review) => (
              <div
                key={review.name}
                className="rounded-2xl border border-[#e5e5e7] bg-[#f5f5f7] p-6 transition-all duration-300 hover:shadow-sm"
              >
                <div className="mb-3 flex items-center gap-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#ff9500] text-[#ff9500]" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-[#6e6e73]">
                  {'"'}{review.text}{'"'}
                </p>
                <p className="mt-3 text-sm font-semibold text-[#1d1d1f]">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
