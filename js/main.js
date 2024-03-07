const shopContent= document.getElementById ("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container")

const productos = [
    {
        id:1,
        nombre: "Brand coaching",
        descripcion: "¿Necesitas ayuda para comenzar, o continuar con tu negocio, pero en estos momentos no puedes permitirte contratar a un profesional a tiempo completo? ¿Tienes dificultades para atraer a los clientes adecuados? Si te gusta hacer las cosas por ti misma pero sientes que necesitas una guía inicial para marcar la ruta, este servicio es para ti" ,
        precio : 1000
    
    },
    {
        id:2,
        nombre: "Total branding",
        descripcion:"Sabes lo que quieres y quién eres. También sabes que para vivir de tu pasión online es necesario crear una marca que te represente de verdad y que atraiga de manera natural a los clientes adecuados. Necesitas branding y este servicio está hecho para ti. Te invito a que conozcas los pasos que sigo con mis clientes para construir marcas de valor que funcionan de verdad, que se mantienen en el tiempo y que ayudan a cumplir el propósito por el que han sido creados.",
        precio: 2000

    },
    {
        id:3,
        nombre: "Web experience",
        descripcion:"Tras el branding, ha llegado el momento de crear tu casa digital. Tu centro de operaciones para conectar, comunicar y gestionar todo el universo de tu negocio digital. A través de un estudio previo aplicaremos la personalidad de tu marca en los contenidos, las fotografías y en el diseño. Tu web se verá hermosa, sencilla y funcionalmente perfecta para ti. Te invito a que pasees por mis últimos trabajos en la galería de marcas y navegues por sus páginas. ¡Si quieres, muy pronto podrás tener también tu propia web así!",
        precio:3000
    }
]

let carrito = [] 

productos .forEach ((product) =>{
    let content = document.createElement("section");
    content.className="card";
    content.innerHTML = `
    <h2 class="h-servicios"> ${product.nombre}</h2>
    <p class="p-servicios">${product.descripcion} </p>
    <p class="price">${product.precio} $ </p>
    `;

    shopContent.append(content);

    let comprar = document.createElement("button")
    comprar.innerText = "Agregar al carrito";
    comprar.className = "comprar";
    

    content.append(comprar);

    comprar.addEventListener("click" , () => {
        carrito.push({
            id: product.id,
            nombre: product.nombre,
            precio: product.precio
        })
    })


    
});

verCarrito.addEventListener("click", () => {
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
        <p>${product.precio} $ </p>
        `;

        modalContainer.append(carritoContent)
    });

    const total = carrito.reduce ((acc , el) => acc + el.precio, 0);

    const totalBuying = document.createElement("div");
    totalBuying.className ="total-content"
    totalBuying.innerHTML =`total a pagar: ${total} $`;
    modalContainer.append(totalBuying);

});




