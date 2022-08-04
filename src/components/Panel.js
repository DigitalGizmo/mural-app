import React from 'react';
import { Link, useParams } from 'react-router-dom';
// import {
//   useQuery,
//   gql,
// } from "@apollo/client"; 


const Panel = () => {
  let params = useParams();

  // const GET_PANELS = gql`
  //   query {
  //     allPanels {
  //       edges {
  //         node {
  //           slug,
  //           panelTitle,
  //         }
  //       }
  //     }
  //   }
  // `;

  // const { loading, error, data } = useQuery(
  //   GET_PANELS
  // );

  // // loading = {loading}
  // // error = {error}
  // // interactivePart = { data.interactive.interactiveParts.edges[0] }
  // // hotspots = {interactivePart.node.hotspots.edges}

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: { error.message } </p>;

  // const panels = 
  //   data.allPanels.edges.map((panel, index) => {
  //   return (
  //     <div
  //       key={panel.node.slug}

  //     >
  //       <p>{panel.node.panelTitle}</p>
  //     </div>
  //   )
  // });

  return (
    <main className="swipe-main">
      <div className="wrapper">
      
        <div className="home-nav">
          <Link to='/'>&larr; Home</Link>
        </div>

        <div className="panel-title">     
          <h1>slug: {params.panelSlug}</h1>
          <p>Adults viewed children&apos;s work as preparation for adulthood, but industrial labor stunted a child&rsquo;s physical and intellectual growth. Child labor declined as higher levels of education became critical to escape poverty. <a href="/panels/child-labor/intro/">More...</a></p>
        </div>



      </div>{/*  end wrapper */}

    </main>
  )
}

export default Panel;