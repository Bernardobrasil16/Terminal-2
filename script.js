const senhaCorreta = "lugar impossível";

const password = document.getElementById("password");
const message = document.getElementById("message");

password.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    const tentativa = password.value.trim().toLowerCase();

    if (tentativa === senhaCorreta) {
      message.textContent = "Acesso Permitido";
      password.style.display = "none";
    } else {
      message.textContent = "Senha incorreta";
      password.value = "";
    }
  }
});