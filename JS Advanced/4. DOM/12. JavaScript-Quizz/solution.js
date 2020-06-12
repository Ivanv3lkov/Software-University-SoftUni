function solve() {
  let correctAnswers = 0;
  let tempIndex = 0;
  
  Array.from(document.querySelectorAll('.answer-text'))
    .map(x => x.addEventListener('click', function nextQuestion(e) {

      if (e.target.textContent === 'onclick'
        || e.target.textContent === 'JSON.stringify()'
        || e.target.textContent === 'A programming API for HTML and XML documents') {
        correctAnswers++;
      }

      let currentSection = document.querySelectorAll('section')[tempIndex];
      currentSection.style.display = 'none';
      currentSection.classList.add('hidden');

      let nextSection = document.querySelectorAll('section')[tempIndex + 1];

      if (nextSection) {
        nextSection.classList.remove('hidden');
      } else {
        showResult(correctAnswers);
      }

      nextSection.style.display = 'block';
      tempIndex++;

    }));

  function showResult(correctAnswers) {
    document.querySelector('#results').style.display = 'block';

    if (correctAnswers === 3) {
      document.querySelector('#results > li > h1').textContent = 'You are recognized as top JavaScript fan!';
    } else {
      document.querySelector('#results > li > h1').textContent = `You have ${correctAnswers} right answers`
    }
  }
}
