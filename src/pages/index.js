import React, {useState} from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import LoadingOverlay from 'react-loading-overlay'
import CircleLoader from 'react-spinners/CircleLoader'
import '@material/react-material-icon/dist/material-icon.css';
import './index.css'


const IndexPage = () => {
  let [loading, setLoading] = useState(true);
  setTimeout(()=>{
    setLoading(false);
  }, 2000)
  return (
    <>
      <LoadingOverlay
        className="custom-overlay"
        active={loading}
        spinner={<CircleLoader color={'blue'} size={60} />}
        >
      
        <Layout>
            <Seo title="Home" />
            <h1>Hi people</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            <StaticImage
              src="../images/gatsby-astronaut.png"
              width={300}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="A Gatsby astronaut"
              style={{ marginBottom: `1.45rem` }}
            />
            <p>
              <Link to="/page-2/">Go to page 2</Link> <br />
              <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
              <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
              <Link to="/using-dsg">Go to "Using DSG"</Link>
            </p>
          </Layout>
        
        </LoadingOverlay>
    </>
    )
  }

export default IndexPage
