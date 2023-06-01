import './App.css';
import PokemonSidebarContent from "./components/pokemonInformation/PokemonSidebarContent";
import PokemonsMain from "./components/pokemonList/PokemonsMain";
import PokemonDetailsProvider from "./components/pokemonInformation/PokemonDetailsProvider";

function App() {
  return (
      <div className="main_container">
        <PokemonDetailsProvider>
          <PokemonsMain/>
          <PokemonSidebarContent/>
        </PokemonDetailsProvider>
      </div>
  )
}

export default App

