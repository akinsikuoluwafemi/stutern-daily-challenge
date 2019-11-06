
// fri oct 25th

// function App () {
//     let styles = {
//         fontFamily: 'cursive',
//         fontSize: '1.6rem',
//         textAlign: 'center',
//         border: '1px solid eee'
//     }

//     return (
//         <div>
//             <form style={styles} method="POST">
//                 <label style={{ paddingRight:'1rem'}}for="name">Name:</label>
//                 <input id="password" type="text" placeholder="Your Name" />
//                 <br />

//                 <label style={{ paddingRight: '1rem' }}for="password">Password:</label>
//                 <input id="password" type="text" placeholder="Your Password" />
//                 <br />

//                 <label style={{ paddingRight: '1rem' }} for="confirm">Password:</label>
//                 <input id="confirm" type="text" placeholder="Confirm" />
//                 <br />

//                 <label style={{ paddingRight: '1rem' }} for="phone">Phone:</label>
//                 <input id="phone" type="text" placeholder="Phone Number" />
//                 <br />

//                 <input type="submit"/>

//             </form>
//         </div>
//     )
// }

// export default App;





// import React from 'react';
// import { Component } from 'react';


// if all you are going to be doing is just to return something to the UI, then you can 
// stick with functional components 
// function App () {

//     return (
//         <div>
//             <h1>Femi is very empathetic</h1>
//         </div>
//     )
// }
// export default App;


// when you want to handle state changes(if you are going to alter the behaviour of the ui),
// its advicable to use 
// class Component
// class App extends Component {
//     constructor() {
//         super();
//         this.state = {
//             name: 'Femi'
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <h1>{this.state.name} is very empathetic</h1>
//             </div>
//         )
//     }
// }

// export default App;


// wed 30th oct 2019
// write a function to determine if an arg is a prime num



// // // write a function, and give it a parameter of num
// function primNum (num){
//     // initialise a variable called numToDivideBy and set it to two
//     // you can set it to 1 aswell, but whatever is divided by 1 returns itself
//     // so set it to 2
//     var numToDivideBy = 2;

//     // write a forloop with an expression saying 
//     // as long as  the argument provided is greater than the variable you earlier initialized

//     while(num > numToDivideBy){
//         // check if the arg is an even number, if it is return false
//         // if its not keep adding one to the variable earlier initialized
//         if(num % numToDivideBy === 0){
//             return false;
//         }
//         else {
//             numToDivideBy++;
//         }
//     }
//     // then after the whole loop return true
//     return true;
// }

// console.log(primNum(100)); //returns false because its not prime
// console.log(primNum(137)) //returns true because it is 



// nov 1st 2019

// class Calculator {
//     constructor(a,b){
//         this.a = a;
//         this.b = b;
//     }

//     static add (a,b) {
//         return a + b;
//     }
//     divide (a,b) {
//         return a / b;
//     }
// }

// let dividedNum = new Calculator(20, 4)

// console.log(Calculator.add(20, 4));
// console.log(dividedNum.divide(20, 4));


// wednesday 6th 2019, nov
// Differentiate between a for loop, for each and map in JavaScript.Provide code examples to better illustrate your case.
let numArr = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < numArr.length; i++){
    console.log(`${numArr[i]}, index: ${i}`);
}
// A forloop only gives you the current Element and the CurrentPosition(index)
// it is in the Array 
// 1, index: 0
// 2, index: 1
// 3, index: 2
// 4, index: 3
// 5, index: 4
// 6, index: 5



numArr.forEach((element,index,numArr) => {
    console.log(`element: ${element}, At index: ${index}, This is a picture of all the array: [${numArr}]`);
});

// element: 1, At index: 0, This is a picture of all the array: [1, 2, 3, 4, 5, 6]
//  element: 2, At index: 1, This is a picture of all the array: [1, 2, 3, 4, 5, 6]
// element: 3, At index: 2, This is a picture of all the array: [1, 2, 3, 4, 5, 6]
//  element: 4, At index: 3, This is a picture of all the array: [1, 2, 3, 4, 5, 6]
// element: 5, At index: 4, This is a picture of all the array: [1, 2, 3, 4, 5, 6]
// element: 6, At index: 5, This is a picture of all the array: [1, 2, 3, 4, 5, 6]





// A forEach gives you access to the current element, the position it is 
//     in the element(index) and the total array being looped over





let newNumArr = numArr.map(number => {
    return number * 2;
});

console.log(newNumArr)  //[2, 4, 6, 8, 10, 12]
// A map is an higher other function that creates a new Array entirely.
// it creates anew array to store the answers,you intend to have.