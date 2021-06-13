function create(words) {
   const mainDiv = document.getElementById('content');
   words.map(str => {
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.textContent = str;
      p.style.display = 'none';
      div.appendChild(p);
      div.addEventListener('click', (e) => {
         e.target.firstChild.style.display = 'block';
      })
      mainDiv.appendChild(div);
   })
}