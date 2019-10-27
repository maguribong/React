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
 **/

/** probs vs state
 * state is feature from Component in React.
 * stateful component if you use state, multiple components holding.
 * stateful component makes you help to manage application. */
class App extends Component {
    state = {
        people: [
            {name: 'Wonseo', age: 27},
            {name: 'Ao Xiang', age: 26},
            {name: 'JOJO', age: 1},
        ],
        otherState: 'some other value'
    }
/**useState replace the current state instead of targetting only the place you want to change.*/
// const [otherState, setOtherState] = useState('some other value');
    // switchNameHandler  = (newName) => {
    //     //console.log('was clicked');
    //     //DONT DO THIS this.state.persons[0].name = 'WONSEO';
    //     //otherStates is not going to be changed.
    //     this.setState({
    //         persons: [
    //             { name: newName, age:28 },
    //             { name: 'WonSEO', age:27 },
    //             { name: 'Jorno Joski', age:1 },
    //         ]
    //     })
    // }
    /** dont change state directly*/
    switchNameHandler = (newName) => {
        console.log('is working');
        this.setState({
            people:[
                {name: newName, age: 27},
                {name: 'Ao Xiang wife', age: 26},
                {name: 'JOJO daugher', age: 1},
            ]
        })
    };

    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                { name: 'Max', age:11111 },
                { name: event.target.value, age:100 },
                { name: 'Jorno Joski', age:1000 },
            ]
        })
    };
/** if function or stuffs are in inside function, have to call this.*/
    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
            <div className="App">
                <h1>this is React App</h1>
                <p>this is wokring too</p>
                <button style={style}
                        onClick={this.switchNameHandler.bind(this,'This is bind properties: WONSEO LOVES AOXIANG')}>SwitchName</button>
                <Person
                    name={this.state.people[0].name}
                    age={this.state.people[0].age}/>
                <Person
                    name={this.state.people[1].name}
                    age={this.state.people[1].age}
                    click={this.switchNameHandler.bind(this,'This is bind properties: XIang loves wonseo')}
                    changed= {this.nameChangeHandler}> My Hobbies: Racing</Person>
                <Person
                    name={this.state.people[2].name}
                    age={this.state.people[2].age}/>
            </div>
        );
    }
}

export default App;
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
