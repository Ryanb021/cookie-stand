'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//global variables//
let storeLocations = [];
const salesHeaderElement = document.getElementById('sales-table-header');
const salesBodyElement = document.getElementById('sales-table-body');
const salesFooterElement = document.getElementById('sales-table-footer');
const salesDataElement = document.getElementById('sales-data-form');

//constructor for salmon cookie shops//
function Store(cityName, minPatrons, maxPatrons, avgSold) {
  this.cityName = cityName;
  this.minPatrons = minPatrons;
  this.maxPatrons = maxPatrons;
  this.avgSold = avgSold;
  this.salesPerHour = [];
  this.dailySalesTotal = 0;
  storeLocations.push(this);
}

// sales data generator
Store.prototype.getSalesData = function () {
  for (let i = 0; i < hours.length; i++) {

    let customersPerHour = Math.round((Math.random() * (this.maxPatrons - this.minPatrons) + this.minPatrons));

    let cookieSales = Math.round(customersPerHour * this.avgSold);

    this.salesPerHour.push(cookieSales);
    this.dailySalesTotal += cookieSales;
  }
};

Store.prototype.render = function () {

  let row = document.createElement('tr');
  salesBodyElement.appendChild(row);

  let dataCityName = document.createElement('td');
  dataCityName.innerText = this.cityName.toUpperCase();
  row.appendChild(dataCityName);

  for (let i = 0; i < this.salesPerHour.length; i++) {
    let dataSalesHourly = document.createElement('td');
    dataSalesHourly.innerText = this.salesPerHour[i];
    row.appendChild(dataSalesHourly);
  }

  let totalSalesData = document.createElement('td');
  totalSalesData.innerText = this.dailySalesTotal;
  row.appendChild(totalSalesData);

};

new Store('seattle', 23, 65, 6.3);
new Store('tokyo', 3, 24, 1.2);
new Store('dubai', 11, 38, 3.7);
new Store('paris', 20, 38, 2.3);
new Store('lima', 2, 16, 4.6);

for (let store of storeLocations) {
  store.getSalesData();
  store.render();
}



function renderTableFooter(storeLocationsArray) {
  let row = document.createElement('tr');
  salesFooterElement.append(row);
  row.className = 'totals-row';

  let totalsLabelElement = document.createElement('th');
  row.appendChild(totalsLabelElement);
  totalsLabelElement.innerHTML = 'TOTALS';

  let dailyTotal = 0;
  for (let i = 0; i < hours.length; i++) {
    let hourlyTotal = 0;
    let cell = document.createElement('th');
    row.appendChild(cell);

    for (let j = 0; j < storeLocationsArray.length; j++) {
      hourlyTotal += storeLocationsArray[j].salesPerHour[i];

      dailyTotal += storeLocationsArray[j].salesPerHour[i];
    }
    cell.innerText = hourlyTotal;
  }

  let dailyTotalElement = document.createElement('th');
  row.appendChild(dailyTotalElement);
  dailyTotalElement.textContent = dailyTotal;
}

function renderHours() {
  // insert hour array
  for (let i = 0; i < hours.length; i++) {
    salesHeaderElement.append(document.createElement('th'));
  }

  let hourData = salesHeaderElement.querySelectorAll('th');

  for (let i = 0; i < hours.length; i++) {
    hourData[i].innerText = hours[i];
  }

  salesHeaderElement.prepend(document.createElement('th'));

  salesHeaderElement.append(document.createElement('th'));

  salesHeaderElement.lastElementChild.innerText = 'Total';
}


// Event listeners for form
salesDataElement.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Love you');
  let cityName = e.target.cityName.value;
  let minCust = e.target.minCust.value;
  let maxCust = e.target.maxCust.value;
  let averageCookies = e.target.averageCookies.value;
  new Store(cityName, minCust, maxCust, averageCookies);
  salesDataElement.reset();

  salesFooterElement.innerHTML = '';

  storeLocations[storeLocations.length - 1].getSalesData();
  storeLocations[storeLocations.length - 1].render();

  renderTableFooter(storeLocations);
});

renderTableFooter(storeLocations);
renderHours();
