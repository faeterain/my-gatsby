import React from "react";
import { Footer } from "react-materialize";
import { animateScroll as scroll } from 'react-scroll'

const PageFooter = ()=>{
    return (
        <Footer
            className="example"
            copyrights="{}"
            links={<ul><li><a className="grey-text text-lighten-3" onClick={()=>scroll.scrollToTop({duration:500})}>Go to top</a></li><li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li><li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li><li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li><li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li></ul>}
            moreLinks={<a className="grey-text text-lighten-4 right" href="#!">More Links</a>}
        >
        © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        <h5 className="white-text">
            Footer Content
        </h5>
        <p className="grey-text text-lighten-4">
            You can use rows and columns here to organize your footer content.
        </p>
        </Footer>
    );
}

export default PageFooter;