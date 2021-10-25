import { StaticImage } from 'gatsby-plugin-image';
import React from 'react'
import Layout from '../components/layout';
import { BrowserRouter } from 'react-router-dom';
import scrollTo from 'gatsby-plugin-smoothscroll';
import './index.css'

const IndexPage = () => {
  return (
    <BrowserRouter>
      <Layout pageTitle="Home Page">
        <p>This is my home page</p>
        <button onClick={() => scrollTo('#adog')}>Dog</button>
        <button onClick={() => scrollTo('#sphinx')}>Cat</button>
        <StaticImage id="adog" alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large" />
        <StaticImage id="sphinx" alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="../images/sphynx.jpg" />
      </Layout>
    </BrowserRouter>
  )
}
export default IndexPage;