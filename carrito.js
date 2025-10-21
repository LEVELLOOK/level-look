
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

const listaCarrito = document.getElementById('lista-carrito');
const totalElemento = document.getElementById('total');

actualizarCarrito();

function agregarAlCarrito(boton) {
  const producto = boton.closest('.producto');
  const nombre = producto.querySelector('h2').textContent;
  const precioTexto = producto.querySelector('.precio').textContent;
  const precio = parseFloat(precioTexto.replace(/[^0-9.]/g, ''));

  carrito.push({ nombre, precio });
  guardarCarrito();
  actualizarCarrito();
}

function actualizarCarrito() {
  listaCarrito.innerHTML = '';
  let total = 0;

  carrito.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.nombre} - $${item.precio.toFixed(2)}`;

    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = '❌';
    btnEliminar.onclick = () => eliminarDelCarrito(index);
    li.appendChild(btnEliminar);

    listaCarrito.appendChild(li);
    total += item.precio;
  });

  totalElemento.textContent = `Total: $${total.toFixed(2)}`;
}


function guardarCarrito() {
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  guardarCarrito();
  actualizarCarrito();
}


