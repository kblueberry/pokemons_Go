import "./PokemonSidebarContent.css";
import "./spinner.css";
import { usePokemonDetails } from "./PokemonDetailsProvider";
import { capitalizeFirstLetter } from "./helper";

export default function PokemonSidebarContent() {
  const { loading, error, data } = usePokemonDetails();

  const addCssClass = (): string =>
    loading ? "content_loading" : "content_loaded";

  if (loading) {
    return <div className="loader"></div>;
  }

  if (!data) {
    return null;
  }

  return (
    <aside className={addCssClass()}>
      <h4 className="pokemon_content_header">{capitalizeFirstLetter(data.name)}</h4>
      <table width="100%" border="0">
        <tbody>
          <Row leftSide="Type" rightSide="Fire" />
          {data.stats.map((unit) => (
            <Row key={unit.stat.name}
                 leftSide={capitalizeFirstLetter(unit.stat.name)}
                 rightSide={unit.base_stat} />
          ))}
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
