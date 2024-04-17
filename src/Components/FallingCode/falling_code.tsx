

import './falling_code.css'
import FallingText from './falling_text'
import { isMobile } from 'react-device-detect';

function FallingCode() {
  const i: number = isMobile ? 250 : 1000;

  return (
  
      <div>
       {
            Array(i).fill(0).map((_, i) => {
                return <FallingText key={i}/>
            })
       }
      </div>
       
    
  )
}

export default FallingCode
