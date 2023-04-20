import React  from "react";
import { Link } from "react-router-dom";

const PokemonCard = ({id,name,image,type}) => {

    const style = `card-container ${type}`
    return (
        <div className={style}>
<Link to={`pokemon/${name}`} className="link"><div className="number">
                <small>#{id}</small>
            </div>
                <img src={image} alt={name} />
                <div className="detail-wrapper">
                    <h2>{name}</h2>
                    <p>{type}</p>
                </div>
        </Link>
            </div>
    );
    }

export default PokemonCard;
