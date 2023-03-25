const carrito = [];
const botonAgregar = document.querySelectorAll(".agregar");

botonAgregar.forEach((boton) => {
  boton.addEventListener("click", () => {
    const nombre = boton.dataset.nombre;
    const precio = Number(boton.dataset.precio);
    const producto = { nombre, precio };
    carrito.push(producto);
    actualizarCarrito();
  });
});

function actualizarCarrito() {
  const carritoElemento = document.getElementById("carrito");
  carritoElemento.textContent = `Carrito (${carrito.length})`;
}

const contactoDropdown = document.querySelector('.dropdown');
const contactoMenu = contactoDropdown.querySelector('.dropdown-menu');
const contactoLink = contactoDropdown.querySelector('a');
contactoLink.addEventListener('click', () => {
  if (contactoMenu.style.display === 'none') {
    contactoMenu.style.display = 'block';
  } else {
    contactoMenu.style.display = 'none';
  }
});

  document.addEventListener('click', function(event) {
    dropdowns.forEach(function(dropdown) {
      var dropdownMenu = dropdown.querySelector('.dropdown-menu');
      if (dropdownMenu.classList.contains('active') && !dropdown.contains(event.target)) {
        dropdownMenu.classList.remove('active');
      }
    });
  });

var botonesPestanas = document.querySelectorAll(".boton-pestanas");
var contenidoPestanas = document.querySelectorAll(".pestana");

// Mostrar la primera pestaña por defecto
contenidoPestanas[0].classList.add("pestana-activa");

botonesPestanas.forEach(function(boton) {
  boton.addEventListener("click", function() {
    // Ocultar todas las pestañas
    contenidoPestanas.forEach(function(pestana) {
      pestana.classList.remove("pestana-activa");
    });

    // Mostrar la pestaña correspondiente al botón
    var pestanaMostrar = document.querySelector("#" + boton.dataset.pestana);
    pestanaMostrar.classList.add("pestana-activa");

    // Cambiar el estilo del botón activo
    botonesPestanas.forEach(function(boton) {
      boton.classList.remove("pestana-activa");
    });
    boton.classList.add("pestana-activa");
  });
});
const text = "Create, Post & Sell P2P";
const speed = 70; // Velocidad de escritura en milisegundos
let timeoutId; // Variable para almacenar el ID del temporizador

function typeWriter() {
  const demo = document.getElementById("demo");
  if (i < text.length) {
    demo.innerHTML += text.charAt(i);
    i++;
    timeoutId = setTimeout(typeWriter, speed);
  }
}

function reset() {
  const demo = document.getElementById("demo");
  demo.innerHTML = "";
  i = 0;
  clearTimeout(timeoutId);
}

let i = 0;
typeWriter();

const demo = document.getElementById("demo");
demo.addEventListener("mouseenter", function() {
  reset();
  typeWriter();
});

demo.addEventListener("mouseleave", function() {
  reset();
  demo.innerHTML = text;
});

const servicio = document.querySelector('.servicio');
const prevBtn = document.querySelectorAll('.prev');
const nextBtn = document.querySelectorAll('.next');
const servicioImgs = document.querySelectorAll('.servicio img');

let contador = 1;
const tamañoImg = servicioImgs[0].clientWidth;

servicio.style.transform = 'translateX(' + (-tamañoImg * contador) + 'px)';

// Botón de navegación "Siguiente"
nextBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    if (contador >= servicioImgs.length - 1) return;
    servicio.style.transition = 'transform 0.4s ease-in-out';
    contador++;
    servicio.style.transform = 'translateX(' + (-tamañoImg * contador) + 'px)';
  });
});

// Botón de navegación "Anterior"
prevBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    if (contador <= 0) return;
    servicio.style.transition = 'transform 0.4s ease-in-out';
    contador--;
    servicio.style.transform = 'translateX(' + (-tamañoImg * contador) + 'px)';
  });
});

// Se reinicia la galería cuando se llega al final o al principio
servicio.addEventListener('transitionend', () => {
  if (servicioImgs[contador].alt === 'Servicio 1') {
    servicio.style.transition = 'none';
    contador = servicioImgs.length - 2;
    servicio.style.transform = 'translateX(' + (-tamañoImg * contador) + 'px)';
  }
  if (servicioImgs[contador].alt === 'Servicio 3') {
    servicio.style.transition = 'none';
    contador = servicioImgs.length - contador;
    servicio.style.transform = 'translateX(' + (-tamañoImg * contador) + 'px)';
  }
});