import React from 'react'
import './NameCard.css'

function NameCard({profilepic, name, rating, byline}) {
    return (
      <div className="namecard">
        <div className="profilepic">
          <img src={profilepic} alt="" />
        </div>
        <div className="name">{name}</div>
        <div className={rating.toLowerCase()}>{rating}</div>
        <div className="byline">{byline}</div>
      </div>
    )
  }

export default NameCard