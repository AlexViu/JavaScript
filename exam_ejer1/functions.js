let names = document.getElementById("name");
let email = document.getElementById("email");
let address = document.getElementById("addres");
let credit = document.getElementById("credit");
let gender = document.getElementById("gender");
let send = document.getElementById("send");


send.addEventListener('click', () => {

    let final = "Name:  " + names.value + "\n Email:    " + email.value + "\n address:  " + address.value + "\n Credit card details:    " + credit.value + "\n gender:  " + gender.value;

    alert(final);
})