import './PokemonSidebarContent.css';
import './spinner.css';
import { usePokemonDetails } from "./PokemonDetailsProvider";

function PokemonSidebarContent() {
  const {loading, error, data} = usePokemonDetails();

  const addCssClass = (): string => loading ? 'content_loading' : 'content_loaded';

  if (loading) {
    return <div className="loader"></div>;
  }

  if (!data) {
    return null;
  }


  return <aside className={addCssClass()}>
      <h4>Hello</h4>
      <table width="100%" border="0">
        <tbody>
        <tr valign="top">
          <td width="80%">
            <p>{data.name}</p>
          </td>

          <td width="20%">
            <p>II</p>
          </td>
        </tr>
        </tbody>
      </table>
  </aside>
}

export default PokemonSidebarContent