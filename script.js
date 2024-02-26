// Get DOM elements
const chat = document.getElementById("chat");
const inputField = document.querySelector('input[type=text]');

// Add event listener to detect when Enter key is pressed
document.addEventListener('keydown', function(event){
   if(event.code === 'Enter'){
       sendMessage();
   }
});

function sendMessage() {
    // Get user input value
    const msgText = inputField.value;

    // Clear input field after submitting
    inputField.value = "";

    // Check if there was actually something typed into the input field
    if (!msgText || !msgText.trim()) return false;

    // Display user message
    appendUserMsg(msgText);

    // Simulate bot response delay
    setTimeout(() => {
      let reply = "Bot says hi"; // Replace with actual bot response logic
      appendBotReply(reply);
    }, 1000);
};

function appendUserMsg(msgText) {
    // Append user message to chat area
    const div = document.createElement("DIV");
    div.classList.add("message", "user");
    div.innerHTML = `<p class='content'>${msgText}</p>`;
    chat.appendChild(div);
};

function appendBotReply(response) {
    // Append bot response to chat area
    const div = document.createElement("DIV");
    div.classList.add("message", "bot");
    div.innerHTML = `<p class='content'>${response}</p>`;
    chat.appendChild(div);
};
