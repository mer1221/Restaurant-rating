import React from 'react';
import "../styles/home.css";
import {Container , Row, Col} from 'reactstrap';

import foodvid from "../assets/images/foodvid.mp4";
import anim from "../assets/images/anim.jpg";
import Subtitle from '../shared/Subtitle';
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import Restlist from  '../components/restList/restList.jsx';
import MasonryImagesGallery from '../components/gallery/MasonaryimagesGallery';
import Testimonials from '../components/Testimonial/Testimonials';
const Home =() =>{
  return (
    <>
     <section>
      <Container>
      <Row>
      <Col lg='6'>
      <div className="hero_content">
         <div className="hero_subtitle d-flex align-items-center ">
           <Subtitle subtitle={'Where every taste gets a rating'}/>
          <img src={anim} alt=""/>
         </div>
        <h1>Discover the flavors, rate the <span className="highlight">Experience</span></h1>
      <p>Welcome to our restaurant review site! Here, you will find a wealth of information on the best dining experiences in your area. From upscale dining to casual eateries, we cover it all, providing you with honest and unbiased opinions on the quality of food, service, ambiance, and overall dining experience. Whether you're a seasoned food lover or just looking for a new place to try, our restaurant reviews will
         guide you towards finding your next culinary adventure. Come explore with us and discover the best restaurants 
         in town
         </p>
      </div>
       </Col>
       
       <Col lg="2">
      <div className="hero_img-box">
      <video src={foodvid} alt=""controls/>
      </div>
      </Col>
      <SearchBar/>
      </Row>
      </Container>
       </section>
       {/*hero section start */}
       <section>
          <Container>
            <Row>
              <Col lg='3'>
              <h5 className="services_subtitle">
                 What we serve
                </h5>
                <h2 className='services_title'>we offer Best Services</h2>
            </Col>
            <ServiceList/>
            
            </Row>
          </Container>
          </section>
         {/* hero section end */}
          
         <section>
            <Container>
              <Row>
                <Col lg ="12" className='mb-5' >
                <Subtitle subtitle={'See...'}/>
                <h2 className="featured_restaurant">
                  Explore Restaurant's
                </h2>
                </Col>
                <Restlist/>
              </Row>
            </Container>
          </section>
          
      {/* Restaurant's */} 
       {/* gallery start */} 
        <section>
          <Container>
            <Row>
              <Col lg='12'>
               <Subtitle subtitle ={'Gallery'}/>
               <h2 className='gallery-title'> Visit Restaurants Gallery</h2> 
              </Col>
              <Col lg='12'>
               <MasonryImagesGallery/>
              </Col>
            </Row>
          </Container>
        </section>
       {/* gallery end*/} 
       {/* testimonial*/} 
           <section>
            <Container>
              <Row>
                <Col lg='12'>
                <Subtitle subtitle={'Testimonial'}/>
                <h2 className="testimonial_title">
              What customer's says
                </h2> 
                </Col>
                <Col lg='12'>
                  <Testimonials/>
                </Col>
              </Row>
            </Container>
           </section>




       {/* testimonial*/} 
    </>
  );
};

export default Home;
