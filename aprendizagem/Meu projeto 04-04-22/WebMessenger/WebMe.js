function enviamsg() {
  msg = document.getElementById("caixatxt").value;
  const novamsg = document.createElement("li");
  novamsg.innerHTML = msg;
  document.getElementById("uls").appendChild(novamsg);
  // limpa a caixa
  a = document.getElementById("caixatxt").value = " ";
  a.innerHTML;
}
function space() {
  tecla = event.keyCode;
  if (tecla == 13) {
    enviamsg();
  }
}
function atualizaConfig() {
  const pegaNome = document.getElementById("nomePessoaConfig").value;
  const pegaEmail = document.getElementById("emailPessoaConfig").value;
  if (pegaNome == "" || pegaEmail == "") {
    alert("Nome ou/e E-mail está(ão) vazio(s)!");
  } else if (pegaEmail.search("@") == -1 || pegaEmail.search(".com") == -1) {
    alert("faltando '@' ou '.com' no email ");
  } else {
    let nomeAparece = document.getElementById("paragrafo");
    nomeAparece.innerHTML = pegaNome;
  }
}
