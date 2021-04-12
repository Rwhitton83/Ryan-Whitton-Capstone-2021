import React, {UseStyle} from 'react'

export default function EnemieRender({ enemies }) {
    let p = enemies
    return (
        <div className="enemie">
                <img alt={p.name} className="img" src = {p.img}></img>
                </div>

    )
}