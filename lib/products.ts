export interface ProductSpec {
  label: string
  value: string
}

export interface Product {
  id: string
  slug: string
  name: string
  category: string
  categorySlug: string
  tagline: string
  description: string
  price: number
  originalPrice?: number
  image: string
  badge?: string
  specs: ProductSpec[]
  highlights: string[]
  colors?: string[]
}

export const categories = [
  { name: "Mac", slug: "mac", description: "Poder para fazer tudo." },
  { name: "iPhone", slug: "iphone", description: "O smartphone mais avancado." },
  { name: "iPad", slug: "ipad", description: "Versatilidade sem limites." },
  { name: "Watch", slug: "watch", description: "Saude no seu pulso." },
  { name: "AirPods", slug: "airpods", description: "Som que envolve." },
]

export const products: Product[] = [
  {
    id: "1",
    slug: "macbook-pro-16-m4-pro",
    name: 'MacBook Pro 16" M4 Pro',
    category: "Mac",
    categorySlug: "mac",
    tagline: "Desempenho absurdo. Autonomia impressionante.",
    description:
      "O MacBook Pro 16 com chip M4 Pro redefine o que e possivel em um notebook profissional. Com ate 22 horas de bateria, tela Liquid Retina XDR de tirar o folego e desempenho ate 2x mais rapido que a geracao anterior, ele e a ferramenta perfeita para profissionais criativos e desenvolvedores.",
    price: 29999,
    originalPrice: 33999,
    image: "/images/macbook-hero.jpg",
    badge: "Novo",
    specs: [
      { label: "Chip", value: "Apple M4 Pro" },
      { label: "Memoria", value: "24 GB Memoria Unificada" },
      { label: "Armazenamento", value: "512 GB SSD" },
      { label: "Tela", value: '16.2" Liquid Retina XDR' },
      { label: "Resolucao", value: "3456 x 2234 pixels" },
      { label: "Bateria", value: "Ate 22 horas" },
      { label: "Peso", value: "2.14 kg" },
      { label: "Portas", value: "3x Thunderbolt 5, HDMI, SD, MagSafe" },
    ],
    highlights: [
      "Chip M4 Pro com CPU de 14 nucleos e GPU de 20 nucleos",
      "Tela Liquid Retina XDR com ProMotion 120Hz",
      "Ate 22 horas de autonomia de bateria",
      "Sistema de audio com 6 alto-falantes",
      "Camera FaceTime HD de 1080p",
    ],
    colors: ["Prateado", "Preto Espacial"],
  },
  {
    id: "2",
    slug: "macbook-air-15-m4",
    name: 'MacBook Air 15" M4',
    category: "Mac",
    categorySlug: "mac",
    tagline: "Impressionantemente fino. Incrivelmente poderoso.",
    description:
      "O MacBook Air de 15 polegadas com chip M4 oferece o equilibrio perfeito entre desempenho e portabilidade. Design ultrafino, tela Liquid Retina expansiva e bateria para o dia inteiro.",
    price: 17999,
    originalPrice: 19499,
    image: "/images/macbook-hero.jpg",
    badge: "Popular",
    specs: [
      { label: "Chip", value: "Apple M4" },
      { label: "Memoria", value: "16 GB Memoria Unificada" },
      { label: "Armazenamento", value: "256 GB SSD" },
      { label: "Tela", value: '15.3" Liquid Retina' },
      { label: "Resolucao", value: "2880 x 1864 pixels" },
      { label: "Bateria", value: "Ate 18 horas" },
      { label: "Peso", value: "1.51 kg" },
      { label: "Portas", value: "2x Thunderbolt 4, MagSafe, Jack 3.5mm" },
    ],
    highlights: [
      "Chip M4 com CPU de 10 nucleos e GPU de 10 nucleos",
      "Design ultrafino de 11.5mm",
      "Tela Liquid Retina de 15.3 polegadas",
      "Ate 18 horas de autonomia",
      "Sem ventilador - totalmente silencioso",
    ],
    colors: ["Meia-noite", "Estelar", "Prateado", "Cinza Espacial"],
  },
  {
    id: "3",
    slug: "iphone-16-pro-max",
    name: "iPhone 16 Pro Max",
    category: "iPhone",
    categorySlug: "iphone",
    tagline: "Titanio. Mais forte do que qualquer iPhone.",
    description:
      "O iPhone 16 Pro Max apresenta o chip A18 Pro, um sistema de camera profissional revolucionario, design em titanio e a maior tela ja vista em um iPhone. Apple Intelligence integrada para uma experiencia mais inteligente.",
    price: 12499,
    originalPrice: 13999,
    image: "/images/iphone-hero.jpg",
    badge: "Novo",
    specs: [
      { label: "Chip", value: "A18 Pro" },
      { label: "Tela", value: '6.9" Super Retina XDR OLED' },
      { label: "Camera Principal", value: "48 MP Fusion" },
      { label: "Camera Ultra Angular", value: "48 MP" },
      { label: "Telefoto", value: "12 MP com zoom optico 5x" },
      { label: "Armazenamento", value: "256 GB" },
      { label: "Bateria", value: "Ate 33 horas de video" },
      { label: "Resistencia a agua", value: "IP68 (6 metros, 30 min)" },
    ],
    highlights: [
      "Chip A18 Pro com Neural Engine de 16 nucleos",
      "Controle de Camera dedicado",
      "Gravacao de video em 4K a 120 fps em Dolby Vision",
      "Apple Intelligence integrada",
      "Design em titanio Grau 5",
    ],
    colors: ["Titanio Natural", "Titanio Preto", "Titanio Branco", "Titanio Deserto"],
  },
  {
    id: "4",
    slug: "iphone-16-pro",
    name: "iPhone 16 Pro",
    category: "iPhone",
    categorySlug: "iphone",
    tagline: "Pro. Acima de tudo.",
    description:
      "O iPhone 16 Pro traz o poder do chip A18 Pro em um design compacto e sofisticado. Camera profissional de 48 MP, tela Super Retina XDR e Apple Intelligence para tornar tudo mais inteligente.",
    price: 10499,
    image: "/images/iphone-hero.jpg",
    specs: [
      { label: "Chip", value: "A18 Pro" },
      { label: "Tela", value: '6.3" Super Retina XDR OLED' },
      { label: "Camera Principal", value: "48 MP Fusion" },
      { label: "Armazenamento", value: "128 GB" },
      { label: "Bateria", value: "Ate 27 horas de video" },
      { label: "Resistencia a agua", value: "IP68" },
    ],
    highlights: [
      "Chip A18 Pro com Neural Engine de 16 nucleos",
      "Camera Fusion de 48 MP",
      "Tela Super Retina XDR Always-On",
      "Apple Intelligence integrada",
      "Dynamic Island",
    ],
    colors: ["Titanio Natural", "Titanio Preto", "Titanio Branco", "Titanio Deserto"],
  },
  {
    id: "5",
    slug: "ipad-pro-m4",
    name: "iPad Pro M4",
    category: "iPad",
    categorySlug: "ipad",
    tagline: "Fino demais. Poderoso demais.",
    description:
      "O iPad Pro com chip M4 e o dispositivo Apple mais fino de todos os tempos. Com a espetacular tela Ultra Retina XDR, ele e incrivelmente poderoso para tarefas profissionais e criativos.",
    price: 13999,
    originalPrice: 15499,
    image: "/images/ipad-hero.jpg",
    badge: "Novo",
    specs: [
      { label: "Chip", value: "Apple M4" },
      { label: "Tela", value: '13" Ultra Retina XDR' },
      { label: "Resolucao", value: "2752 x 2064 pixels" },
      { label: "Armazenamento", value: "256 GB" },
      { label: "Camera", value: "12 MP Grande Angular" },
      { label: "Bateria", value: "Ate 10 horas" },
      { label: "Peso", value: "579 g" },
      { label: "Conectividade", value: "Wi-Fi 6E + Bluetooth 5.3" },
    ],
    highlights: [
      "Chip M4 com CPU de 10 nucleos",
      "Tela Ultra Retina XDR com tecnologia tandem OLED",
      "Design incrivelmente fino de 5.1mm",
      "Compativel com Apple Pencil Pro",
      "Face ID e suporte a Magic Keyboard",
    ],
    colors: ["Prateado", "Preto Espacial"],
  },
  {
    id: "6",
    slug: "ipad-air-m3",
    name: "iPad Air M3",
    category: "iPad",
    categorySlug: "ipad",
    tagline: "Poder aereo.",
    description:
      "O iPad Air com chip M3 combina desempenho impressionante com design ultrafino e leve. Perfeito para multitarefa, criatividade e entretenimento.",
    price: 8999,
    image: "/images/ipad-hero.jpg",
    specs: [
      { label: "Chip", value: "Apple M3" },
      { label: "Tela", value: '11" Liquid Retina' },
      { label: "Armazenamento", value: "128 GB" },
      { label: "Camera", value: "12 MP Grande Angular" },
      { label: "Bateria", value: "Ate 10 horas" },
      { label: "Peso", value: "462 g" },
    ],
    highlights: [
      "Chip M3 para desempenho rapido",
      "Tela Liquid Retina de 11 polegadas",
      "Compativel com Apple Pencil Pro",
      "Touch ID integrado",
      "Conector USB-C",
    ],
    colors: ["Azul", "Roxo", "Estelar", "Cinza Espacial"],
  },
  {
    id: "7",
    slug: "apple-watch-ultra-2",
    name: "Apple Watch Ultra 2",
    category: "Watch",
    categorySlug: "watch",
    tagline: "Aventura espera.",
    description:
      "O Apple Watch Ultra 2 e o relogio mais robusto e capaz ja criado pela Apple. Construido para explorar os ambientes mais extremos, com GPS de dupla frequencia, ate 36 horas de bateria e caixa de titanio.",
    price: 9499,
    image: "/images/watch-hero.jpg",
    badge: "Premium",
    specs: [
      { label: "Caixa", value: "49mm Titanio" },
      { label: "Chip", value: "Apple S9 SiP" },
      { label: "Tela", value: "OLED LTPO Always-On" },
      { label: "Brilho", value: "Ate 3000 nits" },
      { label: "Bateria", value: "Ate 36 horas" },
      { label: "Resistencia a agua", value: "100m (WR100)" },
      { label: "GPS", value: "Dupla frequencia L1/L5" },
      { label: "Conectividade", value: "LTE + Wi-Fi + Bluetooth 5.3" },
    ],
    highlights: [
      "Caixa de titanio de 49mm",
      "Tela mais brilhante ja feita em um Apple Watch",
      "GPS de dupla frequencia de precisao",
      "Botao de Acao personalizavel",
      "Sirene de 86 decibeis",
    ],
    colors: ["Titanio Natural"],
  },
  {
    id: "8",
    slug: "apple-watch-series-10",
    name: "Apple Watch Series 10",
    category: "Watch",
    categorySlug: "watch",
    tagline: "Magreza e inteligencia.",
    description:
      "O Apple Watch Series 10 e o mais fino e leve da serie, com tela ate 30% maior e recursos avancados de saude. Monitore sua saude, fique conectado e viva melhor.",
    price: 5499,
    image: "/images/watch-hero.jpg",
    specs: [
      { label: "Caixa", value: "42mm ou 46mm Aluminio" },
      { label: "Chip", value: "Apple S10 SiP" },
      { label: "Tela", value: "OLED LTPO3 Always-On" },
      { label: "Bateria", value: "Ate 18 horas" },
      { label: "Resistencia a agua", value: "50m (WR50)" },
      { label: "Sensores", value: "SpO2, ECG, Temperatura" },
    ],
    highlights: [
      "Design mais fino da linha Series",
      "Tela ate 30% maior",
      "Deteccao de apneia do sono",
      "Carregamento rapido",
      "watchOS 11 com novos recursos",
    ],
    colors: ["Prata", "Ouro Rosa", "Preto Onix"],
  },
  {
    id: "9",
    slug: "airpods-pro-2",
    name: "AirPods Pro 2",
    category: "AirPods",
    categorySlug: "airpods",
    tagline: "Audio adaptativo. Silencio perfeito.",
    description:
      "Os AirPods Pro 2 com chip H2 oferecem cancelamento de ruido ativo 2x mais eficaz, Audio Adaptativo que se ajusta ao ambiente e Transparencia Adaptativa para uma experiencia sonora personalizada.",
    price: 2999,
    originalPrice: 3499,
    image: "/images/airpods-hero.jpg",
    badge: "Mais Vendido",
    specs: [
      { label: "Chip", value: "Apple H2" },
      { label: "Cancelamento de Ruido", value: "Ativo 2x mais eficaz" },
      { label: "Bateria (fones)", value: "Ate 6 horas" },
      { label: "Bateria (estojo)", value: "Ate 30 horas total" },
      { label: "Conectividade", value: "Bluetooth 5.3" },
      { label: "Resistencia", value: "IP54 (fones e estojo)" },
      { label: "Audio Espacial", value: "Com rastreamento de cabeca" },
      { label: "Carregamento", value: "USB-C, MagSafe, Qi" },
    ],
    highlights: [
      "Cancelamento de ruido ativo 2x mais potente",
      "Audio Adaptativo com reconhecimento de conversa",
      "Transparencia Adaptativa",
      "Audio Espacial personalizado",
      "Estojo com alto-falante e alca",
    ],
    colors: ["Branco"],
  },
  {
    id: "10",
    slug: "airpods-max-usbc",
    name: "AirPods Max USB-C",
    category: "AirPods",
    categorySlug: "airpods",
    tagline: "O som em sua melhor forma.",
    description:
      "Os AirPods Max oferecem audio de altissima fidelidade com drivers projetados pela Apple, cancelamento de ruido ativo e Audio Espacial imersivo. Agora com conector USB-C.",
    price: 6499,
    image: "/images/airpods-hero.jpg",
    specs: [
      { label: "Chip", value: "Apple H1 (cada fone)" },
      { label: "Driver", value: "40mm projetado pela Apple" },
      { label: "Cancelamento de Ruido", value: "Ativo de alta fidelidade" },
      { label: "Bateria", value: "Ate 20 horas" },
      { label: "Conectividade", value: "Bluetooth 5.0" },
      { label: "Carregamento", value: "USB-C" },
    ],
    highlights: [
      "Audio computacional de alta fidelidade",
      "Digital Crown para controle preciso",
      "Malha de aco inoxidavel e aluminio anodizado",
      "Almofadas de espuma com memoria",
      "Audio Espacial com rastreamento de cabeca",
    ],
    colors: ["Prateado", "Cinza Espacial", "Verde", "Rosa", "Azul Ceu"],
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.badge)
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price)
}
