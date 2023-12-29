import React from 'react';
import { useState } from 'react';

function App() {
  //สร้างข้อมูลให้เปน array
  const [data, setData] = useState([
    { name: 'John', organization: 'ABC Inc.', position: 'Developer' },
    { name: 'Jane', organization: 'XYZ Corp.', position: 'Designer' },
    { name: 'Bob', organization: '123 LLC', position: 'Manager' },
  ]);
  //created useState
  const [newName, setNewName] = useState('');
  const [newOrganization, setNewOrganization] = useState('');
  const [newPosition, setNewPosition] = useState('');

  // //useEffect
  const saveData = () => {
    // ทำการสร้างข้อมูลใหม่จาก state และเพิ่มเข้าไปใน data
    const newData = { name: newName, organization: newOrganization, position: newPosition };
    setData([newData, ...data]);

  // };

  return (
    <div className="App"> {/* Add class name */}
      <h1>Table Example</h1>
      <div>
        <input type="text" placeholder="Type new name here" onChange={(e) => setNewName(e.target.value)} style={{margin: '4px'}} />
        <input type="text" placeholder="Type new organization here" onChange={(e) => setNewOrganization(e.target.value)} style={{margin: '4px'}} />
        <input type="text" placeholder="Type new position here" onChange={(e) => setNewPosition(e.target.value)} style={{margin: '4px'}} />
        <button style={{margin: '4px'}} onClick={saveData}>Save</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Organization</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
                <tr key={`row-${index}`}>
                <td key={`name-${index}`}>{item.name}</td>
                <td key={`organization-${index}`}>{item.organization}</td>
                <td key={`position-${index}`}>{item.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
}

export default App;
