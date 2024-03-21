
const pintarCarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display ="flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
        <h2 class="modal-header-tittle">Carrito</h2>
    `;
    modalContainer.append(modalHeader);

    const modalButton = document.createElement("h2");
    modalButton.innerText = "X";
    modalButton.className = "modal-header-button";

    modalButton.addEventListener("click" , () =>{
        modalContainer.style.display ="none";
    })

    modalHeader.append(modalButton);


    carrito.forEach ((product) =>{
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = `
        <h3> ${product.nombre}</h3>
        <p>$ ${product.precio}  </p>
        <span class="restar"> ➖ </span>
        <p>Cantidad: ${product.cantidad}</p>
        <span class="sumar"> ➕ </span>
        
        <p>Total: ${product.cantidad * product.precio}</p>
        `;

        modalContainer.append(carritoContent)

        let restar = carritoContent.querySelector(".restar")

        restar.addEventListener("click" , () =>{
            if (product.cantidad !== 1) {
                product.cantidad-- ;
            }
            saveLocal();
            pintarCarrito () ;
        });

        let sumar = carritoContent.querySelector(".sumar")

        sumar.addEventListener ("click", () => {
            product.cantidad++;
            saveLocal();
            pintarCarrito () ;
        })


        let eliminar = document.createElement("span");
        eliminar.innerText ="🗑";
        eliminar.className= "delete-product";
        carritoContent.append(eliminar);

        eliminar.addEventListener("click", eliminarProducto);

    });



    const total = carrito.reduce ((contador , el) => contador + el.precio * el.cantidad, 0);

    const totalBuying = document.createElement("div");
    totalBuying.className ="total-content"
    totalBuying.innerHTML =`total a pagar: $ ${total} `;
    modalContainer.append(totalBuying);
    
    
    if (carrito.length > 0) {
        
        const botonCompra = document.createElement("button");
        botonCompra.innerText = "Comprar";
        botonCompra.className = "boton-compra";
        botonCompra.addEventListener("click", () => {
            Swal.fire({
                icon: 'success',
                title: 'Compra exitosa',
                text: 'Recibirás la factura en tu dirección de correo. ¡Gracias por tu compra!',
                showCancelButton: false,
                confirmButtonText: 'Ok'
            }).then((result) => {
                if (result.isConfirmed) {
                    carrito = [];
                    saveLocal();
                    carritoCounter();
                    pintarCarrito();
                }
            });
        });

    
        modalContainer.append(botonCompra);
    }

    
};



verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = () => {
    const foundId = carrito.find((element) => element.id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });
    carritoCounter();
    saveLocal();
    pintarCarrito();
    
}

const carritoCounter = ()  => {
    cantidadCarrito.style.display = "block";

    const carritoLength = carrito.length

    localStorage.setItem("carritoLength" , JSON.stringify(carritoLength))

    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));

}

carritoCounter () ;