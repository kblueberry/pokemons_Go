import "./PokemonSidebarContent.css";
import "../../common/components/Spinner.css";
import { usePokemonDetails } from "./PokemonDetailsProvider";
import { capitalizeFirstLetter, createPokemonAbility } from "../../common/helpers/helper";
import { GlobalConstants } from "../../common/helpers/constants";
import PokemonType from "./PokemonType";
import Spinner from "../../common/components/Spinner";

export default function PokemonSidebarContent() {
  const { loading, error, data } = usePokemonDetails();

  if (loading) {
    return (
      <aside className="content_loading">
        <Spinner customStyles={{
          width: '11em',
          height: '11em',
          margin: '15em auto'
        }}/>
      </aside>
    );
  }

  if (!data) {
    return null;
  }

  const weightObj = createPokemonAbility(GlobalConstants.abilityWeightProperty, data.weight),
      movesObj = createPokemonAbility(GlobalConstants.abilityTotalMovesProperty, data.moves.length);
  let pokemonAbilities = [...data.stats].map(stat => {
    const obj = {};
    obj[stat.stat.name] = stat.base_stat
    return obj;
  });
  pokemonAbilities = [...pokemonAbilities, ...[weightObj, movesObj]];

  return (
    <aside className="content_loaded">
      {error ? <p>{GlobalConstants.fetchPokemonError}</p> : <>
        <h4 className="pokemon_content_header">
          {capitalizeFirstLetter(data.name)}
        </h4>
        <div className="type_wrapper">
          {data?.types.map(pokemonType => (
              <PokemonType key={pokemonType.slot}
                           pokemonType={pokemonType.type.name} />
          ))}
        </div>
        <table className="pokemon_main">
          <tbody>
            <tr>
              <th className="cell">{GlobalConstants.abilityColumnName}</th>
              <th className="cell">{GlobalConstants.abilityValueColumnName}</th>
            </tr>
            {pokemonAbilities.map((ability) => {
              const abilityKey = Object.keys(ability)[0];
              return <PokemonAbility key={abilityKey}
                                     abilityKey={capitalizeFirstLetter(abilityKey)}
                                     abilityValue="10"/>
            })}
          </tbody>
        </table>
      </>}
    </aside>
  );
}

export function PokemonAbility({
  abilityKey,
  abilityValue,
}: {
  abilityKey: string;
  abilityValue: number | string;
}) {
  return (
    <tr>
      <td className="cell ability_key">
        {abilityKey}
      </td>

      <td className="cell ability_value">
        {abilityValue}
      </td>
    </tr>
  );
}
