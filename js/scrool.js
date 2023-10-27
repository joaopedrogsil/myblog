document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href*="#"]');
  for (const link of links) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const yOffset =
          targetElement.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: yOffset,
          behavior: "smooth",
        });
      }
    });
  }
});
