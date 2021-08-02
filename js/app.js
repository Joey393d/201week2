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
