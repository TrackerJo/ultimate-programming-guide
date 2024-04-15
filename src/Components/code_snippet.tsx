import './code_snippet.css'
import 'highlight.js/styles/atom-one-dark.css'
import hljs from 'highlight.js'
import html from 'highlight.js/lib/languages/xml'
import css from 'highlight.js/lib/languages/css'
import js from 'highlight.js/lib/languages/javascript'
import { useEffect } from 'react'
import CopyIcon from '../assets/copy.png'

type CodeSnippetProps = {
    snippet: string
    type: string

}

function CodeSnippet({snippet, type}: CodeSnippetProps) {

    hljs.registerLanguage('xml', html);
    hljs.registerLanguage('css', css);
    hljs.registerLanguage('javascript', js);
    useEffect(() => {


        hljs.highlightAll()
    
    } , [])
    

    return (
        <div className="snippet up">
            <div className='snippetTopbar'>
                <h3 className='snippetTitle'>Code Snippet</h3>
                <img src={CopyIcon} alt="copy" className='copyIcon' onClick={async() => {
                    await navigator.clipboard.writeText(snippet)
                    alert('Copied code snippet to clipboard')

                }}/>
            </div>
            <pre>
                <code className={(type == "html" ? 'language-xml ' : type == "css" ? 'language-css ' : 'language-js ') + "snippet-code"}>
                    {snippet}
                </code>
            </pre>
        </div>
    )
}

export default CodeSnippet
