import React from 'react';
import ReactDOM from 'react-dom';

function SubMainTest(props) {
    return (
        <div>
            <p>Sub Test Variable: {props.Variable}</p>
            <p>Sub Test Array: {props.Array[0]}</p>
            <ul>
                {props.Array.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <p>Sub Test Object: {props.Object.first}</p>
            <p>Sub Test Array of Objects: {props.arrayOfObjects[3].name4}</p>
            <p>Sub Test Array of Objects: {props.arrayOfObjects[3].value}</p>
            <ul>
                {props.arrayOfObjects.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
                
        </div>
    );
}

export default SubMainTest;

// To render this component, ensure you import and use it in your main application file (e.g., index.js).