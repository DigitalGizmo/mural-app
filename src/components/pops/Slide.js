import React, { useState, useEffect } from 'react';
import {motion, AnimatePresence } from 'framer-motion';
import { useDrag } from '@use-gesture/react';

const Slide = ({popData}) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [currSlideIndex, setCurrSlideIndex] = useState(0);
  const [direction, setDirection] = useState(1); 
  // let panStart = 0;
  
  const bindSlide = useDrag(({ down, event, movement: [mx,my]}) => { // offset: [ox,oy]
    if (!down) {
      console.log('movement mx, y: ' + mx +', ' + my + ' down: ' + down.toString());
      event.stopPropagation()
      // if (Math.abs(mx) > 10) {
      if (Math.abs(mx) > Math.abs(my)) {
        mx < 0
        ? nextSlide()
        : prevSlide()
      }
    }
  })

  const nextSlide = (event) => {
    // event.preventDefault();
    if (slideIndex < (popData.learnmoreNode.slideSet.edges.length -1)){
      setDirection(1);
      setCurrSlideIndex(slideIndex + 1);
    }
  }

  const prevSlide = () => {
    if (slideIndex > 0) {
      setDirection(0);
      setCurrSlideIndex(slideIndex - 1);
    }
  }

  // Have to useEffect because of closure on setState
  // https://stackoverflow.com/questions/54069253/usestate-set-method-not-reflecting-change-immediately
  useEffect(() => {
    // console.log('direction: ' + direction);
    setSlideIndex(currSlideIndex);
  }, [currSlideIndex, direction])

  return (
    <AnimatePresence initial={false}>
      <motion.div
        className="slide-container"
        key={slideIndex}     
        {...bindSlide()}          
      >
        <motion.div 
          className="pop-img"
          initial={{ x: direction === 1 ? '100%' : '-100%'}}
          animate={{ x: 0, opacity: 1, transition: {  duration: 1 } }}
          exit={{x: direction === 1 ? '-100%' : '100%', 
            transition: {  duration: 1 }
          }}
          // exit={{opacity: 0.2, transition: {duration: 0.5}}}
        >

          <motion.nav 
            className="slide-nav prev-slide"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1, transition: {  duration: 0.1 } }}
            exit={{opacity: 0.1, transition: {  duration: 0.1 }
            }}            
          >
            { slideIndex > 0 
              ? <a href="/" onClick={ prevSlide }>
                  <img src="https://dev.digitalgizmo.com/mural-assets/panels/panelpics/arrow-prev.png" 
                  alt="previous slide" className="slide-arrow"/>
                </a> 
              : <span className="no-more"><img src="https://dev.digitalgizmo.com/mural-assets/panels/panelpics/arrow-gray-prev.png" 
                    alt="no more slides" className="slide-arrow"/></span>
            }
          </motion.nav>

          <img 
            className="slide-image"
            // onPan={(e, pointInfo) => { console.log('got img pan') }}
            // onPan={onSlidePan}
            alt={popData.learnmoreNode.title} 
            src={`https://dev.digitalgizmo.com/mural-assets/pops/learnmore/fullpics/p${popData.panelNum}-${popData.articleType}-${popData.learnmoreNode.learnmoreType}-${slideIndex+1}.jpg`}
          />

          <motion.nav 
            className="slide-nav next-slide"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1, transition: {  duration: 0.1 } }}
            exit={{opacity: 0.1, transition: {  duration: 0.1 }
            }}
          >
            { slideIndex < (popData.learnmoreNode.slideSet.edges.length -1)
              ? <a href="/" onClick={ nextSlide }>
                  <img src="https://dev.digitalgizmo.com/mural-assets/panels/panelpics/arrow-next.png" 
                    alt="next slide" className="slide-arrow"/>
                </a>
              : <span className="no-more"><img src="https://dev.digitalgizmo.com/mural-assets/panels/panelpics/arrow-gray-next.png" 
                    alt="no more slides" className="slide-arrow"/></span>
            }
          </motion.nav>

          {/* title is included in the caption */}

          <div dangerouslySetInnerHTML={{ __html: 
            popData.learnmoreNode.slideSet.edges[slideIndex].node.caption}}/>
        </motion.div>
      
        <motion.div 
          className="slide-caption"
          key={popData.learnmoreNode.slideSet.edges[slideIndex].node.title}
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          exit={{ opacity: 0}}
          transition={{duration: 0.7}}
        >  
          <h4 dangerouslySetInnerHTML={{ __html: 
            popData.learnmoreNode.slideSet.edges[slideIndex].node.title}}
          />    
          <div dangerouslySetInnerHTML={{ __html: 
            popData.learnmoreNode.slideSet.edges[slideIndex].node.narrative}}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )

}

export default Slide