import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import SingleCard from './components/Card/SingleCard';

const cardImg = [
  {'src': './img/helmet-1.png', 'flag': false},
  {'src': './img/potion-1.png', 'flag': false},
  {'src': './img/ring-1.png', 'flag': false},
  {'src': './img/scroll-1.png', 'flag': false},
  {'src': './img/shield-1.png', 'flag': false},
  {'src': './img/sword-1.png', 'flag': false},
];

function App1() {
  const [cards, setCards] = useState([]);
  const [count, setCount] = useState(0);
  const [choiseCard1, setChoiseCard1] = useState(null);
  const [choiseCard2, setChoiseCard2] = useState(null);

  const shuffleCards = () => {
      let shuffledCards = [...cardImg, ...cardImg];
      shuffledCards = shuffledCards.sort(() => Math.random() - 0.5)
      .map((item => {
        return {...item, 
                'id': Math.random()
              }
      }))
      setCards(shuffledCards);
      setCount(0)
    };

  const setChoiceCard = (card) => {
    if (choiseCard1) {
      setChoiseCard2(card)
    } else {
      setChoiseCard1(card)
    }
  };

  useEffect(() => {
    if (choiseCard1 && choiseCard2) {
      if (choiseCard1.src === choiseCard2.src) {
        setCards(prevState => {
          return prevState.map(card => {
            if (choiseCard1.src === card.src) {
              return {...card, flag: true}
            } else {
              return card;
            }
          })
        })
        resetTurn();
      } else {
        console.log('-');
        setTimeout(resetTurn, 600);
      }
    }
  }, [choiseCard1, choiseCard2]);

  const resetTurn = () => {
    setChoiseCard1(null);
    setChoiseCard2(null);
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div className="App">
      <button onClick={shuffleCards}>Restart</button>
      <div className='card-grid'>
        {cards.map(card => (
          <SingleCard 
          card={card} 
          key={card.id} 
          setChoiceCard={setChoiceCard} 
          flipped = {card === choiseCard1 || card === choiseCard2 || card.flag}/>
        ))}
      </div>
    </div>
  );
}

export default App1