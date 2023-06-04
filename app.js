
'use strict'
var id = 999;
//idnamber
function generateId() {
  return ++id;
}
function newSalary (level) { 
    let min = 0 
    let max = 0

    if(level== 'Senior'){   
         min = 1500;
        max = 2000;
        let newSalary = Math.floor(Math.random() * (max - min) + min);
        return newSalary.toString() 
    } else if (level== 'Mid-Senior'){
        min = 1000;
        max = 1500;
        let newSalary = Math.floor(Math.random() * (max - min) + min);
        return newSalary.toString() 
    } else{
        min = 500;
        max = 1000;
        let newSalary = Math.floor(Math.random() * (max - min) + min);
        return newSalary.toString() 
    }

    
}

// constructor function
function Employee(fullName, department, level) {
  this.employeeId = generateId();
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.salary = 0;
}
Employee.prototype.netSalary= function(){
    this.salary= newSalary(this.level)
}



let Ghazi = new Employee('Ghazi Samer', "Administration", "Senior");
let Lana = new Employee('Lana Ali', "Finance", "Senior");
let Tamara = new Employee('Tamara Ayoub', "Marketing", "Senior");
let Safi = new Employee('Safi Walid', "Administration", "Mid-Senior");
let Omar = new Employee('Omar Zaid', "Development", "Senior");
let Rana = new Employee('Rana Saleh', "Development", "Junior");
let Hadi = new Employee('Hadi Ahmad', "Finance", "Mid-Senior");

console.table(Ghazi);
Ghazi.netSalary()
Lana.netSalary()
Tamara.netSalary()
Safi.netSalary()
Omar.netSalary()
Rana.netSalary()
Hadi.netSalary()


//Employee prototype
Employee.prototype.render = function () {

  document.write(`<p><label>ID:</label><span class="idNumber" id="idNumber">${this.employeeId}</span></p>`);
  document.write(`<p><label>Full Name:</label><span class="fullName" id="fullName">${this.fullName}</span></p>`);
  document.write(`<p><label>department:</label><span class="department" id="department">${this.department}</span></p>`);
  document.write(`<p><label>Level:</label><span class="level" id="level">${this.level}</span></p>`);
  document.write(`<p><label>Salary:</label><span class="salary" id="salary">${this.salary}</span></p>`);
};

// Create an array to hold the employee objects
let employees = [Ghazi, Lana, Tamara, Safi, Omar, Rana, Hadi];


for (let i = 0; i < employees.length; i++) {
  employees[i].render();
  document.write("<hr>")
}
