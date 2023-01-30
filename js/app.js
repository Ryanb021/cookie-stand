'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


let storeSeattle = {
  location: 'Seattle',
  min: 23,
  max: 65,
  avgBought: 6.3,
  randomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  averageSale: function () {
    return Math.round((this.avgBought * this.randomCustomers()));
  },
  numberOfSales: [],
  numSales: function () {
    for (let i = 0; i < hours.length; i++) {
      this.numberOfSales.push(
        this.averageSale());
    }
  },
  saleTotal: function () {
    let total = 0;
    for (let j = 0; j < this.numberOfSales.length; j++) {
      total += this.numberOfSales[j];
    }
    console.log(total);
    return total;
  }
};


console.log(storeSeattle.numSales());
console.log(storeSeattle.numberOfSales);
console.log(storeSeattle.randomCustomers());
console.log(` ${storeSeattle.averageSale()} is averageSale`);
console.log(`total sales ${storeSeattle.saleTotal}`);

let newDiv = document.getElementById('div');
let seattleP = document.createElement('p');
seattleP.textContent = storeSeattle.location;
newDiv.appendChild(seattleP);

for (let k = 0; k < hours.length; k++) {
  let seattleLi = document.createElement('li');
  seattleLi.textContent = `${hours[k]}: ${storeSeattle.numberOfSales[k]} cookies`;
  seattleP.appendChild(seattleLi);
}

let seattleLiTotal = document.createElement('li');
seattleLiTotal.textContent = `Total: ${storeSeattle.totalSale()} cookies`;
seattleP.appendChild(seattleLiTotal);
