import React from 'react'
import './Sobremi.css'

const Sobremi = () => {
  return (
    <div>
        <h1 className='nelson'>NELSON TAFFAREL</h1>

        <div className="row sobremi" id='home'>
            <div className="col-md-2"></div>
            <div className="col-xl-3 col-lg-3 col-md-8"> 
                {/* <img className='foto' src="https://i.imgur.com/65zwLkJ.jpg" alt="Nelson Taffarel" /> */}
                <div class="swiffy-slider slider-nav-autoplay slider-indicators-round" data-slider-nav-autoplay-interval="3000">
    <ul class="slider-container">
        <li class="slide-visible">
            <div id="slide1">
            <img className='foto' src="https://i.imgur.com/EihN3ZV.jpg" alt="Nelson Taffarel" />
            </div>
        </li>
        <li>
            <div id="slide2">
            <img className='foto' src="https://i.imgur.com/bXzui7N.jpg" alt="Nelson Taffarel" />
            </div>
        </li>
        <li>
            <div id="slide3">
              <img className='foto' src="https://i.imgur.com/GONCNd9.jpg" alt="" />
            </div>
        </li>
        <li>
            <div id="slide4">
              <img className='foto' src="https://i.imgur.com/o19KpAI.jpg" alt="" />
            </div>
        </li>
        <li>
            <div id="slide5">
              <img className='foto' src="https://i.imgur.com/yYG6J55.jpg" alt="" />
            </div>
        </li>
        <li>
            <div id="slide6">
              <img className='foto' src="https://i.imgur.com/7CWAGTw.jpg" alt="" />
            </div>
        </li>
        <li>
            <div id="slide7">
              <img className='foto' src="https://i.imgur.com/qtsRpfD.jpg" alt="" />
            </div>
        </li>
        <li>
            <div id="slide8">
              <img className='foto' src="https://i.imgur.com/cNtjRSJ.jpg" alt="" />
            </div>
        </li>
        <li>
            <div id="slide9">
              <img className='foto' src="https://i.imgur.com/XxAgPRQ.jpg" alt="" />
            </div>
        </li>
        <li>
            <div id="slide10">
              <img className='foto' src="https://i.imgur.com/tX67wYJ.jpg" alt="" />
            </div>
        </li>

    </ul>

    {/* <button type="button" class="slider-nav"></button>
    <button type="button" class="slider-nav slider-nav-next"></button> */}

    {/* <ul class="slider-indicators">
        <li class=""></li>
        <li class=""></li>
        <li class=""></li>
        <li class="active"></li>

    </ul> */}
</div>
            </div>
            <div className="col-xl-5 col-md-8 col-lg-5 t-sobremi t">
                <p className=''>Es un actor egresado del taller de arte dramático de Agustín Alezzo.
                También en talleres de baile y actuación como  Ana Frenkel.
                Deportista.(Equitación, Rugby, Golf, Ashtanga Yoga, etc).</p>
            </div>
            <div className="col-md-2"></div>
        </div>
        <div className="container">
          <p className='t-sobremi2'> Algunos trabajos en TV Amor mío, Conflictos en red, Sin código, Hombres de honor, Los Roldán, Alma pirata, Casi ángeles, RRDT. Humor: Casados con hijos,TyC Sports, VideoMatch(1995,96 El paparazzi 1996,97.) Imitaciones para portal Polo Line. También en teatro San Martín y el El Duende con obras como el reñidero, Woody Allen, Harold Pinter dirigidos por el Maestro Alezzo. En cortos de Telefe, Roud Muvi de Denis Smiths,Susi premiada en festival. Trabajos en publicidad para La serenísima, Arcor, Gancia, AFIP, Plusbelle, Ford, Pago Fácil. Vídeo clips de Nocheros, Pimpinela, León Gieco. Locuciones para publicidad de Pago Fácil, Ford, Agua Pub. Humor e imitaciones en Radio Palermo, Rock & Pop. Su último trabajo en televisión en la serie Artigas como el general Rondeau</p>
        </div>
    </div>
  )
}

export default Sobremi