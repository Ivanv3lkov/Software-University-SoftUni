function solve() {
   let addProductButtons = Array.from(document.querySelectorAll('.add-product'));
   let textarea = document.querySelector('textarea');
   let checkoutButton = document.querySelector('.checkout');
   let productSet = new Set();
   let totalPrice = 0;

   addProductButtons.forEach(button => button.addEventListener('click', addButtonHandler));
   checkoutButton.addEventListener('click', checkoutHandler);

   function addButtonHandler(e) {
      let productPrice = Number(e.target.parentElement.nextElementSibling.textContent);
      let productName = e.target.parentElement.parentElement.querySelector('.product-title').textContent;
      totalPrice += productPrice;
      textarea.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`
      productSet.add(productName);
   }

   function checkoutHandler() {
      productSet = Array.from(productSet);
      textarea.value += `You bought ${productSet.join(', ')} for ${totalPrice.toFixed(2)}.`;
      disableButtons();
   }

   function disableButtons() {
      let buttons = Array.from(document.querySelectorAll('button'));
      buttons.forEach(button => button.disabled = true);
   }
}