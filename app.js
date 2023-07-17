window.addEventListener("scroll", function () {
  var navLinks = document.querySelectorAll(".nav-list a");
  var sections = document.querySelectorAll("section");

  sections.forEach(function (section, index) {
    var rect = section.getBoundingClientRect();
    var link = navLinks[index];

    if (rect.top <= 100 && rect.bottom >= 100) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
