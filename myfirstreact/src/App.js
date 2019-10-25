import React, {Component} from 'react';
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

/** probs vs state
 * state is feature from Component in React.*/
class App extends Component {
    state = {
        persons: [
            { name: 'Max', age:28 },
            { name: 'Won', age:99 },
            { name: 'Jojo', age:999 },
        ],
        otherStates: 'some other value'

    }

    switchNameHandler  = (newName) => {
        //console.log('was clicked');
        //DONT DO THIS this.state.persons[0].name = 'WONSEO';
        //otherStates is not going to be changed.
        this.setState({
            persons: [
                { name: newName, age:28 },
                { name: 'WonSEO', age:27 },
                { name: 'Jorno Joski', age:1 },
            ]
        })
    }

    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                { name: 'Max', age:11111 },
                { name: event.target.value, age:100 },
                { name: 'Jorno Joski', age:1000 },
            ]
        })
    }

    render() {
        return (
            <div className="App">
                <h1>this is React App</h1>
                <p>this is wokring too</p>
                <button onClick={() => this.switchNameHandler('JOJOSKI')}>Switch Name</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}/>
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this,'Ao Xiang')}> My Hobbies: Racing</Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}/>
                <Person/>
            </div>
        );
    }

}
// let App = () => {
//     return (
//         <div className="App">
//             <h1>this is React App</h1>
//             <p>this is wokring too</p>
//             <button>Switch Name</button>
//             <Person name={"Max"} age={"28"}/>
//             <Person name={"Won"} age={"27"}> My Hobbies: Racing</Person>
//             <Person name={"jojo"} age={"1"}/>
//             <Person/>
//         </div>
//     );
// }

export default App;


/**angular =chen
 * chris =*/
