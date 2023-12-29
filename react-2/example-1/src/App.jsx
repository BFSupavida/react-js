import React from "react";
import "./App.css";

function App() {
  const temp = 90;
  return (
    <div id="app">
      <Header header_temperature = {temperature}/>
      <Content temperature={temperature}/>
      <Footer />
    </div>
  );
}

function Header(props) {
  const temp = props.header_temperature
  return (
    // Code for Header
    // <Header />
    <header>
      <span>Turn on / off</span>
      <p>Current Temperature: {temp}</p>
    </header>
  );
}

function Content(props) {
  const temperature = props.temperature;
  return (
    // Code for Content
    // <Content />
    <div>
      <Temperature temperature={temperature} />
    </div>
  );
}

function Temperature(props) {
  const temperature = props.temperature;
  return (
    // Code for Temperature
    // <Temperature />
    <div id="temperature">
      <span>{temperature} Oc</span>
    </div>
  );
}

function Footer() {
  return (
    // Code for Footer
    // <Footer />
    <footer>
      <button>Up</button>
      <button>Down</button>
    </footer>
  );
}

export default App;
