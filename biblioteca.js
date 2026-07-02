
const biblioteca = {
  livros: [], // Array (lista) para guardar os livros

  // Função para adicionar um novo livro
  adicionarLivro(nome, autor, genero, ano) {
    const livro = {
      nome: nome,
      autor: autor,
      genero: genero,
      ano: ano,
      alugado: false, // Começa como "não alugado"
      vezesAlugado: 0,
    };
    this.livros.push(livro);
    console.log(`Livro "${livro.nome}" adicionado com sucesso!`);
  },

  // Função para mostrar todos os livros da biblioteca
  mostrarLivros() {
    console.log("\n--- Livros na Biblioteca ---");
    if (this.livros.length === 0) {
      console.log("A biblioteca está vazia.");
    } else {
      this.livros.forEach(livro => {
        console.log(livro);
      });
    }
    console.log("--------------------------\n");
  },

  // Função para alugar um livro
  alugarLivro(nome) {
    const livro = this.livros.find(l => l.nome === nome);
    if (livro) {
      if (!livro.alugado) {
        livro.alugado = true;
        livro.vezesAlugado += 1;
        console.log(`Livro "${nome}" alugado com sucesso.`);
      } else {
        console.log(`Livro "${nome}" já está alugado.`);
      }
    } else {
      console.log(`Livro "${nome}" não encontrado na biblioteca.`);
    }
  },

  // Função para devolver um livro
  devolverLivro(nome) {
    const livro = this.livros.find(l => l.nome === nome);
    if (livro) {
      if (livro.alugado) {
        livro.alugado = false;
        console.log(`Livro "${nome}" devolvido com sucesso.`);
      } else {
        console.log(`Livro "${nome}" não estava alugado.`);
      }
    } else {
      console.log(`Livro "${nome}" não encontrado na biblioteca.`);
    }
  }
};

biblioteca.adicionarLivro("O Pequeno Príncipe", "Antoine de Saint-Exupéry", "Infantil", "1943");
biblioteca.mostrarLivros();
biblioteca.alugarLivro("O Pequeno Príncipe");
biblioteca.mostrarLivros();
biblioteca.devolverLivro("O Pequeno Príncipe");
biblioteca.alugarLivro("Livro Inexistente");
biblioteca.devolverLivro("pequeno principe")
biblioteca.mostrarLivros();
