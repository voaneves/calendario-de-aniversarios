(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const tabela = document.getElementById("tabela");
    let aniversarios = JSON.parse(localStorage.getItem("aniversarios")) || [];

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const nome = document.getElementById("nome").value;
      const data = new Date(
        document.getElementById("data").value
      ).toLocaleDateString(undefined, {
        timeZone: "UTC",
      });

      if (nome && data) {
        aniversarios.push({ nome, data });
        localStorage.setItem("aniversarios", JSON.stringify(aniversarios));

        form.reset();
        atualizarTabela();
      }
    });

    tabela.addEventListener("click", function (event) {
      const button = event.target;
      if (button.matches("button.editar")) {
        editarAniversario(button);
      } else if (button.matches("button.remover")) {
        removerAniversario(button);
      }
    });

    function editarAniversario(button) {
      const row = button.closest("tr");
      const index = row.rowIndex - 1;
      const aniversario = aniversarios[index];
      const novoNome = prompt("Novo nome:", aniversario.nome);
      const novaData = prompt("Nova data:", aniversario.data);

      if (novoNome && novaData) {
        aniversario.nome = novoNome;
        aniversario.data = novaData;
        localStorage.setItem("aniversarios", JSON.stringify(aniversarios));
        atualizarTabela();
      }
    }

    function removerAniversario(button) {
      const row = button.closest("tr");
      const index = row.rowIndex - 1;
      aniversarios.splice(index, 1);
      localStorage.setItem("aniversarios", JSON.stringify(aniversarios));
      tabela.deleteRow(index);
    }

    function calcularIdade(date) {
      const [day, month, year] = date.split("/");
      const birthdateTimeStamp = new Date(`${year}-${month}-${day}`);
      const currentTimestamp = Date.now();
      const difference = currentTimestamp - birthdateTimeStamp.getTime();
      const currentAge = Math.floor(
        difference / (1000 * 60 * 60 * 24 * 365.25)
      );
      return currentAge;
    }

    function atualizarTabela() {
      tabela.innerHTML = `<tr>
        <th class="order">Nome</th>
        <th class="order">Data</th>
        <th class="order">Idade</th>
        <th>Ações</th>
      </tr>`;

      aniversarios.forEach((aniversario, index) => {
        const row = tabela.insertRow();
        row.innerHTML = `
          <td>${aniversario.nome}</td>
          <td>${aniversario.data.substring(0, 5)}</td>
          <td>${calcularIdade(aniversario.data)}</td>
          <td>
            <button class="editar">Editar</button>
            <button class="remover">Remover</button>
          </td>
        `;
      });
    }

    function initTheme() {
      const themeButton = document.querySelector(".theme");
      const darkMode = window.matchMedia("(prefers-color-scheme: dark)");
      themeButton.addEventListener("click", toggleTheme);
    }

    function toggleTheme() {
      const darkMode = window.matchMedia("(prefers-color-scheme: dark)");
      document.body.classList.toggle(
        darkMode.matches ? "light-mode" : "dark-mode"
      );
    }

    form.reset();
    atualizarTabela();
    initTheme();
  });
})();
