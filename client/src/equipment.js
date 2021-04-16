import Claymore from './img/claymore.png'
import Falchion from './img/falchion.png'
import KnightHelm from './img/knight_helm.png'
import KnightBody from './img/knight_armor.png'
import KnightArms from './img/knight_gauntlets.png'
import KnightLegs from './img/knight_leggings.png'
import EMPTY from './img/EMPTY.png';

const equipment = [
    {
        id: 0,
        name: 'Empty',
        dps: '',
        attackSpeed: 500,
        flatDam: 1,
        df: 0,
        img: EMPTY,
        type: "Empty"
    },

    {
        id: 1,
        name: 'Claymore',
        attackSpeed: 1000,
        flatDam: 25,
        dps: '100 DPS',
        img: Claymore,
        type: "Weapon"
    },

    {
        id: 2,
        name: 'Falchion',
        dps: '80 DPS',
        attackSpeed: 500,
        flatDam: 12,
        img: Falchion,
        type: "Weapon"
    },

    {
        id: 3,
        name: 'Knight Helm',
        dps: '4 Armor',
        df: 4,
        img: KnightHelm,
        type: "Head"
    },

    {
        id: 4,
        name: 'Knight Body',
        dps: '12 Armor',
        df: 12,
        img: KnightBody,
        type: "Body"
    },

    {
        id: 5,
        name: 'Knight Gauntlets',
        dps: '6 Armor',
        df: 12,
        img: KnightArms,
        type: "Arm"
    },

    {
        id: 6,
        name: 'Knight Leggings',
        dps: '12 Armor',
        df: 12,
        img: KnightLegs,
        type: "Leg"
    }
    
]

export default equipment;