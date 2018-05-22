function muestra(element, link) {
  if (element.style.display === "block") {
    element.style.display = "none";
    document.getElementById(link).innerHTML = "Consultar";
  } else {
    element.style.display = "block";
    document.getElementById(link).innerHTML = "Ocultar";
  }
}
