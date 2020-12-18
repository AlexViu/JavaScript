const fs=require('fs');

var leeme=fs.readFileSync('readme.txt', 'utf8');
console.log(leeme);
fs.writeFileSync('escribeme.txt', leeme);

fs.readFile('./readme.txt', 'utf8', (err, data)=>{
    if (err) throw err;
    console.log('reading asynchronous file');
    console.log(data);

    fs.writeFile('./writeme.txt', data, (err) => {
        if (err) throw err;
        err
            ? console.log(err)
            : console.log('File written correctly');
    })
});

fs.rename('readme.txt', 'leeme.txt', (err) => {
    if (err) throw err;
    console.log('Nombre Editado Satisfactoriamente');
});
fs.stat('leeme.txt', (err, stats) => {
    if (err) throw err;
    console.log(stats);
})