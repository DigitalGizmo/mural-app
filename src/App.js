import { Link, Outlet } from 'react-router-dom'; // , Outlet
import {
  useQuery,
  gql,
} from "@apollo/client"; 
import Panel from './components/Panel';
import './index.css';

function App() {

  const GET_PANELS = gql`
    query {
      allPanels {
        edges {
          node {
            slug,
            panelTitle,
          }
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(
    GET_PANELS
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: { error.message } </p>;

  const panels = 
    data.allPanels.edges.map((panel, index) => {
    return (
      <li
       key={panel.node.slug}
       >
        <Link
          to={`/panel/${panel.node.slug}`}
          // key={panel.node.slug}
        >
          {panel.node.panelTitle}
        </Link>

      </li>
    )
  });
  
  // // interactivePart = { data.interactive.interactiveParts.edges[0] }
  // // hotspots = {interactivePart.node.hotspots.edges}

  return (
    <div >
      <h1>App</h1>

      <ul>
        { panels }
      </ul>

      <Outlet />

    </div>

  );
}

export default App;
