//core module
//file system
const fs = require('fs');

//console.log(fs);

//menuliskan string ke file (Synchronous)
fs.writeFileSync('test.txt', 'Hellow World secara synchronous!');