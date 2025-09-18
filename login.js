const email = usuario.email;
const senha = usuario.senha;

function verificarCredenciais(){
    const emailinformado = document.getElementById("email").value;
    const senhainformada = document.getElementById("senha").value;

    if(emailinformado === email){
        alert("Email informado corretamente");

    }
    else
        alert("E-mail informado incorretamente");
}