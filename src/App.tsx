import './App.css';
import SideBarPokemonCard from "./SideBarPokemonCard";
import PokemonsMain from "./PokemonsMain";

function App() {
  return (
      <div className="main_container">
        <PokemonsMain/>
        <SideBarPokemonCard/>
      </div>
  )
}

export default App

