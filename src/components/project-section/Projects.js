import React,{Component} from 'react'
import './Projects.css'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import backimg1 from '../../images/splash1.jpg'
import backimg2 from '../../images/splash2.jpg'
import backimg3 from '../../images/splash3.jpg'

export default class projects extends Component{



    render(){
        return(
            <div className='body' id="projects">
               
              <Carousel infiniteLoop={true} emulateTouch={true} autoPlay={true} interval={4000} showThumbs={false} className={'slider'}>
              <div>
                    <img src={backimg1} className={'img'}/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={backimg2} className={'img'}/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={backimg3} className={'img'}/>
                    <p className="legend">Legend 3</p>
                </div>
              </Carousel>
            </div>
        );
    }
}