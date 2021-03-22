import React, { Component } from 'react';
import {motion} from 'framer-motion'
import My_image from '../../images/my_image.png'
import Param_Image from '../../images/param-image-left.jpeg'
import Param_profile from '../../images/param-profile.png'
import './Intro.css'

class Intro extends Component {
    

    render() {
        return(
            <div className={'div'}>
            
            <section  id="intro" className="intro">
               <motion.div
                      initial={{x:-500}}
                      animate={{opacity:1,x:0, rotate:360}}s
                      transition={{duration:1,}}
                      
                      className="profile-image hideme">
                 <img src={Param_profile} width="350px" alt="here is my profile photo" />
               </motion.div>
      
               <div className="intro-text">
                 <motion.h6 className='hi'
                    initial={{opacity:0,x:-108,}}
                    animate={{opacity:1,x:0,}}
                    transition={{duration:2,}}
                    >Hi...
                 </motion.h6>
                 <h1>Amar Preet here!</h1>
                 <p className='para'>dskl fksdjfkldjsk dskjfd djfkdjakldio sdjsdiojsd sdlka dsdkl sd sdf sd fsdaf ds gsd gd sagfas glsdhjkafhjkashdkf sdkjfhkdsj dskljfkla lfkasdjklfjaskl klsdjflk </p>
                 <button className={'button-resume'}>DOWNLOAD RESUME</button>
               </div>
            
      
            </section>

            </div>
        )
    }
}

export default Intro;