
//Decorators like Angular ---- @Component
function Component(constructor: Function) {
    console.log("Component Decorator is called");
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDOM = () => {
        console.log('Inserting the component in the DOM');
    }

}

// CLass decorators
@Component   // Whenever we called this Decorator, the automatic function call will print
class ProfileComponent {

}

//Decorator Factory
type ComponentOptions = {
    selector: string;
}

function ComponentF(options: ComponentOptions) {
    return (constructor : Function) => {
        console.log("Component Decorator is called");
        constructor.prototype.options = options;
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.insertInDOM = () => {
            console.log('Inserting the component in the DOM');
         }
    }
}

@ComponentF({selector: 'profile'})
@Pipe
class ProfileComponenter {

}

function Pipe(constructor: Function) {
    console.log('Pipe Decorator is called');
    constructor.prototype.pipe = true;
}

function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
const original = descriptor.value;  // Method calling nothing but
    descriptor.value = function() {
        console.log("Before");
        original.call(this, 'Blue Sky'); // Calling that function first. 
        console.log("Before");
    }
}

class Personss {
    
    @Log
    say(message: string){
        console.log('Person says'+ message);
    }
}


//Accessor Decorator
// function Capitalize(target: any, methodName: string, descriptor: PropertyDecorator){
//     const original = descriptor.get;
//     descriptor.get = function(...args){
//         original?.call(this);
//     }
// }

function Minlength(length: number) {
    return (target: any, propertyName: string)=> {
        let value: string;
        const descriptor: PropertyDescriptor = {
            get() { return value;},
            set(newValue: string){
                if(newValue.length < length)
                    throw new Error('Property should be atleast 4 characters long');
                value = newValue;
            }
        }
    }
}

class User {

    @Minlength(4)
    password: string;

    constructor(password: string) {
        this.password = password;
    }

}