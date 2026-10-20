"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Star, Flame, Coffee, Zap, ShoppingBag, CheckCircle, Sparkles } from "lucide-react";

interface MenuItem {
  id: string;
  name: string;
  tag: string;
  rating: string;
  description: string;
  price: string;
  image: string;
}

const maisPedidos: MenuItem[] = [
  {
    id: "brasa-bacon",
    name: "Brasa Bacon Trufado",
    tag: "Campeão de Vendas",
    rating: "★ 4.9",
    description:
      "Pão brioche selado na manteiga, dois smashes Angus de 90g, cheddar inglês curado, tiras crocantes de bacon glaceado no café e aioli trufado.",
    price: "R$ 42,90",
    image:
      "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "smash-defumado",
    name: "Smash Defumado Duplo",
    tag: "O Mais Querido",
    rating: "★ 4.9",
    description:
      "Pão de batata tostado, dois blends Angus 90g com crosta escura, queijo prato artesanal derretido, cebola chapeada e molho barbecue rústico de espresso.",
    price: "R$ 38,90",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "grao-brie",
    name: "Grão & Queijo Brie",
    tag: "Destaque do Chef",
    rating: "★ 4.8",
    description:
      "Blend Angus alto de 180g na brasa viva, queijo brie maçaricado, geleia de pimenta defumada com redução de grãos de café e folhas frescas de rúcula.",
    price: "R$ 46,00",
    image:
      "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=800&q=80",
  },
];

export default function HomePage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleOrder = (itemName: string) => {
    setToastMessage(`"${itemName}" adicionado ao seu pedido!`);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  return (
    <div>
      {/* Toast de Confirmação Interativo */}
      {toastMessage && (
        <div
          style={{
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            zIndex: 100,
            backgroundColor: "#ffffff",
            border: "1px solid #16a34a",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1), 0 0 15px rgba(22,163,74,0.2)",
            borderRadius: "0.85rem",
            padding: "1rem 1.4rem",
            display: "flex",
            alignItems: "center",
            gap: "0.85rem",
            color: "#0f172a",
          }}
        >
          <CheckCircle size={22} className="text-emerald-600" />
          <span style={{ fontSize: "0.95rem", fontWeight: 600 }}>{toastMessage}</span>
        </div>
      )}

      {/* HERO SECTION */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          paddingTop: "4.5rem",
          paddingBottom: "5.5rem",
          borderBottom: "1px solid #e2e8f0",
          background:
            "radial-gradient(ellipse at 80% 20%, rgba(22, 163, 74, 0.08) 0%, transparent 60%), #f8fafc",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.15fr 0.85fr",
              gap: "3.5rem",
              alignItems: "center",
            }}
          >
            {/* Coluna Texto & Ações */}
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.35rem 0.9rem",
                  borderRadius: "9999px",
                  backgroundColor: "#f0fdf4",
                  border: "1px solid #bbf7d0",
                  color: "#15803d",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  marginBottom: "1.5rem",
                }}
              >
                <Sparkles size={15} />
                <span>Edição Limitada de Outono</span>
              </div>

              <h1
                style={{
                  fontSize: "clamp(2.4rem, 4.5vw, 3.6rem)",
                  fontWeight: 800,
                  lineHeight: 1.15,
                  letterSpacing: "-0.03em",
                  marginBottom: "1.35rem",
                  color: "#0f172a",
                }}
              >
                Sabor defumado na brasa,{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #16a34a 0%, #059669 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  crosta perfeita a cada mordida
                </span>
              </h1>

              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: 1.65,
                  color: "#475569",
                  marginBottom: "2.25rem",
                  maxWidth: "540px",
                }}
              >
                Blend 100% Angus moído diariamente, tostado no fogo vivo e servido em pães
                artesanais de fermentação natural. Finalize com nossa torrefação de cafés de origem.
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.25rem",
                  flexWrap: "wrap",
                }}
              >
                <Link href="/cardapio" className="btn-primary">
                  <span>Explorar Cardápio</span>
                  <ArrowRight size={18} />
                </Link>

                <a href="#mais-pedidos" className="btn-secondary">
                  <span>Ver Mais Pedidos</span>
                </a>
              </div>

              {/* Métricas sociais rápidas */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "2.5rem",
                  marginTop: "3rem",
                  paddingTop: "2rem",
                  borderTop: "1px solid #e2e8f0",
                }}
              >
                <div>
                  <strong style={{ fontSize: "1.4rem", color: "#0f172a", display: "block" }}>
                    +15 mil
                  </strong>
                  <span style={{ fontSize: "0.82rem", color: "#64748b" }}>
                    Burgers defumados
                  </span>
                </div>
                <div>
                  <strong style={{ fontSize: "1.4rem", color: "#16a34a", display: "block" }}>
                    4.9 ★
                  </strong>
                  <span style={{ fontSize: "0.82rem", color: "#64748b" }}>
                    Avaliação média no iFood
                  </span>
                </div>
                <div>
                  <strong style={{ fontSize: "1.4rem", color: "#0f172a", display: "block" }}>
                    100%
                  </strong>
                  <span style={{ fontSize: "0.82rem", color: "#64748b" }}>
                    Carne Angus certificada
                  </span>
                </div>
              </div>
            </div>

            {/* Coluna Imagem com Card Flutuante de Preço */}
            <div
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* Efeito Glow suave atrás da imagem */}
              <div
                style={{
                  position: "absolute",
                  width: "80%",
                  height: "80%",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(22, 163, 74, 0.18) 0%, transparent 70%)",
                  filter: "blur(40px)",
                  zIndex: 0,
                }}
              />

              {/* Moldura da Foto Principal */}
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  borderRadius: "1.75rem",
                  overflow: "hidden",
                  border: "1px solid #e2e8f0",
                  boxShadow:
                    "0 25px 60px -15px rgba(0, 0, 0, 0.12), 0 0 30px rgba(22, 163, 74, 0.08)",
                  maxWidth: "460px",
                  width: "100%",
                  backgroundColor: "#ffffff",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80"
                  alt="Hambúrguer artesanal Smash Brasa Duplo"
                  style={{
                    width: "100%",
                    height: "440px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>

              {/* CARD FLUTUANTE DE PREÇO (R$ 38,90) */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-1.5rem",
                  left: "-1rem",
                  zIndex: 10,
                  backgroundColor: "rgba(255, 255, 255, 0.96)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid #bbf7d0",
                  borderRadius: "1.1rem",
                  padding: "1rem 1.4rem",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.08), 0 0 20px rgba(22, 163, 74, 0.12)",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.1rem",
                }}
              >
                <div
                  style={{
                    width: "3rem",
                    height: "3rem",
                    borderRadius: "0.75rem",
                    backgroundColor: "#f0fdf4",
                    border: "1px solid #bbf7d0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#16a34a",
                  }}
                >
                  <Flame size={24} />
                </div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      marginBottom: "0.2rem",
                    }}
                  >
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#15803d" }}>
                      SMASH BRASA DUPLO
                    </span>
                    <span
                      style={{
                        fontSize: "0.7rem",
                        color: "#ca8a04",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "2px",
                        fontWeight: 700,
                      }}
                    >
                      ★ 4.9
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 800,
                      color: "#0f172a",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    R$ 38,90
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAIXA DE DIFERENCIAIS (Grid com 3 blocos) */}
      <section
        id="diferenciais"
        style={{
          padding: "5rem 0",
          backgroundColor: "#f1f5f9",
          borderBottom: "1px solid #e2e8f0",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            {/* Bloco 1: Blend 100% Angus */}
            <div
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "1.25rem",
                padding: "2.25rem",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.03)",
                transition: "all 0.3s ease",
              }}
            >
              <div
                style={{
                  width: "3.5rem",
                  height: "3.5rem",
                  borderRadius: "1rem",
                  backgroundColor: "#f0fdf4",
                  border: "1px solid #bbf7d0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#16a34a",
                  marginBottom: "1.5rem",
                }}
              >
                <Flame size={26} />
              </div>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "#0f172a",
                  marginBottom: "0.75rem",
                }}
              >
                Blend 100% Angus
              </h3>
              <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.6 }}>
                Carnes nobres selecionadas moídas diariamente no restaurante, com defumação suave em
                lenha de macieira e crosta caramelizada perfeita.
              </p>
            </div>

            {/* Bloco 2: Torrefação Própria */}
            <div
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "1.25rem",
                padding: "2.25rem",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.03)",
                transition: "all 0.3s ease",
              }}
            >
              <div
                style={{
                  width: "3.5rem",
                  height: "3.5rem",
                  borderRadius: "1rem",
                  backgroundColor: "#f0fdf4",
                  border: "1px solid #bbf7d0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#15803d",
                  marginBottom: "1.5rem",
                }}
              >
                <Coffee size={26} />
              </div>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "#0f172a",
                  marginBottom: "0.75rem",
                }}
              >
                Torrefação Própria
              </h3>
              <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.6 }}>
                Microlotes de cafés especiais 100% arábica torrados semanalmente por nossos baristas
                para harmonizar com a gordura saborosa do burger.
              </p>
            </div>

            {/* Bloco 3: Entrega Quente em 30 min */}
            <div
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "1.25rem",
                padding: "2.25rem",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.03)",
                transition: "all 0.3s ease",
              }}
            >
              <div
                style={{
                  width: "3.5rem",
                  height: "3.5rem",
                  borderRadius: "1rem",
                  backgroundColor: "#ecfdf5",
                  border: "1px solid #a7f3d0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#059669",
                  marginBottom: "1.5rem",
                }}
              >
                <Zap size={26} />
              </div>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "#0f172a",
                  marginBottom: "0.75rem",
                }}
              >
                Entrega Quente em 30 min
              </h3>
              <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.6 }}>
                Embalagem térmica exclusiva e ventilada que preserva a crocância do pão, sem
                umedecer, mantendo o queijo derretido e fumegante.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO "OS MAIS PEDIDOS DA SEMANA" */}
      <section id="mais-pedidos" style={{ padding: "6rem 0", backgroundColor: "#f8fafc" }}>
        <div className="container">
          {/* Cabeçalho da Seção */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "3.5rem",
              flexWrap: "wrap",
              gap: "1.5rem",
            }}
          >
            <div>
              <span
                style={{
                  color: "#16a34a",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  display: "block",
                  marginBottom: "0.5rem",
                }}
              >
                CARDÁPIO DA BRASA
              </span>
              <h2
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                  fontWeight: 800,
                  color: "#0f172a",
                  letterSpacing: "-0.02em",
                }}
              >
                Os Mais Pedidos da Semana
              </h2>
            </div>

            <Link
              href="/cardapio"
              style={{
                color: "#16a34a",
                fontWeight: 600,
                fontSize: "0.95rem",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
              }}
            >
              <span>Ver cardápio completo</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Grid com os 3 cards de lanches */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2.25rem",
            }}
          >
            {maisPedidos.map((burger) => (
              <div key={burger.id} className="food-card">
                <div className="food-card-img-wrapper">
                  <span className="tag-badge">{burger.tag}</span>
                  <span className="rating-badge">
                    <Star size={13} fill="#ca8a04" color="#ca8a04" />
                    <span>{burger.rating.replace("★ ", "")}</span>
                  </span>
                  <img
                    src={burger.image}
                    alt={burger.name}
                    className="food-card-img"
                    loading="lazy"
                  />
                </div>

                <div className="food-card-body">
                  <h3
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: 700,
                      color: "#0f172a",
                      marginBottom: "0.6rem",
                    }}
                  >
                    {burger.name}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "#475569",
                      lineHeight: 1.55,
                      marginBottom: "1.5rem",
                      flex: 1,
                    }}
                  >
                    {burger.description}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingTop: "1.1rem",
                      borderTop: "1px solid #e2e8f0",
                    }}
                  >
                    <div>
                      <span
                        style={{
                          fontSize: "0.75rem",
                          color: "#64748b",
                          display: "block",
                          fontWeight: 500,
                        }}
                      >
                        A partir de
                      </span>
                      <strong
                        style={{
                          fontSize: "1.35rem",
                          fontWeight: 800,
                          color: "#0f172a",
                        }}
                      >
                        {burger.price}
                      </strong>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleOrder(burger.name)}
                      className="btn-card-add"
                    >
                      <ShoppingBag size={15} />
                      <span>+ Pedir Agora</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER CTA INFERIOR */}
      <section
        style={{
          padding: "4.5rem 0",
          backgroundColor: "#ffffff",
          borderTop: "1px solid #e2e8f0",
        }}
      >
        <div className="container">
          <div
            style={{
              borderRadius: "1.5rem",
              background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
              border: "1px solid #86efac",
              padding: "3.5rem 3rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "2rem",
            }}
          >
            <div>
              <span
                style={{
                  color: "#15803d",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                EXPERIÊNCIA COMPLETA
              </span>
              <h3
                style={{
                  fontSize: "1.9rem",
                  fontWeight: 800,
                  color: "#064e3b",
                  marginTop: "0.4rem",
                  marginBottom: "0.75rem",
                }}
              >
                Quer conhecer todas as nossas opções?
              </h3>
              <p style={{ color: "#166534", fontSize: "1rem", maxWidth: "520px" }}>
                Confira nossos smashs duplos, acompanhamentos crocantes, shakes especiais e lattes
                artesanais no cardápio online.
              </p>
            </div>

            <Link href="/cardapio" className="btn-primary" style={{ padding: "1rem 2rem" }}>
              <span>Acessar Cardápio Completo</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
