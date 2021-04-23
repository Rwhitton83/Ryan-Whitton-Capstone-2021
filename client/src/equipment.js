import Claymore from './img/claymore.png'
import Falchion from './img/falchion.png'
import BrokenSword from './img/brokensword.png'

import KnightHelm from './img/knight_helm.png'
import KnightBody from './img/knight_armor.png'
import KnightArms from './img/knight_gauntlets.png'
import KnightLegs from './img/knight_leggings.png'

import EMPTY from './img/EMPTY.png'


const equipment = {
    weapons: [
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
            name: 'Broken Sword',
            dps: '30 DPS',
            attackSpeed: 450,
            flatDam: 5,
            df: 0,
            img: BrokenSword,
            type: "One Handed"
        },

        {
            id: 2,
            name: 'Falchion',
            dps: '80 DPS',
            attackSpeed: 500,
            flatDam: 12,
            img: Falchion,
            type: "One Handed"
        },

        {
            id: 3,
            name: 'Claymore',
            attackSpeed: 1000,
            flatDam: 25,
            dps: '100 DPS',
            img: Claymore,
            type: "Two Handed"
        },
    ],
    head: [
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
            name: 'Knight Helm',
            dps: '4 Armor',
            df: 4,
            img: KnightHelm,
            type: "Head"
        },
    ],
    body:[
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
            name: 'Knight Body',
            dps: '12 Armor',
            df: 12,
            img: KnightBody,
            type: "Body"
        },

    ],
    arm:[
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
            name: 'Knight Gauntlets',
            dps: '6 Armor',
            df: 12,
            img: KnightArms,
            type: "Arm"
        },

    ],
    leg:[
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
            name: 'Knight Leggings',
            dps: '12 Armor',
            df: 12,
            img: KnightLegs,
            type: "Leg"
        }

    ]
}

export default equipment;