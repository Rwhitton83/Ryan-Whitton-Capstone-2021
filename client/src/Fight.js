import React, {useEffect, useState} from 'react';
import './App.css';
import enemies from "./enemies.js"
import EnemieRender from "./EnemieRender.js"
import equipment from './equipment.js';
import axios from 'axios';

function Fight(){
    const [state, setState] = useState(true);
    const [beginState, setBeginState] = useState(false);
    const [pointer, setPointer] = useState(0);
    const [begin, setBegin] = useState(false);

    const [counter, setCounter] = useState(0);
    
    const [currentEnemy, setCurrentEnemy] = useState(enemies[0]);
    const [currentEnemyHp, setCurrentEnemyHp] = useState(enemies[0].hp);
    const [currentEnemyAlive, setCurrentEnemyAlive] = useState(true);
    const [currentEnemyAttackSpeed, setCurrentEnemyAttackSpeed] = useState(enemies[0].attackSpeed);
    const [currentEnemyDamage, setCurrentEnemyDamage] = useState(enemies[0].attackDamage);

    const [playerHealth, setPlayerHealth] = useState(100);
    const [playerAttackSpeed, setPlayerAttackSpeed] = useState(1000);
    const [playerAttackDam, setPlayerAttackDam] = useState(1);
    const [playerAlive, setPlayerAlive] = useState(true);
    const [playerDefenseRating, setPlayerDefenseRating] = useState(0);
    const [estus, setEstus] = useState(5);

    const progress = [];

    useEffect(() => {
        axios.get("http://localhost:3001/login").then((response) => {
            if(response.data.LoggedIn === true){

                // Setting/Calculating users damage

                let PrimaryFlatDam = equipment.weapons[response.data.user[0].PrimaryWep].flatDam;
                let PrimaryAttackSpeed = equipment.weapons[response.data.user[0].PrimaryWep].attackSpeed;

                let SecondaryFlatDam = equipment.weapons[response.data.user[0].SecondaryWep].flatDam;
                let SecondaryAttackSpeed = equipment.weapons[response.data.user[0].SecondaryWep].attackSpeed;

                if(equipment.weapons[response.data.user[0].PrimaryWep].type === "One Handed"){
                    var combindedDamage = PrimaryFlatDam + (SecondaryFlatDam * .5);
                    var combindedAttackSpeed = PrimaryAttackSpeed + (SecondaryAttackSpeed * .25);
                }
                else if (equipment.weapons[response.data.user[0].PrimaryWep].type === "Two Handed"){
                    combindedDamage = PrimaryFlatDam;
                    combindedAttackSpeed = PrimaryAttackSpeed;
                }
                else if (equipment.weapons[response.data.user[0].PrimaryWep].type === "Empty"){
                    combindedDamage = PrimaryFlatDam;
                    combindedAttackSpeed = PrimaryAttackSpeed;
                }
                    
                setPlayerAttackDam(combindedDamage);
                setPlayerAttackSpeed(combindedAttackSpeed);

                // Setting/Calcuating users defence

                let HeadDefense = equipment.head[response.data.user[0].HeadSlot].df;
                let BodyDefense = equipment.body[response.data.user[0].BodySlot].df;
                let ArmDefense = equipment.arm[response.data.user[0].ArmSlot].df;
                let LegDefense = equipment.leg[response.data.user[0].LegSlot].df;

                setPlayerDefenseRating(HeadDefense+BodyDefense+ArmDefense+LegDefense); 
            }
        });
        // Getting Player Progress
        axios.get("http://localhost:3001/prog").then((response) => {
            if(response.data.LoggedIn === true){
                setCurrentEnemy(enemies[response.data.user[0].enemyPos])
                setCurrentEnemyAlive(true);
                setCurrentEnemyHp(enemies[response.data.user[0].enemyPos].hp);
                setCurrentEnemyAttackSpeed(enemies[response.data.user[0].enemyPos].attackSpeed);
                setCurrentEnemyDamage(enemies[response.data.user[0].enemyPos].attackDamage);
                setPlayerHealth(response.data.user[0].currentHealth);
                setEstus(response.data.user[0].estusNum);
            }
            else
                setCurrentEnemy(enemies[0]);
        })
    }, [])

    useEffect(() => {
        if(!playerAlive){
            setState(true);
        }        
        if(begin === false){
            setState(true);
        }
        if(begin && playerAlive){
        DamagePlayer(playerHealth, currentEnemyDamage);
        }
                
    },[begin, counter, playerAlive] );

    function DamagePlayer (hp, dam) {
        setTimeout(() => {setCounter(counter+1)}, currentEnemyAttackSpeed)
            let totalDam = dam - ((playerDefenseRating / 100) * dam);
            hp -= Math.ceil(totalDam);
            if( !(hp <= 0) ) {
                setPlayerHealth(hp);
            }
            else{
                setPlayerHealth(0);
                setPlayerAlive(false);
                setState(true);
                axios.post("http://localhost:3001/prog", {
                    enemyPos: 0,
                    estusNum: 7,
                    currentHealth: 100
                  }).then( res => {
                    console.log(res)
                  })
            }
    }

    function DamageEnemy (hp, dam) { 
        if(state === false){
        hp -= dam;
        if(!(hp <= 0))
        setCurrentEnemyHp(hp);
        else{
        setCurrentEnemyAlive(false);
        setBegin(false);
        document.getElementById("hp").innerHTML = "DEAD";
        setTimeout(() =>  {
            EnemieKilled();
        }, 2000)
        }
    }
    }

    function UseEstus (){
        if(estus > 0 && playerAlive){
            if((playerHealth + 20) > 100){    
                setPlayerHealth(100);
                setEstus(estus-1);
            }
            else if ((playerHealth) < 100){
                setPlayerHealth(playerHealth + 20);
                setEstus(estus-1);
            }
        }
    }

    function EnemieKilled () {
        const currentPos = pointer + 1;
        setBegin(false);
        setState(true);
        setBeginState(false);
        setPointer(currentPos);
        setCurrentEnemy(enemies[currentPos]);
        console.log(currentPos);
        setCurrentEnemyAlive(true);
        setCurrentEnemyHp(enemies[currentPos].hp);
        setCurrentEnemyAttackSpeed(enemies[currentPos].attackSpeed);
        setCurrentEnemyDamage(enemies[currentPos].attackDamage);

        axios.post("http://localhost:3001/prog", {
            enemyPos: currentPos,
            estusNum: estus,
            currentHealth: playerHealth,
          }).then( res => {
            console.log(res)
          });

        axios.get("http://localhost:3001/prog").then((response) => {
        if(response.data.LoggedIn === true){
            progress.push(response.data.user[0].primaryProg, response.data.user[0].headProg, response.data.user[0].bodyProg, response.data.user[0].armProg, response.data.user[0].legProg);
            let chance = Math.floor(Math.random() * 4);
            chance = 3;
            if (chance === 3){                       
                let itemDropText = document.getElementById("itemDrop");
                chance = Math.floor(Math.random() * 5);
                chance = 0;
                if(chance === 0 && !((progress[0] + 1) > equipment.weapons.length)){
                    itemDropText.innerHTML = "New Item Dropped! Check Inventory!"
                    axios.post("http://localhost:3001/prog", {
                        primaryProg: progress[0] + 1
                      }).then( res => {
                        console.log(res)
                      });                
                }
                else if(chance === 1 && !((progress[1] + 1) > equipment.head.length)){
                    itemDropText.innerHTML = "New Item Dropped! Check Inventory!"
                    axios.post("http://localhost:3001/prog", {
                        headProg: progress[1] + 1                   // Offset to avoid empty in equipmemt
                      }).then( res => {
                        console.log(res)
                      });      
                }
                else if(chance === 2 && !((progress[2] + 1) > equipment.body.length)){
                    itemDropText.innerHTML = "New Item Dropped! Check Inventory!"
                    console.log((progress[2] + 1), equipment.body.length);
                    axios.post("http://localhost:3001/prog", {
                        bodyProg: progress[2] + 1
                      }).then( res => {
                        console.log(res)
                      });      
                }
                else if(chance === 3 && !((progress[3] + 1) > equipment.arm.length)){
                    itemDropText.innerHTML = "New Item Dropped! Check Inventory!"
                    axios.post("http://localhost:3001/prog", {
                        armProg: progress[3] + 1
                      }).then( res => {
                        console.log(res)
                      });      
                }
                else if(chance === 4 && !((progress[4] + 1) > equipment.leg.length)){
                    itemDropText.innerHTML = "New Item Dropped! Check Inventory!"
                    axios.post("http://localhost:3001/prog", {
                        legProg: progress[4] + 1
                      }).then( res => {
                        console.log(res)
                      });      
                }
            }
        }
        })
    }
    

        return (
            
            <div>
                <h1 className="textcenter">TO THE DEATH!</h1>

                <div className="game-area">
                <EnemieRender enemies = {currentEnemy}/>
                <div id = "hp" className="Ehp">{currentEnemyHp}</div>
                </div>

                <div className="controls">
                    <div className="Php">Player Health: {playerHealth} 
                        <br></br>
                        Attack Speed: {playerAttackSpeed / 1000}
                        <br></br>
                        Attack Damage: {playerAttackDam}
                        <br></br>
                        Defense Rating: {playerDefenseRating}
                        <br></br>
                        Estus Flask: {estus}
                    </div>
                        <div className="fightb">
                            <button className="fightbuttn" disabled={state} id="attack" onClick={() => {
                            if(begin){
                                setState(true);

                                if(playerAlive){
                                    setTimeout(() => {setState(false)}, playerAttackSpeed)
                                    if(!state){
                                    DamageEnemy(currentEnemyHp, playerAttackDam);
                                    }
                                }

                                else if (!playerAlive){
                                    setState(true);
                                    console.log(state);
                                }
                            }
                                }}>ATTACK</button>
                            <br></br>
                            <button className="fightbuttn" onClick={() => UseEstus()}>USE ESTUS</button>
                            <br></br>
                            <button disabled = {beginState} className="fightbuttn" onClick={() => {setBegin(true); setState(false); setBeginState(true)}}>BEGIN!</button>
                        </div>
                </div>
                <div id = "itemDrop" className="itemDrop"></div>
            </div>
            

        );

}

export default Fight;