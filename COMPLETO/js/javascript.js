function switchScreen(screen) {
  document.getElementById("login-screen").classList.add("hidden");
  document.getElementById("signup-screen").classList.add("hidden");
  document.getElementById("welcome-screen").classList.add("hidden");
  document.getElementById("inicial-screen").classList.add("hidden");

  document.getElementById(`${screen}-screen`).classList.remove("hidden");

  document.getElementById("login-msg").style.display = "none";
  document.getElementById("signup-msg").style.display = "none";
}

// CORRIGIDO
function showMessage(id, text, type) {
  const msgBox = document.getElementById(id);
  msgBox.textContent = text;
  msgBox.style.display = "block";
  msgBox.className = `message-box ${
    type === "error" ? "msg-error" : "msg-success"
  }`;
}

// Cadastro
document.getElementById("signup-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const user = document.getElementById("signup-user").value.trim();
  const pass = document.getElementById("signup-pass").value;
  const confirmPass = document.getElementById("signup-confirm-pass").value;
  const fullName = document.getElementById("signup-name").value.trim();
  const cep = document.getElementById("cep").value.trim();
  const address = document.getElementById("signup-address").value.trim();
  const uf = document.getElementById("signup-UF").value.trim();
  const bairro = document.getElementById("signup-bairro").value.trim();
  const complemento = document
    .getElementById("signup-complemento")
    .value.trim();
  const numero = document.getElementById("signup-numero").value.trim();
  const cpf = document.getElementById("signup-cpf").value.trim();

  if (pass.length < 4) {
    showMessage(
      "signup-msg",
      "A senha deve ter pelo menos 4 caracteres.",
      "error"
    );
    return;
  }

  if (pass !== confirmPass) {
    showMessage(
      "signup-msg",
      "As senhas não conferem. Tente novamente.",
      "error"
      
    );
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  if (users.some((u) => u.username === user)) {
    showMessage("signup-msg", "Este nome de usuário já está em uso.", "error");
    return;
  }

  users.push({
    username: user,
    password: pass,
    fullName,
    cep,
    address,
    uf,
    bairro,
    complemento,
    numero,
    cpf,
    valorMensal: 0,
    plano: null,
    formaPagamento: null,
    dataSolicitacao: null
  });
  localStorage.setItem("users", JSON.stringify(users));

  showMessage("signup-msg", "Cadastro realizado com sucesso!", "success");

  setTimeout(() => {
    document.getElementById("signup-form").reset();
    switchScreen("login");
    showMessage("login-msg", "Conta criada! Faça seu login.", "success");
  }, 1500);
});

// Login
document.getElementById("login-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const user = document.getElementById("login-user").value.trim();
  const pass = document.getElementById("login-pass").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const foundUser = users.find(
    (u) => u.username === user && u.password === pass
  );

  if (foundUser) {
    localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
    window.location.href = "./index.html";
  } else {
    showMessage("login-msg", "Usuário ou senha incorretos.", "error");
  }
});

// Logout
function logout() {
  localStorage.removeItem("loggedInUser");
  alert(
    "Você fez logout."
  );
  document.getElementById("login-form").reset();
  switchScreen("login");
}

//acessar

function accessar() {
  window.location.href = "./index.html";
}

document.getElementById("sobreNos").addEventListener("click", function() {
    window.location.href = "sobre.html";
});
