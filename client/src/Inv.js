import React, { useEffect, useState } from 'react';
import './App.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import equipment from './equipment.js';
import { Button, Divider } from '@material-ui/core';
import EMPTY from './img/EMPTY.png';
import Axios from "axios";

function Inv(){
  Axios.defaults.withCredentials = true;

    const [pwepSelect, setpwepSelect] = useState(false);
    const [pwepIMG, setpwepIMG] = useState(EMPTY);
    const [pwepID, setpwepID] = useState("0");
    const [pwepType, setpwepType] = useState();

    const [swepSelect, setswepSelect] = useState(false);
    const [swepIMG, setswepIMG] = useState(EMPTY);
    const [swepID, setswepID] = useState("0");
    const [swepType, setswepType] = useState();

    const [hitemSelect, sethitemSelect] = useState(false);
    const [hitemIMG, sethitemIMG] = useState(EMPTY);
    const [hitemID, sethitemID] = useState("0");

    const [bitemSelect, setbitemSelect] = useState(false);
    const [bitemIMG, setbitemIMG] = useState(EMPTY);
    const [bitemID, setbitemID] = useState("0");

    const [aitemSelect, setaitemSelect] = useState(false);
    const [aitemIMG, setaitemIMG] = useState(EMPTY);
    const [aitemID, setaitemID] = useState("0");

    const [litemSelect, setlitemSelect] = useState(false);
    const [litemIMG, setlitemIMG] = useState(EMPTY);
    const [litemID, setlitemID] = useState("0");

    const [currInv, setCurrInv] = useState([equipment.weapons[0]]);

    useEffect(()=>{
      Axios.get("http://localhost:3001/login").then((response) => {
          if(response.data.LoggedIn === true)
          {
            setpwepID(response.data.user[0].PrimaryWep)
            setpwepIMG(equipment.weapons[response.data.user[0].PrimaryWep].img)
            setpwepType(equipment.weapons[response.data.user[0].PrimaryWep].type)

            setswepID(response.data.user[0].SecondaryWep)
            setswepIMG(equipment.weapons[response.data.user[0].SecondaryWep].img)
            setswepType(equipment.weapons[response.data.user[0].PrimaryWep].type)

            sethitemID(response.data.user[0].HeadSlot)
            sethitemIMG(equipment.head[response.data.user[0].HeadSlot].img)

            setbitemID(response.data.user[0].BodySlot)
            setbitemIMG(equipment.body[response.data.user[0].BodySlot].img)

            setaitemID(response.data.user[0].ArmSlot)
            setaitemIMG(equipment.arm[response.data.user[0].ArmSlot].img)

            setlitemID(response.data.user[0].LegSlot)
            setlitemIMG(equipment.leg[response.data.user[0].LegSlot].img)
          }
          Axios.get("http://localhost:3001/prog").then((response) => {
          const invProg = [...currInv];
          for (let i = 0; i < response.data.user[0].primaryProg; i++){
            if(equipment.weapons[i].type !== "Empty"){
            invProg.push(equipment.weapons[i]);
            }
          }
          for (let i = 0; i < response.data.user[0].headProg; i++){
            if(equipment.head[i].type !== "Empty"){
            invProg.push(equipment.head[i]);
            }
          }
          for (let i = 0; i < response.data.user[0].bodyProg; i++){
            if(equipment.body[i].type !== "Empty"){
            invProg.push(equipment.body[i]);
            }
          }
          for (let i = 0; i < response.data.user[0].armProg; i++){
            if(equipment.arm[i].type !== "Empty"){
            invProg.push(equipment.arm[i]);
            }
          }
          for (let i = 0; i < response.data.user[0].legProg; i++){
            if(equipment.leg[i].type !== "Empty"){
            invProg.push(equipment.leg[i]);
            }
          }

          setCurrInv(invProg);
          
        })
      });
  }, [])

    const setItems = () => {
      Axios.post("http://localhost:3001/items", {
      pwepID: pwepID, 
      swepID: swepID,
      hitemID: hitemID,
      bitemID: bitemID,
      aitemID: aitemID,
      litemID: litemID,
    }).then( res => {
      console.log(res)
    })
    };

    function Select(id){

        if(id === "slot1"){
          setpwepSelect(true);
          setswepSelect(false);
          sethitemSelect(false);
          setbitemSelect(false);
          setaitemSelect(false);
          setlitemSelect(false);
          var slot1 = document.getElementById("slot1");
          slot1.style.backgroundColor = "#f6685e";
          var slot2 = document.getElementById("slot2");
          slot2.style.backgroundColor = "white";
          var hitem = document.getElementById("hitem");
          hitem.style.backgroundColor = "white";
          var bitem = document.getElementById("bitem");
          bitem.style.backgroundColor = "white";
          var aitem = document.getElementById("aitem");
          aitem.style.backgroundColor = "white";
          var litem = document.getElementById("litem");
          litem.style.backgroundColor = "white";
        }
        if(id === "slot2"){
          setswepSelect(true);
          setbitemSelect(false);
          setpwepSelect(false);
          sethitemSelect(false);
          setaitemSelect(false);
          setlitemSelect(false);
          slot2 = document.getElementById("slot2");
          slot2.style.backgroundColor = "#f6685e";
          slot1 = document.getElementById("slot1");
          slot1.style.backgroundColor = "white";
          hitem = document.getElementById("hitem");
          hitem.style.backgroundColor = "white";
          bitem = document.getElementById("bitem");
          bitem.style.backgroundColor = "white";
          aitem = document.getElementById("aitem");
          aitem.style.backgroundColor = "white";
          litem = document.getElementById("litem");
          litem.style.backgroundColor = "white";
        }
        if(id === "hitem"){
          sethitemSelect(true);
          setbitemSelect(false);
          setswepSelect(false);
          setpwepSelect(false);
          setaitemSelect(false);
          setlitemSelect(false);
          hitem = document.getElementById("hitem");
          hitem.style.backgroundColor = "#f6685e";
          slot1 = document.getElementById("slot1");
          slot1.style.backgroundColor = "white";
          slot2 = document.getElementById("slot2");
          slot2.style.backgroundColor = "white";
          bitem = document.getElementById("bitem");
          bitem.style.backgroundColor = "white";
          aitem = document.getElementById("aitem");
          aitem.style.backgroundColor = "white";
          litem = document.getElementById("litem");
          litem.style.backgroundColor = "white";
        }
        if(id === "bitem"){
          setbitemSelect(true);
          sethitemSelect(false);
          setswepSelect(false);
          setpwepSelect(false);
          setaitemSelect(false);
          setlitemSelect(false);
          bitem = document.getElementById("bitem");
          bitem.style.backgroundColor = "#f6685e";
          hitem = document.getElementById("hitem");
          hitem.style.backgroundColor = "white";
          slot1 = document.getElementById("slot1");
          slot1.style.backgroundColor = "white";
          slot2 = document.getElementById("slot2");
          slot2.style.backgroundColor = "white";
          aitem = document.getElementById("aitem");
          aitem.style.backgroundColor = "white";
          litem = document.getElementById("litem");
          litem.style.backgroundColor = "white";
        }
        if(id === "aitem"){
          setaitemSelect(true);
          setbitemSelect(false);
          sethitemSelect(false);
          setswepSelect(false);
          setpwepSelect(false);
          setlitemSelect(false);
          aitem = document.getElementById("aitem");
          aitem.style.backgroundColor = "#f6685e";
          bitem = document.getElementById("bitem");
          bitem.style.backgroundColor = "white";
          hitem = document.getElementById("hitem");
          hitem.style.backgroundColor = "white";
          slot1 = document.getElementById("slot1");
          slot1.style.backgroundColor = "white";
          slot2 = document.getElementById("slot2");
          slot2.style.backgroundColor = "white";
          litem = document.getElementById("litem");
          litem.style.backgroundColor = "white";
        }
        if(id === "litem"){
          setlitemSelect(true);
          setaitemSelect(false);
          setbitemSelect(false);
          sethitemSelect(false);
          setswepSelect(false);
          setpwepSelect(false);
          litem = document.getElementById("litem");
          litem.style.backgroundColor = "#f6685e";
          aitem = document.getElementById("aitem");
          aitem.style.backgroundColor = "white";
          bitem = document.getElementById("bitem");
          bitem.style.backgroundColor = "white";
          hitem = document.getElementById("hitem");
          hitem.style.backgroundColor = "white";
          slot1 = document.getElementById("slot1");
          slot1.style.backgroundColor = "white";
          slot2 = document.getElementById("slot2");
          slot2.style.backgroundColor = "white";
        }
    }

    function Change(id, img, type) {
      
      if(pwepSelect && (type === "Two Handed" || type === "One Handed" || type === "Empty")){ 
        if(type === "Two Handed"){
          setswepID(0);
          setswepIMG(EMPTY);
          setswepSelect(false);
        }
      setpwepIMG(img)
      setpwepID(id)
      setpwepType(type);
      var slot1 = document.getElementById("slot1");
      slot1.style.backgroundColor = "white"
      setpwepSelect(false);
      }

      if(swepSelect && (type === "One Handed" || type === "Empty") && pwepType !== "Two Handed"){
      setswepIMG(img)
      setswepID(id)
      setswepType(type);
      var slot2 = document.getElementById("slot2");
      slot2.style.backgroundColor = "white";
      setswepSelect(false);
      }

      if(hitemSelect && (type === "Head" || type === "Empty")){
        sethitemIMG(img)
        sethitemID(id)
        var hitem = document.getElementById("hitem")
        hitem.style.backgroundColor = "white"
        sethitemSelect(false);
        
      }

      if(bitemSelect  && (type === "Body" || type === "Empty")){
        setbitemIMG(img)
        setbitemID(id)
        var bitem = document.getElementById("bitem")
        bitem.style.backgroundColor = "white"
        setbitemSelect(false);
      }

      if(aitemSelect && (type === "Arm" || type === "Empty")){
        setaitemIMG(img)
        setaitemID(id)
        var aitem = document.getElementById("aitem")
        aitem.style.backgroundColor = "white"
        setaitemSelect(false);
      }
      if(litemSelect && (type === "Leg" || type === "Empty")){
        setlitemIMG(img)
        setlitemID(id)
        var litem = document.getElementById("litem")
        litem.style.backgroundColor = "white"
        setlitemSelect(false);
      }
  }
  
    const primarySlot = 
    {
        id: pwepID,
        name: undefined,
        img: pwepIMG
    }

    const secondarySlot = 
    {
        id: swepID,
        name: undefined,
        img: swepIMG
    }

    const hitem = 
    {
        id: hitemID,
        name: undefined,
        img: hitemIMG
    }

    const bitem = 
    {
        id: bitemID,
        name: undefined,
        img: bitemIMG
    }

    const aitem = 
    {
        id: aitemID,
        name: undefined,
        img: aitemIMG
    }

    const litem = 
    {
        id: litemID,
        name: undefined,
        img: litemIMG
    }

    const useStyles = makeStyles((theme) => ({
      root: {
        display: 'flex',
        justifyContent:'center',
        paddingTop:'150px'
      },
      ListMargin: {
          marginLeft:'20px',
          width: '150px',
          display: 'inline-block',
          position: 'relative',
          top: '25px'
      },
      invbox:{
          marginRight:'30px'
      },
      table:{
          width: '500px',
          height: 'fit-content'
      },
      image: {
          float: 'right',
          margin: '5px'
      },
      item:{
          width : '80px',
          height : '90px',
          padding:'3px',
          outline: 'solid',
          color: 'grey'
      },
      ListStyle:{
        width: '100%',
        maxWidth: 500,
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'auto',
        maxHeight: 380,
      }
    }));

    const classes = useStyles();
        return (
<div className={classes.root}>
<Paper elevation={1} className={classes.invbox}>
    <h1 className="textcenter">Items</h1>
    <Divider></Divider>
            <List className={classes.ListStyle}>
                {currInv.map(({id, name, dps, img, type, flatDam}, index) => {
                    return(
                        <ListItem onClick={() => {Change(id, img, type);}}>
                        <Paper className = {classes.Item}>
                        <ListItemText className={classes.ListMargin} primary={name} secondary={dps +" :: "+type} />
                        <img className={classes.image} src={img} alt={id}></img>
                        </Paper>
                        </ListItem>
                        )}
                    )
                }
            </List>
</Paper>

<TableContainer component={Paper} className={classes.table}>
<h1 className="textcenter">Inventory</h1>
<Divider></Divider>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>
                <img id = "slot1" className={classes.item} src={primarySlot.img} key={primarySlot.img} alt="slot 1" onClick={() => Select("slot1")}></img>
            </TableCell>
            <TableCell>
            <div style = {{textAlign: 'center', float:'left'}}>Primary<br></br>Weapon</div>
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <img id = "slot2" className={classes.item} src={secondarySlot.img} key ={secondarySlot.img} alt="slot 2" onClick={() => Select("slot2")}></img>
              </TableCell>
            <TableCell>
              <div style = {{textAlign: 'center', float:'left'}}>Secondary<br></br>Weapon</div>
              </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableBody>
        <TableBody>
          <TableRow>
          <TableCell>
            <img id = "hitem" className={classes.item} src={hitem.img} key ={hitem.img} alt="hitem" onClick={() => Select("hitem")}></img>
            <div style = {{textAlign: 'center'}}>Head</div>
          </TableCell>
          <TableCell><img id = "bitem" className={classes.item} src={bitem.img} key ={bitem.img} alt="bitem" onClick={() => Select("bitem")}></img>
            <div style = {{textAlign: 'center'}}>Body</div>
          </TableCell>
          <TableCell><img id = "aitem" className={classes.item} src={aitem.img} key ={aitem.img} alt="aitem" onClick={() => Select("aitem")}></img>
            <div style = {{textAlign: 'center'}}>Arms</div>
          </TableCell>
          <TableCell><img id = "litem" className={classes.item} src={litem.img} key ={litem.img} alt="litem" onClick={() => Select("litem")}></img>
            <div style = {{textAlign: 'center'}}>Legs</div>
          </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    <Button onClick={() => {setItems();}}>Submit</Button>
            </div>
        );

}

export default Inv;