const download = require('download');

(async () => {
    const start = new Date();

    await download('https://github.com/andreendo/eta/blob/master/rawdata/randomModelsResults-raw.txt', 'res');
    await download('https://github.com/andreendo/noderacer/blob/master/package.json', 'res');
    await download('https://github.com/andreendo/eta/blob/master/rawdata/realModelsResults-raw.txt', 'res');
    await download('https://f-droid.org/repo/index.xml', 'res');

    const execTime = new Date() - start;
    console.log(`Exec time: ${execTime} ms`);
})();


/*
Rodando mais lento, neste caso apesar de ser um processo síncrono estamos esperando cada download terminar para mostrarmos o tempo
total, num mundo real também realizar downloads de forma síncrona pode fazer com que você acabe dividindo a velocidade desse 
procedimento entre os itens a serem baixados. Vale destacar que nos teste que realizei a diferença não foi tão absurda, porém está 
mais lento que o modelo assíncrono que realiza os procedimos separados, porém usa da promise.
*/