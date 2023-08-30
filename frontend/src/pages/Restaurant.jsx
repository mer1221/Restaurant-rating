import React ,{useState , useEffect}from 'react'
import RestData from "../assets/data/Rest"
import RestCard from '../shared/RestCard'
import {Container ,Row , Col} from 'reactstrap'
import SearchBar from '../shared/SearchBar'
import CommonSection from '../shared/CommonSection'
import '../styles/restaurant.css'
const Restaurant = () => {
  const [pageCount,setPageCount] =useState(0)
  const [page,setPage]=useState(0);

  useEffect(()=>{
    const pages=Math.ceil (5 /4);//backend nedded
    setPageCount(pages);
 
  } ,[page]);
  return (
    <>
    <CommonSection title={"Restaurant's"}/>
    <section>
      <Container>
        <Row>
          <SearchBar/>
        </Row>
      </Container>
    </section>


    <section className='pt-0'>
      <Container>
        <Row>
          {
            RestData.map(Rest =>(
              <Col lg='3'  className ="mb-4" key={Rest.id}>
                <RestCard Rest={Rest}/>
              </Col>
          ))}
          <Col lg ="12">
        
            <div className="pagination d-flex align-item-center justify-content-center mt-4 gap-3">
              {[...Array(pageCount).keys()].map(number=>(
                <span key ={number} onClick={()=> setPage(number)}
                 className={page===number ? 'active_page' : " "}>
                  {number + 1}
                </span>
              ))}
               
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  
    </>
  );
};

export default Restaurant