import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { useContext, useRef } from 'react';
import { Context } from '../Context';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#ccc',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const MockCard = props => {
    const ref = useRef(null)
    const context = useContext(Context)
    if (ref.current != null || context.elements[props.unique_id] == null) {
       context.elements[props.unique_id] = ref 
    }

    return (  
      <Item id={'card-' + props.name} ref={ref}>
        <h2>{props.name}</h2>
        <p>{props.desc}</p>
        <h2>⚔️ {props.attack} ❤️ {props.hp}</h2>
      </Item>
    );
};

export default MockCard;