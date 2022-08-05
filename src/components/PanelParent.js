import { Link, Outlet, useParams, } from 'react-router-dom'; // , Outlet
import {
  useQuery,
  gql,
} from "@apollo/client"; 
// import Panel from './Panel';
import '../index.css';

function PanelParent() {
  let params = useParams();
  // console.log(' params.panelSlug' + params.panelSlug)

  const GET_PANELS = gql`
    query {
      allPanels {
        edges {
          node {
            slug,
            panelTitle,
            panelBlurb,
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

  const chosenPanel = data.allPanels.edges.find(obj => {
    return obj.node.slug === params.panelSlug
  })

  // const panels = 
  //   data.allPanels.edges.map((panel, index) => {
  //   return (

  //       <Link
  //         to={`/panels/${panel.node.slug}`}
  //         key={panel.node.slug}
  //       >
  //         {panel.node.panelTitle}
  //       </Link>


  //   )
  // });
  
  // // interactivePart = { data.interactive.interactiveParts.edges[0] }
  // // hotspots = {interactivePart.node.hotspots.edges}

  return (
    <div>

      <header>
        <a href="/"><img src="msm-logo.jpg"/></a>
        <Link to='/'>Maine Labor Mural</Link>
      </header>

      <header>
        <div className="panel-title">
          <h1>{ chosenPanel.node.panelTitle }</h1>
        </div>

        <div className="panel-nav">
          
          <Link to="/panels/apprenticeship/">
            <img src="https://dev.digitalgizmo.com/mural-assets/images/mini-nav.png"/>
          </Link>
          
          <img src="https://dev.digitalgizmo.com/mural-assets/images/mini-nav-selected.png"/>
          
          <Link to="/panels/women-textiles/">
            <img src="https://dev.digitalgizmo.com/mural-assets/images/mini-nav.png"/>
          </Link>
          
          <Link to="/panels/secret-ballot/">
            <img src="https://dev.digitalgizmo.com/mural-assets/images/mini-nav.png"/>
          </Link>
          
          <Link to="/panels/labor-day/">
            <img src="https://dev.digitalgizmo.com/mural-assets/images/mini-nav.png"/>
          </Link>
          
          <Link to="/panels/logging/">
            <img src="https://dev.digitalgizmo.com/mural-assets/images/mini-nav.png"/>
          </Link>
          
          <Link to="/panels/shoe-strike/">
            <img src="https://dev.digitalgizmo.com/mural-assets/images/mini-nav.png"/>
          </Link>
          
          <Link to="/panels/reform/">
            <img src="https://dev.digitalgizmo.com/mural-assets/images/mini-nav.png"/>
          </Link>
          
          <Link to="/panels/Rosie/">
            <img src="https://dev.digitalgizmo.com/mural-assets/images/mini-nav.png"/>
          </Link>
          
          <Link to="/panels/jay-strike/">
            <img src="https://dev.digitalgizmo.com/mural-assets/images/mini-nav.png"/>
          </Link>
                    
          <Link to="/panels/labor-future/">
            <img src="https://dev.digitalgizmo.com/mural-assets/images/mini-nav.png"/>
          </Link>
          
        </div> {/* panel-nav */}
        
      </header>

      <Outlet 
        context={{ panelList: data.allPanels.edges }} 
      />

    </div>

  );
}

export default PanelParent;
