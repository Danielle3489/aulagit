
const biblioteca = {
  livros: [], // Array (lista) para guardar os livros

  // Função para adicionar um novo livro
  adicionarlivro(nome,autor,genero,ano) {
    const livro = {
      nome: nome,
    autor:autor
    genero:genero
    ano:ano
  
      alugado: false, // Começa como "não alugado"
      vezesalugado: 0,
    };
    this.livros.push(livro);
    console.log(`Livro "${livro.nome}" adicionado com sucesso!`);
  },

  // Função para mostrar todos os livros da biblioteca
  mostralivro() {
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

  // <<-- NOVA FUNÇÃO PARA ALUGAR -->>
  alugarLivro(nome) {
    for (let i=0;i<this.livros.length;i++){
const p=this.livros[i]
if(p.nome=nome){
  if(p.adicionarlivro==true&&p.estoque>0){
    p.devolverLivro==false;
    p.alugado==true;
    p.vezesalugado+=1
    p.estoque-+1
    console.log(nome,"alugado com sucessso")
    elseif (p.estoque<=0)
    console.log ("0"+nome+"não está disponivel")
    return;
  }else{
  console.log("0"+nome+'ja esta alugado')
return;}
}
}
console.log ("0+nome+nao esta disponivel")
}

}

biblioteca.adicionarlivro("pequeno principe","antonie de saint-exupery","infantil","1943")