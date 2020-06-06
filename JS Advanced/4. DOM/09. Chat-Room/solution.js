function solve() {
   const textArea = document.getElementById('chat_input');
   const button = document.getElementById('send');
   const chatMessages = document.getElementById('chat_messages');

   button.addEventListener('click', sendMessage);
   
   function sendMessage() {
      let message = textArea.value;

      if (!message) {
         return;
      };

      let newDiv = document.createElement('div');
      newDiv.setAttribute('class', 'message my-message');
      newDiv.textContent = message;
      chatMessages.appendChild(newDiv);

      textArea.value = '';
   }
}


