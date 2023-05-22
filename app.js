// Create an array to store employee objects
const employees = [];

// Employee constructor function
function Employee(id, fullName, department, level) {
  this.id = id;
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.imageUrl = ""; // Add the image URL property if needed
  this.salary = 0;
  this.netSalary = 0;
}

// Method to generate a unique four-digit employee ID
function generateEmployeeID() {
  const id = Math.floor(Math.random() * 9000) + 1000;
  return id;
}

// Method to calculate the salary based on the employee level
function calculateSalary(level) {
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
  const netSalary = salary - (salary * 0.075); // Calculate net salary with 7.5% tax
  return { salary, netSalary };
}

// Method to render employee information on the home page
function renderEmployees() {
  const employeeContainer = document.getElementById("employee-container");

  employees.forEach((employee) => {
    const employeeDiv = document.createElement("div");
    employeeDiv.innerHTML = `
      <p>Employee name: ${employee.fullName}</p>
      <p>Employee salary: ${employee.salary}</p>
    `;
    employeeContainer.appendChild(employeeDiv);
  });
}

// Create employee instances and add them to the employees array
const employeeData = [
  { fullName: "Ghazi Samer", department: "Administration", level: "Senior" },
  { fullName: "Lana Ali", department: "Finance", level: "Senior" },
  { fullName: "Tamara Ayoub", department: "Marketing", level: "Senior" },
  { fullName: "Safi Walid", department: "Administration", level: "Mid-Senior" },
  { fullName: "Omar Zaid", department: "Development", level: "Senior" },
  { fullName: "Rana Saleh", department: "Development", level: "Junior" },
  { fullName: "Hadi Ahmad", department: "Finance", level: "Mid-Senior" },
];

employeeData.forEach((data) => {
  const id = generateEmployeeID();
  const { salary, netSalary } = calculateSalary(data.level);

  const employee = new Employee(id, data.fullName, data.department, data.level);
  employee.salary = salary;
  employee.netSalary = netSalary;

  employees.push(employee);
});

// Call the renderEmployees method to display employee information
renderEmployees();