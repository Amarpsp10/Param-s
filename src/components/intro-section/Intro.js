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
                      initial={{x:-500,}}
                      animate={{opacity:1,x:0,rotate:360}}s
                      transition={{duration:1,}}
                      
                      className="profile-image hideme">
                 <img src={Param_profile} width="350px" alt="here is my profile photo" />
               </motion.div>
      
               <div className="intro-text">

                 <motion.h6 className='hi'
                    initial={{opacity:0,x:-108,}}
                    animate={{opacity:1,x:0,}}
                    transition={{duration:2,}}
                    >Hi...<br/>
                    Paramveer Singh here.<br/>
                    <span>
                    Research Analyst
                    </span>
                 </motion.h6>
                 <p className='para'>
                    Analysing the information for patterns and valuable results such as sales patterns,
                     examining any feedback from clients and making notes of any issues that must be addressed
                     like improving products.
                     </p>
                 <button className={'button-resume'}>DOWNLOAD RESUME</button>
                 <div class="social">
                     <ul className='social-media-list'>
                        {/* <li className='icon-back'>
                           <a className={'media-links'} href="https://github.com/Amarpsp10" target="blank"><i class="fab fa-github icon"></i></a>
                        </li> */}
                        <li>
                           <a className={'media-links'} href="https://www.facebook.com/profile.php?id=100005814643971" target="blank"><i class="fab fa-facebook-f icon"></i>    </a>
                        </li>
                        {/* <li>
                           <a className={'media-links'} href="https://twitter.com/Amarpsp10?s=09" target="blank"><i class="fab fa-twitter icon"></i></a>
                        </li> */}
                        <li>
                           <a className={'media-links'} href="http://linkedin.com/in/paramveer-singh-0a15b011a/" target="blank"><i class="fab fa-linkedin-in icon"></i></a></li>
                        <li>
                           <a className={'media-links'} href="https://www.instagram.com/paramveer_s7/" target="blank"><i class="fab fa-instagram icon"></i></a>
                        </li>
                       </ul>
                </div>
               </div>
            
      
            </section>

            </div>
        )
    }
}

export default Intro;