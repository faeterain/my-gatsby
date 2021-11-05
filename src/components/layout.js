import React, {useEffect} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header/Header"
import PageFooter from "./Footer/Footer"
import M from 'materialize-css'
import './layout.css'
import axios from 'axios'
import WizardForm from "./WizardForm/WizardForm"
import Products from "./Products/Products"

M.AutoInit();

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const {title} = data.site.siteMetadata

  // useEffect(() => {
  //   axios.post('https://testhome.dev.taxhub.vn/einvoice/v1/test_connection', {},
  //   {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'api-key': 'bcf6b8eb913f41bd89077b75e859f040'
  //     }
  //   })
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
    
  // }, [])

  return (
    <>
      <Header siteTitle={title || `Title`} />
      
      <div>
        <WizardForm></WizardForm>
        <Products></Products>
        <main>{children}</main>
        <PageFooter>{children}</PageFooter>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
