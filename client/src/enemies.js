import giantskel from "./img/giantskel.png"
import soldier from "./img/Soldier.jpg"
import hollow from "./img/hollow.png"
import stalker from "./img/Stalker.png"
import the_pursuer from "./img/the_pursuer.png"
import the_end from "./img/theend.png"

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
        hp: 150,
        attackSpeed: 1000,
        attackDamage: 15,
        img: soldier
    },
    {
        id: 4,
        name: "THE PURSUER",
        hp: 400,
        attackSpeed: 2000,
        attackDamage: 35,
        img: the_pursuer
    },
    {
        id: 5,
        name: "THE END",
        hp: null,
        attackSpeed: 0,
        attackDamage: 0,
        img: the_end
    }
]

export default enemies;