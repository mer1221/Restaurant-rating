import React from 'react';
import { Container, Row, Button } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './header.css';
const nav_links = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/restaurants',
    display: "Restaurant's"
  },
]

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav_wrapper d-flex align-item-center justify-content-between">
            {/* Logo start */}
            <div className="logo">
              <img src={logo} alt="" />
            </div>

            {/* Logo end */}

  
            {/* Menu start */}
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
            {
             nav_links.map((item, index) => (
                 <li className="nav_item" key={index}>
                 <NavLink to={item.path} className={navClass=>navClass.isActive ? 'active_link': " "}>{item.display}</NavLink>
                  </li>
                  ))
            }
              </ul>
           </div>


            {/* Menu end */}
            <div className="nav_right d-flex align-items-center gap-4">
              <div className="nav_btns d-flex align-items-center gap-4">
                <Button className='btn secondary_btn' tag={Link} to="/login">Login</Button>
                <Button className='btn primary_btn' tag={Link} to="/register">Register</Button>
              </div>
              <span className="mobile_menu">
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;