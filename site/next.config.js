/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Zenos Technologies',
    description: 'A unofficial registry for the domain site Zenos',
    icon: 'https://raw.githubusercontent.com/Dimensionslash/Zenos-registry/f3ccffa9237e50a6bec4b4e19dfc89d193225a4a/site/img/logo.svg',
    listUrl: 'https://dimensionslash.github.io/Zenos-registry/',
    contactUrl: 'https://github.com/Dimensionslash/Zenos-registry/issues',
  },
  reactStrictMode: true,
  basePath: '/Zenos-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
