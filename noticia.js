let noticiasCarregadas = false;

const container = document.getElementById("container");

function lerNoticias(){
    if(!noticiasCarregadas){
        carregarNoticias();
        noticiasCarregadas = true;
    } else {
        container.innerHTML = "";
        noticiasCarregadas = false;
    }
}

function carregarNoticias(){
    dados.forEach (noticia => {
        const cartao = document.createElement('div');
    });
}