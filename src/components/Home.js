import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Home = () => {

  return (
    <main className="home"> {/* Return has to return one overarching element  */}

    <header>
      <h1>Maine Labor Mural</h1>
      <p>The Maine Labor Mural depicts scenes of the state&rsquo;s labor history in an effort to honor the men and women who built Maine.</p>
      <p className="prompt">Tap/click a panel to learn more</p>
    </header>

    <section className="mural-menu">
      <Link to="/panels/apprenticeship">
        <img src="https://dev.digitalgizmo.com/mural-assets/panels/panelpics/apprenticeship.jpg" />
        <h2>Apprenticeship</h2>
      </Link>

      <Link to="/panels/child-labor">
        <img src="https://dev.digitalgizmo.com/mural-assets/panels/panelpics/child-labor.jpg" />
        <h2>Child Labor</h2>
      </Link>

      <Link to="/panels/women-textiles">
        <img src="https://dev.digitalgizmo.com/mural-assets/panels/panelpics/women-textiles.jpg" />
        <h2>Women Textile Workers</h2>
      </Link>

      <Link to="/panels/secret-ballot">
        <img src="https://dev.digitalgizmo.com/mural-assets/panels/panelpics/secret-ballot.jpg" />
      <h2>The Secret Ballot</h2>
      </Link>
  
      <Link to="/panels/labor-day">
        <img src="https://dev.digitalgizmo.com/mural-assets/panels/panelpics/labor-day.jpg" />
        <h2>First Labor Day</h2>
      </Link>

      <Link to="/panels/logging">
        <img src="https://dev.digitalgizmo.com/mural-assets/panels/panelpics/logging.jpg" />
        <h2>Woods Workers</h2>
      </Link>

      <Link to="/panels/shoe-strike">
        <img src="https://dev.digitalgizmo.com/mural-assets/panels/panelpics/shoe-strike.jpg" />
        <h2>The &rsquo;37 Shoe Strike</h2>
      </Link>

      <Link to="/panels/reform">
        <img src="https://dev.digitalgizmo.com/mural-assets/panels/panelpics/reform.jpg" />
        <h2>Labor Reformers</h2>
      </Link>

      <Link to="/panels/Rosie">
        <img src="https://dev.digitalgizmo.com/mural-assets/panels/panelpics/Rosie.jpg" />
        <h2>Rosie the Riveter</h2>
      </Link>

      <Link to="/panels/jay-strike">
        <img src="https://dev.digitalgizmo.com/mural-assets/panels/panelpics/jay-strike.jpg" />
        <h2>Jay Strike</h2>
      </Link>

      <Link to="/panels/labor-future">
        <img src="https://dev.digitalgizmo.com/mural-assets/panels/panelpics/labor-future.jpg" />
        <h2>The Future of Maine Labor</h2>
      </Link>
    </section>

    <div className="home-info">  
      <p>Oil on panel; painted by Judy Taylor, Seal Cove, Maine, 2008<br/>
      Commissioned by the Maine Department of Labor; transferred to the Maine State Museum in 2019.</p>

      <p><a class="pop_item" href="/pops/video/ajax/49/">Tap here</a> to learn more about the development of the Maine Labor Mural.<br/>
      <a class="pop_item" href="/pops/video/ajax/50/">Tap here</a> to explore the artist&rsquo;s intentions behind the mural.</p>

      <p class="prompt pop_item"><a href="/pops/credits/ajax/52">Credits</a></p>
    </div>

  </main>

  )
}

export default Home;