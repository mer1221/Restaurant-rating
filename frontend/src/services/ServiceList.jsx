
import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'



const servicesData=[
  {
    
     title:"Restaurant Review",
     desc: "Our website often assign numerical ratings or grades to restaurants based on various factors such as food quality"
  },
  {
    
    title:"Restaurant information",
    desc: "Typically provide information about a restaurant's location, contact details, opening hours, menu, pricing, and other relevant details. This information helps users gather all the necessary information before visiting a restaurant"
 },

 {
    
  title:"user-interaction",
  desc: " It allow users to interact with each other by commenting on reviews. This creates a community of users who can share their experiences and help each other make dining decisions."
},
]


const ServiceList = () => {
  return(
  <>
{
  servicesData.map((item,index)=>(
    <Col lg="3" key={index}>
    <ServiceCard item={item}/>
    </Col>

  ))}
  </>
);
  }
export default ServiceList