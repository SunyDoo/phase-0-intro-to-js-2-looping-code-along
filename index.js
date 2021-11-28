const names =  ['Lisa', 'Kaitlin', 'Jan']
const event = 'surprise'
const message = []

function writeCards(names, event) {
   for (let i = 0; i < names.length; i++)  {
    message.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
   }
    return message
  }

let number = 10
function countDown(number){
  while (number>=0){
    console.log(number--)
  }  
}


