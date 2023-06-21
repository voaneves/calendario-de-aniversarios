const form = document.getElementById("form");
const tabela = document.getElementById("tabela");
let aniversarios = [];

if (localStorage.getItem("aniversarios")) {
  aniversarios = JSON.parse(localStorage.getItem("aniversarios"));
  atualizarTabela();
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  adicionarAniversario();
});

function adicionarAniversario() {
  const nome = document.getElementById("nome").value;
  const data = new Date(
    document.getElementById("data").value
  ).toLocaleDateString(undefined, { timeZone: "UTC" });

  if (nome && data) {
    const aniversario = {
      nome: nome,
      data: data,
    };

    aniversarios.push(aniversario);
    localStorage.setItem("aniversarios", JSON.stringify(aniversarios));

    form.reset();
    atualizarTabela();
  }
}

function editarAniversario(button) {
  const row = button.parentNode.parentNode;
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
  const row = button.parentNode.parentNode;
  const index = row.rowIndex - 1;
  aniversarios.splice(index, 1);
  localStorage.setItem("aniversarios", JSON.stringify(aniversarios));
  tabela.deleteRow(row.rowIndex);
}

function calcularIdade(date) {
  const [day, month, year] = date.split("/");
  const birthdateTimeStamp = new Date(`${year}-${month}-${day}`);
  const currentTimestamp = Date.now();
  const difference = currentTimestamp - birthdateTimeStamp.getTime();
  const currentAge = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));
  return currentAge;
}

function atualizarTabela() {
  tabela.innerHTML =
    "<tr><th class='order'>Nome</th><th class='order'>Data</th><th class='order'>Idade</th><th>Ações</th></tr>";

  aniversarios.forEach((aniversario) => {
    const row = tabela.insertRow();
    const colNome = row.insertCell(0);
    const colData = row.insertCell(1);
    const colIdade = row.insertCell(2);
    const colAcoes = row.insertCell(3);

    colNome.textContent = aniversario.nome;
    colData.textContent = aniversario.data.substring(0, 5);
    colIdade.textContent = calcularIdade(aniversario.data);
    colAcoes.innerHTML = `<button onclick="editarAniversario(this)">Editar</button>
                          <button onclick="removerAniversario(this)">Remover</button>`;
  });
}

function initTheme() {
  const themeButton = document.querySelector(".theme");
  const darkMode = window.matchMedia("(prefers-color-scheme: dark)");
  themeButton.addEventListener("click", toggleTheme);
}

function toggleTheme() {
  const darkMode = window.matchMedia("(prefers-color-scheme: dark)");
  document.body.classList.toggle(darkMode.matches ? "light-mode" : "dark-mode");
}

initTheme();
