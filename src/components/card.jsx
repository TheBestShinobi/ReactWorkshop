import React, {useState} from "react";
import "./card.css"

function Card({image, title, description}) {
    // Create a state
    const [expanded, setExpanded] = useState(false)

    return (

        <div className="card">

            <img className="card__image" src={image} alt={title} />
            <div className="card__content">

                <h2 className="card__title">{title}</h2>

                <p className="card__description">
                    {expanded ? description: `${description.slice(0, 80)}...`}
                </p>

                <button className="card__button" onClick={() => setExpanded(!expanded)}>
                    {expanded ? "Show less" : "Read More"}
                </button>

            </div>

        </div>
    )
}