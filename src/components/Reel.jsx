import React from 'react'
import './Reel.css'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import 'bootstrap/dist/css/bootstrap.min.css';





const Reel = () => {
  return (
    <> 

        <div className='container reels'>
        <Tabs defaultActiveKey="reel1" id="uncontrolled-tab-example centered" className="mb-3">
        <Tab eventKey="reel1" title="REEL-1">
            <h2 className='titulo2'>REEL 1</h2>
            <div className="container mx-auto">
                <iframe width="1000" height="562" src="https://www.youtube.com/embed/KCo6z-yXb60" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div> 
        </Tab>
        <Tab eventKey="reel2" title="REEL 2">
            <h2 className='titulo2'>REEL 2</h2>
            <div className="container mx-auto">
                <iframe width="1000" height="562" src="https://www.youtube.com/embed/OBYoz-8YC3s" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div> 
        </Tab>
        <Tab eventKey="reel3" title="REEL 3">
            <h2 className='titulo2'>REEL 3</h2>
            <div className="container mx-auto">
                <iframe width="1000" height="562" src="https://www.youtube.com/embed/QIl6qiG8fpA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div> 
        </Tab>
        <Tab eventKey="reel4" title="REEL 4">
            <h2 className='titulo2'>REEL 4</h2>
            <div className="container mx-auto">
            <iframe width="1000" height="562" src="https://www.youtube.com/embed/V2-pi55aP7g" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </Tab>
        <Tab eventKey="reelaudio" title="REEL AUDIO">
            <h2 className='titulo2'>REEL AUDIO</h2>
            <div className="container mx-auto">
            <iframe width="1000" height="562" src="https://www.youtube.com/embed/V2-pi55aP7g" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </Tab>
        </Tabs>
        </div>
        

        {/* <h2 className='titulo2'>REEL 1</h2>
        <div className="container mx-auto">
            <iframe width="1000" height="562" src="https://www.youtube.com/embed/KCo6z-yXb60" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div> 
        <h2 className='titulo2'>REEL 2</h2>
        <div className="container mx-auto">
            <iframe width="1000" height="562" src="https://www.youtube.com/embed/OBYoz-8YC3s" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div> 
        <h2 className='titulo2'>REEL 3</h2>
        <div className="container mx-auto">
            <iframe width="1000" height="562" src="https://www.youtube.com/embed/QIl6qiG8fpA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div> 
        <h2 className='titulo2'>REEL 4</h2>
        <div className="container mx-auto">
            <iframe width="1000" height="562" src="https://www.youtube.com/embed/V2-pi55aP7g" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>  */}

        
        
        
    </>
  )
}

export default Reel