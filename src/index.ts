// console.log('hello word');

// let age : number = 20;
// if(age<20)
//     age += 10;
// console.log(age)

//  data type
// let sales = 123_456_789;
// let course = 'Typescript';
// let is_published  = true;

// let level; // its mena type any

// function render(doc : any) {
//     console.log(doc)
// }

// array 
// let numbers : number[] = [1,2]
// numbers.forEach(n => n)

// tuples
// let user : [number , string] = [1,'mosh']


// enum
// const small = 1;
// const medium = 2;
// const large = 3;

// pascalCase
// const enum Size {Small = 1 , Medium , Large}

// let mySize : Size = Size.Medium;
// console.log(mySize)


// function

// function calculateTax(income : number, taxYear: number ) : number {
   
//     if ( taxYear < 50_000)
//        return income * 1.2
//     return income * 1.3;
// }

// calculateTax(10_000 , 2022) //we have parmeters


// function calculateTax(income : number, taxYear = 2022 ) : number {
   
//     if (taxYear < 50_000)
//        return income * 1.2
//     return income * 1.3;
// }

// calculateTax(10_000 , 2022) //we have parmest 


// object not recomaned

// let employee :{

//   readonly  id:number;
//     name:string;
//     retire: (date : Date) => void;

// } = { id: 1 , 
//     name : 'Mosh',
//     retire: (date: Date) => {
//         console.log(date);
//     }
// }




// write way
// type aliases
// type Employee = {
//   readonly  id: number;
//   name:string;
//   retire: (date : Date) => void;
// } 


// let employee : Employee = { 
//     id: 1 , 
//     name : 'Mosh',
//     retire: (date: Date) => {
//         console.log(date);
//     }
// }


// union type

// function KgToLbs(weight : number | string) : number{
//     //narrowing
//     if (typeof weight === 'number')
//         return weight * 2.2;
//     else 
//         return parseInt(weight) * 2.2
// }

// KgToLbs(10);
// KgToLbs('10kg')


/////////////intersection type

// type Draggable = {
//     drag : () => void
// };

// type Resizable = {
//     resize : () => void
// }

// type UIWidget = Draggable & Resizable;

// let textBox : UIWidget = {

//     drag: () =>{},
//     resize:()=> {},
// }


////////////////literal Types
// literal (exact, specific)

// type Quantity = 50 | 100;
// let quantity : Quantity = 100;


// type Meric = 'cm' | 'inch';


/////////////nullable types

// function greet(name:string | null | undefined) {

//     if (name)
//      console.log(name.toUpperCase());
//     else 
//      console.log('hi')
// }

// greet(undefined)


/////////////////// optional chaining
