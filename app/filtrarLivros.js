function filtrarLivros() {
  const elementoBtn = document.getElementById("this.id");
  const categoria = elementoBtn.value;

  let livrosFiltrados = livros.filter((livro) => livro.categoria == categoria);
  exibirLivros(livrosFiltrados);
}
