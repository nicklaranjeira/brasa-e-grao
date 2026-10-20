"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Flame,
  Coffee,
  ShoppingBag,
  Star,
  CheckCircle,
  Tag,
  ArrowLeft,
  UtensilsCrossed,
} from "lucide-react";

type Category = "todos" | "smash" | "porcoes" | "cafes";

interface Product {
  id: string;
  category: "smash" | "porcoes" | "cafes";
  name: string;
  tag: string;
  rating: string;
  description: string;
  price: string;
  image: string;
}

const smashBurgers: Product[] = [
  {
    id: "smash-classic",
    category: "smash",
    name: "Smash Classic",
    tag: "Clássico da Casa",
    rating: "★ 4.8",
    description:
      "Pão brioche artesanal tostado, smash Angus 100g, queijo cheddar inglês derretido, picles crocante de pepino da casa e molho especial Brasa.",
    price: "R$ 32,90",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "brasa-bacon",
    category: "smash",
    name: "Brasa Bacon Trufado",
    tag: "Campeão de Vendas",
    rating: "★ 4.9",
    description:
      "Pão brioche selado na manteiga de garrafa, dois smashes Angus 90g, cheddar inglês curado, tiras crocantes de bacon glaceado no café e aioli trufado.",
    price: "R$ 42,90",
    image:
      "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "smash-defumado",
    category: "smash",
    name: "Smash Defumado Duplo",
    tag: "Crosta Perfeita",
    rating: "★ 4.9",
    description:
      "Pão de batata tostado, dois blends Angus 90g com crosta escura, queijo prato artesanal derretido, cebola chapeada e molho barbecue rústico de espresso.",
    price: "R$ 38,90",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
  },
];

const cafeteriaItems: Product[] = [
  {
    id: "fritas-rusticas",
    category: "porcoes",
    name: "Fritas Rústicas com Alecrim",
    tag: "Porção Individual / Dupla",
    rating: "★ 4.9",
    description:
      "Batatas artesanais cortadas à mão com casca, fritura dupla crocante, temperadas com flor de sal, páprica defumada, alecrim fresco e maionese verde da casa.",
    price: "R$ 22,00",
    image:
      "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "shake-espresso",
    category: "cafes",
    name: "Shake Espresso da Casa",
    tag: "Harmonização Perfeita",
    rating: "★ 4.9",
    description:
      "Gelato cremoso de fava de baunilha batido com duplo shot do nosso blend espresso da casa, calda toffee artesanal e raspas de café torrado.",
    price: "R$ 26,00",
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "latte-artesanal",
    category: "cafes",
    name: "Latte Artesanal",
    tag: "Grãos Selecionados",
    rating: "★ 4.8",
    description:
      "Duplo shot de espresso extraído na hora com leite vaporizado sedoso, microespuma aveludada e um toque sutil de noz-moscada e canela.",
    price: "R$ 16,00",
    image:
      "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "brownie-chapa",
    category: "porcoes",
    name: "Brownie na Chapa",
    tag: "Sobremesa Especial",
    rating: "★ 4.9",
    description:
      "Brownie denso de cacau 70% selado na chapa com crostinha crocante e centro úmido, finalizado com flor de sal e calda quente de ganache meio amargo.",
    price: "R$ 24,00",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
  },
];

export default function CardapioPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("todos");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleOrder = (itemName: string) => {
    setToastMessage(`"${itemName}" adicionado ao seu pedido!`);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const showBurgers = selectedCategory === "todos" || selectedCategory === "smash";
  const showSides =
    selectedCategory === "todos" ||
    selectedCategory === "porcoes" ||
    selectedCategory === "cafes";

  const filteredSides = cafeteriaItems.filter((item) => {
    if (selectedCategory === "todos") return true;
    return item.category === selectedCategory;
  });

  return (
    <div style={{ paddingBottom: "6rem", backgroundColor: "#f8fafc" }}>
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

      {/* CABEÇALHO DO CARDÁPIO & NAVEGAÇÃO SUPERIOR */}
      <div
        style={{
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e2e8f0",
          padding: "2rem 0",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "1rem",
            }}
          >
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "#64748b",
                textDecoration: "none",
                fontSize: "0.88rem",
                fontWeight: 600,
                transition: "color 0.2s ease",
              }}
            >
              <ArrowLeft size={16} />
              <span>Voltar para o Início</span>
            </Link>

            <span
              style={{
                fontSize: "0.82rem",
                color: "#16a34a",
                fontWeight: 600,
                backgroundColor: "#f0fdf4",
                padding: "0.25rem 0.75rem",
                borderRadius: "9999px",
                border: "1px solid #bbf7d0",
              }}
            >
              Cardápio Atualizado Hoje
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(2rem, 3.8vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "#0f172a",
              marginBottom: "0.5rem",
            }}
          >
            Cardápio Completo
          </h1>
          <p style={{ color: "#475569", fontSize: "1.05rem" }}>
            Explore nossos hambúrgueres artesanais, acompanhamentos crocantes e cafés da torrefação.
          </p>
        </div>
      </div>

      <div className="container" style={{ paddingTop: "2.5rem" }}>
        {/* BANNER DO CABEÇALHO DO CARDÁPIO: EDIÇÃO DE OUTONO & COMBO DO DIA */}
        <section
          style={{
            position: "relative",
            borderRadius: "1.5rem",
            overflow: "hidden",
            marginBottom: "3.5rem",
            border: "1px solid #86efac",
            background:
              "linear-gradient(135deg, #f0fdf4 0%, #ffffff 50%, #dcfce7 100%)",
            boxShadow:
              "0 20px 50px -15px rgba(22, 163, 74, 0.12), 0 4px 12px rgba(0, 0, 0, 0.03)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 0.8fr",
              alignItems: "center",
            }}
          >
            {/* Texto do Combo */}
            <div style={{ padding: "3rem 2.5rem" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  backgroundColor: "#ffffff",
                  border: "1px solid #86efac",
                  color: "#15803d",
                  borderRadius: "9999px",
                  padding: "0.35rem 0.85rem",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: "1rem",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                }}
              >
                <Tag size={14} />
                <span>Edição Especial de Outono • Combo do Dia</span>
              </div>

              <h2
                style={{
                  fontSize: "clamp(1.6rem, 2.8vw, 2.3rem)",
                  fontWeight: 800,
                  color: "#0f172a",
                  lineHeight: 1.2,
                  marginBottom: "1rem",
                }}
              >
                Combo Outono Brasa
              </h2>

              <p
                style={{
                  color: "#475569",
                  fontSize: "0.98rem",
                  lineHeight: 1.6,
                  marginBottom: "1.75rem",
                  maxWidth: "500px",
                }}
              >
                1x Smash Brasa Duplo + 1x Fritas Rústicas com Alecrim + 1x Shake Espresso Artesanal.
                O trio perfeito para aquecer o seu dia com desconto exclusivo.
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.5rem",
                  flexWrap: "wrap",
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: "0.85rem",
                      color: "#94a3b8",
                      textDecoration: "line-through",
                      display: "block",
                    }}
                  >
                    R$ 86,90
                  </span>
                  <div
                    style={{
                      fontSize: "2rem",
                      fontWeight: 800,
                      color: "#16a34a",
                      lineHeight: 1,
                    }}
                  >
                    R$ 59,90
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleOrder("Combo Outono Brasa")}
                  className="btn-primary"
                  style={{ padding: "0.85rem 1.6rem" }}
                >
                  <ShoppingBag size={18} />
                  <span>Pedir Combo do Dia</span>
                </button>
              </div>
            </div>

            {/* Imagem do Combo */}
            <div
              style={{
                height: "100%",
                minHeight: "300px",
                position: "relative",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=1200&q=80"
                alt="Combo Outono Brasa com hambúrguer, fritas e shake"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </div>
        </section>

        {/* FILTROS DE CATEGORIA (Pílulas Visuais) */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.85rem",
            marginBottom: "3.5rem",
            overflowX: "auto",
            paddingBottom: "0.5rem",
          }}
        >
          <button
            type="button"
            onClick={() => setSelectedCategory("todos")}
            style={{
              padding: "0.65rem 1.35rem",
              borderRadius: "9999px",
              fontSize: "0.92rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s ease",
              border:
                selectedCategory === "todos"
                  ? "1px solid #16a34a"
                  : "1px solid #cbd5e1",
              backgroundColor:
                selectedCategory === "todos" ? "#16a34a" : "#ffffff",
              color: selectedCategory === "todos" ? "#ffffff" : "#475569",
              boxShadow:
                selectedCategory === "todos"
                  ? "0 4px 14px rgba(22, 163, 74, 0.35)"
                  : "0 1px 3px rgba(0,0,0,0.05)",
            }}
          >
            Todos os Itens
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory("smash")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.65rem 1.35rem",
              borderRadius: "9999px",
              fontSize: "0.92rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s ease",
              border:
                selectedCategory === "smash"
                  ? "1px solid #16a34a"
                  : "1px solid #cbd5e1",
              backgroundColor:
                selectedCategory === "smash" ? "#16a34a" : "#ffffff",
              color: selectedCategory === "smash" ? "#ffffff" : "#475569",
              boxShadow:
                selectedCategory === "smash"
                  ? "0 4px 14px rgba(22, 163, 74, 0.35)"
                  : "0 1px 3px rgba(0,0,0,0.05)",
            }}
          >
            <Flame size={16} />
            <span>Smash Burgers</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory("porcoes")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.65rem 1.35rem",
              borderRadius: "9999px",
              fontSize: "0.92rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s ease",
              border:
                selectedCategory === "porcoes"
                  ? "1px solid #16a34a"
                  : "1px solid #cbd5e1",
              backgroundColor:
                selectedCategory === "porcoes" ? "#16a34a" : "#ffffff",
              color: selectedCategory === "porcoes" ? "#ffffff" : "#475569",
              boxShadow:
                selectedCategory === "porcoes"
                  ? "0 4px 14px rgba(22, 163, 74, 0.35)"
                  : "0 1px 3px rgba(0,0,0,0.05)",
            }}
          >
            <UtensilsCrossed size={16} />
            <span>Porções & Entradas</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory("cafes")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.65rem 1.35rem",
              borderRadius: "9999px",
              fontSize: "0.92rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s ease",
              border:
                selectedCategory === "cafes"
                  ? "1px solid #16a34a"
                  : "1px solid #cbd5e1",
              backgroundColor:
                selectedCategory === "cafes" ? "#16a34a" : "#ffffff",
              color: selectedCategory === "cafes" ? "#ffffff" : "#475569",
              boxShadow:
                selectedCategory === "cafes"
                  ? "0 4px 14px rgba(22, 163, 74, 0.35)"
                  : "0 1px 3px rgba(0,0,0,0.05)",
            }}
          >
            <Coffee size={16} />
            <span>Cafés & Shakes</span>
          </button>
        </div>

        {/* SEÇÃO LINHA SMASH & BRASA */}
        {showBurgers && (
          <section style={{ marginBottom: "5rem" }}>
            <div style={{ marginBottom: "2rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  color: "#16a34a",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "0.4rem",
                }}
              >
                <Flame size={18} />
                <span>GRELHADOS NO FOGO VIVO</span>
              </div>
              <h2
                style={{
                  fontSize: "1.9rem",
                  fontWeight: 800,
                  color: "#0f172a",
                  letterSpacing: "-0.02em",
                }}
              >
                Linha Smash & Brasa
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "2.25rem",
              }}
            >
              {smashBurgers.map((burger) => (
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
          </section>
        )}

        {/* SEÇÃO ACOMPANHAMENTOS & CAFETERIA (Grid de 2 colunas com os 4 cards horizontais) */}
        {showSides && filteredSides.length > 0 && (
          <section>
            <div style={{ marginBottom: "2rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  color: "#15803d",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "0.4rem",
                }}
              >
                <Coffee size={18} />
                <span>TORREFAÇÃO & COZINHA</span>
              </div>
              <h2
                style={{
                  fontSize: "1.9rem",
                  fontWeight: 800,
                  color: "#0f172a",
                  letterSpacing: "-0.02em",
                }}
              >
                Acompanhamentos & Cafeteria
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(460px, 1fr))",
                gap: "1.75rem",
              }}
            >
              {filteredSides.map((item) => (
                <div key={item.id} className="horizontal-card">
                  <div className="horizontal-card-img-wrapper">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="horizontal-card-img"
                      loading="lazy"
                    />
                  </div>

                  <div className="horizontal-card-content">
                    <div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: "0.35rem",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            color: "#15803d",
                            textTransform: "uppercase",
                          }}
                        >
                          {item.tag}
                        </span>
                        <span
                          style={{
                            fontSize: "0.75rem",
                            color: "#ca8a04",
                            fontWeight: 700,
                          }}
                        >
                          {item.rating}
                        </span>
                      </div>

                      <h3
                        style={{
                          fontSize: "1.15rem",
                          fontWeight: 700,
                          color: "#0f172a",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {item.name}
                      </h3>

                      <p
                        style={{
                          fontSize: "0.85rem",
                          color: "#475569",
                          lineHeight: 1.5,
                          marginBottom: "1rem",
                        }}
                      >
                        {item.description}
                      </p>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingTop: "0.75rem",
                        borderTop: "1px solid #e2e8f0",
                      }}
                    >
                      <strong
                        style={{
                          fontSize: "1.2rem",
                          fontWeight: 800,
                          color: "#0f172a",
                        }}
                      >
                        {item.price}
                      </strong>

                      <button
                        type="button"
                        onClick={() => handleOrder(item.name)}
                        className="btn-card-add"
                      >
                        <ShoppingBag size={14} />
                        <span>Adicionar</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
