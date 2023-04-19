import React  from "react";

const PokemonCard = ({id,name,image,type}) => {

    const style = `card-container ${type}`
    return (
        <div className={style}>
            <div className="number">
                <small>#{id}</small>
            </div>
                <img src={image} alt={name} />
                <div className="detail-wrapper">
                    <h2>{name}</h2>
                    <p>{type}</p>
                </div>
        </div>
    );
    }

export default PokemonCard;
