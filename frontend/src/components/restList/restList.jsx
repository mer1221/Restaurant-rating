import React from 'react';
import RestCard from '../../shared/RestCard';
import RestData from '../../assets/data/Rest.js'
import { Col } from 'reactstrap';

const restList = () => {
  return (
    <>
      {RestData?.map((Rest) => (
        <Col lg="3" className='mb-4' key={Rest.id}>
          <RestCard Rest={Rest} />
        </Col>
      ))}
    </>
  );
};

export default restList;
