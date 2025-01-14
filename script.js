
const chat = document.getElementById("chat");

function sendMessage() {
    const userInput = document.getElementById("userInput");
    const message = userInput.value.trim();

    if (message) {
        addMessage(message, "user");
        userInput.value = "";
        generateBotResponse(message);
    }
}

function addMessage(text, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender);
    messageDiv.textContent = text;
    chat.appendChild(messageDiv);
    chat.scrollTop = chat.scrollHeight;
}

function generateBotResponse(userMessage) {
    let botResponse = "";

    // Example simple responses (can be expanded)
    if (userMessage.toLowerCase().includes("olá")) {
        botResponse = "Olá! Como posso ajudar?";
    } else if (userMessage.toLowerCase().includes("nome")) {
        botResponse = "Sou um chatbot criado para responder perguntas básicas.";
    } else {
        botResponse = "Desculpe, ainda estou aprendendo e não entendi sua pergunta.";
    }

    setTimeout(() => addMessage(botResponse, "bot"), 500);
}
