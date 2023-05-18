import './PokemonSidebarContent.css';
import './spinner.css';
import { usePokemonDetails } from "./PokemonDetailsProvider";

function PokemonSidebarContent() {
  const {loading, error, data} = usePokemonDetails();
  const loadingSpinner = <div className="loader"></div>;

  const addCssClass = (): string => loading ? 'content_loading' : 'content_loaded';

  // TODO fix show Sidebar on click from the list
  return <aside className={addCssClass()}>
    {loading ? loadingSpinner : <>
      <h4>Hello</h4>
      <table width="100%" border="0">
        <tbody>
        <tr valign="top">
          <td width="80%">
            <p>JJ</p>
          </td>

          <td width="20%">
            <p>II</p>
          </td>
        </tr>
        </tbody>
      </table>
    </>}
  </aside>
}

export default PokemonSidebarContent