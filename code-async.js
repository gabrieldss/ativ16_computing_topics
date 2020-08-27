const fs = require('fs');

fs.readFile('ex1.txt', 'utf-8', (err, data) => {
    if (err) throw err;

    console.log(data);
    console.log('teste');
});

fs.readFile('ex3.txt', 'utf-8', (err, data) => {
    if (err) throw err;

    console.log(data);
});

fs.readFile('ex2.txt', 'utf-8', (err, data) => {
    if (err) throw err;

    console.log(data);
    console.log('segundo retorno');
});


console.log('end script');