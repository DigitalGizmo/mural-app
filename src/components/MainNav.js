import { Link, Outlet } from 'react-router-dom'; // , Outlet
import {
  useQuery,
  gql,
} from "@apollo/client"; 
// import Panel from './Panel';
import '../index.css';

function MainNav() {

  const GET_PANELS = gql`
    query {
      allPanels {
        edges {
          node {
            slug,
            panelTitle,
            articleSet {
              edges {
                node {
                  title,
                  caption,
                }
              }
            },
            visitSet {
              edges {
                node {
                  title,
                  narrative,
                }
              }
            }
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

        <Link
          to={`/panels/${panel.node.slug}`}
          key={panel.node.slug}
        >
          {panel.node.panelTitle}
        </Link>


    )
  });
  
  // // interactivePart = { data.interactive.interactiveParts.edges[0] }
  // // hotspots = {interactivePart.node.hotspots.edges}

  return (
    <div >
        <div className="home-nav">
          <Link to='/'>Maine Labor Mural</Link>
        </div>
        
      <p>
      <a href="/panels/apprenticeship">Apprenticeship</a> |
      <a href="/panels/child-labor">Child Labor</a> |
      <a href="/panels/women-textiles">Women Textile Workers</a> |
      <a href="/panels/secret-ballot">Secret Ballot</a> |
      <a href="/panels/labor-day">First Labor Day</a> |
      <a href="/panels/logging">Woods Workers</a> |
      <a href="/panels/shoe-strike">The '37 Shoe Strike</a> |
      <a href="/panels/reform">Labor Reformers</a> |
      <a href="/panels/Rosie">Rosie the Riveter</a> |
      <a href="/panels/jay-strike">Jay Strike</a> |
      <a href="/panels/labor-future">Future of Maine Labor</a> |
      <a href="/panels/home">Home page</a> |
      </p>

      <Outlet 
        panelList = { panels }
      
      />


    </div>

  );
}

export default MainNav;
