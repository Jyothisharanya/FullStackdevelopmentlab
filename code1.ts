class Box<T> {
    data: T;

    constructor(data: T) {
        this.data = data;
    }

    display(): void {
        console.log("Stored Value: " + this.data);
    }
}

// Store a number
let numberBox = new Box<number>(100);
numberBox.display();

// Store a string
let stringBox = new Box<string>("Hello TypeScript");
stringBox.display();

// Store a boolean
let booleanBox = new Box<boolean>(true);
booleanBox.display();

export {};