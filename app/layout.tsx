import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
 
const inter = Inter({ subsets: ["latin"] });
 
export const metadata: Metadata = {
  title: "Miguel Mendoza | Portafolio",
  description: "Portafolio de Miguel Ángel Mendoza Jaramillo - Estudiante de Ingeniería de Software",
};
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}