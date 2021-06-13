function encodeAndDecodeMessages() {
    const [textAreaSender, textAreaReceiver] = document.getElementsByTagName('textarea');
    const [encondeButton, decodeButton] = document.getElementsByTagName('button');

    encondeButton.addEventListener('click', encode);
    decodeButton.addEventListener('click', decode);

    function encode() {
        const message = textAreaSender.value;
        let encodedMessage = '';
        for (let i = 0; i < message.length; i++) {
            encodedMessage += String.fromCharCode(message.charCodeAt(i) + 1);
        }
        textAreaReceiver.value = encodedMessage;
        textAreaSender.value = '';
    }

    function decode() {
        const encodedMessage = textAreaReceiver.value;
        let decodedMessage = '';
        for (let i = 0; i < encodedMessage.length; i++) {
            decodedMessage += String.fromCharCode(encodedMessage.charCodeAt(i) - 1);
        }
        textAreaReceiver.value = decodedMessage;
    }
}