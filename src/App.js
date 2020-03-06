import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // const users = [1, 2, 3, 4];

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/demo/all')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <div>
          <p>My data will go here</p>
          {users.map((user, i) => {
            return <div key={user.id}> {user.name} </div>;
          })}
        </div>
      </header>
    </div>
  );
}

// class App extends React.Component {

//   state = {
//     users: []
//   }

//   componentDidMount() {
//     fetch('http://localhost:8080/demo/all')
//       .then(response => response.json())
//       .then(data => this.setState({ users: data }));
//   }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>

//           <div>
//             <p>My data will go here</p>
//             {this.state.users.map((user, i) => {
//               return <div key={user.id}> {user.name} </div>;
//             })}
//           </div>
//         </header>
//       </div>
//     );
//   }
// }
export default App;
