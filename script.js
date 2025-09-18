// WhatsApp (pode trocar)
const PHONE_E164 = "5571981660907";

// Produtos
const PRODUCTS = [
  {
    title: "Kit Elefante Geométrico (Low Poly)",
    desc: "Decoração moderna",
    price: 39.90,
    img: "./elefante-decorativo/IMG-20250918-WA0011.jpg"
        
  },
  {
    title: "Vaso Geométrico 15 cm",
    desc: "Boca 3 cm • Largura 8,5 cm",
    price: 19,99,
    img: "./vaso-decorativo/foto1.jpg"
  },
  {
    title: "Porta-Vela Ondulado",
    desc: "Luz aconchegante",
    price: 12,90,
    img: "./vela/vela.jpg"
  },
  {
    title: "Porta-Vela Premium",
    desc: "Design canelado",
    price: 13,90,
    img: "./Porta-velas/ima.jpg"
  },
  {
    title: "Coração com Pernas",
    desc: "Presente criativo",
    price: 12,90,
    img: "./Coracao-pernas/coracao.jpg"
  },
  {
    title: "Boneco ET Verde",
    desc: "Alien para setups",
    price: 12,90,
    img: "./Et/IMG-20250918-WA0042.jpg"
  }
];

// Render
const grid = document.getElementById("grid");
document.getElementById("year").textContent = new Date().getFullYear();

function waLink(product){
  const msg = `Olá! Tenho interesse em: ${product.title}.`;
  return `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(msg)}`;
}

function card(p){
  return `
    <article class="card">
      <div class="thumb"><img src="${p.img}" alt="${p.title}"></div>
      <div class="body">
        <h3 class="title">${p.title}</h3>
        <p class="desc">${p.desc}</p>
        <div class="row">
          <div class="price">R$ ${p.price.toFixed(2)}</div>
          <a class="btn" target="_blank" href="${waLink(p)}">Pedir no WhatsApp</a>
        </div>
      </div>
    </article>`;
}

grid.innerHTML = PRODUCTS.map(card).join("");
