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