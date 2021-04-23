import "./App.css";
import Axios from "axios";
import { useState } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { Divider, Link, Paper } from "@material-ui/core";


function Register() {

  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const addUser = () => {
    Axios.post("http://localhost:3001/create", {
      Username: Username, 
      Password: Password,
    }).then(res => {
      var resp = document.getElementById("response");
      resp.innerHTML = res.data.message;
    })
  };

  return (
    <div className="Login"> 
<Box p={3} component={Paper}>
      <h3 style ={{textAlign:"center"}}>Register Below</h3>
      <Divider></Divider>
      <Box pt={1}><TextField id="outlined-basic" label="Username" variant="filled" onChange={(event) => { 
         setUsername(event.target.value);
       }}></TextField></Box>

       <br></br>

      <TextField id="outlined-basic" type="password" label="Password" variant="filled" onChange={(event) => { 
         setPassword(event.target.value);
       }}></TextField>
<div className="textcenter" style={{paddingTop: "8px", marginBottom: "-15px"}}>
<Button variant="outlined" size="small" color="secondary" onClick={addUser}>Submit</Button>
</div>
</Box>
<h1 id = "response"></h1>
    </div>
  );
}

export default Register;