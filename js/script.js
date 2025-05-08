document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navCenter = document.querySelector(".nav-center");
  const navLinks = document.querySelector(".nav-links");
  const icon = document.getElementById("hamburger-icon");

  function updateMobileMenu() {
    if (window.innerWidth <= 768) {
      const existingMobileProfile = document.querySelector(".mobile-profile");
      if (!existingMobileProfile) {
        const profileLi = document.createElement("li");
        profileLi.className = "mobile-profile";
        profileLi.innerHTML = `
          <a href="#">
            <img src="#" alt="Profile">
            Profile
          </a>
        `;
        navLinks.appendChild(profileLi);
      }
    } else {
      const existingMobileProfile = document.querySelector(".mobile-profile");
      if (existingMobileProfile) {
        existingMobileProfile.remove();
      }
    }
  }

  updateMobileMenu();

  window.addEventListener("resize", updateMobileMenu);

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    navCenter.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
      icon.src = "./icons/x.svg";
      icon.alt = "Close menu";

      updateMobileMenu();
    } else {
      icon.src = "./icons/menu.svg";
      icon.alt = "Menu";
    }
  });
});
