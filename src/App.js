import { Divider } from '@mui/material';
import './App.css';
import Board from './components/Board';
import { useState, useEffect, useContext } from 'react';
import { Context } from './Context';
import AnimationFactory from './logic/AnimationFactory';

const processGameInfo = (gameInfo) => {

  gameInfo.player1.cards.forEach((card) => {
    card.hp = card.initial_hp
    card.attack = card.initial_attack
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
  const con = useContext(Context)
  con.gameInfo = gameInfo

  useEffect(() => {
    fetch('/example.json')
      .then((response) => response.json())
      .then((data) => {
        setGameInfo(processGameInfo(data));
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setGameInfo(false);
      });
  }, []);

  const startAnimation = async () => {

    const board = con.elements

    for (const event of con.gameInfo.events) {
      const board = con.elements
      await new AnimationFactory().createAnimation(event, board).run()
    }
    console.log('No more events')
  };

  return (
    <div className="App">
      <h1>GAME</h1>
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
