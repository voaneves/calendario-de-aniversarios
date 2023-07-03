(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const tabela = document.getElementById("tabela");
    let aniversarios = JSON.parse(localStorage.getItem("aniversarios")) || [];
    let aniversariosSorted =
      JSON.parse(localStorage.getItem("aniversariosSorted")) || [];
    let sorted = JSON.parse(localStorage.getItem("sorted")) || false;
    document.getElementById("sort").addEventListener("click", toggleSort);

    document.getElementById("checkbox").checked = sorted; // check if it was sorted

    function toggleSort() {
      sorted = !sorted;
      localStorage.setItem("sorted", JSON.stringify(sorted));
      atualizarTabela();
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const nome = document.getElementById("nome").value;
      const data = new Date(
        document.getElementById("data").value
      ).toLocaleDateString(undefined, { timeZone: "UTC" });

      if (nome && data) {
        aniversarios.push({ nome, data });
        aniversariosSorted = duplicateAndGetNextBirthday(aniversarios);
        saveAniversarios();
        form.reset();
        atualizarTabela();
      }
    });

    tabela.addEventListener("click", function (event) {
      const button = event.target;
      if (button.matches("button.editar")) editarAniversario(button);
      else if (button.matches("button.remover")) removerAniversario(button);
    });

    function editarAniversario(button) {
      const row = button.closest("tr");
      const aniversario = aniversarios.find(
        (item) => item.nome === row.cells[0].textContent
      );
      const novoNome = prompt("Novo nome:", aniversario.nome);

      if (novoNome) {
        aniversario.nome = novoNome;
        const novaData = prompt("Nova data:", aniversario.data);

        if (novaData) {
          aniversario.data = novaData;
          aniversariosSorted = duplicateAndGetNextBirthday(aniversarios);
          saveAniversarios();
          atualizarTabela();
        }
      }
    }

    function removerAniversario(button) {
      const row = button.closest("tr");
      const index = row.rowIndex - 1;

      if (index >= 0 && index < aniversarios.length) {
        aniversarios.splice(index, 1);
        aniversariosSorted = duplicateAndGetNextBirthday(aniversarios);
        saveAniversarios();
        tabela.deleteRow(index + 1); // Add 1 to row index to account for table header
      }
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
        <th>Nome</th>
        <th>Data</th>
        <th>Idade</th>
        <th>Ações</th>
      </tr>`;

      const array = sorted ? aniversariosSorted : aniversarios;

      array.forEach((aniversario) => {
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

    function duplicateAndGetNextBirthday(birthdays) {
      const today = new Date();
      const duplicate = [...birthdays].sort((a, b) => {
        const aNextBirthday = getNextBirthday(a.data, today);
        const bNextBirthday = getNextBirthday(b.data, today);
        return aNextBirthday - bNextBirthday;
      });

      return duplicate;
    }

    function getNextBirthday(date, today) {
      const [day, month, year] = date.split("/");
      const birthday = new Date(today.getFullYear(), month - 1, day);

      if (
        birthday.getMonth() < today.getMonth() ||
        (birthday.getMonth() === today.getMonth() &&
          birthday.getDate() < today.getDate())
      ) {
        birthday.setFullYear(today.getFullYear() + 1);
      }

      return birthday;
    }

    function saveAniversarios() {
      localStorage.setItem("aniversarios", JSON.stringify(aniversarios));
      localStorage.setItem(
        "aniversariosSorted",
        JSON.stringify(aniversariosSorted)
      );
    }

    function initTheme() {
      const themeButton = document.querySelector(".theme");
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

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal-one");
  let modalClicked = JSON.parse(localStorage.getItem("modalClicked")) || false;

  if (!clicked) {
    modal.classList.add("open");

    const exits = modal.querySelectorAll(".modal-exit");
    exits.forEach(function (exit) {
      exit.addEventListener("click", function (event) {
        modalClicked = true;
        localStorage.setItem("modalClicked", JSON.stringify(sorted));
        event.preventDefault();
        modal.classList.remove("open");
      });
    });
  }
});
