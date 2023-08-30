import React, { useRef, useState } from 'react';
import { Container, Col, Row, Form, ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
import RestData from "../assets/data/Rest.js";
import calculateAvgRating from '../utils/avgRating.js';
import '../styles/RestaurantDetails.css';
import avatar from '../assets/images/avatar.jpg';
const RestaurantDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef('');
  const [restRating, setRestRating] = useState(null);
  
  const Rest = RestData.find((rest) => rest.id === id);
  const { photo, title, desc, price, address, reviews, city } = Rest;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  const options = { day: "numeric", month: "long", year: "numeric" };

  const submitHandler = (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;
    alert(`${reviewText}, ${restRating}`);
  };

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <div className="rest_content">
                <img src={photo} alt="" />
                <div className="rest_info">
                  <h2>{title}</h2>
                  <div className='d-flex align-items-center gap-5'></div>
                  <span className='rest_rating d-flex align-item-center gap-1 '>
                    <i className="ri-star-s-fill" style={{ 'color': "var(--secondary-color)" }}> </i>
                    {avgRating === 0 ? null : avgRating}
                    {totalRating === 0
                      ? 'Not rated'
                      : <span>({reviews?.length})</span>
                    }
                  </span>
                  <span>
                    <i className="ri-map-pin-fill"></i>{address}
                  </span>
                  <div className='rest_extra-details'>
                    <span>
                      <i className="ri-map-pin-2-fill"></i>{city} <br />
                      <i className="ri-wallet-2-fill"></i>{price} Birr
                    </span>
                  </div>
                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>
                {/* restaurant-review start */}
                <div className="rest_review mt-4">
                  <h4> Reviews ({reviews?.length} reviews)</h4>
                  <Form onSubmit={submitHandler}>
                    <div className='d-flex align-items-center gap-3 mb-4 rating_group'>
                      <span onClick={() => setRestRating(1)}>
                        1<i className="ri-star-fill"></i>
                      </span>
                      <span onClick={() => setRestRating(2)}>
                        2<i className="ri-star-fill"></i>
                      </span>
                      <span onClick={() => setRestRating(3)}>
                        3<i className="ri-star-fill"></i>
                      </span>
                      <span onClick={() => setRestRating(4)}>
                        4<i className="ri-star-fill"></i>
                      </span>
                      <span onClick={() => setRestRating(5)}>
                        5<i className="ri-star-fill"></i>
                      </span>
                    </div>
                    <div className="review_input">
                      <input type="text" ref={reviewMsgRef} placeholder="Share your thoughts" required />
                      <button className="btn primary-btn" type="submit">
                        Submit
                      </button>
                    </div>
                  </Form>
                  <ListGroup className="user_reviews">
                    {reviews?.map((review, index) => (
                      <div className='review_item' key={index}>
                        <img src={avatar} alt="" />
                        <div className="w-100">
                          <div className="d-flex align-items-center justify-content-between">
                            <div>
                              <h5>
                                username
                              </h5>
                              <h6>Amazing Service</h6>
                              <p> {new Date("08-29-2023").toLocaleDateString(
                                "en-US", options
                              )}</p>
                            </div>
                            <span className="d-flex align-item-center ">
                              5<i className="ri-star-s-fill"></i>
                              
                            </span>
                           
                          </div>
                        </div>
                      </div>
                    ))}
                  </ListGroup>
                </div>
                {/* restaurant-review end */}
              </div>
            </Col>
            <Col lg='4'>
    
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default RestaurantDetails;