import React from 'react';

const Detail = ({chosenPanel, onChooseContent, openPop}) => {
  const blurb = () => {
    return { __html:  chosenPanel.node.panelBlurb }
  }
  const introInfo =  chosenPanel.node.articleSet.edges[0].node;
  const foreInfo =  chosenPanel.node.articleSet.edges[1].node;
  const hotspots =  chosenPanel.node.hotspotSet.edges;
  const panelNum = chosenPanel.node.ordinal;

  return (
    <div className="current-panel">
    <article>
    <h3>About This Panel</h3>
      <div dangerouslySetInnerHTML={blurb()} />
      {/* <p className="more-link"><a href="/panels/child-labor/intro/">learn more...</a></p> */}
    </article>

    <div className="panel-image">

      <svg  xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 800 1800">
        <image id="document" x="0" y="0" 
        href={`https://dev.digitalgizmo.com/mural-assets/panels/panelpics/${chosenPanel.node.slug}.jpg`} 
        width="800" height="1800" />
        
        {hotspots.map(hotspot => {
          return (
            <a className="pop_item" key={hotspot.node.slug}   
              href='/' onClick={e => { e.preventDefault(); 
              openPop({popType: 'hotspot', panelNum: panelNum,
                hotspotNode: hotspot.node})}}>
              <circle className="hotspot" 
                cx={hotspot.node.xPosition}
                cy={hotspot.node.yPosition} 
                r="72"
              />
            </a>
          )
        })}

        {/* <a className="pop_item"      
          href='/' onClick={e => { e.preventDefault(); 
          openPop({popType: 'hotspot', panelNum: panelNum,
            slug: 'lunch-bucket'})}}>
          <circle className="hotspot" cx="417"
          cy="1207" r="72"/>
        </a> */}
        
        
      </svg>
    </div>{/* /panel-image */}

    <nav className="tabs">
      <h3>Learn More</h3>
      <ul>
        <li>
          <a 
            href="/"
            onClick={e => { e.preventDefault(); onChooseContent(0);}}
          >
            { introInfo.title } 
          </a>
        </li>
        <li>
          <a 
            href="/"
            onClick={e => { e.preventDefault(); onChooseContent(1);}}
          >
            { foreInfo.title } 
          </a>
        </li>
      </ul>
    </nav>

  </div> // current-panel    
  )
}

export default Detail;