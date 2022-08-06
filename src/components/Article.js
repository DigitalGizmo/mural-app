import React from 'react';

const Article = ({chosenPanel, contentIndex}) => {
  const articleInfo =  chosenPanel.node.articleSet.edges[contentIndex].node;
  const narrative = () => {
    return { __html:  articleInfo.narrative }
  }
  const foreInfo =  chosenPanel.node.articleSet.edges[1].node;
  
  return (

    <div className="current-panel-article">

      <nav className="tabs">
        <ul>
          <li>
            <a href="child-labor-article.html">Children in the Work Force</a>
          </li>
          <li><a href="/panels/child-labor/fore.html">Children in Maine&rsquo;s Sardine Industry</a>
          </li>
        </ul>
      </nav>

      <article className="article-body">
        <h2>{ articleInfo.title }</h2>
        <div dangerouslySetInnerHTML={narrative()} />
      </article>

      <div className="panel-image">

        <img src="https://msm-mural.digitalgizmo.com/static/panels/articlepics/p2-intro.jpg"/>
        <p className="prompt"><strong><em>Some of the young cartoners, including five-year-old Preston.</em></strong> Photograph by Lewis Hine, Eastport, Maine, August 1911. Courtesy of the Library of Congress.</p>

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