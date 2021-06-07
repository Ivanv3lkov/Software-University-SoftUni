function search() {
   const result = document.getElementById('result');
   const input = document.getElementById('searchText');
   const towns = Array.from(document.getElementById('towns').children);
   let matches = 0;
   towns.forEach(town => {
      town.style.fontWeight = '';
      town.style.textDecoration = 'none';
   });

   for (let town of towns) {
      if (town.textContent.includes(input.value)) {
         matches++;
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
      }
   }
   result.textContent = `${matches} matches found`;
}
