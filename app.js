// Constructor function for Employee
function Employee(id, fullName, department, level) {
  this.id = id;
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.imageUrl = ""; // Add the image URL property if needed
  this.salary = 0;
  this.netSalary = 0;
}

// Prototype method to render employee information
Employee.prototype.render = function () {
  document.write(`
    <p>Employee name: ${this.fullName}</p>
    <p>Department: ${this.department}</p>
    <p>Employee salary: ${this.salary}</p>
    <br>
  `);
};

// Method to generate a unique four-digit employee ID
Employee.prototype.generateEmployeeID = function () {
  const id = Math.floor(Math.random() * 9000) + 1000;
  return id;
};

// Method to calculate the salary based on the employee level
Employee.prototype.calculateSalary = function (level) {
  let min, max;
  switch (level) {
    case "Senior":
      min = 1500;
      max = 2000;
      break;
    case "Mid-Senior":
      min = 1000;
      max = 1500;
      break;
    case "Junior":
      min = 500;
      max = 1000;
      break;
    default:
      min = 0;
      max = 0;
  }

  const salary = Math.floor(Math.random() * (max - min + 1)) + min;
  const netSalary = salary - salary * 0.075; // Calculate net salary with 7.5% tax
  return { salary, netSalary };
};

// Create employee instances
const employees = [
  new Employee(
    generateEmployeeID(),
    "Ghazi Samer",
    "Administration",
    "Senior"
  ),
  new Employee(generateEmployeeID(), "Lana Ali", "Finance", "Senior"),
  new Employee(generateEmployeeID(), "Tamara Ayoub", "Administration", "Senior"),
  new Employee(generateEmployeeID(), "Safi Walid", "Development", "Mid-Senior"),
  new Employee(generateEmployeeID(), "Rana Saleh", "Development", "Junior"),
  new Employee(generateEmployeeID(), "Hadi Ahmad", "Finance", "Mid-Senior"),
];

// Render employee information
employees.forEach((employee) => {
  employee.salary = calculateSalary(employee.level).salary;
  employee.render();
});
