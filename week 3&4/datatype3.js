class Student {
    name;
    rollNo;
    branch;
    constructor(name, rollNo, branch) {
        this.name = name;
        this.rollNo = rollNo;
        this.branch = branch;
    }
    displayDetails() {
        console.log("Student Name : " + this.name);
        console.log("Roll Number  : " + this.rollNo);
        console.log("Branch       : " + this.branch);
    }
}
// Create object
let student1 = new Student("Sharanya", 101, "AI & DS");
// Display details
student1.displayDetails();
export {};
