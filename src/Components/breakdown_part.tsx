import { ReactNode, useState } from 'react'
import SearchIcon from '../assets/search_circle.png'
import './breakdown_part.css'
import CodeSnippet from './code_snippet'

type BreakdownPartProps = {
    text: ReactNode
    snippet: string
    type?:"html" | "css" | "js"
}

function BreakdownPart({text, snippet, type = "html"}: BreakdownPartProps){
    const [showCode, setShowCode] = useState(false)



    
    return (
        <>
       
        <div className='BreakdownPart'>
            
            <img src={SearchIcon} alt="view code snippet" className='SearchIcon' onClick={() => {
                setShowCode(!showCode)
                if(!showCode){
                    document.addEventListener('click', (e) => {
                        if((e.target as HTMLElement).classList.contains('SearchIcon') || (e.target as HTMLElement).classList.contains('snippet') || (e.target as HTMLElement).classList.contains('language-xml') || (e.target as HTMLElement).parentElement!.classList.contains('language-xml') || (e.target as HTMLElement).className.includes('hljs') || (e.target as HTMLElement).classList.contains('snippetTitle') || (e.target as HTMLElement).classList.contains('copyIcon') || (e.target as HTMLElement).classList.contains('snippetTopbar') ){
                            return
                        }
                        setShowCode(false)

                    } )
                }
                }}/>
            {text}
        </div>
        {showCode ? <CodeSnippet snippet={snippet}  type={type}/> : null}
        </>

        
    ) 
}

export default BreakdownPart