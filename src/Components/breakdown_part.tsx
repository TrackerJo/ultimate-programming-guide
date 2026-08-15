import { ReactNode, useEffect, useState } from 'react'
import SearchIcon from '../assets/search_circle.png'
import './breakdown_part.css'
import CodeSnippet from './code_snippet'

type BreakdownPartProps = {
    text: ReactNode
    snippet: string
    type?: "html" | "css" | "js"
}

function BreakdownPart({ text, snippet, type = "html" }: BreakdownPartProps) {
    const [showCode, setShowCode] = useState(false)
    const [snippetX, setSnippetX] = useState(0)
    const [snippetY, setSnippetY] = useState(0)
    const [id, setId] = useState("")

    useEffect(() => {
        setId(Math.floor((Math.random() * 1000000)).toString() + new Date().getTime().toString())

    }, [])





    return (
        <>

            <div className='BreakdownPart' id={id} >

                <img src={SearchIcon} alt="view code snippet" className='SearchIcon' onClick={(e) => {
                    const target = e.target as HTMLElement
                    const rect = target.getBoundingClientRect()
                    const x = rect.left + window.scrollX - 15
                    const y = rect.top + window.scrollY + 30
                    setSnippetX(x)
                    setSnippetY(y)
                    setShowCode(!showCode)
                    if (!showCode) {
                        document.addEventListener('click', (e) => {

                            if ((e.target as HTMLElement).classList.contains('SearchIcon')) {
                                console.log('clicked on search icon')
                                console.log((e.target as HTMLElement).parentElement!.id)
                                if ((e.target as HTMLElement).parentElement!.id == id) {

                                    return
                                }
                            }

                            if ((e.target as HTMLElement).classList.contains('snippet') || (e.target as HTMLElement).classList.contains('language-xml') || (e.target as HTMLElement).parentElement!.classList.contains('language-xml') || (e.target as HTMLElement).className.includes('hljs') || (e.target as HTMLElement).classList.contains('snippetTitle') || (e.target as HTMLElement).classList.contains('copyIcon') || (e.target as HTMLElement).classList.contains('snippetTopbar')) {
                                return
                            }
                            setShowCode(false)

                        })
                    }
                }} />
                {text}
                {showCode ? <CodeSnippet snippet={snippet} type={type} x={snippetX} y={snippetY} /> : null}

            </div>
        </>


    )
}

export default BreakdownPart