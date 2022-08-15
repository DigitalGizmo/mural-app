import React, { useState } from 'react';

const Slide = ({popData}) => {
  const [slideIndex, setSlideIndex] = useState(0);
  
  const nextSlide = (event) => {
    event.preventDefault();
    setSlideIndex(slideIndex + 1);
  }

  const prevSlide = () => {
    setSlideIndex(slideIndex - 1);
  }

  return (
    <div>
      <div className="pop-img">
        {/* <img src="https://dev.digitalgizmo.com/mural-assets/pops/learnmore/fullpics/' %}p{{ slide.learnmore.article.panel.ordinal }}-{{ slide.learnmore.article.article_type }}-{{ slide.learnmore.learnmore_type }}-{{ slide.slide_num }}.jpg"/> */}
        <img src={`https://dev.digitalgizmo.com/mural-assets/pops/learnmore/fullpics/p${popData.panelNum}-${popData.articleType}-${popData.learnmoreNode.learnmoreType}-${slideIndex+1}.jpg`}
        alt={popData.learnmoreNode.title} />
    
        {/* title is included in the caption */}

        <div dangerouslySetInnerHTML={{ __html: popData.learnmoreNode.slideSet.edges[slideIndex].node.caption}}/>
      </div>
    
      <h4 dangerouslySetInnerHTML={{ __html: popData.learnmoreNode.slideSet.edges[slideIndex].node.title}}
      />    
      <div dangerouslySetInnerHTML={{ __html: popData.learnmoreNode.slideSet.edges[slideIndex].node.narrative}}/>

      <nav className="slide-nav">
        <ul>
          <li>
            { slideIndex > 0 
              ? <a href="/" onClick={ prevSlide }>&larr; Previous</a> 
              : <span> &larr; Previous</span>
            }
            {" "}|{" "}
            { slideIndex < (popData.learnmoreNode.slideSet.edges.length -1)
              ? <a href="/" onClick={ nextSlide }>Next &rarr;</a>
              : <span>Next &rarr;</span>
            }
          </li>
        </ul>
      </nav>


    </div>
  )

}

export default Slide