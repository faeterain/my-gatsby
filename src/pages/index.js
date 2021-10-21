import React from 'react'
import {Link} from "gatsby";

const IndexPage = () => {
  return (
    <main>
      <title>
        Home Page
      </title>
      <h1>Welcome to my Gatsby site!</h1>
      <p>This is my first gatsby site</p>
      <Link to='/about'>Read more about me</Link>
    </main>
  )
}
export default IndexPage;