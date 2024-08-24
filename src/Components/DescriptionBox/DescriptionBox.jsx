import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is an online platform that facilities the buying and selling of products of services over the internet</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptates velit error dolorem excepturi modi commodi ex perferendis quasi officiis aliquid blanditiis voluptatibus iusto aspernatur repellat maxime nulla, molestias ad!</p>
        </div>
    </div>
  )
}

export default DescriptionBox