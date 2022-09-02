import React, { useState, useCallback, useEffect } from 'react'; // , { useState }
import { useOutletContext, Link, useNavigate } from 'react-router-dom'; // Link, useParams,
import Detail from './Detail';
import Article from './Article';
import Pop from './pops/Pop';
import {motion, AnimatePresence } from 'framer-motion'; // /dist/framer-motion

const Panel = () => {
  // let params = useParams();
  const { chosenPanel, contentIndex, onChooseContent, nextPanelSlug, 
    prevPanelSlug, linkDirection, setLinkDirection, getSlugFromIndex,
  } = useOutletContext();
  // , currPanelIndex

  const [showPop, setShowPop] = useState(false);
  const [popData, setPopData] = useState();
  // const [exitComparator, setExitComparator] = useState(1);
  // const [panelSlug, setPanelSlug] = useState('labor-day');
  // const [panelToGoTo, setPanelToGoTo] = useState('jay-strike');

  const navigate = useNavigate();

  // Have to useEffect because of closure on setState
  // https://stackoverflow.com/questions/54069253/usestate-set-method-not-reflecting-change-immediately
  // useEffect(() => {
  //   // console.log('direction: ' + direction);
  //   setPanelSlug(panelToGoTo);
  // }, [panelToGoTo])
  
  
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
  const goNextPanel = useCallback(() => 
    navigate(`/panels/${getSlugFromIndex(chosenPanel.node.ordinal)}`, 
    {replace: true}), [navigate]);

  const goPrevPanel = useCallback(() => 
    navigate(`/panels/${getSlugFromIndex(chosenPanel.node.ordinal - 2)}`, 
    {replace: true}), [navigate]);

  const onPanelPan = (event, info) => {
    // console.log('info.delta.x: ' + info.delta.x);
    console.log('event.target: ' + event.target.className);
    // console.log('closest content-area: ' + event.target.closest(".content-area").className);
    // console.log('closest slide-container: ' + event.target.closest(".slide-container").className);
    // document.querySelector("p").closest(".near.ancestor")


    // if (event.target.closest(".slide-container")) {
    if (event.target.closest(".slimpop-wrapper") || showPop) {
      // Don't slide panel when target was slide-show
      console.log('pan on slide or while pop open, ignore');
    } else {
      // if (info.delta.x > info.delta.y) { // pan only if move was horizontal
        if (info.delta.x < 0) {
          if (chosenPanel.node.ordinal < 11) {
            setLinkDirection(1);
            // setPanelToGoTo('logging');
            goNextPanel();
          }
        } else {
          if (chosenPanel.node.ordinal > 1){
            setLinkDirection(0);
            // console.log('prev: ')
            goPrevPanel();
          }
        }
      // }
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
                {/* debug,
                chosenPanel - 1: {chosenPanel.node.ordinal - 1} */}
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