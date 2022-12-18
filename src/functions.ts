//Function annotating return type is important
function caclculateTax(income : number): number {
    let x;  //noUsedLocals - you can use this settings in tsconfig file
    if(income < 50000) 
        return income * 1.2;
    return income;
}


//If you use optional parameter and you use conditions on income - it is possibley throwing an error
// function caclculateTax(income ?: number): number {
//     let x;  //noUsedLocals - you can use this settings in tsconfig file
//     if(income < 50000) 
//         return income * 1.2;
//     return income;
// }

function caclculateTaxFun(income ?: number): number {
        income = income || 50000;  //noUsedLocals - you can use this settings in tsconfig file
        if(income < 50000) 
            return income * 1.2;
        return income;
    }


//Objects
let employee : {
    id:number;
    name? : string;
} = {id:1}

employee.name = 'Mohammad Nafi';