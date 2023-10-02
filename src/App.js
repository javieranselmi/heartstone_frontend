import { Divider } from '@mui/material';
import './App.css';
import Board from './components/Board';
import { useState, useEffect } from 'react';



function App() {

  const [gameInfo, setGameInfo] = useState({
      "player1": {"cards": []},
      "player2": {"cards": []}
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Make an AJAX call to retrieve JSON data
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
  }, []); // The empty array [] as the second argument means this effect runs once after initial render

  return (
    <div className="App">
      <Board cardsJson={gameInfo.player1.cards}/>
      <Divider/>
      <Board cardsJson={gameInfo.player2.cards}/>
    </div>
  );
}

export default App;
