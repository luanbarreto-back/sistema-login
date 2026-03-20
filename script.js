function cadastrar() {
  let usuario = document.getElementById("cadUsuario").value;
  let senha = document.getElementById("cadSenha").value;
  let mensagem = document.getElementById("mensagem");

  if (usuario === "" || senha === "") {
    mensagem.innerText = "Preencha todos os campos!";
    mensagem.style.color = "red";
    return;
  }

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  let existe = usuarios.find(u => u.usuario === usuario);

  if (existe) {
    mensagem.innerText = "Usuário já existe!";
    mensagem.style.color = "red";
    return;
  }

  usuarios.push({ usuario, senha });
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  mensagem.innerText = "Cadastro realizado com sucesso!";
  mensagem.style.color = "green";

  setTimeout(() => {
    window.location.href = "index.html";
  }, 1500);
}

function login() {
  let usuario = document.getElementById("loginUsuario").value;
  let senha = document.getElementById("loginSenha").value;
  let mensagem = document.getElementById("mensagem");

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  let usuarioValido = usuarios.find(u => u.usuario === usuario && u.senha === senha);

  if (usuarioValido) {
    mensagem.innerText = "Login bem-sucedido!";
    mensagem.style.color = "green";
  } else {
    mensagem.innerText = "Usuário ou senha incorretos!";
    mensagem.style.color = "red";
  }
}