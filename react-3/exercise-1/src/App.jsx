import React, { useState } from 'react';

function App() {
    // adding state here.
    const [choices, setChoices] = useState()
    //set
    const handleClick = (value) => {
    // code here.
    setChoices(value);
  };

  return (
    <div>
      <button 
      onClick={() => handleClick('Fullname')}>
        Fullname
      </button>
      <button onClick={() => {handleClick('Age')}}>
        Age
        </button>
      <button onClick={() => {handleClick('Picture')}}>
        Picture
      </button>
      <DisplayInfo choices={choices}/>
    </div>
  );
}

function DisplayInfo(props) {
  const getChoice = props.choices;
  let getElement;
  if (getChoice === 'Fullname') {
    getElement = <h2>John Doe</h2>;
  } else if (getChoice === 'Age') {
    getElement = <h2>30</h2>;
  } else if (getChoice === 'Picture') {
    getElement = (
      <img 
      src="https://via.placeholder.com/150" 
      alt="Placeholder" />)
      ;
  } else {
    getElement = <p>Please select an option.</p>;
  }

  return (
    <div>
      {getElement}
    </div>
  );
}

export default App;
