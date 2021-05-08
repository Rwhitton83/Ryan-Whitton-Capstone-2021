import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import tutorialPic1 from "./img/weapon_tut.png"
import tutorialPic2 from "./img/armor_tut.png"
import tutorialPic3 from "./img/combat_tut.png"
import { Divider } from '@material-ui/core';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        The Grand Arena
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  tutorial1: {
    height: "600px",
    position: "relative",
    left: "13.8%",
  },
  tutorial2: {
    height: "690px",
    position: "relative",
    left: "23.3%",
  },
  tutorial3: {
    height: "690px",
    position: "relative",
    left: "28%",
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3];

export default function Album() {
  const classes = useStyles();

  return (
    <div>

        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Welcome to the Grand Arena!
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Now that you are finally here, we can begin you training! Below is a short tutorial explaining the how to use all of the features that will give you the edge in battle! 
            </Typography>
          </Container>
        </div>
        <Divider></Divider>
        <Typography style={{paddingTop: "20px"}} component="h3" variant="h4" align="center" color="textPrimary" gutterBottom>
              Inventory:
            </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Below are pictures giving a brief overview of the inventory system: <br></br>
              Items have a 25% chance to drop when defeating an enemy.
        </Typography>
        <img className={classes.tutorial1} src={tutorialPic1}></img>
        <img className={classes.tutorial2} src={tutorialPic2}></img>
        <Divider></Divider>
        <Typography style={{paddingTop: "20px"}} component="h3" variant="h4" align="center" color="textPrimary" gutterBottom>
              Fight Overview:
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
              The goal is to beat all five enemies, the last 5th enemy being a boss! <br></br> Preperation is needed to defeat the later enemies, as they are harder.
              Below are pictures giving a brief overview of the combat system: <br></br>
              Player stats are perserved until death! This includes estus amounts and player health!
        </Typography>
        <img className={classes.tutorial3} src={tutorialPic3}></img>
        <Divider></Divider>
        <Typography style={{paddingTop: "20px"}} component="h3" variant="h4" align="center" color="textPrimary" gutterBottom>
              Prepare to Die!:
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Head over to the login page and register to start your journey!
        </Typography>
      </div>
  );
}