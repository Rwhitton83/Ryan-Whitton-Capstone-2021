import giantskel from "./img/giantskel.png"
import soldier from "./img/Soldier.jpg"
import hollow from "./img/hollow.png"
import stalker from "./img/Stalker.png"
const enemies = [
    {
        id: 0,
        name: "Hollow",
        hp: 50,
        attackSpeed: 2000,
        attackDamage: 5,
        img: hollow
    },
    {
        id: 1,
        name: "Skeleton",
        hp: 100,
        attackSpeed: 1500,
        attackDamage: 10,
        img: giantskel
    },
    {
        id: 2,
        name: "Stalker",
        hp: 125,
        attackSpeed: 800,
        attackDamage: 8,
        img: stalker
    },
    {
        id: 3,
        name: "Soldier",
        hp: 200,
        attackSpeed: 1000,
        attackDamage: 20,
        img: soldier
    }
]

export default enemies;