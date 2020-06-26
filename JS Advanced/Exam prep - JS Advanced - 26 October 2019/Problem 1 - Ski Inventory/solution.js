function solve() {
   let availableProductsList = document.querySelector('#products ul');
   let [filterInput, nameInput, quantityInput, priceInput] = document.querySelectorAll('input');
   let addBtn = document.querySelector('#add-new button');
   let filterBtn = document.querySelector('.filter button');
   let buyBtn = document.querySelector('#myProducts button');
   let myProducts = document.querySelector('#myProducts ul');
   let headerPrice = document.querySelectorAll('h1').item(1);
   let totalPrice = 0;

   addBtn.addEventListener('click', addProduct);
   filterBtn.addEventListener('click', filterProduct);
   buyBtn.addEventListener('click', buyProduct);

   function buyProduct() {
      myProducts.remove();
      headerPrice.textContent = `Total Price: 0.00`;
   }

   function filterProduct() {
      let filterValue = filterInput.value.trim();
      Array.from(availableProductsList.children).forEach(el => {
         let productName = el.querySelector('span').textContent;
         if (productName.toLowerCase().includes(filterValue.toLowerCase())) {
            el.style.display = 'block';
         } else {
            el.style.display = 'none';
         }
      });
   }
   function addProduct(e) {
      e.preventDefault();
      let productName = nameInput.value.trim();
      let productQuantity = Number(quantityInput.value.trim());
      let productPrice = Number(priceInput.value.trim()).toFixed(2);

      let addToClientListBtn = el('button', `Add to Client's List`);

      let divElement = el('div', [
         el('strong', `${productPrice}`),
         addToClientListBtn
      ]);

      let item = el('li', [
         el('span', productName),
         el('strong', `Available: ${productQuantity}`),
         divElement
      ]);

      addToClientListBtn.addEventListener('click', function (e) {
         let productQuantityRef = e.target.parentNode.parentNode.querySelector('strong');
         let currentQuantity = Number(productQuantityRef.textContent.split(': ')[1].trim());

         productQuantityRef.textContent = `Available: ${currentQuantity - 1}`;
         if (currentQuantity - 1 === 0) {
            e.target.parentNode.parentNode.remove();
         }

         let product = e.target.parentNode.parentNode.querySelector('span').textContent;
         let price = e.target.parentNode.querySelector('strong').textContent;

         let newAddedProduct = el('li', [
            product,
            el('strong', price)
         ]);
         totalPrice += Number(price)
         myProducts.appendChild(newAddedProduct);
         headerPrice.textContent = `Total Price: ${totalPrice.toFixed(2)}`;
      });

      availableProductsList.appendChild(item);
   }

   function el(type, content, attributes) {
      const result = document.createElement(type);

      if (attributes !== undefined) {
         Object.assign(result, attributes);
      }

      if (Array.isArray(content)) {
         content.forEach(append);
      } else {
         append(content);
      }

      function append(node) {
         if (typeof node === 'string') {
            node = document.createTextNode(node);
         }
         result.appendChild(node);
      }

      return result;
   }
}