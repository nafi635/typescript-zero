//Type Aliases
type Employee = {
    id: number;
    name: string;
}

//UNION Types 
function kgToLbs(weight : number | string) : number | string {
    //narrowing down
    if(typeof weight === 'number')
        return weight * 2.2;
    return weight;
}

kgToLbs(10);
kgToLbs('10kg');


// Intersection Types
type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

//We can use both methods under UI widget 
type UIwidget = Resizable & Draggable;


//Literal Types 
//let quantity : 50 = 51; // gives you an error

type Quantity = 50 | 51 | 52;
let quantity : Quantity = 51;   // beauty nature of Literal Types
type Metric = 'cm' | 'mcm';

//Nullable types
function greet(game: string) {
    console.log(game.toUpperCase());
}

greet(null);  //strit null checks : false   


//Optional Chaining
type Customer = {
    birthday: Date
}

function getCustomer(id:number) : Customer | null {
    return id === 0 ? null : { 
        birthday : new Date(0)
    };
}

let customer = getCustomer(0);
// if (customer !== null) {
//     console.log(customer.birthday);
// }

//Optional Parameter  if and if - null and undefined 
console.log(customer?.birthday);

//Optional element access operator

//cusotmers?.[0]

let log : any = (message: string) => console.log(message);
log?.('a');  //if and only if there is log fucntion

//Nullish operator - which is nullish operator
//let speed = speed ?? 30;

let phone = document.getElementById('phone');

function render(document: unknown) {


    if(document === 'string') {
        document.toUpperCase();
    }
}

//Unreachable code  "never" type

//Function that never returns - if use never operator, compiler gives warning on next line of code
function processEvents(): never {
    while(true) {

    }
}

function reject(message: string) {
    throw new Error(message);
}

processEvents();
console.log('Hello world')   // You can see this code never comes as we called never return code above on this