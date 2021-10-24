import React from 'react'
import Layout from '../components/layout';
import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom';

const IndexPage = () => {
  return (
    <BrowserRouter>
      <Layout pageTitle="Home Page">
        <p>This is my home page</p>
      </Layout>
    </BrowserRouter>
  )
}
export default IndexPage;