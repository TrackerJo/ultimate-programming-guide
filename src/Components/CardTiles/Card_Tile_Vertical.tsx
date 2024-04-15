import "./Card_Tile_Vertical.css";

type CardTileProps = {
    title: string;
    subtitle: string;
    theme: string;
    onClick: () => void;
    difficulty?: "Easy" | "Medium" | "Hard" ;
}

function CardTileVertical({title, subtitle, theme, onClick, difficulty}: CardTileProps) {

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

      function stitchDifficulty(): HTMLElement[] {
        const difficultyElements: HTMLElement[] = []; 
        const addWord = (text: string, index: number) => difficultyElements.push(createWord(text, index));
      
        const createSubtitle = (text: string) => text.split(" ").map(addWord);
        
      
        createSubtitle("Difficulty: " + difficulty);
        return difficultyElements;
      }


    return (
        <div className={"card " + theme} onClick={onClick}>
            <div className="card-content"> 
                <h3 className="card-title">{title}</h3>
                <h4 className="card-subtitle">
                    {stitchSubstitle().map((word, index) => (
                        <label className="card-subtitle-word" style={{transitionDelay: `${index * 40}ms`}}>{word.innerHTML}</label>
                    ))}
                </h4>
                {difficulty && <h4 className="card-subtitle">
                    {stitchDifficulty().map((word, index) => (
                        <label className="card-subtitle-word" style={{transitionDelay: `${index * 40}ms`}}>{word.innerHTML}</label>
                    ))}
                </h4>}
            </div>
        </div>
    )
}

export default CardTileVertical;
