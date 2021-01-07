// assign text field to a variable
let text = document.getElementById("text");
// button event
let button = document.getElementById("button");
button.addEventListener('click', () => {
 alert(text.value);
});

// text field event
//text.addEventListener('click ', () => {
// alert ("Click in text field!");
//});
let sample = document.getElementById("sample");
text.addEventListener('keyup', (event) => {
 if (event.code == 'Enter') {
 // alert ("Enter!");

 sample.innerHTML=sample.innerHTML + text.value + '<br>';
 }
});