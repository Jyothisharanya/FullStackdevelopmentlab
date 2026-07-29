class Student {
    static collegeName = "SVECW";
    name;
    constructor(name) {
        this.name = name;
    }
    displayStudent() {
        console.log("Student Name: " + this.name);
    }
    static displayCollege() {
        console.log("College Name: " + Student.collegeName);
    }
}
// Create objects
let student1 = new Student("jyothi");
let student2 = new Student("sharanya");
// Display student details
student1.displayStudent();
student2.displayStudent();
// Call static method
Student.displayCollege();
export {};
