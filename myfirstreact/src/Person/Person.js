import React from 'react';

import './Person.css';

/** this is static approach.*/
// const person = () => {
//     return <p>I'm a person</p>
// };

/** this is dynamic approach
 * {}  single curly braket able to put javascript code in.*/
/**this is stateless component.
 * this is called presentational component or dumb component*/

/**value is like double binding access to value.*/
const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm a {props.name} and I am {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
        )
};
export default person;

