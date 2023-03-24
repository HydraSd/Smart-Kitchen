import React from 'react'
import '../css/brands.css'

function Brands() {
  return (
    <>
<div className='main'>
<img src={process.env.PUBLIC_URL + 'images/brands/Hafele.png'} alt="" className='brand-image1'/>
<img src={process.env.PUBLIC_URL + 'images/brands/fordaq.png'} alt="" className='brand-image2'/>
<img src={process.env.PUBLIC_URL + 'images/brands/houzz.png'} alt="" className='brand-image3'/>
<img src={process.env.PUBLIC_URL + 'images/brands/jat.png'} alt="" className='brand-image4'/>
<img src={process.env.PUBLIC_URL + 'images/brands/multilac.png'} alt="" className='brand-image5'/>
<img src={process.env.PUBLIC_URL + 'images/brands/pum.jpg'} alt="" className='brand-image6'/>
</div>
    </>
  )
}

export default Brands