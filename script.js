document.getElementById("year").textContent = new Date().getFullYear();

const filterButtons = document.querySelectorAll("[data-filter]");
const cards = document.querySelectorAll(".product-card");
function filterProducts(category) {
  cards.forEach(card => {
    card.hidden = category !== "Todos" && card.dataset.category !== category;
  });
  document.querySelectorAll(".filter").forEach(button => {
    button.classList.toggle("active", button.dataset.filter === category);
  });
}
filterButtons.forEach(button => {
  button.addEventListener("click", event => {
    const category = event.currentTarget.dataset.filter;
    if (document.querySelector(".product-grid")) filterProducts(category);
  });
});

// CONFIGURA AQUÍ EL NÚMERO DE WHATSAPP EN FORMATO INTERNACIONAL, SIN +, ESPACIOS NI GUIONES.
// Ejemplo ficticio de España: 34600111222
const WHATSAPP_NUMBER = "";
document.querySelectorAll("[data-product]").forEach(link => {
  link.addEventListener("click", event => {
    if (!WHATSAPP_NUMBER) {
      event.preventDefault();
      alert("La tienda aún está en modo de preparación. Añade tu número de WhatsApp en script.js antes de recibir pedidos.");
      return;
    }
    const product = event.currentTarget.dataset.product;
    const message = `Hola StickerBoom, quiero información y precio final del pack ${product}.`;
    event.currentTarget.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    event.currentTarget.target = "_blank";
    event.currentTarget.rel = "noopener";
  });
});
const whatsappCta = document.getElementById("whatsapp-cta");
whatsappCta.addEventListener("click", event => {
  if (!WHATSAPP_NUMBER) {
    event.preventDefault();
    alert("Antes de publicar, añade tu número de WhatsApp en script.js.");
    return;
  }
  whatsappCta.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola StickerBoom, quiero información sobre los stickers.")}`;
});
