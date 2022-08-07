import React from 'react';

const Article = ({chosenPanel, contentIndex, onChooseContent}) => {

  const articleInfo =  chosenPanel.node.articleSet.edges[contentIndex].node;
  const introTitle =  chosenPanel.node.articleSet.edges[0].node.title;
  const foreTitle =  chosenPanel.node.articleSet.edges[1].node.title;
  const panelNum = chosenPanel.node.ordinal;

  const narrative = () => {
    return { __html:  articleInfo.narrative }
  }
  const caption = () => {
    return { __html:  articleInfo.caption }
  }

  return (
    <div className="current-panel-article">
      <nav className="tabs">
        <ul>
          <li>
            <a 
              href="/"
              onClick={e => { e.preventDefault(); onChooseContent(0);}}
            >
              { introTitle } 
            </a>
          </li>
          <li>
            <a 
              href="/"
              onClick={e => { e.preventDefault(); onChooseContent(1);}}
            >
              { foreTitle } 
            </a>
          </li>
        </ul>
      </nav>

      <article className="article-body">
        <h2>{ articleInfo.title }</h2>
        <div dangerouslySetInnerHTML={narrative()} />
      </article>

      <div className="panel-image">

        <img src={`https://msm-mural.digitalgizmo.com/static/panels/articlepics/p${panelNum}-intro.jpg`}/>
        <div 
          dangerouslySetInnerHTML={caption()} 
          className="prompt"/>
          {/* Moved class from <p> to this manditory extra div */}

      </div>{/* /panel-image */}          

      <nav className="learn-more">
        <h3>Learn More</h3>
        <ul>
                  
          <li>
            <a className="pop_item" href="/pops/images/ajax/11/">
              <img src="https://msm-mural.digitalgizmo.com/static/pops/learnmore/thumbpics/p2-intro-images.jpg"/>
              <span>Images:</span>
              Children at Work
            </a> 
          </li>
                  
          <li>
            <a className="pop_item" href="/pops/objects/ajax/10/">
              <img src="https://msm-mural.digitalgizmo.com/static/pops/learnmore/thumbpics/p2-intro-objects.jpg"/>
              <span>Objects:</span>
              Tools Not Toys
            </a> 
          </li>
            
        </ul>
      </nav>

    </div> //current-panel-article

  )
}

export default Article;