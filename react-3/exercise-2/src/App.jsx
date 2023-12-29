import { useState } from 'react'

function App() {
    //2 useState cuz we have 2 input
    const [inputName, setInputName] = useState();
    const [inputBio, setInputBio] = useState();

    //function handleInputChange for รับค่า change
    const handleInputName = (event) => {setInputName(event.target.value)};
    const handleInputBio = (event) => {setInputBio(event.target.value)};

    //created component
    return (
        <div>
            <div>
                <img src='' alt='Your Profile'/>
                <input type='text' 
                    value={inputName} 
                    placeholder='name here' 
                    onChange={handleInputName}></input>
                <input 
                    type='text' 
                    value={inputBio} 
                    placeholder='start bio' 
                    onChange={handleInputBio}></input>
            </div>
            <div>
                <h1>{inputName}</h1>
                <p>{inputBio}</p>
            </div>
            <div>
                <a>Facebook</a>
                <a>Twitter</a>
            </div>
        </div>
    )
}

export default App;