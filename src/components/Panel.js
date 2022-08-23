import React, { useState } from 'react'; // , { useState, useEffect }
import { useOutletContext, Link } from 'react-router-dom'; // Link, useParams,
import Detail from './Detail';
import Article from './Article';
import Pop from './pops/Pop';
import {motion, AnimatePresence } from 'framer-motion'; // /dist/framer-motion

const Panel = (  ) => {
  // let params = useParams();
  const { chosenPanel, contentIndex, onChooseContent, 
    nextPanelSlug, prevPanelSlug} = useOutletContext();
  // , openPop
  // contentIndex, onChooseContent , initialContentIndex
  const [direction, setDirection] = useState(0);

  const [showPop, setShowPop] = useState(false);
  const [popData, setPopData] = useState();

  const goForward = () => {
    console.log('going forward')
    setDirection(0);
  }

  const goBackward = () => {
    console.log('going backward')
    setDirection(1);
  }


  function openPop (popParams) { // panelNum, learnmoreNode
    // setCurrIndex(index);
    // console.log('popParams.learnmoreNode.title: ' + popParams.learnmoreNode.title);
    console.log('got to openPop');
    setPopData(popParams)
    console.log('popData.panelNum: ' + popParams.panelNum);
    // console.log('popParams.learnmoreNode.title: ' + popParams.learnmoreNode.title);
    setShowPop(true);
  }

  // Prevent click on (non-link) FullEntry from closing window
  function closePop (event) {
    // console.log(event.target.className)
    event.preventDefault()
    event.stopPropagation()
    // Close if click was on lightbox (background) or close
    if (event.target.id === 'slimpop-overlay' ||
    event.target.id === 'close-link') {
      setShowPop(false);
    }
  }

  const variants = {
    initial: {
      // At start, direction 0, new image enters from right
      x: direction === 0 ? '100%' : '-100%',
      opacity: 0.2,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {  duration: 1.5 },  
    },
    exit:{
      // With direction 0 exit left
      x: direction === 0 ? '-100%' : '100%',
      transition: { duration: 1.4 },
      opacity: 0.2,
    }
  };

  return (
    <AnimatePresence initial={false}>

      <motion.div 
        className="content-area"
        key={chosenPanel.node.slug}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"      
      >

        <div className="prev-panel">
          {prevPanelSlug &&
            <img src={`https://dev.digitalgizmo.com/mural-assets/panels/panelpics/${chosenPanel.node.slug}-prev.jpg`} 
            alt={`Previous panel is ${prevPanelSlug}`} />
          }
          {prevPanelSlug &&
            <Link to={`/panels/${prevPanelSlug}`} 
              onClick={goBackward}
              >
              <img src="https://dev.digitalgizmo.com/mural-assets/panels/panelpics/arrow-prev.png" 
                alt="prev arrow" className="arrow"/>
            </Link>
          }

        </div>
        
        { contentIndex === 2 &&
          <Detail
            chosenPanel = { chosenPanel }
            onChooseContent = { onChooseContent }
            openPop = {openPop}
          />
        }
        { (contentIndex === 0 || contentIndex === 1) &&
          <Article
            chosenPanel = { chosenPanel }
            contentIndex = { contentIndex }
            onChooseContent = { onChooseContent }
            openPop = {openPop}
          />
        }

        <div className="next-panel">
          {nextPanelSlug &&
            <img src={`https://dev.digitalgizmo.com/mural-assets/panels/panelpics/${chosenPanel.node.slug}-next.jpg`} 
              alt={`${nextPanelSlug} next`} />        
          }
          {nextPanelSlug &&
            <Link to={`/panels/${nextPanelSlug}`} 
              onClick={goForward}
            >
              <img src="https://dev.digitalgizmo.com/mural-assets/panels/panelpics/arrow-next.png" 
                alt="next arrow" className="arrow"/>
              debug: {direction}
            </Link>
          }
        </div>

        { showPop &&
          <Pop
            closePop = {closePop}
            popData = {popData} 
          />
        }

      </motion.div>  
    </AnimatePresence>

  )
}

export default Panel;