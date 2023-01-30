'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


//SeattleStore
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
//console.log(`total sales ${storeSeattle.saleTotal}`);

let newDiv = document.getElementById('div');
//located the div on html, so Store name can be listed under

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


//TokyoStore
let storeTokyo = {
  location: 'Tokyo',
  min: 3,
  max: 24,
  avgBought: 1.2,
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


console.log(storeTokyo.numSales());
console.log(storeTokyo.numberOfSales);
console.log(storeTokyo.randomCustomers());
console.log(` ${storeTokyo.averageSale()} is averageSale`);
console.log(`total sales ${storeTokyo.saleTotal}`);

//let newDiv = document.getElementById('div');
let tokyoP = document.createElement('p');
tokyoP.textContent = storeTokyo.location;
newDiv.appendChild(tokyoP);

for (let k = 0; k < hours.length; k++) {
  let tokyoLi = document.createElement('li');
  tokyoLi.textContent = `${hours[k]}: ${storeTokyo.numberOfSales[k]} cookies`;
  tokyoP.appendChild(tokyoLi);
}

let tokyoLiTotal = document.createElement('li');
tokyoLiTotal.textContent = `Total: ${storeTokyo.totalSale()} cookies`;
tokyoP.appendChild(tokyoLiTotal);


//DubaiStore
let storeDubai = {
  location: 'Dubai',
  min: 11,
  max: 38,
  avgBought: 3.7,
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


console.log(storeDubai.numSales());
console.log(storeDubai.numberOfSales);
console.log(storeDubai.randomCustomers());
console.log(` ${storeDubai.averageSale()} is averageSale`);
console.log(`total sales ${storeDubai.saleTotal}`);

//let newDiv = document.getElementById('div');
let dubaiP = document.createElement('p');
dubaiP.textContent = storeDubai.location;
newDiv.appendChild(dubaiP);

for (let k = 0; k < hours.length; k++) {
  let dubaiLi = document.createElement('li');
  dubaiLi.textContent = `${hours[k]}: ${storeDubai.numberOfSales[k]} cookies`;
  dubaiP.appendChild(dubaiLi);
}

let dubaiLiTotal = document.createElement('li');
dubaiLiTotal.textContent = `Total: ${storeDubai.totalSale()} cookies`;
dubaiP.appendChild(dubaiLiTotal);


//ParisStore
let storeParis = {
  location: 'Paris',
  min: 20,
  max: 38,
  avgBought: 2.3,
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


console.log(storeParis.numSales());
console.log(storeParis.numberOfSales);
console.log(storeParis.randomCustomers());
console.log(` ${storeParis.averageSale()} is averageSale`);
console.log(`total sales ${storeParis.saleTotal}`);

//let newDiv = document.getElementById('div');
let parisP = document.createElement('p');
parisP.textContent = storeParis.location;
newDiv.appendChild(parisP);

for (let k = 0; k < hours.length; k++) {
  let parisLi = document.createElement('li');
  parisLi.textContent = `${hours[k]}: ${storeParis.numberOfSales[k]} cookies`;
  parisP.appendChild(parisLi);
}

let parisLiTotal = document.createElement('li');
parisLiTotal.textContent = `Total: ${storeParis.totalSale()} cookies`;
parisP.appendChild(parisLiTotal);


//LimaStore
let storeLima = {
  location: 'Lima',
  min: 2,
  max: 16,
  avgBought: 4.6,
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


console.log(storeLima.numSales());
console.log(storeLima.numberOfSales);
console.log(storeLima.randomCustomers());
console.log(` ${storeLima.averageSale()} is averageSale`);
console.log(`total sales ${storeLima.saleTotal}`);

//let newDiv = document.getElementById('div');
let limaP = document.createElement('p');
limaP.textContent = storeLima.location;
newDiv.appendChild(limaP);

for (let k = 0; k < hours.length; k++) {
  let limaLi = document.createElement('li');
  limaLi.textContent = `${hours[k]}: ${storeLima.numberOfSales[k]} cookies`;
  limaP.appendChild(limaLi);
}

let limaLiTotal = document.createElement('li');
limaLiTotal.textContent = `Total: ${storeLima.totalSale()} cookies`;
limaP.appendChild(limaLiTotal);
