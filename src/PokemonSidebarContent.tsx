import "./PokemonSidebarContent.css";
import "./spinner.css";
import { usePokemonDetails } from "./PokemonDetailsProvider";
import { capitalizeFirstLetter } from "./helper";
import { GlobalConstants } from "./constants";
import PokemonType from "./PokemonType";

export default function PokemonSidebarContent() {
  const { loading, error, data } = usePokemonDetails();

  if (loading) {
    return (
      <aside className="content_loading">
        <div className="loader"></div>
      </aside>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <aside className="content_loaded">
      {error ? <p>{GlobalConstants.fetchPokemonError}</p> : <>
        <h4 className="pokemon_content_header">
          {capitalizeFirstLetter(data.name)}
        </h4>
        <div className="type_wrapper">
          {data?.types.map(pokemonType => (
              <PokemonType pokemonType={pokemonType.type.name} />
          ))}
        </div>
        <table width="100%" border="0">
          <tbody>
            <tr>
              <th className="cell">{GlobalConstants.abilityColumnName}</th>
              <th className="cell">{GlobalConstants.abilityValueColumnName}</th>
            </tr>
            {data.stats.map((unit) => (
              <AbilityRow
                key={unit.stat.name}
                abilityKey={capitalizeFirstLetter(unit.stat.name)}
                abilityValue={unit.base_stat}
              />
            ))}
            <AbilityRow abilityKey={GlobalConstants.abilityWeightProperty} abilityValue={data.weight} />
            <AbilityRow
              abilityKey={GlobalConstants.abilityTotalMovesProperty}
              abilityValue={data.moves.length}
            />
          </tbody>
        </table>
      </>}
    </aside>
  );
}

export function AbilityRow({
  abilityKey,
  abilityValue,
}: {
  abilityKey: string;
  abilityValue: number | string;
}) {
  return (
    <tr valign="top">
      <td width="75%" className="cell">
        {abilityKey}
      </td>

      <td width="25%" className="cell">
        {abilityValue}
      </td>
    </tr>
  );
}
