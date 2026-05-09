document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll('.contentscreen').forEach(screen => {
    const button = screen.querySelector('.projektbutton');
    const bilder = screen.querySelectorAll('.bild');
    const count = screen.querySelectorAll('.counter');

    let currentIndex = 0;

    // erstes Bild aktiv setzen
    bilder[currentIndex].classList.remove('inactive');
    bilder[currentIndex].classList.add('active');
    count[currentIndex].classList.remove('inactive');
    count[currentIndex].classList.add('active');

    button.addEventListener('click', () => {
      // aktuelles Bild deaktivieren
      bilder[currentIndex].classList.remove('active');
      bilder[currentIndex].classList.add('inactive');
      count[currentIndex].classList.remove('active');
      count[currentIndex].classList.add('inactive');

      // nächstes Bild (loop)
      currentIndex = (currentIndex + 1) % bilder.length;

      // neues Bild aktivieren
      bilder[currentIndex].classList.remove('inactive');
      bilder[currentIndex].classList.add('active');
      count[currentIndex].classList.remove('inactive');
      count[currentIndex].classList.add('active');
    });
  });

  const buttonmouse = document.getElementById("buttonmouse");
  const screens = document.querySelectorAll(".contentscreen");

  screens.forEach(screen => {
    screen.addEventListener("mouseenter", () => {
      buttonmouse.style.visibility = "visible";
      buttonmouse.style.cursor = "none";

    });
    screen.addEventListener("mouseleave", () => {
      buttonmouse.style.visibility = "hidden";
    });
  });

  document.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;

    buttonmouse.style.left = x + "px";
    buttonmouse.style.top = y + "px";
    // buttonmouse.textContent = `X: ${x} | Y: ${y}`;
  });

});

