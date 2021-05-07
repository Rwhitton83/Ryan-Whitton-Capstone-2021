import Claymore from './img/claymore.png'
import Falchion from './img/falchion.png'
import BrokenSword from './img/brokensword.png'

import KnightHelm from './img/knight_helm.png'
import KnightBody from './img/knight_armor.png'
import KnightArms from './img/knight_gauntlets.png'
import KnightLegs from './img/knight_leggings.png'

import ThornHelm from './img/thorn_helm.png'
import ThornBody from './img/thorn_body.png'
import ThornArm from './img/thorn_arm.png'
import ThornLeg from './img/thorn_leg.png'


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
            dps: '5 Attack Power',
            attackSpeed: 450,
            flatDam: 5,
            df: 0,
            img: BrokenSword,
            type: "One Handed"
        },

        {
            id: 2,
            name: 'Falchion',
            dps: '12 Attack Power',
            attackSpeed: 500,
            flatDam: 12,
            img: Falchion,
            type: "One Handed"
        },

        {
            id: 3,
            name: 'Claymore',
            attackSpeed: 850,
            flatDam: 25,
            dps: '25 Attack Power',
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
            df: 2,
            img: KnightHelm,
            type: "Head"
        },
        {
            id: 2,
            name: 'Thorn Helm',
            dps: '6 Armor',
            df: 6,
            img: ThornHelm,
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
            df: 6,
            img: KnightBody,
            type: "Body"
        },
        {
            id: 2,
            name: 'Thorn Body',
            dps: '24 Armor',
            df: 24,
            img: ThornBody,
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
            df: 6,
            img: KnightArms,
            type: "Arm"
        },
        {
            id: 2,
            name: 'Thorn Gauntlets',
            dps: '12 Armor',
            df: 12,
            img: ThornArm,
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
            dps: '6 Armor',
            df: 6,
            img: KnightLegs,
            type: "Leg"
        },
        {
            id: 2,
            name: 'Thorn Leggings',
            dps: '12 Armor',
            df: 12,
            img: ThornLeg,
            type: "Leg"
        }

    ]
}

export default equipment;