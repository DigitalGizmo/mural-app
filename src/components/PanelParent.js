import React, { useState, useEffect } from 'react'; // , { useState, useEffect }
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

  const [contentIndex, setContentIndex] = useState(2);
  const onChooseContent = (contentIndex) => {
    // event.preventDefault();
    setContentIndex(contentIndex);
  }

  // Need to set back to Detail on new page
  useEffect(() => {
    setContentIndex(2);
  }, [params.panelSlug])

  const GET_PANELS = gql`
    query {
      allPanels {
        edges {
          node {
            slug,
            panelTitle,
            panelBlurb,
            ordinal,
            articleSet {
              edges {
                node {
                  title,
                  articleType,
                  caption,
                  narrative,
                  learnmoreSet {
                    edges {
                      node {
                        title,
                        learnmoreType
                      }
                    }
                  }
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


  return (
    <div className="wrapper"> 
      {/* currently wrapper here and also in Panel.js */}

      <div className="msm-link">MSM logo</div>

      <div className="site-title">
        <Link to='/'>
          <h3>Maine Labor Mural</h3>
        </Link>
      </div>

      <div className="panel-nav">
        
        <Link to="/panels/apprenticeship/">
          <img src="https://dev.digitalgizmo.com/mural-assets/images/mini-nav.png"/>
        </Link>
                
        <Link to="/panels/child-labor/">
          <img src="https://dev.digitalgizmo.com/mural-assets/images/mini-nav.png"/>
        </Link>
        
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

        {/* <img src="https://dev.digitalgizmo.com/mural-assets/images/mini-nav-selected.png"/> */}

      </div> {/* panel-nav */}
        
      <div className="panel-title">
          <h1>
            <a 
              href="/"
              onClick={e => { e.preventDefault(); onChooseContent(2);}}
            >
            { chosenPanel.node.panelTitle }
          </a>
          </h1>
      </div>

      <Outlet 
        context={{ 
          chosenPanel: chosenPanel,
          contentIndex: contentIndex, 
          onChooseContent: onChooseContent  }} 
      />

    </div>
  //  initialContentIndex: 2,
  );
}

export default PanelParent;
