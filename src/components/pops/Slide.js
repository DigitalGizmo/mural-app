import React, { useState } from 'react';
import {motion, AnimatePresence } from 'framer-motion';

const Slide = ({popData}) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [direction, setDirection] = useState(1); 
  
  const nextSlide = (event) => {
    event.preventDefault();
    setDirection(1);
    setSlideIndex(slideIndex + 1);
  }

  const prevSlide = () => {
    setDirection(0);
    setSlideIndex(slideIndex - 1);
  }

  return (
    <AnimatePresence initial={false}>
      <motion.div
        className="slide-containerXX"
        key={slideIndex}     
        initial={{ x: direction === 1 ? '100%' : '-100%'}}
        animate={{ x: 0, opacity: 1, transition: {  duration: 1 } }}
        exit={{x: direction === 1 ? '-100%' : '100%', 
          transition: {  duration: 1 }
        }}
        // exit={{opacity: 0.2, transition: {duration: 0.5}}}      
      >
        <div className="pop-img">

          <nav className="slide-nav prev-slide">
            { slideIndex > 0 
              ? <a href="/" onClick={ prevSlide }>
                  <img src="https://dev.digitalgizmo.com/mural-assets/panels/panelpics/arrow-prev.png" 
                  alt="previous slide" className="slide-arrow"/>
                </a> 
              : <span className="no-more"><img src="https://dev.digitalgizmo.com/mural-assets/panels/panelpics/arrow-gray-prev.png" 
                    alt="no more slides" className="slide-arrow"/></span>
            }
          </nav>

          {/* <img src="https://dev.digitalgizmo.com/mural-assets/pops/learnmore/fullpics/' %}p{{ slide.learnmore.article.panel.ordinal }}-{{ slide.learnmore.article.article_type }}-{{ slide.learnmore.learnmore_type }}-{{ slide.slide_num }}.jpg"/> */}
          <img src={`https://dev.digitalgizmo.com/mural-assets/pops/learnmore/fullpics/p${popData.panelNum}-${popData.articleType}-${popData.learnmoreNode.learnmoreType}-${slideIndex+1}.jpg`}
          alt={popData.learnmoreNode.title} />

          <nav className="slide-nav next-slide">
            { slideIndex < (popData.learnmoreNode.slideSet.edges.length -1)
              ? <a href="/" onClick={ nextSlide }>
                  <img src="https://dev.digitalgizmo.com/mural-assets/panels/panelpics/arrow-next.png" 
                    alt="next slide" className="slide-arrow"/>
                </a>
              : <span className="no-more"><img src="https://dev.digitalgizmo.com/mural-assets/panels/panelpics/arrow-gray-next.png" 
                    alt="no more slides" className="slide-arrow"/></span>
            }
          </nav>

          {/* title is included in the caption */}

          <div dangerouslySetInnerHTML={{ __html: popData.learnmoreNode.slideSet.edges[slideIndex].node.caption}}/>
        </div>
      
        <h4 dangerouslySetInnerHTML={{ __html: popData.learnmoreNode.slideSet.edges[slideIndex].node.title}}
        />    
        <div dangerouslySetInnerHTML={{ __html: popData.learnmoreNode.slideSet.edges[slideIndex].node.narrative}}/>

      </motion.div>
    </AnimatePresence>
  )

}

export default Slide