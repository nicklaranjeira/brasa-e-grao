import type { Metadata } from "next";
import Link from "next/link";
import { Flame, Clock, MapPin, Phone, Coffee, LayoutDashboard, ChevronRight } from "lucide-react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brasa & Grão | Hamburgueria & Cafeteria Artesanal",
  description: "Sabor defumado na brasa, crosta perfeita e cafés especiais com torrefação própria.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="site-wrapper">
          {/* CABEÇALHO COMPARTILHADO */}
          <header className="site-header">
            <div className="container site-header-inner">
              <Link href="/" className="brand-logo" aria-label="Brasa & Grão Início">
                <div className="brand-icon-wrapper">
                  <Flame size={20} className="text-white" />
                </div>
                <div className="brand-title">
                  <span>Brasa & Grão</span>
                  <span className="brand-sub">Burger & Coffee</span>
                </div>
              </Link>

              <nav className="site-nav">
                <Link href="/" className="site-nav-link">
                  Início
                </Link>
                <Link href="/cardapio" className="site-nav-link">
                  Cardápio Completo
                </Link>
              </nav>

              <div className="header-actions">
                <span className="badge badge-success">
                  <span className="status-dot"></span>
                  Aberto • 25-35 min
                </span>
                <Link href="/cardapio" className="btn-header-action">
                  <LayoutDashboard size={16} />
                  <span>Painel Gestor</span>
                </Link>
              </div>
            </div>
          </header>

          {/* CONTEÚDO DINÂMICO DE CADA PÁGINA (page.tsx) */}
          <main className="site-main">
            {children}
          </main>

          {/* RODAPÉ COMPARTILHADO */}
          <footer className="site-footer">
            <div className="container">
              <div className="footer-grid">
                {/* Coluna 1: Marca & Missão */}
                <div className="footer-col">
                  <div className="brand-logo" style={{ marginBottom: "1.25rem", color: "#ffffff" }}>
                    <div className="brand-icon-wrapper">
                      <Flame size={20} className="text-white" />
                    </div>
                    <div className="brand-title">
                      <span style={{ color: "#ffffff" }}>Brasa & Grão</span>
                      <span className="brand-sub" style={{ color: "#4ade80" }}>Burger & Coffee</span>
                    </div>
                  </div>
                  <p style={{ marginBottom: "1.5rem" }}>
                    Hambúrgueres artesanais selados na brasa viva, carnes 100% Angus e grãos especiais torrados na casa para harmonizações memoráveis.
                  </p>
                  <div style={{ display: "flex", gap: "0.75rem" }}>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        padding: "0.5rem 0.85rem",
                        backgroundColor: "rgba(255, 255, 255, 0.08)",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        borderRadius: "0.6rem",
                        color: "#ffffff",
                        fontSize: "0.85rem",
                        textDecoration: "none",
                      }}
                      aria-label="Instagram"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                      </svg>
                      <span>@brasaegraoburger</span>
                    </a>
                  </div>
                </div>

                {/* Coluna 2: Navegação Rápida */}
                <div className="footer-col">
                  <h4>Navegação</h4>
                  <ul className="footer-links">
                    <li>
                      <Link href="/">
                        <ChevronRight size={14} /> Início
                      </Link>
                    </li>
                    <li>
                      <Link href="/cardapio">
                        <ChevronRight size={14} /> Cardápio Completo
                      </Link>
                    </li>
                    <li>
                      <Link href="/#diferenciais">
                        <ChevronRight size={14} /> Nossos Diferenciais
                      </Link>
                    </li>
                    <li>
                      <Link href="/#mais-pedidos">
                        <ChevronRight size={14} /> Mais Pedidos
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Coluna 3: Endereço & Contato */}
                <div className="footer-col">
                  <h4>Onde Estamos</h4>
                  <div className="footer-info-item">
                    <MapPin size={18} className="footer-info-icon" />
                    <span>Rua dos Pinheiros, 450<br />Pinheiros — São Paulo, SP</span>
                  </div>
                  <div className="footer-info-item">
                    <Phone size={18} className="footer-info-icon" />
                    <span>(11) 98765-4321<br />Atendimento Delivery</span>
                  </div>
                </div>

                {/* Coluna 4: Horário de Funcionamento */}
                <div className="footer-col">
                  <h4>Funcionamento</h4>
                  <div className="footer-info-item">
                    <Clock size={18} className="footer-info-icon" />
                    <div>
                      <strong style={{ color: "#ffffff", display: "block" }}>Terça a Domingo</strong>
                      <span>18h00 às 23h30</span>
                    </div>
                  </div>
                  <div className="footer-info-item">
                    <Coffee size={18} className="footer-info-icon" />
                    <div>
                      <strong style={{ color: "#ffffff", display: "block" }}>Cafeteria & Balcão</strong>
                      <span>Aberto a partir das 16h</span>
                    </div>
                  </div>
                  <div style={{ marginTop: "0.75rem" }}>
                    <span className="badge badge-success" style={{ fontSize: "0.75rem" }}>
                      Cozinha em Operação
                    </span>
                  </div>
                </div>
              </div>

              {/* Linha final de copyright */}
              <div className="footer-bottom">
                <p>© 2026 Brasa & Grão Artesanal. Terça a Domingo • 18h às 23h30. Todos os direitos reservados.</p>
                <p style={{ display: "flex", gap: "1rem" }}>
                  <span>Feito com paixão pela brasa</span>
                  <span>•</span>
                  <span>São Paulo, SP</span>
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
