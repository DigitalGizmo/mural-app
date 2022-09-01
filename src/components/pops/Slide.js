import React, { useState, useEffect } from 'react';
import {motion, AnimatePresence } from 'framer-motion';

const Slide = ({popData}) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [currSlideIndex, setCurrSlideIndex] = useState(0);
  const [direction, setDirection] = useState(1); 
  
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

  const onSlidePan = (event, info) => {
    console.log('info.delta.x: ' + info.delta.x);
    // console.log('event.target: ' + event.target.className);
    // if (event.target.className === 'pop-img') {
      info.delta.x < 0
      ? nextSlide()
      : prevSlide()
    // }
    // info.delta.x < 0
    // ? console.log('next: ')
    // : console.log('prev: ')
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
        initial={{ x: direction === 1 ? '100%' : '-100%'}}
        animate={{ x: 0, opacity: 1, transition: {  duration: 1 } }}
        exit={{x: direction === 1 ? '-100%' : '100%', 
          transition: {  duration: 1 }
        }}
        // exit={{opacity: 0.2, transition: {duration: 0.5}}}
        // onPan={(e, pointInfo) => { console.log('got pan') }}
        onPanStart={onSlidePan}
        // onPanStart={e => { onSlidePan();}} // e.stopProagation(); 
        // onClick={e => { e.preventDefault(); onChooseContent(0);}}
      >
        <div className="pop-img">

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

          <motion.img 
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