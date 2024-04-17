

import { useEffect } from 'react'
import hljs from 'highlight.js'
import html from 'highlight.js/lib/languages/xml'
import js from 'highlight.js/lib/languages/javascript'
import css from 'highlight.js/lib/languages/css'
import 'highlight.js/styles/atom-one-dark.css'
import './code_window.css'
import CloseIcon from '../assets/x.png'
import CopyIcon from '../assets/copy.png'

type CodeWindowProps = {
    dialogRef: React.RefObject<HTMLDialogElement>,
    CodeType: string
    code: string
}


function CodeWindow({dialogRef, CodeType, code}: CodeWindowProps) {
   
    hljs.registerLanguage('xml', html);
    hljs.registerLanguage('css', css);
    hljs.registerLanguage('js', js);

    useEffect(() => {


        hljs.highlightAll()

    } , [code])

  return (
  
    <dialog className="code-dialog" ref={dialogRef}>
        <div className="code-window">
            <img src={CloseIcon} alt="close" className="close-icon" onClick={() => dialogRef.current!.close()}/>
            <img src={CopyIcon} alt="copy" className='copyIcon' onClick={async() => {
                    await navigator.clipboard.writeText(code)
                    alert('Copied code snippet to clipboard')

                }}/>
            <h1 className='CodeWindowTitle'>{CodeType} Code</h1>
            <pre className='code-pre'>
                <code className={(CodeType == "HTML" ? "language-xml " : CodeType == "JS" ? "language-js " : "language-css ") + "code-window-code" }>
                   
                  {code}
                </code>
            </pre>
        </div>
       
    </dialog>
       
    
  )
}

export default CodeWindow
