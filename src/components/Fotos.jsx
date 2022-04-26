import React from 'react'
import './Fotos.css'

const Fotos = () => {
  return (
    <div className='fotos'>
        <div className="swiffy-slider slider-item-show3 slider-item-reveal slider-nav-touch slider-indicators-round slider-indicators-highlight">
    <ul className="slider-container">
        <li>
            <div id="slide1"><img src="https://i.imgur.com/XtILJWD.jpg" alt="" /></div>
        </li>
        <li>
            <div id="slide2"><img src="https://i.imgur.com/bUHuzkA.jpg" alt="" /></div>
        </li>
        <li>
            <div id="slide3"><img src="https://i.imgur.com/BmNKmCv.jpg" alt="" /></div>
        </li>
        <li>
            <div id="slide4"><img src="https://i.imgur.com/jV7CFz6.jpg" alt="" /></div>
        </li>
        <li>
            <div id="slide5"><img src="https://i.imgur.com/lE0hnbG.jpg" alt="" /></div>
        </li>
        <li>
            <div id="slide6"><img src="https://i.imgur.com/lpWlmwp.jpg" alt="" /></div>
        </li>
        <li>
            <div id="slide7"><img src="https://i.imgur.com/jhHE9cL.jpg" alt="" /></div>
        </li>
        <li>
            <div id="slide8"><img src="https://i.imgur.com/4vhjeIq.jpg" alt="" /></div>
        </li>
        <li>
            <div id="slide9"><img src="https://i.imgur.com/mo2VXE0.jpg" alt="" /></div>
        </li>
    </ul>

    <button type="button" className="slider-nav"></button>
    <button type="button" className="slider-nav slider-nav-next"></button>

    <ul className="slider-indicators">
        <li className="active"></li>
        <li className=""></li>
        <li className=""></li>
        <li className=""></li>
        <li className=""></li>
        <li className=""></li>
        <li className=''></li>
        <li className=""></li>
        <li className=""></li>
    </ul>
</div>
    </div>
  )
}

export default Fotos