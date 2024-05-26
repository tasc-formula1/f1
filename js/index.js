document.addEventListener('DOMContentLoaded', () => {
  const textoCarrusel = document.querySelector('.texto-carrusel');
  const logoImagen = document.getElementById('logoImagen');

  function toggleTextoCarrusel() {
    textoCarrusel.style.display = window.innerWidth <= 838 ? 'block' : 'none';
  }

  function cambiarLogo() {
    if (window.innerWidth >= 927) {
      logoImagen.src = 'img/download.png';
      logoImagen.alt = 'Nuevo Logo';
    } else if (window.innerWidth <= 700) {
      logoImagen.src = 'img/download.png';
      logoImagen.alt = 'Nuevo Logo';
    } else {
      logoImagen.src = 'img/F1-in-Schools-Stretch-Black-scaled-e1608034793347.png';
      logoImagen.alt = 'Logo';
    }
  }

  toggleTextoCarrusel();
  cambiarLogo();

  window.addEventListener('resize', () => {
    toggleTextoCarrusel();
    cambiarLogo();
  });
});
