import { Component } from "react";
import Button from "./btn/Button";

class App extends Component {

  render() {

    const btn1 = <Button label="Button One" color="red" />  
    console.dir(btn1)
    return ( 
      <div>
         {btn1}
        <Button label="Button Two" color="green" />  
      </div>

  )}
}

//main app component
// function App() {
//   //JSX syntax below
//   return (
//     <div className="App">
      
//       <h1>First React JS App</h1>

//     </div>
//   );
// }

export default App;

//compoact ,dar neprofesionist
//element.innerHTML = '<div></div>'

//profesionist, dar nu-i compact in Vanilla
//element.appendChild( document.createElement( 'div') )

//JSX - lib ne permite sa scrim cod compact, si sub capota sta un cod lung --> datorita caruia combina cele doua metode de mai sus

// HTM: like syntax + DOM OOP 

// <App>
//  <Button />
// </App>

