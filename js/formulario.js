const formulario = document.querySelector('#formulario-js form');
const nombre = document.getElementById('validationCustom01');
const apellido = document.getElementById('validationCustom02');
const correo = document.getElementById('validationCustomUsername');
const nombreEmpresa = document.getElementById('validationCustom03');
const rubro = document.getElementById('validationCustom04');

formulario.addEventListener('submit', function(event) {
  event.preventDefault();

  try {
    if (!formulario.checkValidity()) {
      throw new Error('Por favor complete todos los campos obligatorios.');
    }

    // Obtener valores de los campos
    const nombreValue = nombre.value;
    const apellidoValue = apellido.value;
    const correoValue = correo.value;
    const nombreEmpresaValue = nombreEmpresa.value;
    const rubroValue = rubro.value;

    window.location.href = './pages/servicios.html';
  } catch (error) {
    // Mostrar mensaje de error usando SweetAlert2
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: error.message
    });
  }
});

