
"use strict";
var id = 999;
//idnamber
function generateId() {
  return ++id;
}
//Sallary
function getRandomSalary(level) {
  let min, max;

  switch (level) {
    case 'Senior':
      min = 1500;
      max = 2000;
      break;
    case 'Mid-Senior':
      min = 1000;
      max = 1500;
      break;
    case 'Junior':
      min = 500;
      max = 1000;
      break;
  }

  return getRandomInt(min, max);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  let salary = Math.floor(Math.random() * (max - min) + min);
  return calculateNetSalary(salary);
}

// (min*max) salary-(salary*7.5%):
function calculateNetSalary(salary) {
  const taxPercent = 7.5;
  const taxAmount = (salary * taxPercent) / 100;
  const netSalary = salary - taxAmount;
  return Math.round(netSalary);
}

// constructor function
function Employee(employeeId, fullName, department, level, salary, img) {
  this.employeeId = generateId();
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.img = img
  this.salary = getRandomSalary(level);
}

let Ghazi = new Employee(generateId(), 'Ghazi Samer', "Administration", "Senior", getRandomSalary("Senior"), Ghazi.jpg);
let Lana = new Employee(generateId(), 'Lana Ali', "Finance", "Senior", getRandomSalary("Senior"), Lana.jpg);
let Tamara = new Employee(generateId(), 'Tamara Ayoub', "Marketing", "Senior", getRandomSalary("Senior"), Tamara.jpg);
let Safi = new Employee(generateId(), 'Safi Walid', "Administration", "Mid-Senior", getRandomSalary("Mid-Senior"), Safi.jpg);
let Omar = new Employee(generateId(), 'Omar Zaid', "Development", "Senior", getRandomSalary("Senior"), Omar.jpg);
let Rana = new Employee(generateId(), 'Rana Saleh', "Development", "Junior", getRandomSalary("Junior"), Rana.jpg);
let Hadi = new Employee(generateId(), 'Hadi Ahmad', "Finance", "Mid-Senior", getRandomSalary("Mid-Senior"), Hadi.jpg);

console.table(Ghazi);
console.table(Lana);
console.table(Tamara);
console.table(Safi);
console.table(Omar);
console.table(Rana);
console.table(Hadi);


//properties method
const mainEl = document.getElementsByquerySelector("main");

// Employee.prototype.render = function () {
//     const divParentEl = document.createElement("div")
//     divParentEl.className = "card"
//     mainEl[0].appendChild(divParentEl)

//     const divEl = document.createElement("div")
//     divEl.className = "imgURL"
//     divParentEl.appendChild(divEl)}


//Employee prototype
Employee.prototype.render = function () {

  document.write(`<p><label>ID:</label><span class="idNumber" id="idNumber">${this.employeeId}</span></p>`);
  document.write(`<p><label>Full Name:</label><span class="fullName" id="fullName">${this.fullName}</span></p>`);
  document.write(`<p><label>Department:</label><span class="department" id="department">${this.Department}</span></p>`);
  document.write(`<p><label>Level:</label><span class="level" id="level">${this.Level}</span></p>`);
  document.write(`<p><label>Salary:</label><span class="salary" id="salary">${this.Salary}</span></p>`);
  document.write(`<p><label>img:</label><span class="img" id="img">${this.img}</span></p>`);
};

// Create an array to hold the employee objects
let employees = [Ghazi, Lana, Tamara, Safi, Omar, Rana, Hadi];

// Loop through the employees array and call the render method for each employee
for (let i = 0; i < employees.length; i++) {
  employees[i].render();
}

console.log = employees

  employeeDetails.appendChild(employeeName);
  employeeDetails.appendChild(employeeId);
  employeeDetails.appendChild(department);
  employeeDetails.appendChild(level);
  employeeDetails.appendChild(salary);
  employeeDetails.appendChild(img);

  card.appendChild(employeeImage);
  card.appendChild(employeeDetails);

  cardContainer.appendChild(card);




