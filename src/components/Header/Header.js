import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Navbar, Icon, NavItem, Carousel } from 'react-materialize'
import './header.css'
import { headerCarousel } from "../../config/headerConfig"

const Header = ({ siteTitle }) => {
  React.useEffect(() => {
    var listImage = [headerCarousel.path + "/file1.jfif", headerCarousel.path + "/file2.jfif", headerCarousel.path + "/file3.jfif"]
  }, [])
  return(
  <header>
    <Carousel
      carouselId="top-carousel"
      className="white-text center"
      options={headerCarousel.options}
    >
      <div className="red">
        <h2>
          First Panel
        </h2>
        <p>
          This is your first panel
        </p>
      </div>
      <div className="amber">
        <h2>
          Second Panel
        </h2>
        <p>
          This is your second panel
        </p>
      </div>
      <div className="green">
        <h2>
          Third Panel
        </h2>
        <p>
          This is your third panel
        </p>
      </div>
      <div className="blue">
        <h2>
          Fourth Panel
        </h2>
        <p>
          This is your fourth panel
        </p>
      </div>
    </Carousel>
    <Navbar
      className="brown darken-1"
      alignLinks="left"
      brand={<Link className="brand-logo" to="/">{siteTitle}</Link>}
      centerLogo
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
      options={{
        draggable: true,
        edge: 'left',
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true
      }}
    >
      <NavItem onClick={function noRefCheck(){}}>
        Getting started
      </NavItem>
      <NavItem href="components.html">
        Components
      </NavItem>
    </Navbar>
  </header>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}


export default Header
