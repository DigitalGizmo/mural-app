import React, { useState, useEffect } from 'react'; // , { useState, useEffect }
import { useOutletContext, Link } from 'react-router-dom'; // Link, useParams,
import Detail from './Detail';
import Article from './Article';
import Pop from './pops/Pop';
import {motion, AnimatePresence } from 'framer-motion'; // /dist/framer-motion

const Panel = ({} ) => {
  // let params = useParams();
  const { chosenPanel, contentIndex, onChooseContent, 
    nextPanelSlug, prevPanelSlug, direction,
    linkDirection, chooseDirection} = useOutletContext();
  // , openPop
  // contentIndex, onChooseContent , initialContentIndex
  // const [direction, setDirection] = useState(0);
  const [prevDirection, setPrevDirection] = useState(0);
  const [isSameDirection, setIsSameDirection] = useState(true);
  const [showPop, setShowPop] = useState(false);
  const [popData, setPopData] = useState();

  // const [linkDirection, setLinkDirection] = useState(0);

  console.log('prev direction: ' + prevDirection);
  console.log('incomig direction: ' + direction);

  useEffect(() => {
    // console.log('temp slug: ' + tempSlug);
    // console.log('panel index: ' + slugs.indexOf(tempSlug));
    // setPastPanelIndex(panelIndex);
    // setDirection(slugs.indexOf(tempSlug));
    if (direction === prevDirection) {
      console.log('direction remains the same');
      setIsSameDirection(true);
    } else {
      console.log('direction has changed');
      setIsSameDirection(false);
      // setBackwardVariations();
    }

  }, [direction])

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

  // const variants1 = {
  //   initial: {
  //     x: direction === 0 ? '100%' : '-100%',
  //   },
  //   animate: {
  //     x: 0,
  //     transition: {  duration: 1 },  
  //   },
  //   exit:{
  //     x: direction === 0 ? '-100%' : '100%',
  //     transition: { duration: 0.9 },
  //   }
  // };

  return (
    <AnimatePresence initial={false}>

        <motion.div 
          className="content-area"
          key={chosenPanel.node.slug}
          // variants={variants}
          // initial="initial"
          // animate="animate"
          // exit="exit"      
          initial={{ x: linkDirection === 0 ? '100%' : '-100%'}}
          animate={{ x: 0, transition: {  duration: 1 } }}
          exit={{x: linkDirection === 0 ? '-100%' : '100%', 
            transition: {  duration: 1 }
          }}
        >
      


        <div className="prev-panel">
          {prevPanelSlug &&
            <img src={`https://dev.digitalgizmo.com/mural-assets/panels/panelpics/${chosenPanel.node.slug}-prev.jpg`} 
            alt={`Previous panel is ${prevPanelSlug}`} />
          }
          {prevPanelSlug &&
            <Link 
              onClick={e => { chooseDirection(1);}}
              to={`/panels/${prevPanelSlug}`} >
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
            <Link 
              onClick={e => { chooseDirection(0);}}
              to={`/panels/${nextPanelSlug}`} >
              <img src="https://dev.digitalgizmo.com/mural-assets/panels/panelpics/arrow-next.png" 
                alt="next arrow" className="arrow"/>
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