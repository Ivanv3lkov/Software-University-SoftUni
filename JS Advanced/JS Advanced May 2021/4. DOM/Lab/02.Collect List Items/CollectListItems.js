function extractText() {
    const listElements = Array.from(document.querySelector('#items').children);
    const textArea = document.querySelector('#result');
    let output = '';
    for (let li of listElements) {
        output += li.textContent + '\n';
    }
    textArea.textContent = output.trim();
}