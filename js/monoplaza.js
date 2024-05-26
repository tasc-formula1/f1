document.addEventListener('DOMContentLoaded', () => {
  const logoElement = document.getElementById('logoImagen');

  function cambiarLogo() {
    if (window.innerWidth >= 927) {
      logoElement.src = 'img/download.png';
      logoElement.alt = 'Nuevo Logo';
    } else if (window.innerWidth <= 700) {
      logoImagen.src = 'img/download.png';
      logoImagen.alt = 'Nuevo Logo';
    }  else {
      logoElement.src = 'img/F1-in-Schools-Stretch-Black-scaled-e1608034793347.png';
      logoElement.alt = 'Logo';
    }
  }

  cambiarLogo();

  window.addEventListener('resize', cambiarLogo);
});
