function solve() {
   const searchField = document.getElementById('searchField');
   const searchBtn = document.getElementById('searchBtn');
   const rows = Array.from(document.querySelectorAll('tbody tr'));

   searchBtn.addEventListener('click', search);

   function search() {
      let text = searchField.value.trim();

      for (let r of rows) {
         if (r.textContent.toLowerCase().includes(text.toLowerCase())) {
            r.classList.add('select');
         } else {
            r.classList.remove('select');
         }
      }
      searchField.value = '';
   }
}