import React from "react";
import "../html/style.css";

function App() {
  return <div id="app">
    <RegistrationForm />
    <DisplayMember />
  </div>;
}

const RegistrationForm = () => {
  return (
    <div>
      <h1></h1>
      <form>
        <p>Name:</p>
        <input></input>
        <p>Email</p>
        <input></input>
        <button>Register</button>
      </form>
    </div>
  );
};

const DisplayMember = () => {
  return (
    <div>
      <h2>Registered Members</h2>
      <div>John Doe</div>
      <div>Jane Smith</div>
    </div>
  );
};

export default App;
