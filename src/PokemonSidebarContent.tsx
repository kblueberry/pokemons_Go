import "./PokemonSidebarContent.css";
import "./spinner.css";
import { usePokemonDetails } from "./PokemonDetailsProvider";
import { capitalizeFirstLetter } from "./helper";

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
      <h4 className="pokemon_content_header">
        {capitalizeFirstLetter(data.name)}
      </h4>
      <table width="100%" border="0">
        <tbody>
          <tr>
            <th className="cell">Type</th>
            <th className="cell">Fire</th>
          </tr>
          {data.stats.map((unit) => (
            <AbilityRow
              key={unit.stat.name}
              abilityKey={capitalizeFirstLetter(unit.stat.name)}
              abilityValue={unit.base_stat}
            />
          ))}
          <AbilityRow abilityKey="Weight" abilityValue={data.weight} />
          <AbilityRow abilityKey="Total moves" abilityValue={data.moves.length} />
        </tbody>
      </table>
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
