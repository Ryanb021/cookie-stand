'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


let storeLocation = []
  name: 'Seattle',
  min: 23,
  max: 65,
  avgBought: 6.3,
  randomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
  }
};

console.log(seattleStore.randomCustomers());
