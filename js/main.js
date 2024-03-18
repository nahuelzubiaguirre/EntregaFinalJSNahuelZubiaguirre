const shopContent= document.getElementById ("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container")
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem("compras")) || [];

productos.forEach ((product) =>{
    let content = document.createElement("section");
    content.className="card";
    content.innerHTML = `
    <h2 class="h-servicios"> ${product.nombre}</h2>
    <p class="p-servicios">${product.descripcion} </p>
    <p class="price"> $ ${product.precio}  </p>
    `;

    shopContent.append(content);

    let comprar = document.createElement("button")
    comprar.innerText = "Agregar al carrito";
    comprar.className = "comprar";
    

    content.append(comprar);

    comprar.addEventListener("click" , () => {
        const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);    
        if(repeat) {
            carrito.map((prod) => {
                if (prod.id === product.id){
                    prod.cantidad++;
                }
            })
        } else {
            carrito.push({
                id: product.id,
                nombre: product.nombre,
                precio: product.precio,
                cantidad: product.cantidad,
            })
            saveLocal();
        }

        carritoCounter();
     })
    
});

const saveLocal = () => {
    localStorage.setItem("compras", JSON.stringify (carrito));

};



