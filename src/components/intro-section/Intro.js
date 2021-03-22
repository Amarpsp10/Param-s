import React, { Component } from 'react';
import {motion} from 'framer-motion'
import My_image from '../../images/my_image.png'
import Param_Image from '../../images/param-image-left.jpeg'
import './Intro.css'

class Intro extends Component {
    

    render() {
        return(
            <div>
            
            <section  id="intro" className="intro">
             
               <motion.div
                      initial={{x:-500}}
                      animate={{opacity:1,x:0, rotate:360}}s
                      transition={{duration:1,}}
               
               className="profile-image hideme">
                 <img src={My_image} width="330px" alt="here is my profile photo" />
               </motion.div>
      
               <div className="intro-text">
                 <motion.h3 className='hi'
                    initial={{opacity:0,x:-108,}}
                    animate={{opacity:1,x:0,}}
                    transition={{duration:2,repeat:Infinity}}
                 >Hi</motion.h3>
                 <h1>Amar Preet here!</h1>
                 <p>dskl fksdjfkldjsk dskjfd djfkdjakldio sdjsdiojsd</p>
               </div>
      
            </section>

            </div>
        )
    }
}

export default Intro;