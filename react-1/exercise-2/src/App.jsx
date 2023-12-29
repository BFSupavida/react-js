import React from 'react';
// import 

function App() {
  return (
    <div id="app">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
    <span>Turn on / off</span>
    <p>Current Temperature: XX</p>
    </header>
  );
}

function Content() {
  return (
    <Temperature/>
  );
}

function Temperature() {
  return (
    <p>11 OC</p>
  );
}

function Footer() {
  return (
    <footer>
    <button>Down</button>
    <button>Up</button>
    </footer>
  );
}

export default App;
