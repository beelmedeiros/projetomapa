function switchScreen(screen) {
  document.getElementById("login-screen").classList.add("hidden");
  document.getElementById("signup-screen").classList.add("hidden");
  document.getElementById("welcome-screen").classList.add("hidden");

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

  if (pass.length < 4) {
    showMessage(
      "signup-msg",
      "A senha deve ter pelo menos 4 caracteres.",
      "error"
    );
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  if (users.some((u) => u.username === user)) {
    showMessage("signup-msg", "Este nome de usuário já está em uso.", "error");
    return;
  }

  users.push({ username: user, password: pass });
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
    document.getElementById("display-user").textContent = user;
    switchScreen("welcome");
  } else {
    showMessage("login-msg", "Usuário ou senha incorretos.", "error");
  }
});

// Logout
function logout() {
  localStorage.removeItem("loggedInUser");
  alert(
    "Você está saindo da sua conta, até mais. "
  );
  window.location.href = "./menu.html";
}



