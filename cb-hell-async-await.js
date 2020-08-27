const fsp = require('fs').promises;

(async () => {
    const fileName2 = await fsp.readFile('f1.txt', 'utf-8');
    const fileName3 = await fsp.readFile(fileName2, 'utf-8');
    const fileContent = await fsp.readFile(fileName3, 'utf-8');
    console.log('Conteudo1: ',fileContent);
    console.log('Conteudo2: ',await fsp.readFile(fileName2, 'utf-8'));
    console.log('Conteudo3: ',fileName3);
    console.log('Conteudo4: ',fileName2);
})();