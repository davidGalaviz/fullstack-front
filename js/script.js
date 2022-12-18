$(document).ready(function () {
  const formulario = $("form");
  const inputNombre = $("#nombre");
  const labelNombre = $("label[for='nombre']");
  const inputApellidos = $("#apellidos");
  const labelApellidos = $("label[for='apellidos']");

  formulario.submit(function (evt) {
    if (inputNombre.val() === "" || !inputNombre.val()) {
      evt.preventDefault();
      labelNombre.css("color", "red");
    } else {
      labelNombre.css("color", "black");
    }

    if (inputApellidos.val() === "" || !inputApellidos.val()) {
      evt.preventDefault();
      labelApellidos.css("color", "red");
    } else {
      labelApellidos.css("color", "black");
    }
  });
});
