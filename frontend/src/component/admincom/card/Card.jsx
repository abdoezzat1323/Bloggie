import React from 'react'
import './card.css'

export default function Card(props) {
  return (
    <div className="cardContainer"
    style={{
        background : props.color,
        boxShadow : "box-shadow:0px 10px 20px 0px #FDC0C7",
    }}
    >
       <h3>{props.data.title}</h3>
       <br />
       <h3>{props.data.value}</h3>
    </div>
  )
}

backGround:;
    ;
