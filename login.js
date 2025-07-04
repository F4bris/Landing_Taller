const form = document.getElementById("form-login");
const correoInput = document.getElementById("correo");
const claveInput = document.getElementById("clave");
const errorCorreo = document.getElementById("errorCorreo");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const correo = correoInput.value.trim();
  const clave = claveInput.value.trim();

  if (!correo.includes("@") || !correo.includes(".com")) {
    errorCorreo.textContent =
      "Correo o contraseña incorrectos. Inténtelo nuevamente.";
    return;
  }

  errorCorreo.textContent = "";

  document.body.innerHTML = `
    <div class="mensaje-final">
      <img src="images/check.png" alt="Check" class="check-icon" />
      <h2>Se ha iniciado sesión correctamente</h2>
    </div>
  `;
});
