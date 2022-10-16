import "./SingleCard.css";
import React from "react";

const SingleCard = (props) => {
    const clickCard = () => {
        props.setChoiceCard(props.card);
    };

    return (
      <div className="card" >
        <div className={props.flipped ? 'flipped' : ''}>
          <img src={props.card.src} alt="back" className="back" />
          <img src="./img/cover.png" alt="front" className="front" onClick={clickCard}/>
        </div>
      </div>
    );
}

export default SingleCard