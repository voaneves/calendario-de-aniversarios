const form = document.getElementById("form");
const tabela = document.getElementById("tbody");

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
    const row = tabela.insertRow();
    const colNome = row.insertCell(0);
    const colData = row.insertCell(1);
    const colAcoes = row.insertCell(2);

    colNome.textContent = nome;
    colData.textContent = data;
    colAcoes.innerHTML = `<button onclick="editarAniversario(this)">Editar</button>
                          <button onclick="removerAniversario(this)">Remover</button>`;

    form.reset();
  }
}

function editarAniversario(button) {
  const row = button.parentNode.parentNode;
  const colNome = row.cells[0];
  const colData = row.cells[1];
  const nome = colNome.textContent;
  const data = colData.textContent;

  const novoNome = prompt("Novo nome:", nome);
  const novaData = prompt("Nova data:", data);

  if (novoNome && novaData) {
    colNome.textContent = novoNome;
    colData.textContent = novaData;
  }
}

function removerAniversario(button) {
  const row = button.parentNode.parentNode;
  tabela.deleteRow(row.rowIndex);
}
