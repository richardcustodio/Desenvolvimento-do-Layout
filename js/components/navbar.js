document.addEventListener("DOMContentLoaded", function () {
  const categoriesToggle = document.querySelector(".categories-toggle"); // Ainda selecionamos, mas não usaremos o listener diretamente
  const menu = document.querySelector(".menu");
  const submenuParents = document.querySelectorAll(
    ".main-navigation .menu li.has-submenu"
  );
  const allCategoriesButton = document.querySelector(".all-categories");
  const mainNavigation = document.querySelector(".main-navigation"); // Seleciona o navbar

  // Abre/fecha o menu principal E todos os submenus ao clicar em "Todas as Categorias" (MOBILE)
  if (allCategoriesButton) {
    allCategoriesButton.addEventListener("click", function (event) {
      event.preventDefault();

      // Abre/fecha o menu principal
      if (window.innerWidth <= 768 && menu) {
        menu.classList.toggle("open");

        // Se o menu estiver fechando, também fecha todos os submenus
        if (!menu.classList.contains("open")) {
          submenuParents.forEach((parent) => {
            const submenu = parent.querySelector(".submenu");
            if (submenu) {
              submenu.style.display = "none";
            }
            parent.classList.remove("open-submenu"); // Garante que a classe visual também seja removida
          });
        }
      } else if (window.innerWidth <= 768) {
        console.log("Elemento .menu não encontrado!");
      } else {
        // Comportamento anterior para desktop (abrir/fechar todos os submenus)
        const allSubmenusVisible = Array.from(submenuParents).every(
          (parent) => {
            const submenu = parent.querySelector(".submenu");
            return submenu && submenu.style.display === "block";
          }
        );

        submenuParents.forEach((parent) => {
          const submenu = parent.querySelector(".submenu");
          if (submenu) {
            submenu.style.display = allSubmenusVisible ? "none" : "block";
          }
        });
      }
    });
  } else {
    console.log("Elemento .all-categories não encontrado!");
  }

  // Abre o submenu ao passar o mouse sobre o item do menu (desktop only)
  submenuParents.forEach((parent) => {
    parent.addEventListener("mouseenter", function () {
      if (window.innerWidth > 768) {
        const submenu = this.querySelector(".submenu");
        if (submenu) {
          submenu.style.display = "block";
        }
      }
    });

    parent.addEventListener("mouseleave", function () {
      if (window.innerWidth > 768) {
        const submenu = this.querySelector(".submenu");
        if (submenu) {
          submenu.style.display = "none";
        }
      }
    });
  });

  // Fecha submenus ao clicar fora do navbar (desktop only)
  document.addEventListener("click", function (event) {
    if (window.innerWidth > 768) {
      const isClickInsideNavbar = mainNavigation.contains(event.target);
      const isClickInsideSubmenu = Array.from(submenuParents).some((parent) =>
        parent.contains(event.target)
      );

      if (!isClickInsideNavbar && !isClickInsideSubmenu) {
        submenuParents.forEach((parent) => {
          const submenu = parent.querySelector(".submenu");
          if (submenu) {
            submenu.style.display = "none";
          }
        });
      }
    }
  });
});

// Agora que adicionamos essa aplicação, vamos adiciona o funciomento que permiti que os submenus apareça caso sejá clicados em seu respectivo menu dentro dessa resolução
