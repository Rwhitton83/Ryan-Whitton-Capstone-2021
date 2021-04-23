import "./App.css";
import Axios from "axios";
import { useState } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { Divider, Link, Paper } from "@material-ui/core";


function Login() {

  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const checkUser = () => {
    Axios.post("http://localhost:3001/login", {
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
      
      <h3 style ={{textAlign:"center"}}>Login Below</h3>
      <Divider></Divider>
      <Box pt={1}><TextField id="outlined-basic" label="Username" variant="filled" onChange={(event) => { 
        setUsername(event.target.value);
      }}></TextField></Box>

      <br></br>

      <TextField id="outlined-basic" type="password" label="Password" variant="filled" onChange={(event) => { 
        setPassword(event.target.value);
      }}></TextField>

      <div className="textcenter" style={{paddingTop: "8px", marginBottom: "-15px"}}>
      <Button variant="outlined" size="small" color="secondary" onClick={checkUser}>Submit</Button>
      </div>

    </Box>
    <Link style={{paddingTop: "10px"}} href="/register">Not Registered? Click Here!</Link>
    <h1 id = "response"></h1>
  </div>
  );
}

export default Login;
