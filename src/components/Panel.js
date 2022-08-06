import React from 'react'; // , { useState, useEffect }
import {  useParams, useOutletContext } from 'react-router-dom'; // Link,
import Detail from './Detail';
// import {
//   useQuery,
//   gql,
// } from "@apollo/client"; 


const Panel = (  ) => {
  let params = useParams();
  const { chosenPanel } = useOutletContext();

  return (
      <div className="content-area">

        <div className="prev-panel">
          <img src="https://dev.digitalgizmo.com/mural-assets/panels/panelpics/child-labor-prev.jpg" />
          <a href="/panels/apprenticeship/">
            <img src="https://dev.digitalgizmo.com/mural-assets/panels/panelpics/arrow-prev.png" 
            className="arrow"/>
          </a>
        </div>
        
        <Detail
          chosenPanel = { chosenPanel }
        />

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