// Code your solutions in this file
//for (let age = 30; age < 40; age++) {
   // console.log(`I'm ${age} years old. Happy birthday to me!`);
  //debugger;
  //}

  //const gifts = ["teddy bear", "drone", "doll"];

//function wrapGifts(gifts) {
  //for (let i = 0; i < gifts.length; i++) {
   // console.log(`Wrapped ${gifts[i]} and added a bow!`);
    // debugger;
 // }

  //return gifts;
//}

//wrapGifts(gifts);

function writeCards(arrayOfNames, eventName){
    const messages = []
    for(let i = 0; i < arrayOfNames.length; i++){
        console.log(`Thank you, ${arrayOfNames[i]}, for the wonderful ${eventName} gift!`)
        messages.push(`Thank you, ${arrayOfNames[i]}, for the wonderful ${eventName} gift!`)
    }
    return messages 
}

writeCards(["Charlie", "Samip", "Ali"], "anniversary");

function countDown(number){

    while(number >= 0){
        console.log(number--)
    }

}