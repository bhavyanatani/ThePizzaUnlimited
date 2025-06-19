function toggleMobileNav() {
    const nav = document.getElementById('mobile-menu');
    nav.classList.toggle('hidden');
}

function slideLeft() {
  document.getElementById("menuRow1").scrollLeft -= 250;
  document.getElementById("menuRow2").scrollLeft -= 250;
}

function slideRight() {
  document.getElementById("menuRow1").scrollLeft += 250;
  document.getElementById("menuRow2").scrollLeft += 250;
}
