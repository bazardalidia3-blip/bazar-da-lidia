import React from "react";

export default function BazarDaLidia() {
  const whatsapp = "41995503761";

  const mensagem = (produto) =>
    `Olá! Vim pelo site do Bazar da Lídia e gostaria de comprar: ${produto}`;

  const produtos = [
    {
      id: 1,
      nome: "Vestido Floral",
      preco: "R$ 79,90",
      categoria: "Roupas Femininas",
      imagem: "https://via.placeholder.com/200",
    },
    {
      id: 2,
      nome: "Camiseta Masculina",
      preco: "R$ 49,90",
      categoria: "Roupas Masculinas",
      imagem: "https://via.placeholder.com/200",
    },
    {
      id: 3,
      nome: "Tênis Infantil",
      preco: "R$ 89,90",
      categoria: "Infantil",
      imagem: "https://via.placeholder.com/200",
    },
  ];

  const categorias = [
    "Roupas Femininas",
    "Roupas Masculinas",
    "Infantil",
    "Calçados",
    "Acessórios",
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Bazar da Lídia</h1>
      <p>
        Moda feminina, masculina, infantil, calçados e acessórios com atendimento
        direto pelo WhatsApp.
      </p>

      {categorias.map((categoria) => (
        <div key={categoria}>
          <h2>{categoria}</h2>

          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {produtos
              .filter((p) => p.categoria === categoria)
              .map((produto) => (
                <div
                  key={produto.id}
                  style={{
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    padding: "10px",
                    width: "200px",
                  }}
                >
                  <img
                    src={produto.imagem}
                    alt={produto.nome}
                    style={{ width: "100%", borderRadius: "6px" }}
                  />

                  <h3>{produto.nome}</h3>
                  <p>{produto.preco}</p>

                  <a
                    href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(
                      mensagem(produto.nome)
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "block",
                      textAlign: "center",
                      marginTop: "10px",
                      padding: "8px",
                      backgroundColor: "#25d366",
                      color: "#fff",
                      textDecoration: "none",
                      borderRadius: "6px",
                    }}
                  >
                    Comprar
                  </a>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
