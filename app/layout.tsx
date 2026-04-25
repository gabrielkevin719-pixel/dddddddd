import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dr. Carlos Jaramillo - Consulta Gratuita | Protocolo Bicarbonato",
  description:
    "Consulta médica gratuita com o Dr. Carlos Jaramillo. Protocolo natural personalizado para recuperar tu potencia masculina sem efeitos secundários.",
  authors: [{ name: "Dr. Carlos Jaramillo" }],
  openGraph: {
    title: "Dr. Carlos Jaramillo - Consulta Gratuita",
    description:
      "Protocolo natural personalizado para recuperar tu vitalidade masculina",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@drcarlosjaramillo",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.className}>
      <body className="bg-background min-h-screen">{children}</body>
    </html>
  );
}
