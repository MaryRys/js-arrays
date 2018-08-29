const cats = ['fluffy', 'spike', 'killer'];
console.log('1st cat', cats[0]);

const favoriteAnimal = 'cow';
const favoriteAnimalArray = favoriteAnimal.split(''); //['c', 'o', 'w'] must include something in parenthases
console.log('favoriteAnimalArray', favoriteAnimalArray);

const numArray = [1, 2, 3, 4, 5];
const newNum = numArray.join('');
console.log('newNum', newNum);

//mini challenge write a palindrome checker

const palChecker = (word) => {
//Yes if it's a palindrome
//no if it's not

const wordArray = word.split('').join('');
  const reverseArray = word.split('').reverse().join(''); //this works because .split turns the string 'word' into and array and the .reverse and .join are array properties

 if(word === reverseArray) {
        console.log(`${word} IS a palindrome`);
    } else {
        console.log(`${word} is NOT a palindrome`);
    }
};

palChecker('mom'); //yes
palChecker('monkeybutt'); //no


//end palChecker challenge

let animals = ['spiders', 'snakes', 'gophers', 'big spiders'];

const lastItem = animals.pop(); //removes last item: big spiders
const firstItem = animals.shift(); //removes first item: spiders
animals.push('bat');//add to end
animals.unshift('baby hippo');//add to beginning
console.log('animals', animals);


//For loops
//1. what is your starting value? Usually 0
//2. what is your stopping value? usually something.length(because it's usually an array); mostly conditional statements
//3. how are you incrementing? - usually +1

// for(starting;stopping;increment){ 
    // do something here
// }

//Example

for(let i = 0; i < animals.length; i ++) {  //
    console.log(animals[i]);
}