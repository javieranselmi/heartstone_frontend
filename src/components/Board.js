import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MockCard from './MockCard';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../Context';

const Board = (props) => {

    const context = useContext(Context)
    const [cards, setCards] = useState([])

    useEffect(() => {
      const player = 'player' + props.player
      setCards(context.gameInfo[player].cards)
    }, [context.gameInfo])
       
    return (  
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
          {cards.map((elem, index) =>
            <Grid item xs key={index}>
               <MockCard id={elem.id} name={elem.name} desc={elem.desc} unique_id={elem.unique_id} attack={elem.attack} hp={elem.hp}/>
            </Grid>
          )}
      </Grid>
    </Box>
    );
};

export default Board;