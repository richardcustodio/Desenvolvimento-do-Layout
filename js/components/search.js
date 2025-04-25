document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.querySelector(".search-bar .search-input");
  const searchButton = document.querySelector(".search-bar .search-button");
  const searchMessageContainer = document.getElementById(
    "search-message-container"
  );

  if (searchButton) {
    searchButton.addEventListener("click", function () {
      const searchTerm = searchInput.value.trim();

      if (searchTerm) {
        const message = `Você buscou por: '${searchTerm}'`;
        searchMessageContainer.textContent = message;
        searchMessageContainer.style.display = "block";
      } else {
        searchMessageContainer.style.display = "none"; // Esconde se o campo estiver vazio
      }
    });
  } else {
    console.error("Botão de busca não encontrado no DOM.");
  }
});
