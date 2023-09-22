let btnPreco = document.getElementById("btnOrdenarPorPreco");
btnPreco.addEventListener("click, ordenarPrecos");

function ordenarPrecos() {
  let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
  exibirLivros(livrosOrdenados);
}
