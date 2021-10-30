var React         = require('react');
var Scroll        = require('react-scroll');
var ScrollLink    = Scroll.ScrollLink;
var ScrollElement = Scroll.ScrollElement;

export const CustomElement = ScrollElement((props)=>{
    return (
        <div {...props} >
          {props.children}
        </div>
      );
})

export const CustomLink = ScrollLink((props)=>{
    return (
        <a {...props}>
          {props.children}
        </a>
      );
})