function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const inputElement = document.getElementById('searchField');
      const rows = Array.from(document.getElementsByTagName('tr')).slice(2);
      rows.forEach(row => {
         row.classList = '';
      });

      for (let row of rows) {
         if (row.textContent.includes(inputElement.value)) {
            row.classList = 'select';
         }
      }
      inputElement.value = '';
   }
}