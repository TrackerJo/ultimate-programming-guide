

import { useRef } from 'react'
import './circle_button.css'

type CircleButtonProps = {
    text: string
    onClick: () => void
    }


function CircleButton({text, onClick}: CircleButtonProps) {
    const centerRef = useRef<HTMLDivElement>(null)


  return (
  
    <div className="circle-btn" onClick={onClick} onMouseOver={() => {
        centerRef.current?.classList.add('hovered')
    }} onMouseOut={() => {
        centerRef.current?.classList.remove('hovered')
    }}>
        <div className="center-circle" onAnimationEnd={onClick} ref={centerRef}>
        
        </div>
        <label>{text}</label>
    </div>
       
    
  )
}

export default CircleButton
