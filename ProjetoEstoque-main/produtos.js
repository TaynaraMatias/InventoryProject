carregarProdutos();

document.getElementById("formCadastroProduto").addEventListener("submit", function(event){
    event.preventDefault();

    let tipoMetodo = "POST";
    let idProduto = document.getElementById("inputId").value;
    if(idProduto !== ""){
        tipoMetodo = "PUT";
    }
    fetch('http://localhost:8080/produtos', {
        method: tipoMetodo,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            id: idProduto,
            nome: document.getElementById("inputNome").value, 
            quantidade: document.getElementById("inputQuantidade").value, 
            preco: document.getElementById("inputPreco").value, 
         
        })
    }).then( response => {
        if(!response.ok){
            throw new Error(response);
        }
        carregarProdutos();
        document.getElementById("formCadastroProduto").reset();
    }).catch( error => {
        console.log(error);
        alert("Houve um erro. Favor verificar o log.");
    });
});

function carregarProdutos(){
    fetch('http://localhost:8080/produtos', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(response => {
        if(!response.ok){
            throw new Error(response);
        }
        return response.json();
    }).then( content => {
        let table = document.getElementById("tabelaProdutos");
        let tbody = table.getElementsByTagName("tbody")[0];
        tbody.innerHTML = "";
        content.forEach( c => {
            let row = tbody.insertRow();
            let cellId = row.insertCell();
            let cellNome = row.insertCell();
            let cellQuantidade = row.insertCell();
            let cellAcoes = row.insertCell();
            cellId.innerHTML = c.id;
            cellNome.innerHTML = c.nome;
            cellQuantidade.innerHTML = c.quantidade;
            cellAcoes.innerHTML = htmlBotaoApagarProduto(c.id) + htmlBotaoEditarProduto(c.id);
        });
    }).catch( error => {
        console.log(error);
        alert("Houve um erro. Favor verificar o log.");
    });
}

function apagarProduto(id){
    fetch('http://localhost:8080/produtos/' + id, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(response => {
        if(!response.ok){
            throw new Error(response);
        }
        carregarProdutos();
    }).catch( error => {
        console.log(error);
        alert("Houve um erro. Favor verificar o log.");
    });
}

function htmlBotaoApagarProduto(id){
    return `<button class="btn btn-danger" onclick="apagarProduto(${id})">Apagar</button>`;
}

function editarProduto(id){
    fetch('http://localhost:8080/produtos/'+id, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(response => {
        if(!response.ok){
            throw new Error(response);
        }
        return response.json();
    }).then( content =>{
        document.getElementById("inputId").value = content.id;
        document.getElementById("inputNome").value = content.nome;
        document.getElementById("inputQuantidade").value = content.quantidade;
        document.getElementById("inputPreco").value = content.preco;
    }).catch( error => {
        console.log(error);
        alert("Houve um erro. Favor verificar o log.");
    });
}

function htmlBotaoEditarProduto(id){
    return `<button class="btn btn-primary" onclick="editarProduto(${id})">Editar</button>`;
}
