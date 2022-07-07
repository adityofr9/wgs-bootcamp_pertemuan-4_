//CORE MODULE
//File System
const fs = require('fs');
//Readline
const readline = require('readline');

//console.log(fs);

//menuliskan string ke file (Synchronous)
//fs.writeFileSync('test.txt', 'Hellow World secara synchronous!');
// fs.readFile('test.txt', 'utf-8', (err,data) => {
//     if (err) throw err;
//     console.log(data);
// });

//Latihan Readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is your name? ', (name) => {
    console.log(`Thank you ${name}`);

    rl.close();
});