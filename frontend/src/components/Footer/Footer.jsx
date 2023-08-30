import React from 'react'
import './footer.css'
import {Container ,Row ,Col, ListGroup, ListGroupItem} from 'reactstrap'
import {Link} from 'react-router-dom'
import logo from '../../assets/images/logo.png'
const footer_links = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/about',
    display: "About us"
  },
  {
    path: '/restaurants',
    display: "Restaurant's"
  },
]
const footer_links2 = [
  {
    path: '/gallery',
    display: 'Gallery'
  },
  {
    path: '/login',
    display: "Login"
  },
  {
    path: '/register',
    display: "Register"
  },
]
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg ='3'>
            <div className="logo">
              <img src={logo} alt="" srcset="" />
            
          <p>
            Lorem ipsum dolor sit am
            et consectetur adipisicing elit. Eum, beatae.
            </p>
          <div className="social_link d-flex align-items-center gap-4">
<span>
    <Link to='#'><i class="ri-telegram-line"></i></Link>
  </span>
  <span>
    <Link to='#'><i class="ri-instagram-line"></i></Link>
  </span>
  <span>
    <Link to='#'><i class="ri-facebook-line"></i></Link>
  </span>
         </div>
          </div>
          </Col>
          <Col lg='3'>
            <h3 className='footer_link_title'> Restaurant's</h3>
          <ListGroup className='footer_links'>
                {
                  footer_links.map((item,index)=>(
                  <ListGroupItem key={index} className='ps-0 border-0'>
                     <Link to={item.path}>{item.display}</Link>

                  </ListGroupItem>
                  ))
                }
          </ListGroup>      
          </Col>
          <Col lg='3'>
          <h3 className='footer_link_title'> Discover</h3>
          <ListGroup className='footer_links'>
                {
                  footer_links2.map((item,index)=>(
                  <ListGroupItem key={index} className='ps-0 border-0'>
                     <Link to={item.path}>{item.display}</Link>

                  </ListGroupItem>
                  ))
                }
          </ListGroup>
          </Col>
          <Col lg='3'>
          <h3 className='footer_link_title'>Contact</h3>
          <ListGroup className='footer_links'>
                
                  
                  <ListGroupItem  className='ps-0 border-0 d-flex align-item-center gap-3'>
                  <h6>
                    <span>
                      <i class="ri-map-pin-line"></i>
                    </span>
                    Adress:
                  </h6>
                  <p className='mb-0'> AddisAbeba , Ethiopia</p>
                  
                  </ListGroupItem>
                  <ListGroupItem  className='ps-0 border-0 d-flex align-item-center gap-3'>
                  <h6>
                    <span>
                      <i class="ri-phone-line"></i>
                    </span>
                    Phone :
                  </h6>
                  <p className='mb-0'> +25167788888 </p>
                  
                  </ListGroupItem>
                  <ListGroupItem  className='ps-0 border-0 d-flex align-item-center gap-3'>
                  <h6>
                    <span>
                      <i class="ri-mail-line"></i>
                    </span>
                    Email:
                  </h6>
                  <p className='mb-0'>dev.group3@21gmail.com</p>
                  
                  </ListGroupItem>
               
          </ListGroup>
          </Col>
          <Col lg='12'>
          
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer