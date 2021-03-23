import Claymore from './img/claymore.png'
import Falchion from './img/falchion.png'
import KnightHelm from './img/knight_helm.png'
import KnightBody from './img/knight_armor.png'
import KnightArms from './img/knight_gauntlets.png'
import KnightLegs from './img/knight_leggings.png'

const equipment = [
    {
        id: 1,
        name: 'Claymore',
        dps: '100 DPS',
        img: Claymore,
        type: "Weapon"
    },

    {
        id: 2,
        name: 'Falchion',
        dps: '80 DPS',
        img: Falchion,
        type: "Weapon"
    },

    {
        id: 3,
        name: 'Knight Helm',
        dps: '12 Armor',
        img: KnightHelm,
        type: "Head"
    },

    {
        id: 4,
        name: 'Knight Body',
        dps: '12 Armor',
        img: KnightBody,
        type: "Body"
    },

    {
        id: 5,
        name: 'Knight Gauntlets',
        dps: '12 Armor',
        img: KnightArms,
        type: "Arm"
    },

    {
        id: 6,
        name: 'Knight Leggings',
        dps: '12 Armor',
        img: KnightLegs,
        type: "Leg"
    }
    
]

export default equipment;