import Style from './card.module.css'
import React from 'react'

export const Cards = ({ name, image, race, gender, baseKi, totalKI }) => {
    return (
        <>
            {/* <h5 className={Style.title}>{name}</h5>
        <img src={image} alt={name}/> */}
           <div className="card" style={{ width: '18rem' }}>
      <img className="card-img-top" src={image} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5><br />
        <p className="card-text" style={{color: '#cea800' , fontWeight: 'bolder', fontSize: '14pt'}}>{race} - {gender}</p><br />
        <p>Base KI: </p>
        <p className="card-text" style={{color: '#cea800' , fontWeight: 'bolder', fontSize: '14pt'}}>{baseKi}</p><br />
        <p>Total KI: </p>
        <p className="card-text" style={{color: '#cea800' , fontWeight: 'bolder', fontSize: '14pt'}}>{totalKI}</p><br />
      </div>
    </div>
        </>
    )
}