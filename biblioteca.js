
const biblioteca = {
  livros: [], // Array (lista) para guardar os livros

  // Função para adicionar um novo livro
  adicionarlivro(nome, biografia, autor, personagem, enredo, capitulo, pagina) {
    const livro = {
      nome: nome,
      biografia: biografia,
      autor: autor,
      personagem: personagem,
      enredo: enredo, // Corrigido de "enredor"
      capitulo: capitulo, // Corrigido de "capitulos"
      pagina: pagina,
      alugado: false,
      vezesalugado: 0,
    }; // Objeto livro
    this.livros.push(livro);
    console.log("Livro adicionado:", livro.nome);
  },

  // Função para mostrar todos os livros da biblioteca
  mostralivro() {
    console.log("--- Livros na Biblioteca ---");
    for (let i = 0; i < this.livros.length; i++) { // Sintaxe do loop corrigida
      const livro = this.livros[i];
      console.log(livro);
    }
    console.log("--------------------------");
  }
};

// --- Exemplo de Uso ---

// 1. Adicionando o livro "O Pequeno Príncipe"
biblioteca.adicionarlivro(
  "O Pequeno Príncipe",
  "Biografia do autor: Antoine de Saint-Exupéry foi um escritor, jornalista e piloto francês.",
  "Antoine de Saint-Exupéry",
  "O Pequeno Príncipe, a Raposa, a Rosa",
  "A história de um piloto que encontra um jovem príncipe que viajou entre planetas.",
  27,
  96
);

// 2. Mostrando a lista de livros para confirmar que foi adicionado
biblioteca.mostralivro();
