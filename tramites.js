const tramites = [
    { nombre: "Proyecto de ordenanza", desc: "Obtené tu carnet de conducir en formato digital.", icono: "fa-gavel", pdf: "Resources/documentos/proyectos/Proy Ord - Proced Admin Municipal.pdf" },
    { nombre: "Codigo administrativo municipal", desc: "Solicitá partidas de nacimiento, matrimonio y defunción.", icono: "fa-file-signature", pdf: "Resources/Documentos/proyectos/PROYECTO COD. ADMIN presentar..docx.pdf" },
    { nombre: "Proyecto ITV", desc: "Gestión de permisos para obras privadas.", icono: "fa-car", pdf: "Resources/Documentos/proyectos/proyecto ITV.docx.pdf" },
    { nombre: "Proyecto juego online", desc: "Gestión de permisos para obras privadas.", icono: "fa-dice", pdf: "Resources/Documentos/proyectos/PROYECTO JUEGO ONLINE.pdf" },
    { nombre: "Proyecto QR para colectivo", desc: "Gestión de permisos para obras privadas.", icono: "fa-qrcode", pdf: "Resources/Documentos/proyectos/PROYECTO QR PARA COLECTIVO.docx.pdf" },
    { nombre: "Proyecto turnero digital", desc: "Gestión de permisos para obras privadas.", icono: "fa-calendar-alt", pdf: "Resources/Documentos/proyectos/PROYECTO TURNERO DIGITAL.docx.pdf" }
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
        div.onclick = () => mostrarDetalles(tramites[i].nombre, tramites[i].pdf);
        grid.appendChild(div);
    }
}

document.getElementById('toggleVerMas').addEventListener('click', function() {
    mostrandoTodos = !mostrandoTodos;
    cargarTramites();
    this.innerText = mostrandoTodos ? "Ver menos trámites" : "Ver más trámites";
});

function mostrarDetalles(titulo, pdfUrl) {
    document.getElementById("modal-titulo").innerText = titulo;
    document.getElementById("modal-descripcion").innerHTML = `
        <p style="text-align: center; color: #333;">Haz clic en el botón de abajo para ver el documento completo.</p>
        <div style="display: flex; justify-content: center; margin-top: 10px;">
            <button onclick="window.open('${pdfUrl}', '_blank')" 
                style="padding: 12px 20px; background-color: #DC2074; color: white; 
                    border: none; cursor: pointer; border-radius: 5px;
                    font-size: 16px; font-weight: bold; transition: 0.3s;">
                Abrir documento
            </button>
        </div>
    `;
    document.getElementById("modal").style.display = 'block';
}

function cerrarModal() {
    document.getElementById('modal').style.display = 'none';
}

cargarTramites();
