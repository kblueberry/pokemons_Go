import "./PokemonSidebarContent.css";
import "./spinner.css";
import { usePokemonDetails } from "./PokemonDetailsProvider";
import { capitalizeFirstLetter } from "./helper";

export default function PokemonSidebarContent() {
  const { loading, error, data } = usePokemonDetails();

  if (loading) {
    return <aside className="content_loading">
      <div className="loader"></div>
    </aside>;
  }

  if (!data) {
    return null;
  }

  return (
    <aside className="content_loaded">
      <h4 className="pokemon_content_header">{capitalizeFirstLetter(data.name)}</h4>
      <table width="100%" border="0">
        <tbody>
          <th className="cell">Type</th>
          <th className="cell">Fire</th>
          {data.stats.map((unit) => (
            <AbilityRow key={unit.stat.name}
                        leftSide={capitalizeFirstLetter(unit.stat.name)}
                        rightSide={unit.base_stat} />
          ))}
          <AbilityRow leftSide="Weight"
                      rightSide={data.weight} />
          <AbilityRow leftSide="Total moves"
                      rightSide={data.moves.length} />
        </tbody>
      </table>
    </aside>
  );
}

export function AbilityRow({
  leftSide,
  rightSide,
}: {
  leftSide: string;
  rightSide: number | string;
}) {
  return (
    <tr valign="top">
      <td width="75%" className="cell">
        {leftSide}
      </td>

      <td width="25%" className="cell">
        {rightSide}
      </td>
    </tr>
  );
}
