import './App.css';
import PokemonSidebarContent from "./PokemonSidebarContent";
import PokemonsMain from "./PokemonsMain";
import PokemonDetailsProvider from "./PokemonDetailsProvider";

function App() {
  return (
      <div className="main_container">
        <PokemonDetailsProvider>
          <PokemonsMain/>
        </PokemonDetailsProvider>
        <PokemonSidebarContent/>
      </div>
  )
}

export default App

