import { Header } from "./components/header";
import { TemplateCharacter } from "./components/add.card";
import { array } from "./data/arrayCharacter";

const App = () => {
  return (
    <div>
      <Header />
      {array.map((character) => (
        <TemplateCharacter key={character.id} character={character} />
      ))}
    </div>
  );
};

export default App;
