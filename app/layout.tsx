import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Construart Engenharia | Obras, Projetos e Gerenciamento",
  description: "Engenharia civil em Salvador e região: execução e administração de obras, projetos, instalações, consultoria e gerenciamento.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/assets/images_ico_favicon.png",
    shortcut: "/assets/images_ico_favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
