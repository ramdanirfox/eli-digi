const fs = require('fs');

// 1 ambil
// 2 taro
const arg1 = process.argv[2];

console.log('SW WORKER COPY BY RFOX - mode: ' + arg1);
console.log('==================================');

const fToCp = [
    'manifest.webmanifest',
    'ngsw.json',
    'ngsw-worker.js',
    'safety-worker.js',
    'worker-basic.min.js'
];

for (let i = 0; i < fToCp.length; i++) {
    const fName = fToCp[i];
    const isAmbil = arg1 != '2';
    const srcPath = isAmbil ? ('dist/eli-digi/browser/' + fName) : ('scripts/swresult/' + fName);
    const destPath = isAmbil ? ('scripts/swresult/' + fName) : ('dist/eli-digi/browser/' + fName);
    fs.copyFile(srcPath, destPath, (err) => {
        if (err) throw err;
        console.log(fName + ' was copied to destination.txt');
    });
}

console.log('hello', process.argv, __dirname);