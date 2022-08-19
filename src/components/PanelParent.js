import React, { useState, useEffect } from 'react'; // , { useState, useEffect }
import { Link, Outlet, useParams, } from 'react-router-dom'; // , Outlet
import {
  useQuery,
  gql,
} from "@apollo/client"; 
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
            hotspotSet {
              edges {
                node {
                  slug,
                  title,
                  altTag,
                  caption,
                  narrative,
                  xPosition,
                  yPosition,
                }
              }
            },
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
                        learnmoreType,
                        caption,
                        narrative,
                        slideSet {
                          edges {
                            node {
                              title,
                              caption,
                              narrative,
                            }
                          }
                        },
                        voiceSet {
                          edges {
                            node {
                              title,
                              partNum,
                              narrative,
                            }
                          }
                        }
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

  const nextPanelSlug = chosenPanel.node.ordinal < 11
    ? data.allPanels.edges[chosenPanel.node.ordinal].node.slug
    : null;

  const prevPanelSlug = chosenPanel.node.ordinal > 1 
    ? data.allPanels.edges[chosenPanel.node.ordinal - 2].node.slug
    : null;

  return (
    <div className="wrapper"> 
      {/* currently wrapper here and also in Panel.js */}

      <div className="msm-link">
        <Link to='/'>
          <img src="https://dev.digitalgizmo.com/mural-assets/images/msm-logo.svg" alt="Maine State Museum" className="msm-logo"/>
        </Link>
      </div>

      <div className="site-title">
        <Link to='/'>
          <h3>Maine Labor Mural</h3>
        </Link>
      </div>

      <div className="panel-nav">
        {data.allPanels.edges.map((panel, index) => {
          if (panel.node.ordinal < 50) {
            return ( chosenPanel.node.ordinal === (index + 1)
              ? <img key={panel.node.slug}
                src="https://dev.digitalgizmo.com/mural-assets/images/mini-nav-selected.png"
                alt={`${panel.node.title} selected`}/>
              :
              <Link  key={panel.node.slug}
                to={`/panels/${panel.node.slug}`} >
                <img src="https://dev.digitalgizmo.com/mural-assets/images/mini-nav.png"
                alt={panel.node.title}/>
              </Link>
            )
          } else {
            return " ";
          }
        })}
      </div> {/* panel-nav */}
        
      <div className="panel-title">
          <h1>
            {contentIndex === 2
              ? <span>{ chosenPanel.node.panelTitle }</span>
              : <a href="/"
                    onClick={e => { e.preventDefault(); onChooseContent(2);}}>
                  { chosenPanel.node.panelTitle }
                </a>
            }
          </h1>
      </div>

      <Outlet 
        context={{ 
          chosenPanel: chosenPanel,
          nextPanelSlug: nextPanelSlug,
          prevPanelSlug: prevPanelSlug,
          contentIndex: contentIndex, 
          // openPop: openPop,
          onChooseContent: onChooseContent  }} 
      />


    </div>
  );
}

export default PanelParent;
