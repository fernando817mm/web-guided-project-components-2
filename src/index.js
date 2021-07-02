import axios from 'axios';
// import { isFulfilled, reject } from 'q';
// import { breeds } from './breeds.js';

// Imports at the top of the file!
// We never nest imports inside blocks of code!

// 👉 TASK 1- Test out the following endpoints:

//  https://lambda-times-api.herokuapp.com/friends
//  https://lambda-times-api.herokuapp.com/friends/1
//  https://lambda-times-api.herokuapp.com/quotes
//  https://lambda-times-api.herokuapp.com/cards
//  https://lambda-times-api.herokuapp.com/breeds
//  https://dog.ceo/api/breeds/image/random

//  * With HTTPie (command-line HTTP Client)
//  * With Postman (HTTP Client with GUI)
//  * With Chrome and the Network Tab
//  * With JS using the native fetch [STRETCH]

const result = axios.get('https://lambda-times-api.herokuapp.com/friends');

console.log(`1: about to fetch data with axios`);

result
  .then(futureData => {
  //future code for when the data arrives
  //freedom to assume data goes here
  console.log(`2: here is the future data - ${futureData}`);
  futureData.data.forEach(e => console.log(e.name));
  })
  .catch(reject => console.log(reject))

console.log(`3: we requested data with axios`);

const result2 = fetch('https://lambda-times-api.herokuapp.com/friends');

result2
  .then(fulfilled => console.log(fulfilled))
  .catch(rejected => console.log(rejected));

// 👉 TASK 2- Select the "entry point", the element
// inside of which we'll inject our dog cards 

const entryPoint = document.querySelector('.entry');

// 👉 TASK 3- `dogCardMaker` takes an object and returns a Dog Card.
// Use this function to build a Card, and append it to the entry point.

function dogCardMaker({ imageURL, breed }) {
  // instantiating the elements
  const dogCard = document.createElement('div');
  const image = document.createElement('img')
  const heading = document.createElement('h3')
  // setting class names, attributes and text
  heading.textContent = `Breed: ${breed}`
  image.src = imageURL
  image.classList.add('dog-image')
  dogCard.classList.add('dog-card')
  // creating the hierarchy
  dogCard.appendChild(image)
  dogCard.appendChild(heading)
  // adding some interactivity
  dogCard.addEventListener('click', () => {
    dogCard.classList.toggle('selected')
  })
  // never forget to return!
  return dogCard
}






// 👉 TASK 4- Bring the Axios library into the project using one of two methods:
//    * Traditional way: put another script tag inside index.html (`https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js`)
//    * Projects with npm: install it with npm and import it into this file


// 👉 TASK 5- Fetch dogs from `https://dog.ceo/api/breed/{breed}/images/random/{number}`
//    * ON SUCCESS: use the data to create dogCards and append them to the entry point
//    * ON FAILURE: log the error to the console
//    * IN ANY CASE: log "done" to the console

axios.get('https://dog.ceo/api/breed/boxer/images/random/6')
  .then(res => {
    const images = res.data.message;
    console.log(images);
    images.forEach(e => {
      const dog = dogCardMaker({imageURL: e, breed: 'boxer'});
      entryPoint.append(dog);
    })
  })
  .catch(err => {
    console.log(err);
  })

// 👉 (OPTIONAL) TASK 6- Wrap the fetching operation inside a function `getDogs`
// that takes a breed and a count (of dogs)


// 👉 (OPTIONAL) TASK 7- Put a button in index.html to 'get dogs' and add a click
// event listener that executes `getDogs`


// 👉 (OPTIONAL) TASK 8- Import the breeds from `breeds.js`
// or request them from https://lambda-times-api.herokuapp.com/breeds
// and loop over them, fetching a dog at each iteration
