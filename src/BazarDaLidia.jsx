export default function BazarDaLidia() {
  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
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

      <a
        href="https://wa.me/5541995503761"
        target="_blank"
        style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "12px 20px",
          backgroundColor: "#25D366",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "8px",
          fontWeight: "bold",
        }}
      >
        Comprar pelo WhatsApp
      </a>
    </div>
  );
}
