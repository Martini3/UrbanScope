import path from "path"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ['images.unsplash.com'],
  },

  // équivalent des alias de Vite
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  webpack: (config: any) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      // enlève les numéros de version dans les alias
      vaul: "vaul",
      sonner: "sonner",
      recharts: "recharts",
      "react-resizable-panels": "react-resizable-panels",
      "react-hook-form": "react-hook-form",
      "react-day-picker": "react-day-picker",
      "next-themes": "next-themes",
      "lucide-react": "lucide-react",
      "input-otp": "input-otp",
      "embla-carousel-react": "embla-carousel-react",
      cmdk: "cmdk",
      "class-variance-authority": "class-variance-authority",
      "@radix-ui/react-tooltip": "@radix-ui/react-tooltip",
      "@radix-ui/react-toggle": "@radix-ui/react-toggle",
      "@radix-ui/react-toggle-group": "@radix-ui/react-toggle-group",
      "@radix-ui/react-tabs": "@radix-ui/react-tabs",
      "@radix-ui/react-switch": "@radix-ui/react-switch",
      "@radix-ui/react-slot": "@radix-ui/react-slot",
      "@radix-ui/react-slider": "@radix-ui/react-slider",
      "@radix-ui/react-separator": "@radix-ui/react-separator",
      "@radix-ui/react-select": "@radix-ui/react-select",
      "@radix-ui/react-scroll-area": "@radix-ui/react-scroll-area",
      "@radix-ui/react-radio-group": "@radix-ui/react-radio-group",
      "@radix-ui/react-progress": "@radix-ui/react-progress",
      "@radix-ui/react-popover": "@radix-ui/react-popover",
      "@radix-ui/react-navigation-menu": "@radix-ui/react-navigation-menu",
      "@radix-ui/react-menubar": "@radix-ui/react-menubar",
      "@radix-ui/react-label": "@radix-ui/react-label",
      "@radix-ui/react-hover-card": "@radix-ui/react-hover-card",
      "@radix-ui/react-dropdown-menu": "@radix-ui/react-dropdown-menu",
      "@radix-ui/react-dialog": "@radix-ui/react-dialog",
      "@radix-ui/react-context-menu": "@radix-ui/react-context-menu",
      "@radix-ui/react-collapsible": "@radix-ui/react-collapsible",
      "@radix-ui/react-checkbox": "@radix-ui/react-checkbox",
      "@radix-ui/react-avatar": "@radix-ui/react-avatar",
      "@radix-ui/react-aspect-ratio": "@radix-ui/react-aspect-ratio",
      "@radix-ui/react-alert-dialog": "@radix-ui/react-alert-dialog",
      "@radix-ui/react-accordion": "@radix-ui/react-accordion",
      "@": path.resolve(__dirname, "src"),
    }
    return config
  },

  // équivalent de server.port et server.open
  devIndicators: {
    port: 3000, // ⚠️ Next ignore "open:true" : il faut ouvrir le navigateur soi-même
  },
}

module.exports = nextConfig

