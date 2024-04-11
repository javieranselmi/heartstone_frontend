import { Divider } from '@mui/material';
import './App.css';
import Board from './components/Board';
import { useState, useEffect, useContext, useMemo, Children, useRef } from 'react';
import { Context } from './Context';


function App() {

  const [gameInfo, setGameInfo] = useState({
      "player1": {"cards": []},
      "player2": {"cards": []}
  });
  const [loading, setLoading] = useState(true);

  useEffect((e) => {
    fetch('/example.json')
      .then((response) => response.json())
      .then((data) => {
        setGameInfo(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setGameInfo(false);
      });
  }, []);

  const startAnimation = () => {

    // Access the child component using the ref
    const attacker = con.elements[0].current
    const target = con.elements[8].current

    console.log(con.elements[1].current)
    
    
    attacker.style.backgroundColor = 'red'
    target.style.backgroundColor = 'green'

    console.log('STARTING ANIMATION')
    const startCoordinates = attacker.getBoundingClientRect();
    const endCoordinates = target.getBoundingClientRect();
    // Calculate the direction and distance for animation
    const deltaX = endCoordinates.left - startCoordinates.left;
    const deltaY = endCoordinates.top - startCoordinates.top;
    const animationDuration = 1000; // Set the duration in milliseconds

    attacker.style.transition = `transform ${animationDuration}ms ease-in-out`;
    attacker.style.transform = `translate(${deltaX}px, ${deltaY}px)`;

    setTimeout(() => {
      attacker.style.transform = 'translate(0, 0)';
    }, animationDuration);
  };

  const con = useContext(Context)
  useEffect(() => {
      con.gameInfo = gameInfo
  }, [gameInfo]);

  return (
    <div className="App">
      <Context.Provider value={con}>
        <Board cardsJson={gameInfo.player1.cards}/>
        <Divider/>
        <Board cardsJson={gameInfo.player2.cards}/>
        <input type='button' onClick={() => { startAnimation() }} value='holis'/>
      </Context.Provider>
    </div>
  );
}

export default App;
