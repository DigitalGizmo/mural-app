import React, { useState, useEffect } from 'react';
import {  useParams } from 'react-router-dom'; // Link,
import {
  useQuery,
  gql,
} from "@apollo/client"; 


const Panel = () => {
  let params = useParams();
  const [currSlug, setCurrSlug] = useState("apprenticeship");

  useEffect(() => {
    setCurrSlug(params.panelSlug);
  }, [params.panelSlug])


  const GET_PANEL = gql`
    query ($slug: String!) {
      panelBySlug (slug: $slug) {
        slug
        panelTitle

      }      
    }
  `;
  // const GET_PANEL = gql`
  //   query getMyPanel ($slug: String,
  //   ) {
  //     panelBySlug (slug: "child-labor")
  //     {
  //       slug
  //       panelTitle
  //     }
  //   }
  // `;

  const { loading, error, data } = useQuery(
    GET_PANEL, { variables: { slug: currSlug} }
  );

  // // interactivePart = { data.interactive.interactiveParts.edges[0] }
  // // hotspots = {interactivePart.node.hotspots.edges}

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: { error.message } </p>;

  return (
    <main className="swipe-main">
      <div className="wrapper">
      

        <div className="panel-title">     
          <h1>{ data.panelBySlug.panelTitle}</h1>
          <p>{params.panelSlug}</p>
          <p>Adults viewed children&apos;s work as preparation for adulthood, but industrial labor stunted a child&rsquo;s physical and intellectual growth. Child labor declined as higher levels of education became critical to escape poverty. <a href="/panels/child-labor/intro/">More...</a></p>
        </div>

      </div>{/*  end wrapper */}



    </main>
  )
}

export default Panel;