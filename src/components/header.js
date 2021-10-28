import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Navbar, Icon, NavItem, Carousel } from 'react-materialize'

const Header = ({ siteTitle }) => (
  <header>
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
    <Carousel
      carouselId="Carousel-34"
      images={[
        'https://picsum.photos/200/300?image=0',
        'https://picsum.photos/200/300?image=1',
        'https://picsum.photos/200/300?image=2',
        'https://picsum.photos/200/300?image=3',
        'https://picsum.photos/200/300?image=4'
      ]}
      options={{
        dist: -100,
        duration: 200,
        fullWidth: false,
        indicators: false,
        noWrap: false,
        numVisible: 5,
        onCycleTo: null,
        padding: 0,
        shift: 0
      }}
    />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
