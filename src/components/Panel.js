import React from 'react'; // , { useState, useEffect }
import {  useParams, useOutletContext } from 'react-router-dom'; // Link,
// import {
//   useQuery,
//   gql,
// } from "@apollo/client"; 


const Panel = (  ) => {
  let params = useParams();

  const { panelList } = useOutletContext();

  // const testSlug = panelList[0].node.slug;
  // console.log('test slug from panelList: ' + testSlug);

  // const result = jsObjects.find(obj => {
  //   return obj.b === 6
  // })
 
  const chosenPanel = panelList.find(obj => {
    return obj.node.slug === params.panelSlug
  })
 
  // console.log('chosenPanel: ' + chosenPanel.node.panelTitle);

  // const [currSlug, setCurrSlug] = useState("apprenticeship");

  // useEffect(() => {
  //   setCurrSlug(params.panelSlug);
  // }, [params.panelSlug])

  // const GET_PANEL = gql`
  //   query ($slug: String!) {
  //     panelBySlug (slug: $slug) {
  //       slug
  //       panelTitle

  //     }      
  //   }
  // `;

  // const { loading, error, data } = useQuery(
  //   GET_PANEL, { variables: { slug: currSlug} }
  // );

  // // interactivePart = { data.interactive.interactiveParts.edges[0] }
  // // hotspots = {interactivePart.node.hotspots.edges}
  // { data.panelBySlug.panelTitle}

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: { error.message } </p>;

  const blurb = () => {
    return { __html:  chosenPanel.node.panelBlurb }
}

  return (
    <div className="wrapper"> 
      <div className="content-area">

        <div className="prev-panel">
          <img src="https://dev.digitalgizmo.com/mural-assets/panels/panelpics/child-labor-prev.jpg" />
          <a href="/panels/apprenticeship/">
            <img src="https://dev.digitalgizmo.com/mural-assets/panels/panelpics/arrow-prev.png" 
            className="arrow"/>
          </a>
        </div>
        

        {/* <div dangerouslySetInnerHTML={blurb()} /> */}

        <div className="current-panel">
          <article>
          <h3>About This Panel</h3>
            <p>Adults viewed children&apos;s work as preparation for adulthood, but industrial labor stunted a child&rsquo;s physical and intellectual growth. Child labor declined as higher levels of education became critical to escape poverty. <a href="/panels/child-labor/intro/">More...</a></p>
            {/* <p className="more-link"><a href="/panels/child-labor/intro/">learn more...</a></p> */}
          </article>

          <div className="panel-image">

            <svg  xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 800 1800">
              <image id="document" x="0" y="0" 
              href="https://dev.digitalgizmo.com/mural-assets/panels/panelpics/child-labor.jpg" 
              width="800" height="1800" />
              
              <a className="pop_item" href="/pops/hotspot/ajax/lunch-bucket/">
                <circle className="hotspot" cx="417"
                cy="1207" r="72"/>
              </a>
              
              <a className="pop_item" href="/pops/hotspot/ajax/bandaged-hand/">
                <circle className="hotspot" cx="611"
                cy="1075" r="72"/>
              </a>
              
              <a className="pop_item" href="../pops/newsboys.html">
                <circle className="hotspot" cx="380"
                cy="100" r="72"/>
              </a>
              
              <a className="pop_item" href="/pops/hotspot/ajax/cutters/">
                <circle className="hotspot" cx="187"
                cy="496" r="72"/>
              </a>
              
              <a className="pop_item" href="/pops/hotspot/ajax/child-textiles-workers/">
                <circle className="hotspot" cx="135"
                cy="255" r="72"/>
              </a>
              
              <a className="pop_item" href="/pops/hotspot/ajax/slubbers/">
                <circle className="hotspot" cx="490"
                cy="732" r="72"/>
              </a>
              
            </svg>
          </div>{/* /panel-image */}

          <nav className="tabs">
            <h3>Learn More</h3>
            <ul>
              <li>
                <a href="child-labor-article.html">Children in the Work Force</a>
              </li>
              <li><a href="/panels/child-labor/fore.html">Children in Maine&rsquo;s Sardine Industry</a>
              </li>
            </ul>
          </nav>

        </div>{/* /main */}

        <div className="next-panel">
          <img src="https://dev.digitalgizmo.com/mural-assets/panels/panelpics/child-labor-next.jpg" />
          <a href="/panels/women-textiles/">
            <img src="https://dev.digitalgizmo.com/mural-assets/panels/panelpics/arrow-next.png" 
            className="arrow"/>
          </a>
        </div>

      </div>{/* content-area */}


    </div> // wrapper
  )
}

export default Panel;