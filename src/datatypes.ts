let sales: number = 123_456_789;
let course :string = 'Typescript';
let value : boolean = true;

//The any type
//Implicit any type 
let level;
level = 1;
level = "a";

//Arrays
let numbers  = [] ;   // This is called any array as you are not declared this

let numbers2 = [1, 2, 4];

let numbers3: number[] = [];

//Tuples - Each particular key is different data type
let user: [number, string] = [1,'nafi'];
user.push(1);

const small = 1;
const medium = 2;
const large = 3;

//Multiple constants in a single file
const enum Size { 
    Small = 1, 
    medium = 2,
    Large = 3
};