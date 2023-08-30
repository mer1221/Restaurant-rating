


import React,{useRef} from 'react'
import './Search-bar.css'
import {Col ,Form, FormGroup} from 'reactstrap'

const SearchBar = () => {

const locationRef = useRef('')
const catagoryRef = useRef('')
const reviewRef = useRef('1')

const searchHandler =()=>{
  const location =locationRef.current.value
  const catagory =catagoryRef.current.value
  const review =reviewRef.current.value


  if(location===''||  catagory ===''|| review ===''){
    return alert('All fields are required!');
  }
}

  return (
  <Col lg='12'>
  <div className="search_bar">
   <Form className='d-flex align-items-center gap-4'>
        <FormGroup className='d-flex gap-3 form_group form_group-fast'>
            <span>
            <i className="ri-map-pin-line"></i>
            </span>
            <div>
              <h6>Location</h6>
              <input type="text"  placeholder='where do you want ?' ref={locationRef}/>
            </div>
            
        </FormGroup>
        <FormGroup className='d-flex gap-3 form_group form_group-fast'>
            <span>
            <i class="ri-restaurant-fill"></i>
            </span>
            <div>
              <h6>Catagory</h6>
              <input type="text"  placeholder='Catagory' ref={catagoryRef}/>
            </div>
            
        </FormGroup>
        <FormGroup className='d-flex gap-3 form_group form_group-last'>
            <span>
            <i className="ri-star-line"></i>
            </span>
            <div>
              <h6>Reviews</h6>
              <input type="number"  placeholder='rated' ref={reviewRef}/>
            </div>
        </FormGroup> 
        <span className="search_icon" type='submit' onClick={searchHandler}>
        <i class="ri-search-2-line"></i>
        </span>
   </Form>
  </div>
  </Col>
  )
}

export default SearchBar