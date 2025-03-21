function startCounter(id, target) {
    let counter = document.getElementById(id);
    let count = 0;
    let interval = setInterval(() => {
        if (count >= target) {
            clearInterval(interval);
        } else {
            count += Math.ceil(target / 100);
            if (count > target) count = target;
            counter.innerText = "+" + count;
        }
    }, 30);
}

startCounter("counter1", 60);
startCounter("counter2", 15);
startCounter("counter3", 5000);


function abrirVentana(titulo, contenido) {
    document.getElementById("modal-body").innerHTML = "<h2>" + titulo + "</h2><p>" + contenido + "</p>";
    document.getElementById("modal").style.display = "block";
}

function cerrarVentana() {
    document.getElementById("modal").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById("slider");
    const pagination = document.getElementById("pagination");
    const modal = document.getElementById("overlay");
    const closeModal = document.getElementById("closeModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalText = document.getElementById("modalText");

    const cardsData = [
        { title: "Programa 1", desc: "Descripción 1", icon: "fas fa-laptop-code" },
        { title: "Programa 2", desc: "Descripción 2", icon: "fas fa-database" },
        { title: "Programa 3", desc: "Descripción 3", icon: "fas fa-network-wired" },
        { title: "Programa 4", desc: "Descripción 4", icon: "fas fa-server" },
        { title: "Programa 5", desc: "Descripción 5", icon: "fas fa-cloud" },
        { title: "Programa 6", desc: "Descripción 6", icon: "fas fa-mobile-alt" },
        { title: "Programa 7", desc: "Descripción 7", icon: "fas fa-robot" },
        { title: "Programa 8", desc: "Descripción 8", icon: "fas fa-code-branch" },
        { title: "Programa 9", desc: "Descripción 9", icon: "fas fa-terminal" },
        { title: "Programa 10", desc: "Descripción 10", icon: "fas fa-terminal" },
        { title: "Programa 11", desc: "Descripción 11", icon: "fas fa-terminal" },
        { title: "Programa 12", desc: "Descripción 12", icon: "fas fa-cogs" }
    ];

    let currentIndex = 0;
    const cardsPerView = 3;
    const totalSlides = Math.ceil(cardsData.length / cardsPerView);

    function renderCards() {
        slider.innerHTML = "";
        cardsData.forEach((card, index) => {
            const cardElement = document.createElement("div");
            cardElement.classList.add("card-item");
            cardElement.innerHTML = `
                <i class="${card.icon}"></i>
                <h3>${card.title}</h3>
                <p>${card.desc}</p>
                <button class="show-modal" data-index="${index}">Ver más</button>
            `;
            slider.appendChild(cardElement);
        });

        document.querySelectorAll(".show-modal").forEach(button => {
            button.addEventListener("click", (event) => {
                const index = event.target.dataset.index;
                modalTitle.textContent = cardsData[index].title;
                modalText.textContent = cardsData[index].desc;
                modal.style.display = "block";
            });
        });
    }

    function updateSlider() {
        const cardWidth = 200; // Ancho de cada tarjeta
        const gap = 10; // Espacio entre tarjetas
        const movePixels = (cardWidth + gap) * currentIndex * cardsPerView; 
        slider.style.transform = `translateX(-${movePixels}px)`;
        document.querySelectorAll(".dot").forEach((dot, index) => {
            dot.classList.toggle("active", index === currentIndex);
        });
    }

    function renderPagination() {
        pagination.innerHTML = "";
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement("span");
            dot.classList.add("dot");
            if (i === 0) dot.classList.add("active");
            dot.addEventListener("click", () => {
                currentIndex = i;
                updateSlider();
            });
            pagination.appendChild(dot);
        }
    }

    document.querySelector(".prev-arrow").addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });
    
    document.querySelector(".next-arrow").addEventListener("click", () => {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
            updateSlider();
        }
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    renderCards();
    renderPagination();
    updateSlider();
});
