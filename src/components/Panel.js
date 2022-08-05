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
    <div> {/* sindle element for prev, main & next panels */}
      {/* swipe-main gone */}

      <div className="prev-panel">
          <a className="prev" href="/panels/apprenticeship">
            <img alt="prev arrow"
              src="https://dev.digitalgizmo.com/mural-assets/panels/panelpics/arrow-prev.png"/>
          </a>
          
          <svg  xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 217.2 1800"> {/* 216 1790  */}
            <image id="document" x="0" y="0" 
              href="https://dev.digitalgizmo.com/mural-assets/panels/panelpics/child-labor-prev.jpg" 
              width="217.2" height="1800" />
          </svg>
        </div>

          {/* <div dangerouslySetInnerHTML={blurb()} /> */}
      







    </div>
  )
}

export default Panel;