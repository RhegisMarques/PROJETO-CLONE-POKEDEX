var formulario = document.querySelector('form')
formulario.addEventListener('submit', function(e){

    // BLOQUEIA O REFRESH DA PÁGINA
    e.preventDefault()

    // URL DE PESQUISA
    let urlForm = "https://pokeapi.co/api/v2/pokemon/"

    // VALOR DO INPUT NAME
    let nome = document.getElementById("name")
    
    // CONCATENA A URL COM INPUT
    urlForm = urlForm + this.name.value 

    //TRANSFORM OS VALORES EM MINÚSCULAS
    urlForm = urlForm.toLocaleLowerCase()

    // ID CONTENT
    let resposta = document.getElementById('content')

    // ID IMGPOKEMON
    let imagem = document.getElementById('imgPokemon')

    // RESPOSTA EM HTML
    let html = ''

    fetch(urlForm)
        .then(resposta => resposta.json())
        .then(function(data){
            console.log(data)
           
            html = 'Nome: ' + maiuscula(data.name) + '<br>'
            html = html + 'Tipo: ' + maiuscula(data.types[0].type.name)
            resposta.innerHTML = html

            imagem.innerHTML = "<img src='" + data.sprites.front_default + "'><img src='" + data.sprites.back_default + "'>"
        })
        .catch(function(err){
                if(err =='SyntaxError: Unexpected token N in JSON at position 0'){
                    html = 'Pokémon não encontrado !'
                } else {
                
                     html = err
                }     
                 resposta.innerHTML=html
        })

});

function maiuscula(val){
    return val[0].toUpperCase() + val.substr(1)
}


