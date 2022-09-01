import React, { useState, useCallback } from 'react'; // , { useState, useEffect }
import { useOutletContext, Link, useNavigate } from 'react-router-dom'; // Link, useParams,
import Detail from './Detail';
import Article from './Article';
import Pop from './pops/Pop';
import {motion, AnimatePresence } from 'framer-motion'; // /dist/framer-motion

const Panel = () => {
  // let params = useParams();
  const { chosenPanel, contentIndex, onChooseContent, 
    nextPanelSlug, prevPanelSlug, linkDirection, setLinkDirection,
  } = useOutletContext();

  const [showPop, setShowPop] = useState(false);
  const [popData, setPopData] = useState();
  // const [exitComparator, setExitComparator] = useState(1);

  const navigate = useNavigate();

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
  const nextPanel = useCallback(() => navigate('/panels/jay-strike', {replace: true}), [navigate]);

  const onPanelPan = (event, info) => {
    // console.log('info.delta.x: ' + info.delta.x);
    if (info.delta.x < 0) {
      setLinkDirection(1);
      nextPanel();
    } else {
      console.log('prev: ')
    }
    // : prevPanel()
    // info.delta.x < 0
    // ? console.log('next: ')
    // : console.log('prev: ')
  }
 

  return (
    <AnimatePresence initial={false}> 
        <motion.div 
          className="content-area"
          key={chosenPanel.node.slug}
          onPanStart={onPanelPan}
          initial={{ x: linkDirection === 1 ? '100%' : '-100%'}}
          animate={{ x: 0, opacity: 1, transition: {  duration: 0.7 } }}
          // exit={{x: linkDirection === 1 ? '-100%' : '100%', 
          //   transition: {  duration: 1 }
          // }}
          exit={{opacity: 0.2, transition: {duration: 0.5}}}
        >
      
        <div className="prev-panel">
          {prevPanelSlug &&
            <img src={`https://dev.digitalgizmo.com/mural-assets/panels/panelpics/${chosenPanel.node.slug}-prev.jpg`} 
            alt={`Previous panel is ${prevPanelSlug}`} />
          }
          {prevPanelSlug &&
            <Link 
              onClick={e => { setLinkDirection(0);}}
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
              onClick={e => { setLinkDirection(1);}}
              to={`/panels/${nextPanelSlug}`} >
              <img src="https://dev.digitalgizmo.com/mural-assets/panels/panelpics/arrow-next.png" 
                alt="next arrow" className="arrow"/>
                {/* debug, exitComparator: {exitComparator.toString() } */}
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