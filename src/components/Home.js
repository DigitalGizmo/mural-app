import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Home = () => {

  return (
    <div className="home">

    <h1>Maine Labor Mural</h1>

    <p className="intro">The Maine Labor Mural depicts scenes of the state&rsquo;s labor history in an effort to honor the men and women who built Maine.</p>

    <p>Oil on panel; painted by Judy Taylor, Seal Cove, Maine, 2008<br/>
    Commissioned by the Maine Department of Labor; transferred to the Maine State Museum in 2019.</p>
  
    <p>Tap a panel to learn more</p>

    <svg 
      xmlns="http://www.w3.org/2000/svg"
      version="1.1" viewBox="0 0 3732 754">

        <image id="document" x="0" y="0" 
          href="https://dev.digitalgizmo.com/mural-assets/panels/mural.jpg" 
          width="3732" height="754" />
        
            <a href="/panels/apprenticeship/">
                <rect x="3" y="2" className="mural-panel-hotspot" width="333" height="750"/>
            </a>
        
            <Link to="/panel">
                <rect x="342" y="2" className="mural-panel-hotspot" width="333" height="750"/>
            </Link>
        
            <a href="/panels/women-textiles/">
                <rect x="681" y="2" className="mural-panel-hotspot" width="333" height="750"/>
            </a>
        
            <a href="/panels/secret-ballot/">
                <rect x="1020" y="2" className="mural-panel-hotspot" width="333" height="750"/>
            </a>
        
            <a href="/panels/labor-day/">
                <rect x="1359" y="2" className="mural-panel-hotspot" width="333" height="750"/>
            </a>
        
            <a href="/panels/logging/">
                <rect x="1698" y="2" className="mural-panel-hotspot" width="333" height="750"/>
            </a>
        
            <a href="/panels/shoe-strike/">
                <rect x="2037" y="2" className="mural-panel-hotspot" width="333" height="750"/>
            </a>
        
            <a href="/panels/reform/">
                <rect x="2376" y="2" className="mural-panel-hotspot" width="333" height="750"/>
            </a>
        
            <a href="/panels/Rosie/">
                <rect x="2715" y="2" className="mural-panel-hotspot" width="333" height="750"/>
            </a>
        
            <a href="/panels/jay-strike/">
                <rect x="3054" y="2" className="mural-panel-hotspot" width="333" height="750"/>
            </a>
        
            <a href="/panels/labor-future/">
                <rect x="3393" y="2" className="mural-panel-hotspot" width="333" height="750"/>
            </a>
        
            <a href="/panels/home/">
                <rect x="33225" y="2" className="mural-panel-hotspot" width="333" height="750"/>
            </a>
        

    </svg>

    <p><a className="pop_item" href="/pops/video/ajax/49/">Tap here</a> to learn more about the development of the Maine Labor Mural.<br/>
    <a className="pop_item" href="/pops/video/ajax/50/">Tap here</a> to explore the artist&rsquo;s intentions behind the mural.</p>

    <p className="prompt pop_item"><a href="/pops/credits/ajax/52">Credits</a></p>

  </div>

  )
}

export default Home;