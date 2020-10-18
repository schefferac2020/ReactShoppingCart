import React from 'react'

function Greeter({name, age = 19, excitement =1}){
    const greet = () => {
        alert('hello there ' + name);
    }
return (
    <>
        <h1>Hi there, {name}{"!".repeat(excitement)}</h1>
        <p>You are {age} years old</p>
        <button onMouseOver={greet}>Click me</button>
    </>
);
}

export default Greeter;