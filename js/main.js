const shopContent= document.getElementById ("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container")
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem("compras")) || [];


fetch('../db/productos.json')
  .then(response => response.json())
  .then(data => {
    
    data.forEach(product => {
      let content = document.createElement("section");
      content.className = "card";
      content.innerHTML = `
        <h2 class="h-servicios">${product.nombre}</h2>
        <p class="p-servicios">${product.descripcion}</p>
        <p class="price">$ ${product.precio}</p>
      `;
      
      shopContent.append(content);

      let comprar = document.createElement("button");
      comprar.innerText = "Agregar al carrito";
      comprar.className = "comprar";

      content.append(comprar);

      
      comprar.addEventListener("click", () => {
        const repeat = carrito.some(repeatProduct => repeatProduct.id === product.id);
        if (repeat) {
          carrito.map(prod => {
            if (prod.id === product.id) {
              prod.cantidad++;
              Swal.fire({
                icon: 'info',
                title: 'Producto actualizado',
                text: `Se agregó una unidad más de ${product.nombre} al carrito.`,
                showCancelButton: false,
                confirmButtonText: 'Ok'
            });
            }
          });
        } else {
          carrito.push({
            id: product.id,
            nombre: product.nombre,
            precio: product.precio,
            cantidad: 1,
          });
          Swal.fire({
            icon: 'success',
            title: '¡Producto agregado al carrito!',
            text: `${product.nombre} ha sido agregado al carrito.`,
          });
          saveLocal();
          carritoCounter();

        }
      });
    });
  })
  .catch(error => console.error('Error al obtener los datos:', error));

const saveLocal = () => {
    localStorage.setItem("compras", JSON.stringify (carrito));

};


