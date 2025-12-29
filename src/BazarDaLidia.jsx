import React, { useState } from "react";

export default function BazarDaLidia() {
  const whatsApps = ["5541995503761", "5541984188454"];
  const [whatsIndex, setWhatsIndex] = useState(0);
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");

  const mensagem =
    "Olá! 😊 Vim pelo site do *Bazar da Lídia* e gostaria de informações sobre este produto.";

  const produtos = [
    {
      id: 1,
      nome: "Vestido Feminino",
      preco: "R$ 45,00",
      categoria: "Feminino",
      imagem: "https://via.placeholder.com/300x400",
    },
    {
      id: 2,
      nome: "Camisa Masculina",
      preco: "R$ 50,00",
      categoria: "Masculino",
      imagem: "https://via.placeholder.com/300x400",
    },
    {
      id: 3,
      nome: "Conjunto Infantil",
      preco: "R$ 40,00",
      categoria: "Infantil",
      imagem: "https://via.placeholder.com/300x400",
    },
    {
      id: 4,
      nome: "Tênis Casual",
      preco: "R$ 80,00",
      categoria: "Calçados",
      imagem: "https://via.placeholder.com/300x400",
    },
    {
      id: 5,
      nome: "Bolsa Feminina",
      preco: "R$ 60,00",
      categoria: "Acessórios",
      imagem: "https://via.placeholder.com/300x400",
    },
  ];

  const categorias = ["Todos", "Feminino", "Masculino", "Infantil", "Calçados", "Acessórios"];

  const produtosFiltrados =
    categoriaAtiva === "Todos"
      ? produtos
      : produtos.filter(p => p.categoria === categoriaAtiva);

  function comprar(produto) {
    const numero = whatsApps[whatsIndex];
    setWhatsIndex((whatsIndex + 1) % whatsApps.length);

    window.open(
      `https://wa.me/${numero}?text=${encodeURIComponent(
        mensagem + " Produto: " + produto
      )}`,
      "_blank"
    );
  }

  return (
    <div style={{ fontFamily: "Arial", background: "#f5f5f5", minHeight: "100vh" }}>
      <header style={{ background: "#ec4899", color: "#fff", padding: 20, textAlign: "center" }}>
        <h1>Bazar da Lídia</h1>
        <p>Moda acessível para toda a família</p>
      </header>

      <section style={{ padding: 20, textAlign: "center" }}>
        {categorias.map(cat => (
          <button

