import React from 'react'
import './Sobremi.css'

const Sobremi = () => {
  return (
    <div>
        <div className="row sobremi" id='home'>
            <div className="col-md-2"></div>
            <div className="col-xl-3 col-lg-3 col-md-8"> 
                <img className='foto' src="https://i.imgur.com/65zwLkJ.jpg" alt="Nelson Taffarel" />
            </div>
            <div className="col-xl-5 col-md-8 col-lg-5 t-sobremi t">
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum architecto corporis necessitatibus velit veniam modi. Velit, blanditiis omnis. Culpa, saepe. Est quod illum nulla libero aspernatur, facere odit enim maiores.</p>
            </div>
            <div className="col-md-2"></div>
        </div>
        {/* <div className="container mx-auto">
        <div className="swiffy-slider">
          <ul className="slider-container">
            <li><img src="https://source.unsplash.com/49b9l_29ceA/1600x900" style={{maxWidth: '100%', height: 'auto'}} /></li>
            <li><img src="https://source.unsplash.com/nKAglN6HBH8/1600x900" style={{maxWidth: '100%', height: 'auto'}} /></li>
            <li><img src="https://source.unsplash.com/E9ZwWcMGzj8/1600x900" style={{maxWidth: '100%', height: 'auto'}} /></li>
            <li><iframe title="vimeo-player" src="https://player.vimeo.com/video/45850765?h=524d5796cb" width="1000" height="1000" frameborder="0" allowfullscreen></iframe></li>
          </ul>
          <button type="button" className="slider-nav" />
          <button type="button" className="slider-nav slider-nav-next" />
          <div className="slider-indicators">
            <button className="active" />
            <button />
            <button />
            <button></button>
          </div>
        </div>
        </div> */}
    </div>
  )
}

export default Sobremi