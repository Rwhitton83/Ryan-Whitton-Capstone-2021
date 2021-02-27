import "./App.css";
import Axios from "axios";
import { useState } from "react";


function Login() {

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
      setUserList(response.data);
    });
  };

  return (
    <div className="Login"> 
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
      <div>
      <button onClick={getUser}>Show Users</button>
        {UserList.map((val, key) => {
          return <div>
            <pre>{val.UserName} {val.UserPassword}</pre>
            </div>
        })}
      </div>
      
    </div>
  );
}

export default Login;
