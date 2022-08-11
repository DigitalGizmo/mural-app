import React from 'react';

const Pop = ({closePop, popData}) => {

  return (
    <div id="slimpop-overlay" onClick={closePop}> {/* className="lightbox"  onClick={closeFullEntry} */}
      

      <div id="slimpop-container">

        <div className="slimpop-wrapper">

          <p className="pop-close">
            <a id="close-link" href="/" onClick={closePop}>
              Close
            </a>
          </p>
            
          <h4 className="subhead">{ popData[1].learnmoreType }</h4>
          <h1>{ popData[1].title }</h1>

          <div className="pop-img">
            <img src="https://dev.digitalgizmo.com/mural-assets/pops/hotspot/p2-newsboys.jpg"/>
            {/* <img src="https://dev.digitalgizmo.com/mural-assets/pops/learnmore/fullpics/' %}p{{ slide.learnmore.article.panel.ordinal }}-{{ slide.learnmore.article.article_type }}-{{ slide.learnmore.learnmore_type }}-{{ slide.slide_num }}.jpg"/> */}
            {/* <img src={`https://msm-mural.digitalgizmo.com/static/pops/learnmore/thumbpics/p${panelNum}-${articleInfo.articleType}-${learnmore.node.learnmoreType}.jpg`}/> */}
            
            <p><strong><em>Biddeford Journal</em> Staff and Newsboys,</strong> Biddeford, Maine, June 30, 1912. Courtesy of the McArthur Public Library.</p>
          </div>

          <p>According to the U.S. Department of Labor, in 1928 the average age of a newsboy was twelve. In Portland, once a boy was ten, he could work without parental permission. While the youngest employed children did not work long hours, they were less likely to attend school as regularly as their non-laboring peers. The greatest concern among reformers in cities was the boys' interaction with dangerous people in the street who might abuse them or corrupt them.</p>

        </div>{/* slimpop-wrapper  */} 

      </div>{/* slimpop-container  */} 

    </div> 
    

  )
}

export default Pop