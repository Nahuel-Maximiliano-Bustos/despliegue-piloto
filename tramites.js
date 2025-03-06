const tramites = [
    { nombre: "Carnet de Conducir Digital", desc: "Obtené tu carnet de conducir en formato digital.", icono: "fa-id-card" },
    { nombre: "Solicitud de Partidas", desc: "Solicitá partidas de nacimiento, matrimonio y defunción.", icono: "fa-file-alt" },
    { nombre: "Obras Privadas Digital", desc: "Gestión de permisos para obras privadas.", icono: "fa-building" },
    { nombre: "Calidad Alimentaria Digital", desc: "Certificación de calidad para alimentos.", icono: "fa-utensils" },
    { nombre: "Turnero Online", desc: "Reserva turnos para trámites municipales.", icono: "fa-calendar-check" },
    { nombre: "Habilitación de Negocios", desc: "Trámite para habilitar comercios.", icono: "fa-store" },
    { nombre: "App Ciudadana", desc: "Servicios y gestiones para ciudadanos.", icono: "fa-mobile-alt" },
    { nombre: "Trámites de Catastro", desc: "Consulta y gestión de trámites catastrales.", icono: "fa-map-marked-alt" },
    { nombre: "Tu Bondi", desc: "Consulta horarios y recorridos de colectivos.", icono: "fa-bus" },
    { nombre: "Inscripción de Taxis", desc: "Registro de taxis y remises.", icono: "fa-taxi" },
    { nombre: "Licitaciones y Concursos", desc: "Convocatorias y licitaciones públicas.", icono: "fa-handshake" },
    { nombre: "Subastas Electrónicas", desc: "Participa en subastas de bienes municipales.", icono: "fa-gavel" },
    { nombre: "Certificado de Libre Deuda", desc: "Verificá tu libre deuda municipal.", icono: "fa-file-invoice-dollar" },
    { nombre: "Registro de Propiedades", desc: "Consulta el estado de propiedades registradas.", icono: "fa-home" },
    { nombre: "Denuncias Ambientales", desc: "Realizá denuncias sobre impacto ambiental.", icono: "fa-tree" },
    { nombre: "Pago de Impuestos", desc: "Consultá y pagá tus impuestos online.", icono: "fa-credit-card" },
    { nombre: "Registro de Obras", desc: "Registro de proyectos de construcción.", icono: "fa-hard-hat" },
    { nombre: "Solicitudes de Empleo", desc: "Accedé a convocatorias de empleo público.", icono: "fa-briefcase" },
    { nombre: "Seguridad Vial", desc: "Consultá infracciones y normas viales.", icono: "fa-car-crash" },
    { nombre: "Patentes de Vehículos", desc: "Verificá el estado de patentes municipales.", icono: "fa-car" }
];

let mostrandoTodos = false;

function cargarTramites() {
    const grid = document.getElementById('tramitesGrid');
    grid.innerHTML = "";
    
    const cantidad = mostrandoTodos ? tramites.length : 16;

    for (let i = 0; i < cantidad; i++) {
        let div = document.createElement('div');
        div.classList.add('tramite-card');
        div.innerHTML = `<i class="fas ${tramites[i].icono}"></i><p>${tramites[i].nombre}</p>`;
        div.onclick = () => mostrarDetalles(tramites[i].nombre, tramites[i].desc);
        grid.appendChild(div);
    }
}

document.getElementById('toggleVerMas').addEventListener('click', function() {
    mostrandoTodos = !mostrandoTodos;
    cargarTramites();
    this.innerText = mostrandoTodos ? "Ver menos trámites" : "Ver más trámites";
});

function mostrarDetalles(titulo, descripcion) {
    document.getElementById('modal-titulo').innerText = titulo;
    document.getElementById('modal-descripcion').innerText = descripcion;
    document.getElementById('modal').style.display = 'block';
}

function cerrarModal() {
    document.getElementById('modal').style.display = 'none';
}

cargarTramites();