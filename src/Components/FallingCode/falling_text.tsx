

import './falling_text.css'

function FallingText() {


  return (
  
      <div className='fallingText' style={{left: `${Math.floor(Math.random() * 180)}vw`, animation: `fall${Math.floor(Math.random() * 3) + 1} 2s linear infinite`, animationDelay: `${Math.floor(Math.random() * 2000)}ms`} } onAnimationEnd={(e) => {
        e.currentTarget.remove()
      }}>
       {Math.floor(Math.random() * 10)}
      </div>
       
    
  )
}

export default FallingText
