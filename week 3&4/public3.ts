class Student {
    static collegeName: string = "SVECW";
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    displayStudent(): void {
        console.log("Student Name: " + this.name);
    }

    static displayCollege(): void {
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