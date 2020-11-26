let s = "*"
let num = 20;
let espacios = "";
for (let i = 0; i<num; i++) {
    espacios = espacios + "* ";  
}
for (let i = 0; i<num; i++) {
    espacios = espacios.replace("* ", "");
    console.log(espacios)
}
