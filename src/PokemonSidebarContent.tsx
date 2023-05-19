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
          <Row leftSide="Type" rightSide="Fire" />
          {data.stats.map((unit) => (
            <Row key={unit.stat.name}
                 leftSide={capitalizeFirstLetter(unit.stat.name)}
                 rightSide={unit.base_stat} />
          ))}
          <Row leftSide="Weight"
               rightSide={data.weight} />
          <Row leftSide="Total moves"
               rightSide={data.moves.length} />
        </tbody>
      </table>
    </aside>
  );
}

export function Row({
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
