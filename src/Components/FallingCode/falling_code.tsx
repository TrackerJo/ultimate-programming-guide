

import './falling_code.css'
import FallingText from './falling_text'

function FallingCode() {


  return (
  
      <div>
       {
            Array(1000).fill(0).map((_, i) => {
                return <FallingText key={i}/>
            })
       }
      </div>
       
    
  )
}

export default FallingCode
