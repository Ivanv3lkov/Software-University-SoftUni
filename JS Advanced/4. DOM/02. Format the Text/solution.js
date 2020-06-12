function solve() {
  const inputParagraph = document.querySelector('#input');
  const outputDiv = document.querySelector('#output');

  const paragraphContent = inputParagraph.innerText;
  const sentences = paragraphContent.split('. ');

  let counter = 0;
  let currentParagraph = document.createElement('p');

  for (let i = 0; i < sentences.length; i++) {
    counter++;
    currentParagraph.innerText += sentences[i];

    if (counter === 3) {
      outputDiv.appendChild(currentParagraph);
      currentParagraph = document.createElement('p');
      counter = 0;
    }
  }
  if (counter !== 0) {
    outputDiv.appendChild(currentParagraph);
  }
}


