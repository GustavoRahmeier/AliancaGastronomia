// ===== CONFIGURAÇÕES EDITÁVEIS =====
const SITE_CONFIG = {
  whatsapp: "5500000000000", // DDI+DDD+número, só dígitos. CONFIRMAR antes de publicar
  whatsappMsg: "Olá! Gostaria de fazer um pedido na Aliança Gastronomia.",
  instagram: "https://www.instagram.com/aliancagastronomia_/",
  endereco: "Avenida Dr. Ito João Snel, 1068, Centro, Imigrante, RS",
  mapsLink: "" // opcional: cole o link do Google Maps; vazio = gerado pelo endereço
};

// ===== CARDÁPIO =====
// Adicione produtos reais aqui. Vazio = mostra espaços reservados.
// Exemplo (copie e preencha):
// { categoria: "Hambúrgueres", nome: "Nome", descricao: "Descrição", preco: "R$ 00,00", imagem: "assets/images/hamburguer-01.jpg" }
const PRODUCTS = [
  {
    categoria: "Hambúrgueres",
    nome: "Aliança com Queijo Provolone",
    descricao: "",
    preco: "",
    imagem: "assets/images/hamburguer-01.jpeg"
  },
  {
    categoria: "Hambúrgueres",
    nome: "Smash Cebola Crispy",
    descricao: "",
    preco: "",
    imagem: "assets/images/hamburguer-02.jpg"
  },
  {
    categoria: "Hambúrgueres",
    nome: "Smash Burguer",
    descricao: "",
    preco: "",
    imagem: "assets/images/hamburguer-03.jpg"
  },
  {
    categoria: "Hambúrgueres",
    nome: "Nutella com Morango",
    descricao: "",
    preco: "",
    imagem: "assets/images/hamburguer-04.jpg"
  },
  {
    categoria: "Porções",
    nome: "Batata Frita",
    descricao: "",
    preco: "",
    imagem: "assets/images/batata-01.jpg"
  },
  {
    categoria: "Bebidas",
    nome: "Refrigerante Lata",
    descricao: "",
    preco: "",
    imagem: "assets/images/refri-01.jpg"
  }
];
const CATEGORIES = ["Hambúrgueres", "Porções", "Acompanhamentos", "Bebidas"];
