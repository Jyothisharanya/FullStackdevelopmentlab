class Box {
    data;
    constructor(data) {
        this.data = data;
    }
    display() {
        console.log("Stored Value: " + this.data);
    }
}
// Store a number
let numberBox = new Box(100);
numberBox.display();
// Store a string
let stringBox = new Box("Hello TypeScript");
stringBox.display();
// Store a boolean
let booleanBox = new Box(true);
booleanBox.display();
export {};
