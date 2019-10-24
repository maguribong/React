import React from 'react';
import './App.css';
import Person from './Person/Person';

// function App() {
//   return (
//     <div className="App">
//         <h1>this is React App</h1>
//     </div>
//   );
// }

/**
 * className ="csscode"
 * export default classname. React uses in JSX in javascript file.  vs in Angular, angular uses class='csscode ' in html.
 * has have to be in one root element(ex. <div>
 * */
let App = () => {
    return (
        <div className="App">
            <h1>this is React App</h1>
            <p>this is wokring too</p>
            <Person name={"Max"} age={"28"}/>
            <Person name={"Won"} age={"27"}> My Hobbies: Racing</Person>
            <Person name={"jojo"} age={"1"}/>
            <Person/>
        </div>
    );
};

export default App;
