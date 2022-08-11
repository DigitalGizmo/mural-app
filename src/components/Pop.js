import React from 'react';
import Slide from './Slide';

const Pop = ({closePop, popData}) => {

  return (
    <div id="slimpop-overlay" onClick={closePop}> {/* className="lightbox"  onClick={closeFullEntry} */}
      

      <div id="slimpop-container">

        <div className="slimpop-wrapper">

          <p className="pop-close">
            <a id="close-link" href="/" onClick={closePop}>
              Close
            </a>
          </p>
            
          <h4 className="subhead">{ popData.learnmoreNode.learnmoreType }</h4>
          <h1>{ popData.learnmoreNode.title }</h1>

          <Slide
            popData = {popData}
          />

  

        </div>{/* slimpop-wrapper  */} 

      </div>{/* slimpop-container  */} 

    </div> 
    

  )
}

export default Pop