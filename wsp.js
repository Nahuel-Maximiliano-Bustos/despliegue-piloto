document.addEventListener("DOMContentLoaded", function () {
    const whatsappButton = document.getElementById("whatsapp-button");
    const whatsappChat = document.getElementById("whatsapp-chat");
    const closeChat = document.getElementById("close-chat");
    const sendButton = document.getElementById("send-whatsapp");
    const messageInput = document.getElementById("whatsapp-message");

    // Mostrar/ocultar chat
    whatsappButton.addEventListener("click", function () {
        whatsappChat.style.display = whatsappChat.style.display === "flex" ? "none" : "flex";
    });

    closeChat.addEventListener("click", function () {
        whatsappChat.style.display = "none";
    });

    // Enviar mensaje a WhatsApp
    sendButton.addEventListener("click", function () {
        const message = encodeURIComponent(messageInput.value);
        const phoneNumber = "549XXXXXXXXXX"; // Reemplaza con el número real
        if (message.trim() !== "") {
            window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
        }
    });
});