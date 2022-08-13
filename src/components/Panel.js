import React, { useState } from 'react'; // , { useState, useEffect }
import {  useParams, useOutletContext } from 'react-router-dom'; // Link,
import Detail from './Detail';
import Article from './Article';
import Pop from './pops/Pop';

const Panel = (  ) => {
  let params = useParams();
  const { chosenPanel, contentIndex, onChooseContent} = useOutletContext();
  // , openPop
  // contentIndex, onChooseContent , initialContentIndex

  const [showPop, setShowPop] = useState(false);
  const [popData, setPopData] = useState();

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

  // const [contentIndex, setContentIndex] = useState(2);
  // const onChooseContent = (contentIndex) => {
  //   // event.preventDefault();
  //   setContentIndex(contentIndex);
  // }

  return (
      <div className="content-area">

        <div className="prev-panel">
          <img src="https://dev.digitalgizmo.com/mural-assets/panels/panelpics/child-labor-prev.jpg" />
          <a href="/panels/apprenticeship/">
            <img src="https://dev.digitalgizmo.com/mural-assets/panels/panelpics/arrow-prev.png" 
            className="arrow"/>
          </a>
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
          <img src="https://dev.digitalgizmo.com/mural-assets/panels/panelpics/child-labor-next.jpg" />
          <a href="/panels/women-textiles/">
            <img src="https://dev.digitalgizmo.com/mural-assets/panels/panelpics/arrow-next.png" 
            className="arrow"/>
          </a>
        </div>

        { showPop &&
          <Pop
            closePop = {closePop}
            popData = {popData} 
          />
        }

      </div> // content-area 
  )
}

export default Panel;