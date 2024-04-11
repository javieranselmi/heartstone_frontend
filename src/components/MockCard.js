import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { useContext, useRef } from 'react';
import { Context } from '../Context';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



const MockCard = props => {
    const ref = useRef(null)
    const context = useContext(Context)
    if (ref.current != null) {
       context.elements.push(ref)  
    }

    return (  
      <Item id={'card-' + props.name} ref={ref}>
        <h2>{props.name}</h2>
        <p>{props.desc}</p>
      </Item>
    );
};

export default MockCard;