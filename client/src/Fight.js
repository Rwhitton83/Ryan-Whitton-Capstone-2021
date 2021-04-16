import React, {useEffect, useState} from 'react';
import './App.css';
import enemies from "./enemies.js"
import EnemieRender from "./EnemieRender.js"
import equipment from './equipment.js';
import axios from 'axios';

function Fight(){
    const [state, setState] = useState(true);
    const [beginState, setBeginState] = useState(false);
    const [pointer, setPointer] = useState(1);
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
    const [estus, setEstus] = useState(5);

    useEffect(() => {
        axios.get("http://localhost:3001/login").then((response) => {
            if(response.data.LoggedIn === true){
                let PrimaryFlatDam = equipment[response.data.user[0].PrimaryWep].flatDam;
                let PrimaryAttackSpeed = equipment[response.data.user[0].PrimaryWep].attackSpeed;
                let SecondaryFlatDam = equipment[response.data.user[0].SecondaryWep].flatDam;
                let SecondaryAttackSpeed = equipment[response.data.user[0].SecondaryWep].attackSpeed;

                let combindedDamage = PrimaryFlatDam + (SecondaryFlatDam * .5);
                let combindedAttackSpeed = PrimaryAttackSpeed + (SecondaryAttackSpeed * .25);
                
                setPlayerAttackDam(combindedDamage);
                setPlayerAttackSpeed(combindedAttackSpeed);

                
            }
        });
    }, [])

    useEffect(() => {
        if(!playerAlive){
            setState(true);
        }        
        if(begin === false){
            console.log(begin)
            setState(true);
        }
        if(begin && playerAlive){
        DamagePlayer(playerHealth, currentEnemyDamage);
        }
                
    },[begin, counter, playerAlive] );

    function DamagePlayer (hp, dam) {
        setTimeout(() => {setCounter(counter+1)}, currentEnemyAttackSpeed)
            hp -= dam;
            if( !(hp <= 0) ) {
                setPlayerHealth(hp);
            }
            else{
                setPlayerHealth(0);
                setPlayerAlive(false);
                setState(true);
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
            enemieKilled();
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

    function enemieKilled () {
        setBegin(false);
        setState(true);
        setBeginState(false);
        setPointer(pointer + 1);
        setCurrentEnemy(enemies[pointer]);
        setCurrentEnemyAlive(true);
        setCurrentEnemyHp(enemies[pointer].hp);
        setCurrentEnemyAttackSpeed(enemies[pointer].attackSpeed);
        setCurrentEnemyDamage(enemies[pointer].attackDamage);
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
            </div>
            

        );

}

export default Fight;