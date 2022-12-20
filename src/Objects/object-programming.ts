//A class is a blue print of an object

//these are classes, we should create object out of these classes
class Account {
    readonly id: number;   // Readonly property in a object
    public owner: string;   // Public private protected , we can use access modifiers for properties & methods
    balance: number;
    readme?: string; //Optional parameter

    constructor(id:number, owner: string, balance:number){
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount: number): void {
        if(amount <= 0){
            throw new Error('Invalid Amount');
        }
        this.balance += amount;
    }

    // getBalance():number {
    //     return this.balance;
    // }

     get getBalance():number {
         return this.balance;
     }

     set setBalance(balanceAmount: number) {
        this.balance = balanceAmount;
    }
}

let account = new Account(1,'Nafi', 0);
account.deposit(100);
console.log(account.getBalance);


//Parameter properties, when you define properties on the constructor - You don't need to define them in object
class AccountB {
    nickname : string;

    constructor(
        public readonly id: number,
        public owner : string,
        private _balance : number
    ) {

    }
}

//Index properties
class SeatAssignment {

    [seatNumber : string]: string;   // Index property
}

let seats = new SeatAssignment();
seats.A1 = 'Nafi';
seats.A2 = 'Mohammad';

seats['A1'] = 'Mohammad';    // We can access through bracket too

class Ride {
    static activeRides: number = 0;

    start() {
        Ride.activeRides ++;  // here you used class name but not object
    }

    static get activeRidess() {
        return Ride.activeRides;
    }
}

class Person {

    constructor(public firstName: string, public lastName: string){

    }

    get fullName() {
        return this.firstName+ ' ' + this.lastName;
    }

    walk() {
        console.log("Walking")
    }
}

class Student extends Person {
    constructor(public studentId: number,
            firstName: string, 
            lastName: string){
        super(firstName,lastName);
    }

    takeTest() {
        console.log("Taking a test");
    }
}

class Teacher extends Person {
    constructor(public studentId: number,
            firstName: string, 
            lastName: string){
        super(firstName,lastName);
    }

    takeTest() {
        console.log("Taking a test");
    }
}

let student = new Student(1, 'John', "Last");

function printNames(people : Person[]) {
    for (let person of people) 
        console.log(person.fullName);
}

printNames(
    [
        new Student(1,'John','Smith'),
        new Teacher(2,'Nafi','Mohammad')
    ]
);

//abstract classes
abstract class Calendar {
    constructor (public name : string){
    }

    abstract addEvent(): void;
    abstract removeEvent(): void;
}

interface CalendarR {
    name: string;
    addEvent(): void;
    removeEvent(): void;
}

class GoogleCalendar implements CalendarR {
    name:string;
    addEvent(): void {
        throw new Error("Method Not Implemented");
    }
    removeEvent(): void {
        throw new Error("Method not implemneted");
    }
}