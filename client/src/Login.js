import "./App.css";
import Axios from "axios";
import { useState } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';


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



<Box p={3}>

      <Box pt={1}><TextField id="outlined-basic" label="Username" variant="filled" onChange={(event) => { 
         setUsername(event.target.value);
       }}></TextField></Box>

       <br></br>

      <TextField id="outlined-basic" label="Password" variant="filled" onChange={(event) => { 
         setPassword(event.target.value);
       }}></TextField>

</Box>


<Box textAlign="center">

      <Box p={1}><Button variant="outlined" size="small" color="secondary" onClick={addUser}>Submit</Button></Box>
      <Button variant="outlined" size="small" color="secondary" onClick={getUser}>Show Users</Button>
        {UserList.map((val, key) => {
          return <div>
            <pre>{val.UserName} {val.UserPassword}</pre>
            </div>
        })}
      
</Box>
      
    </div>
  );
}

export default Login;
