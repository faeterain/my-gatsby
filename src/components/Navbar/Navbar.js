import React from "react";
import {Menu} from "antd";
import {useStaticQuery, graphql} from "gatsby"
import { useHistory } from "react-router";
import config from '../../config';
import { withRouter } from 'react-router-dom';

const Navbar = (props) => {
  
    var newdata = useStaticQuery(graphql `
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
                      name
                      link
                    }
        }
      }
    }`);
    
    const menuList = newdata.site.siteMetadata.menuLinks.map(nav => {
      console.log(nav);
      let name = nav.name;
      if (nav.name.indexOf('/') > -1) {
          name = nav.name.split('/');
          return (
              <Menu.Item key={nav.link}>
                  <span className="tabletop-title">
                      <p className="sub-1">{name[0] + "/"}</p>
                      <p className="sub-2">{name[1]}</p>
                  </span>
              </Menu.Item>
          );
      } else {
          return (
              <Menu.Item key={nav.link} className="no-break">
                  <span className="tabletop-title ">{nav.name}</span>
              </Menu.Item>
          );
      }
  });
    const history = useHistory();
    var handleMenuClick = (e) => {
        if (e.key === 'home') {
            if (config.startpage === '') {
                history.push('/');
            } else 
                history.push(config.startpage);
            }
        else {
          alert(e.key);
            history.push({pathname: `${e.key}`});
        }
    }

    return (
        <Menu
            onClick={handleMenuClick.bind(this)}
            selectedKeys={['']}
            mode="horizontal"
            overflowedIndicator={<span> More </span>}>
            {menuList}
        </Menu>
    );
};

export default withRouter(Navbar);
