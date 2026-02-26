/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Para GitHub Pages com subdiretório, descomente a linha abaixo
  // basePath: '/nome-do-repositorio',
}

export default nextConfig
