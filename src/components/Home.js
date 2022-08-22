import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import {homePopData} from './pops/HomePopContent';
import Pop from './pops/Pop';

const Home = () => {
  const [showPop, setShowPop] = useState(false);
  const [popData, setPopData] = useState();

  // Need to refactor this -- forgot about Home pg use when I put it in Panel.js
  function openPop (popParams) { // panelNum, learnmoreNode
    console.log('got to Home openPop');
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

  return (
    <main className="home"> {/* Return has to return one overarching element  */}

    <header>
      <h1>Maine Labor Mural</h1>
      <p>The Maine Labor Mural depicts scenes of the state&rsquo;s labor history in an effort to honor the men and women who built Maine.</p>
      <p className="prompt">Tap/click a panel to learn more</p>
    </header>

    <section className="mural-menu">
      <Link to="/panels/apprenticeship">
        <img alt="apprenticeship"
          src="https://dev.digitalgizmo.com/mural-assets/panels/panelpics/apprenticeship.jpg" />
        <h2>Apprenticeship</h2>
      </Link>

      <Link to="/panels/child-labor">
       <img alt="child-labor"
          src="https://dev.digitalgizmo.com/mural-assets/panels/panelpics/child-labor.jpg" />
        <h2>Child Labor</h2>
      </Link>

      <Link to="/panels/women-textiles">
       <img alt="women-textiles"
          src="https://dev.digitalgizmo.com/mural-assets/panels/panelpics/women-textiles.jpg" />
        <h2>Women Textile Workers</h2>
      </Link>

      <Link to="/panels/secret-ballot">
       <img alt="secret-ballot"
          src="https://dev.digitalgizmo.com/mural-assets/panels/panelpics/secret-ballot.jpg" />
      <h2>The Secret Ballot</h2>
      </Link>
  
      <Link to="/panels/labor-day">
       <img alt="labor-day"
          src="https://dev.digitalgizmo.com/mural-assets/panels/panelpics/labor-day.jpg" />
        <h2>First Labor Day</h2>
      </Link>

      <Link to="/panels/logging">
       <img alt="logging"
          src="https://dev.digitalgizmo.com/mural-assets/panels/panelpics/logging.jpg" />
        <h2>Woods Workers</h2>
      </Link>

      <Link to="/panels/shoe-strike">
       <img alt="shoe-strike"
          src="https://dev.digitalgizmo.com/mural-assets/panels/panelpics/shoe-strike.jpg" />
        <h2>The &rsquo;37 Shoe Strike</h2>
      </Link>

      <Link to="/panels/reform">
       <img alt="reform"
          src="https://dev.digitalgizmo.com/mural-assets/panels/panelpics/reform.jpg" />
        <h2>Labor Reformers</h2>
      </Link>

      <Link to="/panels/Rosie">
       <img alt="Rosie"
          src="https://dev.digitalgizmo.com/mural-assets/panels/panelpics/Rosie.jpg" />
        <h2>Rosie the Riveter</h2>
      </Link>

      <Link to="/panels/jay-strike">
       <img alt="jay-strike"
          src="https://dev.digitalgizmo.com/mural-assets/panels/panelpics/jay-strike.jpg" />
        <h2>Jay Strike</h2>
      </Link>

      <Link to="/panels/labor-future">
       <img alt="labor-future"
          src="https://dev.digitalgizmo.com/mural-assets/panels/panelpics/labor-future.jpg" />
        <h2>The Future of Maine Labor</h2>
      </Link>
    </section>

      <p>The Maine Labor Mural is oil on panel and was painted by Judy Taylor, Seal Cove, Maine, 2008</p>
    <div className="home-info">  
      <p>Commissioned by the Maine Department of Labor; transferred to the Maine State Museum in 2019.</p>

      <p>
        <a className="pop_item" 
          href='/' onClick={e => { e.preventDefault(); 
            openPop({popType: "video", 
              panelNum: 99, articleType: "intro",
              learnmoreNode: homePopData.articleSet.edges[0].node.learnmoreSet.edges[0].node});}}>
            Tap here {" "}
        </a> 
          to learn more about the development of the Maine Labor Mural.
        <br/>

        <a className="pop_item" 
          href='/' onClick={e => { e.preventDefault(); 
            openPop({popType: "video", 
              panelNum: 99, articleType: "fore",
              learnmoreNode: homePopData.articleSet.edges[1].node.learnmoreSet.edges[0].node});}}>
            Tap here {" "}
        </a> 
          to explore the artist&rsquo;s intentions behind the mural.
      </p>

      <p className="prompt pop_item">
        
        
        <a className="pop_item" 
          href='/' onClick={e => { e.preventDefault(); 
            openPop({popType: "credits", 
              panelNum: 99, articleType: "intro",
              learnmoreNode: homePopData.articleSet.edges[0].node.learnmoreSet.edges[1].node});}}>
            Credits
        </a> 
        
        
        </p>
    </div>

    { showPop &&
      <Pop
        closePop = {closePop}
        popData = {popData} 
      />
    }

  </main>

  )
}

export default Home;