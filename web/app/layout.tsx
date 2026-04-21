import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-black text-zinc-100">
        {/* HEADER */}
        <header className="border-b border-zinc-800">
          <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
            <h1 className="font-semibold text-lg">João Vitor Santos</h1>

            <nav className="flex gap-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>

              <Link href="/projetos" className="hover:text-white transition">
                Projetos
              </Link>
            </nav>
          </div>
        </header>

        {/* CONTEÚDO */}
        <main className="max-w-4xl mx-auto px-6 py-10">{children}</main>
      </body>
    </html>
  );
}
