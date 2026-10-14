# StickerBoom — publicar gratis

## Qué contiene
- `index.html`: página principal en español y metadatos SEO.
- `styles.css`: diseño adaptable a móvil y escritorio.
- `script.js`: filtros por categoría y enlaces de pedido por WhatsApp.
- `robots.txt` y `sitemap.xml`: archivos básicos para buscadores.
- `assets/favicon.svg`: icono de la tienda.

## Antes de publicar
1. Abre `script.js` y define `WHATSAPP_NUMBER` con tu número real en formato internacional, sin `+`, espacios ni guiones. Ejemplo ficticio de España: `34600111222`.
2. En `index.html`, reemplaza `https://TU-USUARIO.github.io/StickerBoom/` por la dirección real de tu web en las líneas de `canonical`, datos estructurados y `url`.
3. Repite el cambio en `robots.txt` y `sitemap.xml`.
4. Cambia los productos de muestra, los precios y los datos de contacto. Los diseños de emoji son ejemplos visuales, no archivos descargables de producto.
5. Antes de vender, añade páginas reales de privacidad, condiciones de compra, política de reembolso aplicable y datos de contacto. No afirmes que un archivo se entrega automáticamente: esta plantilla dirige pedidos a WhatsApp.

## Publicar gratis con GitHub Pages
1. Crea o inicia sesión en una cuenta de GitHub.
2. Crea un repositorio público llamado `StickerBoom` (el nombre puede ajustarse, pero debe coincidir con la URL que configures).
3. Sube todos los archivos y carpetas de esta carpeta al nivel raíz del repositorio.
4. En el repositorio, entra en **Settings → Pages**.
5. En **Build and deployment**, elige **Deploy from a branch**; selecciona `main` y `/ (root)`, y guarda.
6. Espera a que GitHub publique el sitio. La dirección normalmente será `https://TU-USUARIO.github.io/StickerBoom/`, sustituyendo TU-USUARIO por tu nombre de usuario real.
7. Abre la dirección para comprobarla desde móvil y ordenador.

## Google
1. Cuando la página ya sea pública, entra en Google Search Console: https://search.google.com/search-console/about
2. Añade y verifica la propiedad usando el método disponible para la URL publicada.
3. Envía la URL del sitemap: `https://TU-USUARIO.github.io/StickerBoom/sitemap.xml`.
4. Usa la inspección de URL para solicitar indexación de la página principal.
5. La indexación puede tardar y no garantiza posiciones concretas ni aparecer primero.

## Limitaciones
- La página es un catálogo/landing page estático; no contiene carrito, pagos ni descargas automáticas.
- GitHub Pages sirve contenido estático. Los pedidos se gestionan por WhatsApp tras configurar el número.
- La dirección gratuita usa el dominio de GitHub Pages. Un dominio propio no está incluido.
- Las tarifas y condiciones de plataformas pueden cambiar; comprueba las condiciones actuales antes de publicar.
