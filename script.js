const nav = document.getElementById("nav");

// ketika scrool dijalankan
window.addEventListener("scroll", function () {
  scrollposition = window.scrollY;
  // pengkondisian! if else if
  if (scrollposition >= 60) {
    nav.classList.add("nav-dark");

    // ketika di scrool ke atas balik lagi transparan
  } else if (scrollposition <= 60) {
    nav.classList.remove("nav-dark");
  }
});
