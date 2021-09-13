//written by backtofayton 07.2021 

const franc = require('franc');
const langs = require('langs');
const process = require('process');
const colors = require('colors');

let argList = [];
for (let argX of process.argv) {
    argList.push(argX);
}

// console.log(argList.splice(2).join(' '));

let userInput = argList.splice(2).join(' ');
// console.log(userInput);
if (userInput.length < 5) {
    console.log('Please enter more words to enable script to detect the language');
    console.log('Exiting...');
    process.exit();
}

console.log(userInput);

//franc.all is wrong method hence the code is long
const output = franc.all(userInput);
let result = '';
// console.log(langs.all());
// console.log(output[0]);

try {
    for (let lang of langs.all()) {
        // console.log('hi', lang);
        // result = lang;
        if (lang['2'] == output[0][0]) {
            // console.log('hi', lang);
            result = lang.name;
            console.log(`>> ${result.green}`);
            break;
        }
        else if ('und' == output[0][0]) {
            // console.log('hi', lang);
            result = 'Can not determine the language!';
            console.log(result.red);
            console.log('Exiting...'.red);
            process.exit();
            break;
        }
    }
    if (result == '') result = console.log('>> ', output[0][0].green);
    // break;
    // result = output[0];}
}
catch (e) {
    // console.log('hata', e);
    console.log('An error occured'.red);
}