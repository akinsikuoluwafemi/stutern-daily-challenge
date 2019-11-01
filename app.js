
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

