
import React from 'react'
import  Masonry ,{ResponsiveMasonry} from 'react-responsive-masonry'
import galleryimages from './galleryimages'
const MasonryImagesGallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{350:1, 768:3, 992:4}}>
                <Masonry gutter ='1rem'>
              {
                galleryimages.map((item,index)=>(
                  <img  className="masonry_img" src={item} key={index} alt="" style=
                  {{'width':'100%', 'display':'block' ,'borderRadius':"5px" }}/>
                ))
              }
                </Masonry>
    </ResponsiveMasonry>
  )
}

export default MasonryImagesGallery