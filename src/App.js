import { Divider } from '@mui/material';
import './App.css';
import Board from './components/Board';
import { useState, useEffect, useContext, useMemo, Children, useRef } from 'react';
import { Context } from './Context';

const processGameInfo = (gameInfo) => {
  const elements = {}
  gameInfo.player1.cards.forEach((card) => {
    card.hp = card.initial_hp
    card.attack = card.initial_attack
    console.log(card)
  })
  gameInfo.player2.cards.forEach((card) => {
    card.hp = card.initial_hp
    card.attack = card.initial_attack
  })

  return gameInfo
}

function App() {

  const [gameInfo, setGameInfo] = useState({
      "player1": {"cards": []},
      "player2": {"cards": []}
  });
  const [loading, setLoading] = useState(true);
  const [eventSequence, setEventSequence] = useState(0);
  const con = useContext(Context)
  con.gameInfo = gameInfo

  useEffect(() => {
    fetch('/example.json')
      .then((response) => response.json())
      .then((data) => {
        setGameInfo(processGameInfo(data));
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setGameInfo(false);
      });
  }, []);

  const startAnimation = () => {

    const { source_id , target_id } = con.gameInfo.events[eventSequence]

    if (eventSequence >= con.gameInfo.events.length - 1) {
      console.log('No more events')
      return 
    }

    const attacker = con.elements[source_id].current
    const target = con.elements[target_id].current
    
    attacker.style.backgroundColor = 'red'
    target.style.backgroundColor = 'green'

    const startCoordinates = attacker.getBoundingClientRect();
    const endCoordinates = target.getBoundingClientRect();
    // Calculate the direction and distance for animation
    const deltaX = endCoordinates.left - startCoordinates.left;
    const deltaY = endCoordinates.top - startCoordinates.top;
    const animationDuration = 500; // Set the duration in milliseconds

    attacker.style.transition = `transform ${animationDuration}ms ease-in-out`;
    attacker.style.transform = `translate(${deltaX}px, ${deltaY}px)`;

    setTimeout(() => {
      attacker.style.transform = 'translate(0, 0)';
      attacker.style.backgroundColor = '#ccc'
      target.style.backgroundColor = '#ccc'
      setEventSequence(eventSequence + 1)
    }, animationDuration);
  };

  return (
    <div className="App">
      <h1>GAME: EVENT #{eventSequence}</h1>
      <Context.Provider value={con}>
        <Board player={1}/>
        <Divider/>
        <Board player={2}/>
        <input type='button' onClick={() => { startAnimation() }} value='Next Event'/>
      </Context.Provider>
    </div>
  );
}

export default App;
