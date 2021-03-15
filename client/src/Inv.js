import React from 'react';
import './App.css';
import EMPTY from './img/EMPTY.png';
import Claymore from './img/claymore.png'
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
import { Hidden } from '@material-ui/core';

const weapons = [
    {
        id: 'Claymore',
        dps: '100 DPS',
        img: Claymore
    },

    {
        id: 'Falchion',
        dps: '80 DPS',
        img: EMPTY
    }
]

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent:'center',
      paddingTop:'150px'
    },
    ListMargin: {
        marginRight:'200px',
        marginLeft:'20px',
        width: '100px',
        display: 'inline-block',
        position: 'relative',
        top: '25px'
    },
    invbox:{
        marginRight:'30px'
    },
    table:{
        width: '500px'
    },
    image: {
        float: 'right',
        margin: '5px'
    }
  }));

function Inv(){
    const classes = useStyles();
        return (

            <div className={classes.root}>

<Paper elevation={1} className={classes.invbox}>
    <h1 className="textcenter">Items</h1>
        <List>
                {weapons.map(({id, dps, img}) => {
                    return(
                        <ListItem>
                        <Paper>
                        <ListItemText className={classes.ListMargin} primary={id} secondary={dps} />
                        <img className={classes.image} src={img} alt={id}></img>
                        </Paper>
                        </ListItem>
                    );
                })}
            </List>
</Paper>

<TableContainer component={Paper} className={classes.table}>
<h1 className="textcenter">Inventory</h1>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>
                <img src={EMPTY} alt="slot 1"></img>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
              <TableCell><img src={EMPTY} alt="slot 1"></img></TableCell>
          </TableRow>
        </TableBody>
        <TableBody>
          <TableRow>
          <TableCell><img src={EMPTY} alt="slot 1"></img></TableCell>
          <TableCell><img src={EMPTY} alt="slot 1"></img></TableCell>
          <TableCell><img src={EMPTY} alt="slot 1"></img></TableCell>
          <TableCell><img src={EMPTY} alt="slot 1"></img></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>

            </div>

        );

}

export default Inv;