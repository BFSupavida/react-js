import React from 'react';
import { useState } from 'react';

function App() {
    //set usestate for update value
    const [fullName, setfullName] = useState('Please select an option.');
    const [age, setAge] = useState();
    const [picTure, setPicture] = useState();

    //function for return value in input to h1
    const handleFunctionfullname = () => {
        // ดึงค่าจาก input ที่มี id เป็น "firstName"
        const firstName = document.getElementById('firstName').value;
        // เซ็ตค่าใน state
        setfullName(firstName);
    }

    const handleFunctionage = () => {
        // ดึงค่าจาก input ที่มี id เป็น "age"
        const Age = document.getElementById('age').value;
        // เซ็ตค่าใน state
        setAge(Age);
    }

    const handleFunctionpicTure = () => {
        // ดึงค่าจาก input ที่มี id เป็น "firstName"
        const picture = document.getElementById('picture').value;
        // เซ็ตค่าใน state
        setPicture(picture);
    }

//created componant
    return (
        <div>
            <input type='text' id='firstName'></input>
            <input type='number' id='age'></input>
            <input type='text' id='picture'></input>
            <button onClick={handleFunctionfullname}>Fullname</button>
            <button onClick={handleFunctionage}>Age</button>
            <button onClick={handleFunctionpicTure}>Picture</button>
            <div>
                <h1>{fullName}{age}</h1>
                <img  />{picTure}
            </div>
        </div>
    )
}

export default App