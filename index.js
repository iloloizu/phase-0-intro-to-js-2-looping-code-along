// Code your solutions in this file
const names = ['Lisa', 'Kaitlin', 'Jan'];

function writeCards(names, event) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
   return messages;
}
writeCards(names);

function countDown(positiveNumber) {
    while(positiveNumber >= 0) {
        console.log(positiveNumber--)
    }
}

countDown(positiveNumber);