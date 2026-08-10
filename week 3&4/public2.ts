class Student {
    readonly studentId: number;
    name: string;
    branch: string;

    constructor(studentId: number, name: string, branch: string) {
        this.studentId = studentId;
        this.name = name;
        this.branch = branch;
    }

    displayDetails(): void {
        console.log("Student ID: " + this.studentId);
        console.log("Student Name: " + this.name);
        console.log("Branch: " + this.branch);
    }
}

// Create object
let student = new Student(101, "akshaya", "AI & DS");

student.displayDetails();

// This statement will give an error because studentId is readonly
// student.studentId = 102;

export {};