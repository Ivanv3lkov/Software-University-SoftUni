const url = 'http://localhost:3030/jsonstore/messenger';
const sendButton = document.getElementById('submit');
const refreshButton = document.getElementById('refresh');
const textarea = document.getElementById('messages');

sendButton.addEventListener('click', createMessage)
refreshButton.addEventListener('click', getAllMessages);

async function createMessage() {
    try {
        let authorInput = document.getElementById('author');
        let contentInput = document.getElementById('content');

        let newMessage = {
            author: authorInput.value,
            content: contentInput.value
        };

        let createResponse = await fetch(url, {
            method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newMessage)
            });
        let createResult = await createResponse.json();
        let createdMessageString = `${createResult.author}: ${createResult.content}`;
        textarea.value = textarea.value + `\n${createdMessageString}`;
    } catch (err) {
        console.error(err);
    }
}

async function getAllMessages() {
    try {
        let getMessagesResult = await fetch(url);
        let messages = await getMessagesResult.json();

        let messagesString = Object.values(messages)
            .map(message => `${message.author}: ${message.content}`)
            .join('\n');
        textarea.value = messagesString;
    } catch (err) {
        console.error(err);
    }
}
