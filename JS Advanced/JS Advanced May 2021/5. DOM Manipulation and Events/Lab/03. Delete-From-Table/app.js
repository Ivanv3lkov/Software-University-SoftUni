function deleteByEmail(){
    const emailTds = Array.from(document.querySelectorAll('#customers td:last-child'));
    const emailInput = document.querySelector('input[name="email"]');
    const resultDiv = document.getElementById('result');

    resultDiv.textContent = '';
    
    if (!emailInput.value) {return;};
    const td = emailTds.find(td => td.textContent === emailInput.value );
    emailInput.value = '';
    if (!td) {resultDiv.textContent = 'Not found.'; return;}
    td.parentElement.remove();
    resultDiv.textContent = 'Deleted.'
}
