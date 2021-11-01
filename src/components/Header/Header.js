import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Navbar, NavItem, TextInput } from 'react-materialize'
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import * as styles from './Header.module.css'
import { headerCarousel } from "../../config/headerConfig"
import MaterialIcon from '@material/react-material-icon'
import Logo from '../../images/logo.png'

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: {relativeDirectory: {eq: "header-carousel"}}) {
        edges {
          node {
            id
            publicURL
            relativePath
            relativeDirectory
          }
        }
      }
    }
  `)
  const carouselImage = data.allFile.edges
    console.log(data);

  React.useEffect(() => {
    var listImage = [headerCarousel.path + "/file1.jfif", headerCarousel.path + "/file2.jfif", headerCarousel.path + "/file3.jfif"]
  }, [])
  return(
  <header>
    <Carousel
      carouselId="top-carousel"
      className="white-text center"
      options={headerCarousel.options}
      showThumbs={false}
      swipeable={true}
      autoPlay = {true}
      interval={5000}
      infiniteLoop = {true}
    >
      {carouselImage.map(image =>{
        console.log(image)
        return (
          <div className={styles.customBackground} style={{ backgroundImage: `url('${image.node.publicURL}')`}} ></div>
        )
      })}
    </Carousel>
    <Navbar
      className="brown darken-1"
      alignLinks="left"
      brand={<Link className="brand-logo" to="/">{siteTitle}</Link>}
      centerLogo
      id="mobile-nav"
      menuIcon={<MaterialIcon>menu</MaterialIcon>}
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
      <Link to='/page-2'>
        Getting started
      </Link>
      <NavItem href="components.html">
        Components
      </NavItem>
      <NavItem>
      <TextInput
        icon="email"
        id="TextInput-49"
        label="Email"
      />
      </NavItem>
    </Navbar>
  </header>
)}

export default Header


