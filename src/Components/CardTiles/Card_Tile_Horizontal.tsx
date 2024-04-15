import "./Card_Tile_Horizontal.css";

type CardTileProps = {
    title: string;
    subtitle: string;
    theme: string;
    onClick: () => void;
}

function CardTileHorizontal({title, theme, onClick}: CardTileProps) {


      
      


    return (
        <div className={"card " + theme} onClick={onClick}>
            <div className="card-content"> 
                <h3 className="card-title">{title}</h3>
               
            </div>
        </div>
    )
}

export default CardTileHorizontal;
