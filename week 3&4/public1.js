class Employee {
    name;
    salary;
    department;
    constructor(name, salary, department) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }
    displayDetails() {
        console.log("Employee Name: " + this.name);
        console.log("Salary: " + this.salary);
        console.log("Department: " + this.department);
    }
}
// Child class
class Manager extends Employee {
    showDepartment() {
        console.log("Department: " + this.department);
    }
}
// Create object
let emp = new Employee("Sharanya", 50000, "AI & DS");
emp.displayDetails();
console.log("Employee Name: " + emp.name);
// These statements will give errors because salary is private
// and department is protected.
// console.log(emp.salary);
// console.log(emp.department);
let manager = new Manager("Ravi", 70000, "HR");
manager.showDepartment();
export {};
