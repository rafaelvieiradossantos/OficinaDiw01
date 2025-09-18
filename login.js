const email = usuario.email;
const senha = usuario.senha;

function verificarCredenciais(){
    const emailinformado = document.getElementById("email").value;
    const senhainformada = document.getElementById("senha").value;

    if(emailinformado === email){
        // alert("Email informado corretamente");
        if(senhainformada === senha){
            // alert("Senha informada corretamente!");
            window.location = "home.html";
        }
        else
            alert("Senha informada incorretamente!");
    }
    else
        alert("E-mail informado incorretamente!");
}