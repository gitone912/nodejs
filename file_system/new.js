import fs from 'fs'
fs.appendFile('mynewfile3.txt', ' This is my text.', function (err) {
    if (err) throw err;
    console.log('Updated!');
  });