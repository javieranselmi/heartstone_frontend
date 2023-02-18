import './App.css';
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

function App() {
  return (
    <div className="App">
      <Card>
        <Image id="pili" clip />
        <Frame />
        <Cost fontFamily="Belwe">0</Cost>
        <Race fontFamily="Belwe">Murloc</Race>
        <Health fontFamily="Belwe">1</Health>
        <Strength fontFamily="Belwe">1</Strength>
        <Rarity id="common" />
        <Title fontFamily="Belwe" flow>Pili</Title>
        <Set id="gvg" />
        <Text rich>
          {"Reina de los murlocs"}
        </Text>
      </Card>
    </div>
  );
}

export default App;
