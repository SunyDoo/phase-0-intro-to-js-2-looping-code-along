const names = ["Lisa", "Kaitlin", "Jan"];
const event = "surprise";


function writeCards(names, event) {    
    let newArray = [];
    for (let i = 0; i < names.length; i++) {

        newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);

     }
    return newArray;
}

writeCards("name", "event");



let count = 10;
function countDown(count) {
    while (count >= 0) {
    console.log(count --)
    }
}

countDown(11)