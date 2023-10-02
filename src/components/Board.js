import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import {
  Card,
  Frame,
  Cost,
  Image,
  Title,
  Set,
  Rarity,
  Text,
  Strength,
  Health,
  Race
} from "./HearthstoneCard";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Board = props => {

    return (  
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
            {props.cardsJson.map((elem, index) =>
            <Grid item xs key={index}>
               <Card>
                  <Image id={elem.id} clip />
                  <Frame />
                  <Cost fontFamily="Belwe">0</Cost>
                  <Race fontFamily="Belwe">Murloc</Race>
                  <Health fontFamily="Belwe">1</Health>
                  <Strength fontFamily="Belwe">1</Strength>
                  <Rarity id="common" />
                  <Title fontFamily="Belwe" flow>{elem.name}</Title>
                  <Set id="gvg" />
                  <Text rich>
                    {elem.desc}
                  </Text>
                </Card>
            </Grid>
          )}
      </Grid>
    </Box>
    );
};

export default Board;