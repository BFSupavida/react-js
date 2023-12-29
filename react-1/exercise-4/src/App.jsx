import React from "react";
import "./App.css";

function App() {
  return (
    <div id="app">
      <h1>Enter Data</h1>
      <RunningForm />
      <TableDisplay />
    </div>
  );
}

//สร้าง componant + pot html มาใส่
//arrow function
const RunningForm = () => {
  return (
    <div>
      <h1>Enter Data</h1>
      <form>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" /><br /><br />

        <label for="age">Age:</label>
        <input type="number" id="age" name="age" /><br /><br />

        <label for="weight">Weight:</label>
        <input type="number" id="weight" name="weight" /><br /><br />

        <label for="running">Current Running (Minutes):</label>
        <input type="number" id="running" name="running" /><br /><br />
        
        <button type="button" onClick="addData()">Add Data</button>
      </form>
    </div>
  );
};

const TableDisplay = () => {
  let data = [<td>Bai</td>,<td>24</td>,<td>56</td>,<td>5</td>,<td>10</td>];
  return (
    <div>
      <h1>Entered Data</h1>
    <table id="data-table" border="1" width="100%">
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Weight</th>
        <th>Current Running (Minutes)</th>
        <th>Good Running</th>
      </tr>
      <tr>
        {data}
      </tr>
    </table>
    </div>
  );
};

export default App;
