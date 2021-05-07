import React, {UseStyle} from 'react'

export default function EnemieRender({ enemies }) {
    let p = enemies
    return (
        <div className="enemie">
                <div> LEVEL: {p.id + 1}<br></br>{p.name}</div>
                <img alt={p.name} className="img" src = {p.img}></img>
                </div>

    )
}