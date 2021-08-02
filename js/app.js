'use strict'
console.log('app.js is connected');



let petOne = {
  name: 'tiger',
  breed: 'tabby',
  imageName: 'tommyBob',
  interests: ["Rainy Days", "Running", "Yarn"], 
  isGoodWithKids: true,
  isGoodWithDogs: true,
  isGoodWithCats: true,
  setAge: function() {
    this.age = randomAge(3,12) + ' months old.'
  }
};

function randomAge(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

petOne.setAge();
petOne.isFixed = false;
console.log(petOne);

let parentElement = document.getElementById('kittenProfiles')

let article = document.createElement("article");

parentElement.appendChild(aricle);

let h2 = document.createElement('h2');
h2.textContent = petOne.name;
console.log(h2)
article.appendChild(h2);
let petPara = document.createElement('p')
petPara.textContent = 'Cats are fun, and this cat is ' + petOne.age + ' old.';


article.appendChild(petPara);
let petUL = document.createElement('ul');
article.appendChild(petUL);


for(let i = 0; i < petOne.interests.length; i++){
  let petLI = document.createElement('li');
  console.log(petLi)
  petLi.textContent = petOne.interests[i];
  petUL.appendChild(petLi);

}  

let petOneImg = document.createElement('img');
petOneImg.setAttribute("src", "images/" + petOne.imageName + '.jpg');
petOneImg.setAttribute("alt", "Picture of kitten to adopt.");
article.appendChild(petOneImg);
