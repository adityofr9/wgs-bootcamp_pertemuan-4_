//core module
//file system
const fs = require('fs');

//console.log(fs);

//menuliskan string ke file (Synchronous)
//fs.writeFileSync('test.txt', 'Hellow World secara synchronous!');
fs.readFile('test.txt', 'utf-8', (err,data) => {
    if (err) throw err;
    console.log(data);
});