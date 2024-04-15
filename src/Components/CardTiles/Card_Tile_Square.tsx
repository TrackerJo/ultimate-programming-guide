import "./Card_Tile_Square.css";

type CardTileProps = {
    title: string;
    subtitle: string;
    theme: string;
    onClick: () => void;
}

function CardTileSquare({title, subtitle, theme, onClick}: CardTileProps) {

    const createWord = (text: string, index: number): HTMLElement => {
        const word = document.createElement("span");
        
        word.innerHTML = `${text} `;
        
        word.classList.add("card-subtitle-word");
        
        word.style.transitionDelay = `${index * 40}ms`;
        
        return word;
      }
      
      function stitchSubstitle(): HTMLElement[]  {
        const subtitleElements: HTMLElement[] = []; 
        const addWord = (text: string, index: number) => subtitleElements.push(createWord(text, index));
      
        const createSubtitle = (text: string) => text.split(" ").map(addWord);
        
      
        createSubtitle(subtitle);
        return subtitleElements;
      }


    return (
        <div className={"cardSquare " + theme} onClick={onClick}>
            <div className="card-content-square"> 
                <h3 className="card-title-square">{title}</h3>
                <h4 className="card-subtitle-square">
                    {stitchSubstitle().map((word, index) => (
                        <label className="card-subtitle-word" style={{transitionDelay: `${index * 40}ms`}}>{word.innerHTML}</label>
                    ))}
                </h4>
            </div>
        </div>
    )
}

export default CardTileSquare;
