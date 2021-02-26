import "./App.css";
import Axios from "axios";
import { useState } from "react";
import axios from "axios";

function App() {

  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [UserList, setUserList] = useState([]);

  const addUser = () => {
    Axios.post("http://localhost:3001/create", {
      Username: Username, 
      Password: Password,
    }).then( () => {
      console.log("success");
    });
  };

  const getUser = () => {
    Axios.get("http://localhost:3001/users").then((response) => {
      console.log("success");
    });
  };

  return (
    <div className="App"> 
      <div className="information">

      <label>Username: </label>
      <input type="text" 
       onChange={(event) => { 
         setUsername(event.target.value);
       }}
       /> 
      
      <label>Password: </label>
      <input type="text"        
      onChange={(event) => { 
         setPassword(event.target.value);
       }}
       /> 

      <button onClick={addUser}>Submit</button>
      </div>
      <hr
        style={{
            width: 1000
        }}
    />
      <button onClick={getUser}>Show Users</button>
    </div>
  );
}

export default App;
