import React, { useState } from 'react'; // , { useState, useEffect }
import {  useParams, useOutletContext } from 'react-router-dom'; // Link,
import Detail from './Detail';
import Article from './Article';

const Panel = (  ) => {
  let params = useParams();
  const { chosenPanel, contentIndex, onChooseContent} = useOutletContext();
  // contentIndex, onChooseContent , initialContentIndex

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
            />
          }
        { (contentIndex === 0 || contentIndex === 1) &&
          <Article
            chosenPanel = { chosenPanel }
            contentIndex = { contentIndex }
            onChooseContent = { onChooseContent }
          />
        }

        <div className="next-panel">
          <img src="https://dev.digitalgizmo.com/mural-assets/panels/panelpics/child-labor-next.jpg" />
          <a href="/panels/women-textiles/">
            <img src="https://dev.digitalgizmo.com/mural-assets/panels/panelpics/arrow-next.png" 
            className="arrow"/>
          </a>
        </div>

      </div> // content-area 
  )
}

export default Panel;