function pesquisar() {
    let section = document.getElementById
    ("resultados-pesquisa")
console.log(section)

let campoPesquisa = document.getElementById
("campo-pesquisa").value

//Se o campoPesquisa for uma string sem nada
if(campoPesquisa == "") {
    section.innerHTML = "<p>Nada foi encontrado</p>"
    return
}
campoPesquisa = campoPesquisa.toLowerCase()

let resultados = "";
let titulo="";
let descricao="";

//para cada dado dentro da lista de dados
for(let dado of dados ) { 
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    // se titulo inculudes campoPesquisa
    // então, faça...
    if(titulo.includes(campoPesquisa)
         || descricao.includes(campoPesquisa))

    {
   // cria um novo elemento
    resultados += `
 <div class="item-resultado">
                <h2>campo-pesquisa
                    <a href="#" target="blank">${dado.titulo}</a>
                </h2>
                <p class="discricao-meta">${dado.descricao}                    
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
            `;
}}

if(!resultados){
    resultados = "<p>Nada foi encontrado</p>"

}
section.innerHTML = resultados;
}