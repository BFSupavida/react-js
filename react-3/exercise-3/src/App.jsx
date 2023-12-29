import { useState } from 'react'
import "./App.css";

function App() {
  //created useState for get value
  const [temperature, setTemperature] = useState(12);

  //Function to handle increasing + the temperature
  const handleIncreaseTemperature = () => {
    setTemperature(temperature + 1);
  };

  //Function to handle decreasing - the temperature
  const handleDecreaseTemperature = () => {
    setTemperature(temperature - 1);
  };

  return (
    <div id="app">
      <Header temp={temperature} />
      <Content tempContent={temperature} />
      <Footer onIncrease={handleIncreaseTemperature} onDecrease={handleDecreaseTemperature}/>
    </div>
  );
}

function Header(props) {
  const tempInHeader = props.temp;
  return (
    // Code for Header
    // <Header />
    <header>
      <span>Turn on / off</span>
      <p>Current Temperature: {tempInHeader}</p>
    </header>
  );
}

function Content(props) {
  const tempInContent = props.tempContent;
  return (
    // Code for Content
    // <Content />
    <div>
      <Temperature tempTemperature={tempInContent} />
    </div>
  );
}

function Temperature(props) {
  const tempInTemperature = props.tempTemperature;
  return (
    // Code for Temperature
    // <Temperature />
    <div id="temperature">
      <span>{tempInTemperature} Oc</span>
    </div>
  );
}

function Footer(props) {
    const { onIncrease, onDecrease } = props;
  return (
    <footer>
      <button onClick={onIncrease}>Up</button>
      <button onClick={onDecrease}>Down</button>
    </footer>
  );
}

export default App;
