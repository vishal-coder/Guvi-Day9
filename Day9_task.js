//Solving problems using array functions on rest countries data.
//1. Get all the countries from Asia continent /region using Filter function
let request1 = new XMLHttpRequest();
request1.open(
  "GET",
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
);
request1.send();
request1.onload = function () {
  let data = JSON.parse(request1.response);
  const dataArr = Object.entries(data); // to convert object into array of object to use filter method

  let asianCountries = dataArr.filter((item, key) => {
    if (item[1].region == "Asia") return item;
  });

  console.log("List of all the countries from Asia continent is : \n");
  asianCountries.forEach((country) => console.log(country[1].name));
};

//2. Get all the countries with a population of less than 2 lakhs using Filter function

let request2 = new XMLHttpRequest();
request2.open(
  "GET",
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
);
request2.send();
request2.onload = function () {
  let data = JSON.parse(request2.response);
  let dataArr = Object.entries(data);
  let populationArr = dataArr.filter((item) => {
    return item[1].population < 200000;
  });
  console.log("\n\nList countries with a population of less than 2 lakhs");

  populationArr.forEach((country) => console.log(country[1].name));
};

//3. Print the following details name, capital, flag using forEach function

let request3 = new XMLHttpRequest();
request3.open(
  "GET",
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
);
request3.send();
request3.onload = function () {
  let data = JSON.parse(request3.response);
  console.log(
    "\n\nPrint the following details name, capital, flag using forEach function"
  );
  Object.keys(data).forEach((key) =>
    console.log(
      `Country Name is: ${data[key].name}, Capital is: ${data[key].capital}, and Flag is  : ${data[key].flag}`
    )
  );
};

//4. Print the total population of countries using reduce function

let request4 = new XMLHttpRequest();
request4.open(
  "GET",
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
);
request4.send();
request4.onload = function () {
  let data = JSON.parse(request4.response);
  let totalPop = Object.entries(data).reduce((finalVal, initialVal) => {
    return finalVal + initialVal[1].population;
  }, 0);
  console.log("\ntotal population of all countries is : ", totalPop);
};

//5. Print the country which uses US Dollars as currency.
let request5 = new XMLHttpRequest();
request5.open(
  "GET",
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
);
request5.send();
request5.onload = function () {
  let data = JSON.parse(request5.response);
  let countryList = "";
  for (const [key, country] of Object.entries(data)) {
    country.currencies.forEach((element) => {
      if (element.code == "USD") countryList += country.name + "\n";
    });
  }
  console.log("\ncountry using US Dollars as currency are : \n", countryList);
};
