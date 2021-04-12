import React, {useEffect, useState} from 'react';
import './App.css';
import enemies from "./enemies.js"
import EnemieRender from "./EnemieRender.js"

function Fight(){
    const [state, setState] = useState(false);
    const [pointer, setPointer] = useState(1);
    const [begin, setBegin] = useState(false);

    const [booll, setBooll] = useState();
    
    const [currentEnemy, setCurrentEnemy] = useState(enemies[0]);
    const [currentEnemyHp, setCurrentEnemyHp] = useState(enemies[0].hp);
    const [currentEnemyAlive, setCurrentEnemyAlive] = useState(true);
    const [currentEnemyAttackSpeed, setCurrentEnemyAttackSpeed] = useState(enemies[0].attackSpeed);
    const [currentEnemyDamage, setCurrentEnemyDamage] = useState(enemies[0].attackDamage);

    const [playerHealth, setPlayerHealth] = useState(100);
    const [playerAttackSpeed, setPlayerAttackSpeed] = useState(1000);
    const [playerAlive, setPlayerAlive] = useState(true);

    useEffect(() => {        

        if(begin)
        {
        DamagePlayer(playerHealth, currentEnemyDamage)
        }
                
    },[begin, booll] );



    function DamagePlayer (hp, dam) {
        setBooll(false);
        setTimeout(() => {setBooll(true)}, currentEnemyAttackSpeed)
        if(booll){
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
    }

    function DamageEnemy (hp, dam) {
        setTimeout( () => { setState(false); }, playerAttackSpeed);
        setState(true);
        hp -= dam;
        if(!(hp <= 0))
        setCurrentEnemyHp(hp);
        else{
        setCurrentEnemyAlive(false);
        setBegin(false);
        document.getElementById("hp").innerHTML = "DEAD";
        setTimeout(() =>  {
            enemieKilled();
        }, 3000)
        }
    }

    function enemieKilled () {
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
                <div className="Php">Player Health: {playerHealth} <br></br>
                Attack Speed: {playerAttackSpeed / 1000}
                </div>
                    <div className="fightb">
                    <button disabled={state} id="attack" onClick={() => DamageEnemy(currentEnemyHp, 50)}>ATTACK</button>
                    <button onClick={() => setBegin(true)}>BEGIN!</button>
                </div>
                </div>
            </div>
            

        );

}

export default Fight;