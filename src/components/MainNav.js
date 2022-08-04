import { Link, Outlet } from 'react-router-dom'; // , Outlet
// import {
//   useQuery,
//   gql,
// } from "@apollo/client"; 
import Panel from './Panel';
import '../index.css';

function MainNav() {

  // const GET_PANELS = gql`
  //   query {
  //     allPanels {
  //       edges {
  //         node {
  //           slug,
  //           panelTitle,
  //         }
  //       }
  //     }
  //   }
  // `;

  // const { loading, error, data } = useQuery(
  //   GET_PANELS
  // );

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: { error.message } </p>;

  // const panels = 
  //   data.allPanels.edges.map((panel, index) => {
  //   return (

  //       <Link
  //         to={`/panel/${panel.node.slug}`}
  //         key={panel.node.slug}
  //       >
  //         {panel.node.panelTitle}
  //       </Link>


  //   )
  // });
  
  // // interactivePart = { data.interactive.interactiveParts.edges[0] }
  // // hotspots = {interactivePart.node.hotspots.edges}

  return (
    <div >
        <div className="home-nav">
          <Link to='/'>Maine Labor Mural</Link>
        </div>

      <p>
        
      <p>
      <a href="/panel/apprenticeship">Apprenticeship</a> |
      <a href="/panel/child-labor">Child Labor</a> |
      <a href="/panel/women-textiles">Women Textile Workers</a> |
      <a href="/panel/secret-ballot">Secret Ballot</a> |
      <a href="/panel/labor-day">First Labor Day</a> |
      <a href="/panel/logging">Woods Workers</a> |
      <a href="/panel/shoe-strike">The '37 Shoe Strike</a> |
      <a href="/panel/reform">Labor Reformers</a> |
      <a href="/panel/Rosie">Rosie the Riveter</a> |
      <a href="/panel/jay-strike">Jay Strike</a> |
      <a href="/panel/labor-future">Future of Maine Labor</a> |
      <a href="/panel/home">Home page</a> |
      </p>


      </p>

      <Outlet />

    </div>

  );
}

export default MainNav;
