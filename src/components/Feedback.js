import React from 'react'
import { useState } from "react"
import "./feedback.css"
import { FaStar } from "react-icons/fa"
import Message from './Message'

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};

export function Feedback () {
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const [isShown, setIsShown] = useState(false);
    const stars = Array(5).fill(0)
    
    const handleClick = value => {
      setCurrentValue(value)
    }
  
    const handleMouseOver = newHoverValue => {
      setHoverValue(newHoverValue)
    };
  
    const handleMouseLeave = () => {
      setHoverValue(undefined)
    }

    const rateClick = event => {
      setIsShown(true);
    };
    let index=0
    return (
      <div className='feedback'>
      <div className='feedbackroperty' style={{paddingLeft:'20px'}}>
        <h1> Feedback</h1>
        <div className='star'>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
            />
          )
        })}
        <button onClick={rateClick}>{currentValue} rate</button>
        <div>
        {isShown?<Message />:null}
        </div>
      </div>
      </div>
      </div>
    )
}

export default Feedback
