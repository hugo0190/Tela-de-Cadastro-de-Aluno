function cadastrar() {
 
  
  var nome          = document.getElementById("nome").value;
  var cpf           = document.getElementById("cpf").value;
  var dataNasc      = document.getElementById("dataNasc").value;
  var telefone      = document.getElementById("telefone").value;
  var email         = document.getElementById("email").value;
  var endereco      = document.getElementById("endereco").value;
  var cidade        = document.getElementById("cidade").value;
  var estado        = document.getElementById("estado").value;
  var cep           = document.getElementById("cep").value;
  var curso         = document.getElementById("curso").value;
  var matricula     = document.getElementById("matricula").value;
  var senha         = document.getElementById("senha").value;
  var confirmarSenha = document.getElementById("confirmarSenha").value;
 

  if (nome == "" || cpf == "" || dataNasc == "" || telefone == "" ||
      email == "" || endereco == "" || cidade == "" || estado == "" ||
      cep == "" || curso == "" || matricula == "" || senha == "" || confirmarSenha == "") {
 
  
    document.getElementById("mensagemErro").classList.remove("d-none");
    document.getElementById("mensagemSucesso").classList.add("d-none");
    return;
  }

  if (senha != confirmarSenha) {
    document.getElementById("mensagemErro").innerText = "As senhas não coincidem.";
    document.getElementById("mensagemErro").classList.remove("d-none");
    document.getElementById("mensagemSucesso").classList.add("d-none");
    return;
  }
 

  document.getElementById("mensagemErro").classList.add("d-none");
  document.getElementById("mensagemSucesso").classList.remove("d-none");
}