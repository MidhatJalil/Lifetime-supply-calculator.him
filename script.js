function calculate(){

let snack = document.getElementById('inputsnack').value;
let currentAge = document.getElementById('inputcage').value;
let estimatedAge = document.getElementById('inputeage').value;

let amountPerday = document.getElementById('inputamount').value;
let result = document.getElementById('result');
let totalSnack = ((estimatedAge-currentAge)*365)*amountPerday;



result.innerHTML = (`You will need ${totalSnack} to last you until the ripe old age of ${estimatedAge}`);
}