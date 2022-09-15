import React, { useState, useCallback, useEffect } from 'react'; // , { useState }
import { useOutletContext, Link, useNavigate } from 'react-router-dom'; // Link, useParams,
import Detail from './Detail';
import Article from './Article';
import {motion, AnimatePresence } from 'framer-motion'; // /dist/framer-motion
import { useDrag } from '@use-gesture/react';

const Panel = () => {
  // let params = useParams();
  const { chosenPanel, contentIndex, onChooseContent, nextPanelSlug, 
    prevPanelSlug, linkDirection, setLinkDirection, getSlugFromIndex,
    setPopData, setShowPop
  } = useOutletContext();
  // , currPanelIndex, showPop, 
  // const [panelSlug, setPanelSlug] = useState('labor-day');
  // const [panelToGoTo, setPanelToGoTo] = useState('jay-strike');

  const navigate = useNavigate();

  // Have to useEffect because of closure on setState
  // https://stackoverflow.com/questions/54069253/usestate-set-method-not-reflecting-change-immediately
  // useEffect(() => {
  //   // console.log('direction: ' + direction);
  //   setPanelSlug(panelToGoTo);
  // }, [panelToGoTo])

  const bind = useDrag(({ down, target, movement: [mx,my],
    cancel, elapsedTime}) => { 

      // cancel, elapseTime

      console.log('panel mx, my: ' + mx +', ' + my + ' down: ' + down.toString());

    // if (!down) {
    // if (elapsedTime > 30) {
    if (Math.abs(mx) < 20) {
      // console.log('panel mx, my: ' + mx +', ' + my + ' down: ' + down.toString());
      // console.log('target: ' + target.tagName);
      // console.log('time: ' + elapsedTime);

      // console.log('panel click on tagName: ' + target.tagName +
      // ' or class: ' + target.parentNode.className);
      // ' or class: ' + target.closest(".p÷op-item").className);

      // if (target.closest(".slimpop-wrapper") || showPop) {
      if (target.tagName === "A" || 
        target.parentNode.className === "pop_item") {
        // Don't slide panel when target was slide-show
        console.log('got to ignore ');
      } else {
        if (Math.abs(mx) > Math.abs(my)) { // pan only if move was horizontal
          if (mx < -10) {
            if (chosenPanel.node.ordinal < 11) {
              setLinkDirection(1);
              // console.log('dir 1, mx: ' + mx);
              goNextPanel();
              cancel();
              return;
            }
          } else if (mx > 10) {
            if (chosenPanel.node.ordinal > 1){
              setLinkDirection(0);
              // console.log('dir 0, mx: ' + mx)
              goPrevPanel();
              cancel();
              return;
            }
          }
        }
      }
  
    }
  })
  
  function openPop (popParams) { // panelNum, learnmoreNode
    // setCurrIndex(index);
    // console.log('popParams.learnmoreNode.title: ' + popParams.learnmoreNode.title);
    console.log('got to openPop');
    setPopData(popParams)
    console.log('popData.panelNum: ' + popParams.panelNum);
    // console.log('popParams.learnmoreNode.title: ' + popParams.learnmoreNode.title);
    setShowPop(true);
  }

  const goNextPanel = useCallback(() => 
    navigate(`/panels/${getSlugFromIndex(chosenPanel.node.ordinal)}`, 
    {replace: true}), [navigate]);

  const goPrevPanel = useCallback(() => 
    navigate(`/panels/${getSlugFromIndex(chosenPanel.node.ordinal - 2)}`, 
    {replace: true}), [navigate]);
 
  return (
    <AnimatePresence initial={false}> 
        <motion.div 
          className="content-area"
          key={chosenPanel.node.slug}
          initial={{ x: linkDirection === 1 ? '100%' : '-100%'}}
          animate={{ x: 0, opacity: 1, transition: {  duration: 1.7 } }}
          // exit={{x: linkDirection === 1 ? '-100%' : '100%', 
          //   transition: {  duration: 1 }
          // }}
          exit={{opacity: 0.2, transition: {duration: 1.5}}}
          {...bind()}
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
        
      </motion.div> 
    </AnimatePresence>
  )
}

export default Panel;