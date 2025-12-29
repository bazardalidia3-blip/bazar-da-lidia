export default function BazarDaLidia() {
  const whatsapp1 = "41995503761";
  const whatsapp2 = "41984188454";

  const mensagem =
    "Olá! Vim pelo site do Bazar da Lídia e gostaria de mais informações 😊";

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Bazar da Lídia</h1>

      <p>
        Moda feminina, masculina, infantil, calçados e acessórios com atendimento
        direto pelo WhatsApp.
      </p>

      <h2>Categorias</h2>
      <ul>
        <li>Roupas Femininas</li>
        <li>Roupas Masculinas</li>
        <li>Infantil</li>
        <li>Calçados</li>
        <li>Acessórios</li>
      </ul>

      <a
        href={`https://wa.me/${whatsapp1}?text=${encodeURIComponent(mensagem)}`}
        target="_blank"
        rel="noreferrer"
        style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "12px 20px",
          backgroundColor: "#25d366",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "6px",
          fontWeight: "bold",
        }}
      >
        Comprar pelo WhatsApp
      </a>
    </div>
  );
}
