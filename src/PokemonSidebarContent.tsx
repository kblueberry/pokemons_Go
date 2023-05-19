import "./PokemonSidebarContent.css";
import "./spinner.css";
import { usePokemonDetails } from "./PokemonDetailsProvider";

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
      <h4 className="pokemon_content_header">{data.name}</h4>
      <table width="100%" border="0">
        <tbody>
          <Row leftSide="Type" rightSide="Fire" />
          {data.stats.map((unit) => (
            <Row leftSide={unit.stat.name} rightSide={unit.effort} />
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
      <td width="80%" className="cell">
        {leftSide}
      </td>

      <td width="20%" className="cell">
        {rightSide}
      </td>
    </tr>
  );
}
