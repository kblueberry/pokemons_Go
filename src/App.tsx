import './App.css';
import SideBarPokemonCard from "./SideBarPokemonCard";
import PokemonsMain from "./PokemonsMain";
import PokemonDetailsProvider from "./PokemonDetailsProvider";

function App() {
  return (
      <div className="main_container">
        <PokemonDetailsProvider>
          <PokemonsMain/>
        </PokemonDetailsProvider>
        <SideBarPokemonCard/>
      </div>
  )
}

export default App

