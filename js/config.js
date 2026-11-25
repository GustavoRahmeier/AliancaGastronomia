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
const PRODUCTS = [];
const CATEGORIES = ["Hambúrgueres", "Porções", "Acompanhamentos", "Bebidas"];
