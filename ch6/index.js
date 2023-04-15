import * as fs from 'fs/promises';

try{
    await fs.mkdir('/Users/pranaymishra/Desktop/nodejs/ch6/new.js');
    console.log('Directory created');
}catch(err){
    console.error(err);
}