function muestraMenu(evento) {      // Esta función se activa cuando se hace clic en el botón para mostrar el menú.
  evento.preventDefault();      // Evita que se ejecute el comportamiento predeterminado del evento (por ejemplo, seguir un enlace)
  evento.stopPropagation();       // Detiene la propagación del evento a otros elementos del DOM
  document.querySelector(".menu-nav").classList.toggle("visible");        // Cambia la clase "visible" del menú, haciendo que se muestre u oculte
}

function ocultaMenu(evento) {     // Esta función se activa cuando se hace clic en el botón para ocultar el menú.
  evento.preventDefault();        // Evita que se ejecute el comportamiento predeterminado del evento
  document.querySelector(".menu-nav").classList.remove("visible");        // Elimina la clase "visible" del menú, ocultándolo
}

function clickFueraDeMenu(evento) {     // Esta función se activa cuando se hace clic fuera del menú.
  if (evento.target.closest(".menu-nav")) {       // Si el clic fue dentro del menú, no hagas nada
    return;
  }
  document.querySelector(".menu-nav").classList.remove("visible");        // Si el clic fue fuera del menú, ocúltalo
}

function teclaEscCierraMenu(evento) {
  if (evento.key === "Escape") {
    document.querySelector(".menu-nav").classList.remove("visible");
  }
}

document.querySelector("#mostrar-menu").addEventListener("click", muestraMenu);
document.querySelector("#cerrar-menu").addEventListener("click", ocultaMenu);
document.addEventListener("click", clickFueraDeMenu);
document.addEventListener("keydown", teclaEscCierraMenu);

function irAInicio() {
  window.location.href = "index.html";
}

function ocultarMenuAlCargar() {
  document.querySelector(".menu-nav").classList.remove("visible");
}

document.addEventListener("DOMContentLoaded", ocultarMenuAlCargar);

  