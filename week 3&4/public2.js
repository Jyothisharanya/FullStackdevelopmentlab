class Student {
    studentId;
    name;
    branch;
    constructor(studentId, name, branch) {
        this.studentId = studentId;
        this.name = name;
        this.branch = branch;
    }
    displayDetails() {
        console.log("Student ID: " + this.studentId);
        console.log("Student Name: " + this.name);
        console.log("Branch: " + this.branch);
    }
}
// Create object
let student = new Student(101, "akshaya", "AI & DS");
student.displayDetails();
export {};
