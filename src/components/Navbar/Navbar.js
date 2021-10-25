import React from "react";
import { Link, withRouter, useLocation } from "react-router-dom";
import { Menu } from "antd";

const Navbar = withRouter(() => {
  const location = useLocation();
  return (
    <Menu mode="inline" selectedKeys={[location.pathname]}>
      <Menu.Item key="/">
        <Link to="/">Home </Link>
      </Menu.Item>
      <Menu.Item key="/about">
        <Link to="/about">About</Link>
      </Menu.Item>
    </Menu>
  );
});

export default Navbar;
