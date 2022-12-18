//A class is a blue print of an object

//these are classes, we should create object out of these classes
class Account {
    id: number;
    owner: string;
    balance: number;

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
}