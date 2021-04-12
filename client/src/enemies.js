import giantskel from "./img/giantskel.png"
import soldier from "./img/Soldier.jpg"
const enemies = [
    {
        id: 0,
        name: "Skeleton",
        hp: 100,
        attackSpeed: 1000,
        attackDamage: 10,
        img: giantskel
    },
    {
        id: 1,
        name: "Soldier",
        hp: 200,
        attackSpeed: 1000,
        attackDamage: 10,
        img: soldier
    }
]

export default enemies;