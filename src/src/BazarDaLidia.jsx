import React, { useState } from "react";

export default function BazarDaLidia() {
  const [categoria, setCategoria] = useState("Todos");
  const [whatsIndex, setWhatsIndex] = useState(0);

  const whatsArray = ["5541995503761", "5541984188454"];

  const mensagemWhats =
    "Olá! 😊 Vim pelo site do *Bazar da Lidia* e gostaria de mais informações sobre este produto.";

  const produtos = [
    { id: 1, nome: "Vestido Feminino", preco: 45, categoria: "Roupas Femininas", imagem: "https://via.placeholder.com/300x400" },
    { id: 2, nome: "Camisa Masculina", preco: 50, categoria: "Roupas Masculinas", imagem: "https://via.placeholder.com/300x400" },
    { id: 3, nome: "Tênis Casual", preco: 80, categoria: "Calçados", imagem: "https://vi
