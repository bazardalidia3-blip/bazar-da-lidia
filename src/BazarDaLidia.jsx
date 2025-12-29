import { useEffect, useState } from "react";

export default function BazarDaLidia() {
  const whatsapps = ["41995503761", "41984188454"];
  const [indice, setIndice] = useState(0);

  const mensagem =
    "Olá! Vim pelo site do Bazar da Lídia e gostaria de comprar um produto 😊";

  useEffect(() => {
    const interval = setInterval(() => {
      setIndice((prev) => (prev + 1) % whatsapps.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
        <h1>Bazar da Lídia</h1>

        <p>
          Moda feminina, masculina, infantil, calçados e acessórios com
          atendimento direto pelo WhatsApp.
        </p>

        <h2>Categorias</h2>
        <ul>
          <li>Roupas Femininas</li>
          <li>Roupas Masculinas</li>
          <li>Infantil</li>
          <li>Calçados</li>
          <li>Acessórios</li>
        </ul>
      </div>

      {/* Botão flutuante */}
      <a
        href={`https://wa.me/${whatsapps[indice]}?text=${encodeURIComponent(
          mensagem
        )}`}
        target="_blank"
        rel="noreferrer"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#25d366",
          color: "#fff",
          padding: "15px 20px",
          borderRadius: "50px",
          fontWeight: "bold",
          textDecoration: "none",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          zIndex: 1000,
        }}
      >
        WhatsApp
      </a>
    </>
  );
}
