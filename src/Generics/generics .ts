//Generic classes
class KeyValuePair<T> {
    constructor(public key: T, public value: string) {

    }
}

let pair = new KeyValuePair<string>('1','a');
pair.value['1'];

//Generic functions  - Genric classes - No type should be mentioned
function WrapInArray<T>(value: T) {
    return [value];
}

let numberss = WrapInArray('1');

class ArrayUtils {
    static wrapInArray<T>(value: T) {
        return [value];
    }
}

// let arrayUtils = new ArrayUtils();
// let numbersss = arrayUtils.wrapInArray(1);
let numbersss = ArrayUtils.wrapInArray(1);

/*--------Generic interfaces ----------*/
interface Result<T> {
    data: T | null;
    error : string | null;
}

function fetch<T>(url: string): Result<T> {
    return{data: null, error: null};
}

interface User {
    username: string;
}

interface Product {
    title: string;
}

let result = fetch<User>('url');
result.data;


//Generic Constriants 
interface Person {
    name: string
}

function echo<T extends Person>(value: T): T {
    return value;
}

//generic constraints 
class Persona {
    constructor(public name: string){

    }
}

function echoa<T extends Persona>(value: T): T {
    return value;
}

echoa({name:'a'})

// Extending Generic classes
interface Product {
    name: string;
    price:number;
}

class Store<T> {
    protected _objects: T[] = [];

    add(obj: T): void {
        this._objects.push(obj);
    }
}

//Pass on the generic type Parameter
class CompressibleStore<T> extends Store<T> {
}

//Restrict the generic type parameter
class SearchableStore<T extends {name: string}> extends Store<T> {
    find(name: string): T | undefined {
        return this._objects.find(obj => obj.name === name);
    }
}

class ProductStore extends Store<Product> {
    filterByCategory(category: string): Product[] {
        return ;
    }
}


//Type Mapping

interface Product {
    name: string;
    price: number;
}

type ReadOnlyProduct = {
    readonly [K in keyof Product]: Product[K]
}