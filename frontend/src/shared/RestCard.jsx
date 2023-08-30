import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import "../shared/RestCard.css"
import calculateAvgRating from '../utils/avgRating';

const RestCard = ({ Rest }) => {
  const { id, title, city, photo, price, featured, catagory, reviews } = Rest;
  
  const totalRating = reviews?.reduce((acc, item) => acc + item.rating, 0);
  const avgRating = totalRating === 0
    ? " "
    : totalRating === 1
    ? totalRating
    : totalRating / reviews?.length;

  return (
    <div className='Rest_card'>
      <Card>
        <div className="rest_img">
          <img src={photo} alt=" " />
          {featured && <span>Featured</span>}
        </div>
        <CardBody>
          <div className="card_top d-flex align-item-center justify-content-between">
            <span className='rest_location d-flex align-item-center gap-1'>
              <i className="ri-map-pin-line"></i>{city}
            </span>
            <span className='rest_rating d-flex align-item-center gap-1 '>
              <i className="ri-star-fill"></i>{avgRating === 0 ? null : avgRating}
              {totalRating === 0
                ? 'Not rated'
                : <span>({reviews.length})</span>
              }
            </span>
          </div>
          <h5 className="rest_title">
            <Link to={`/restaurants/${id}`}>{title}</Link>
          </h5>
          <div className="card_bottom d-flex align-items-center justify-content-between mt-3">
            <h5>{price} <span>/birr</span></h5>
            <button className='btn review_btn'>
              <Link to={`/restaurants/${id}`}>See More...</Link>
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default RestCard;