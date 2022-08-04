import React, { useState, useEffect } from 'react';
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
    <main className="swipe-main">
      <div className="wrapper">
      

        <div className="panel-title">     
          <h1>{ chosenPanel.node.panelTitle }</h1> 

          <div dangerouslySetInnerHTML={blurb()} />

          {/* <a href="/panels/child-labor/intro/">More...</a> */}
        </div>


      </div>{/*  end wrapper */}



    </main>
  )
}

export default Panel;