import React from 'react';

/** this is static approach.*/
// const person = () => {
//     return <p>I'm a person</p>
// };

/** this is dynamic approach
 * {}  single curly braket able to put javascript code in.*/
const person = (props) => {
    return (
        <div>
            <p>I'm a {props.name} and I am {props.age}</p>
            <p>{props.children}</p>
        </div>
        )
};
export default person;
