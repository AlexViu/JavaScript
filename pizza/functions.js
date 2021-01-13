let take = document.getElementById("take");

let order = document.getElementById("order");

order.addEventListener('click', () => {
    
    let finalorder = "Order: " + take.value;

    let ra1 = document.getElementById("radio1");
    let ra2 = document.getElementById("radio2");
    let ra3 = document.getElementById("radio3");
    
    if (ra1.checked){
        finalorder = finalorder + "\n Size: " + ra1.value
    }
    if (ra2.checked){
        finalorder = finalorder + "\n Size:" + ra2.value
    }
    if (ra3.checked){
        finalorder = finalorder + "\n Size:" + ra3.value
    }
    
    finalorder = finalorder + "\n Ingredients: "

    let c1 = document.getElementById("ingredients1");
    let c2 = document.getElementById("ingredients2");
    let c3 = document.getElementById("ingredients3");
    let c4 = document.getElementById("ingredients4");
    let c5 = document.getElementById("ingredients5");
    let c6 = document.getElementById("ingredients6");
    
    if (c1.checked){
        finalorder = finalorder + "\n       - " + c1.value;
    }
    if (c2.checked){
        finalorder = finalorder + "\n       - " + c2.value;
    }
    if (c3.checked){
        finalorder = finalorder + "\n       - " + c3.value;
    }
    if (c4.checked){
        finalorder = finalorder + "\n       - " + c4.value;
    }
    if (c5.checked){
        finalorder = finalorder + "\n       - " + c5.value;
    }
    if (c6.checked){
        finalorder = finalorder + "\n       - " + c6.value;
    }


    alert(finalorder);
});