const secciones = [
    'datos-personales.html',
    'datos-laborales.html',
    'domicilio-personal.html',
    'domicilio-laboral.html',
    'referencias-dependientes.html'
];

let currentStep = 0;

const contenidoFormulario = document.getElementById('contenidoFormulario');
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');
const btnEnviar = document.getElementById('btnEnviar');

function cargarSeccion(step) {
    fetch(`secciones/${secciones[step]}`)
        .then(response => response.text())
        .then(html => contenidoFormulario.innerHTML = html)
        .catch(err => contenidoFormulario.innerHTML = `<p>Error al cargar la sección</p>`);
}

btnSiguiente.addEventListener('click', () => {
    if (currentStep < secciones.length - 1) {
        currentStep++;
        cargarSeccion(currentStep);
        actualizarBotones();
    }
});

btnAnterior.addEventListener('click', () => {
    if (currentStep > 0) {
        currentStep--;
        cargarSeccion(currentStep);
        actualizarBotones();
    }
});

function actualizarBotones() {
    btnAnterior.disabled = currentStep === 0;
    btnSiguiente.classList.toggle('d-none', currentStep === secciones.length - 1);
    btnEnviar.classList.toggle('d-none', currentStep !== secciones.length - 1);
}

// Evento submit
document.getElementById('formularioTarjeta').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('¡Solicitud enviada con éxito!');
});

// Cargar primera sección al iniciar
cargarSeccion(currentStep);
actualizarBotones();
