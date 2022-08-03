// import { Link, Outlet } from 'react-router-dom';
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

  // const panels = data.allPanels.edges.map((panel, index) => {
  //   return (
  //     <li
  //       // to={`/panels/${panel.node.slug}`}
  //       key={panel.node.slug}
  //     >
  //       {panel.node.panelTitle}
  //     </li>
  //   )
  // });
  
  const panels = 
    data.allPanels.edges.map((panel, index) => {
    return (
      <div
        key={panel.node.slug}

      >
        <p>{panel.node.panelTitle}</p>
      </div>
    )
  });




  // // loading = {loading}
  // // error = {error}
  // // interactivePart = { data.interactive.interactiveParts.edges[0] }
  // // hotspots = {interactivePart.node.hotspots.edges}

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: { error.message } </p>;

  return (
    <div >
      <h1>App</h1>

      <ul>
        { panels }
      </ul>


    </div>

  );
}

export default App;
