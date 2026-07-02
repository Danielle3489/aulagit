
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
    console.log(`Livro \"${livro.nome}\" adicionado com sucesso!`);
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
    const livro = this.livros.find(l => l.nome.toLowerCase() === nome.toLowerCase());
    if (livro) {
      if (!livro.alugado) {
        livro.alugado = true;
        livro.vezesAlugado += 1;
        console.log(`Livro \"${nome}\" alugado com sucesso.`);
      } else {
        console.log(`Livro \"${nome}\" já está alugado.`);
      }
    } else {
      console.log(`Livro \"${nome}\" não encontrado na biblioteca.`);
    }
  },

  // Função para devolver um livro
  devolverLivro(nome) {
    const livro = this.livros.find(l => l.nome.toLowerCase() === nome.toLowerCase());
    if (livro) {
      if (livro.alugado) {
        livro.alugado = false;
        console.log(`Livro \"${nome}\" devolvido com sucesso.`);
      } else {
        console.log(`Livro \"${nome}\" não estava alugado.`);
      }
    } else {
      console.log(`Livro \"${nome}\" não encontrado na biblioteca.`);
    }
  },

  removerLivro(nome) {
    for (let i = 0; i < this.livros.length; i++) {
      if (this.livros[i].nome.toLowerCase() === nome.toLowerCase()) {
        const removido = this.livros.splice(i, 1);
        console.log("Livro removido com sucesso:", removido[0].nome);
        return; // Sai da função, pois o livro foi encontrado
      }
    }
    // Esta linha só será executada se o loop terminar sem encontrar o livro
    console.log(`Livro \"${nome}\" não encontrado`);
  },

  buscar(nome) {
    for (let i = 0; i < this.livros.length; i++) {
      const livro = this.livros[i];
      if (livro.nome.toLowerCase() === nome.toLowerCase()) {
        console.log("--- Livro Encontrado ---");
        console.log("Nome: " + livro.nome);
        console.log("Autor: " + livro.autor);
        console.log("Está alugado? " + (livro.alugado ? "Sim" : "Não"));
        console.log("------------------------");
        return livro; // Retorna o objeto do livro encontrado
      }
    }

    // Esta parte só é executada se o loop terminar sem encontrar o livro
    console.log(`Livro \"${nome}\" não encontrado.`);
    return null; // Retorna nulo se o livro não for encontrado
  }
};

// --- Testes ---
biblioteca.adicionarLivro("O Pequeno Príncipe", "Antoine de Saint-Exupéry", "Infantil", "1943");
biblioteca.adicionarLivro("O Senhor dos Anéis", "J.R.R. Tolkien", "Fantasia", "1954");

console.log("\n--- Estado Inicial ---");
biblioteca.mostrarLivros();

console.log("\n--- Alugando Livros ---");
biblioteca.alugarLivro("O Pequeno Príncipe");
biblioteca.alugarLivro("Livro Inexistente");
biblioteca.mostrarLivros();

console.log("\n--- Devolvendo um Livro ---");
biblioteca.devolverLivro("o pequeno príncipe"); // Testando com minúsculas
biblioteca.mostrarLivros();

console.log("\n--- Buscando um Livro ---");
biblioteca.buscar("O Senhor dos Anéis");
biblioteca.buscar("Harry Potter"); // Livro inexistente

console.log("\n--- Removendo um Livro ---");
biblioteca.removerLivro("O Pequeno Príncipe");
biblioteca.mostrarLivros();
