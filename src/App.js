import React from "react";
import Data from "./Data.json"

function App() {
  return (
    <div>
      <table className="table">
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </thead>
        <tbody>
          {Data.map((d, i) => (
            <tr key={i}>
              <td>{d.ID}</td>
              <td>{d.Name}</td>
              <td>{d.Email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
