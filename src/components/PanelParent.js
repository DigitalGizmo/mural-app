import React, { useState, useEffect } from 'react';
// , { useState, useEffect , useContext}
import { Link, Outlet, useParams, } from 'react-router-dom'; // , Outlet
import {
  useQuery,
  gql,
} from "@apollo/client"; 
// import { SetDirectionGlobalContext, GetDirectionGlobalContext } from '../context/GlobalState';
import {motion, AnimatePresence } from 'framer-motion'; // /dist/framer-motion
import '../index.css';

function PanelParent() {
  let params = useParams();
  // console.log(' params.panelSlug' + params.panelSlug)

  const [contentIndex, setContentIndex] = useState(2);
  // const [tempSlug, setTempSlug] = useState('child-labor');
  // Hack to get panel index (hence num) without live data
  const slugs = ['apprenticeship', 'child-labor', 'women-textiles', 'secret-ballot', 
  'labor-day', 'logging', 'shoe-strike', 'reform', 'Rosie', 'jay-strike', 'labor-future'];

  const [navLinkIndexes, setNavLinkIndexes] = useState(
    [1,1,1,1,1,1,1,1,1,1,1]
  )

  const [isNewDirection, setIsNewDirection] = useState(false);
  const [pastDirection, setPastDirection] = useState(1);

  const checkDirection = (chosenDirection) => {
    chosenDirection === pastDirection
    ? setIsNewDirection(false)
    : setIsNewDirection(true)

    setPastDirection(chosenDirection);
  }

  const onChooseContent = (contentIndex) => {
    // event.preventDefault();
    setContentIndex(contentIndex);
  }

  const [linkDirection, setLinkDirection] = useState(1);

  const chooseDirection = (directionIndex) => {
    checkDirection(directionIndex);
    setLinkDirection(directionIndex)
  }

  const calcLinkIndexes = (currPanelIndex) => {
    console.log('were on panel index: ' + currPanelIndex);
    let newLinkIndexes = [];
    for (let i = 0; i < 11; i++){
      i < currPanelIndex
      ? newLinkIndexes.push(0)
      : newLinkIndexes.push(1);
    }
    setNavLinkIndexes(newLinkIndexes);
  }

  // Need to set back to Detail on new page
  // And we should use this opportunity to set direction
  // in mini nav links based on current panel
  useEffect(() => {
    setContentIndex(2);
    calcLinkIndexes(slugs.indexOf(params.panelSlug));

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
                src={`https://dev.digitalgizmo.com/mural-assets/images/mini-nav-${panel.node.ordinal}.jpg`}
                alt={`${panel.node.panelTitle} selected`}
                className="panel-nav-selected"
                />
              :
              <Link  key={panel.node.slug}
                onClick={e => { chooseDirection(navLinkIndexes[index]);}}
                to={`/panels/${panel.node.slug}`} >
                <img src={`https://dev.digitalgizmo.com/mural-assets/images/mini-nav-${panel.node.ordinal}.jpg`}
                alt={panel.node.panelTitle}/>
              </Link>
            )
          } else {
            return " ";
          }
        })}
      </div> {/* panel-nav */}

      <AnimatePresence initial={false}>
        <motion.div 
          className="panel-title"
          key={chosenPanel.node.slug}
          // variants={variants}
          initial={{ opacity: 0.2}}
          animate={{ opacity: 1}}
          exit={{ opacity: 0.2}}
          transition={{duration: 1}}
        >
            <h1>
              {contentIndex === 2
                ? <span>{ chosenPanel.node.panelTitle } isNewDir? { isNewDirection.toString()} </span>
                // { isNewDirection.toString()}
                : <a href="/"
                      onClick={e => { e.preventDefault(); onChooseContent(2);}}>
                    { chosenPanel.node.panelTitle }
                  </a>
              }
            </h1>
        </motion.div>
      </AnimatePresence>

      <Outlet 
        context={{ 
          chosenPanel: chosenPanel,
          nextPanelSlug: nextPanelSlug,
          prevPanelSlug: prevPanelSlug,
          contentIndex: contentIndex, 
          chooseDirection: chooseDirection,
          linkDirection: linkDirection,
          // openPop: openPop,
          onChooseContent: onChooseContent  }} 
      />
    </div>
  );
}

export default PanelParent;
