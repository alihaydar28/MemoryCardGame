import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import cardData from '../cardData';
import '../styles/Main.css';
import Confetti from "react-confetti";

const Main = ({ score, handleScore }) => {
  const [cards, setCards] = useState(cardData);
  const [gameStatus, setGameStatus] = useState({
    isGameOver: false,
    isGameWon: false,
  });

  const handleCardClick = (id) => {
    if (gameStatus.isGameOver || gameStatus.isGameWon) {
      return; // Don't process click if game is over
    }

    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id
          ? card.isChosen
            ? { ...card, isChosen: true }
            : { ...card, isChosen: true }
          : card
      )
    );

    handleScore(score + 1);

    const clickedCard = cards.find((card) => card.id === id);
    if (clickedCard && clickedCard.isChosen) {
      setGameStatus({
        isGameOver: true,
        isGameWon: false,
      });
      
    }
  };

  useEffect(() => {
    if (cards.every((card) => card.isChosen)) {
      setGameStatus({
        isGameOver: false,
        isGameWon: true,
      });
    }
  }, [cards]);

  const shuffleCards = (cardArray) => {
    let currentIndex = cardArray.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [cardArray[currentIndex], cardArray[randomIndex]] = [
        cardArray[randomIndex],
        cardArray[currentIndex],
      ];
    }

    return cardArray;
  };

  const renderShuffledCards = (cardArray) => {
    const shuffledCards = shuffleCards([...cardArray]);
    return shuffledCards.map((card) => (
      <Card
        key={card.id}
        name={card.name}
        img={card.img}
        isChosen={card.isChosen}
        onClick={() => handleCardClick(card.id)}
        disabled={gameStatus.isGameOver}
      />
    ));
  };

  const restartGame = () => {
    setCards(cardData);
    setGameStatus({
      isGameOver: false,
      isGameWon: false,
    });
    handleScore(0);
  };

  const shuffledCardsArray = renderShuffledCards(cards);

  let message = '';
  let showRestartBtn = false;
  if (gameStatus.isGameOver) {
    message = 'Game Over';
    showRestartBtn = true;
    
  } else if (gameStatus.isGameWon) {
    message = 'Game Won';
    showRestartBtn = true;
  } else {
    message = 'Choose your next character!';
  }

  return (
    
    <div className="container">
      {gameStatus.isGameWon && <Confetti />}
      <h2>{message}</h2>
      <div className="cardContainer">{shuffledCardsArray}</div>
      {showRestartBtn && (
        <button className="btnRestart" onClick={restartGame}>
          Restart
        </button>
      )}
    </div>
  );
};

export default Main;
