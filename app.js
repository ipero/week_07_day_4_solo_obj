// ! ! !
// Three Bugs
function Person (name,id,salary,rate) {
  this.name=name;
  this.id=id;
  this.salary=salary;
  this.rate=rate;
}


var Atticus = new Person("Atticus", "2405", "47000", 3);
var Jem = new Person("Jem", "62347", "63500", 4);
var Boo = new Person ("Boo", "11435", "54000", 3);
var Scout = new Person("Scout", "6243", "74750", 5);

var employeeList = [Atticus, Jem, Boo, Scout];

//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
for(var i = 0; i < employeeList.length; i++){
	employeeList[i] = calculateSTI(employeeList[i]);
 	newEl = document.createElement('li');
	newText = document.createTextNode(employeeList[i]);
	newEl.appendChild(newText);
	position.appendChild(newEl);
}

function calculateSTI(array){
  var newArray = [];

  newArray[0] = array.name;
  var employeeNumber = array.id;
  
  var baseSalary = parseInt(array.salary);
  var reviewScore = array.rate;

  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  
  if(bonus > 0.13){
    bonus = 0.13;
  }
    var bonusDollarValue=Math.round(baseSalary*bonus);
  newArray[1] = " " +bonus*100+"%";
  newArray[2] = baseSalary+bonusDollarValue;
  newArray[3] = bonusDollarValue;
  console.log(newArray[0] + " " + newArray[1] + " " + newArray[2] + " " + newArray[3]);
  return newArray;
}

function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  return basePercent;
}

function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = salary;
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}