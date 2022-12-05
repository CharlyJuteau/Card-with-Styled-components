import "./card.scss";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

export default function Card() {
  const stars = Array(5).fill(0);
  const [currVal, setCurrVal] = useState(0);
  const [hoverVal, setHoverVal] = useState(undefined);
  const [favourite, setFavourite] = useState(null)

  const handleFavourite = () => setFavourite(!favourite);
  const handleClick = (value) => setCurrVal(value);
  const handleMouseOver = (value) => setHoverVal(value);
  const handleMouseLeave = () => setHoverVal(undefined);
    return(
    <div className="card">
    <div className="card-header">
        
        <AiOutlineHeart
        onClick={handleFavourite}
        className={favourite ? "active-heart": "inactive-heart"}
        width="0.4rem"
        />
        <h1 className="Title">Nantes</h1>
        <img src="https://www.flycorsair.com/sites/default/files/2022-06/AdobeStock_299134759_Editorial_Use_Only%20Nantes%20compresse.jpg" alt="Nantes" className="imageNantes"/>
        <ul className="Activities">
          <li>
            Chateau des Ducs de Bretagne
          </li>
          <li>
            Machine de l'Ile
          </li>
        </ul>
        <p className="Text">Lorem Ipsum</p>
        <div className="card-footer">
        {stars.map((star, index) => {
          return(
            <span key={index} className='stars'>
              <AiFillStar
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              className={
                (currVal || hoverVal) > index
                ? "active-star"
                : "inactive-star"
              }
              width="0.4rem"
              />
            </span>
          )
        }
        )}
        </div>
    </div>
    </div>
    )
}