import React,{Component} from 'react'
import {animate, motion} from 'framer-motion'
import './Nav.css'
import {MenuItems} from './MenuItems'

import {BsPersonFill,BsEnvelopeFill,BsFillAwardFill,BsBriefcaseFill,BsFillPieChartFill} from 'react-icons/bs'

export default class Nav extends Component{

    state = { 
        activeClassName :'',
     }

    handleClick = (prop) => {
        console.log('here is my props :',prop)
        this.setState({activeClassName:prop});
        
    }

    render(){
        return(
           <motion.nav
              initial={{x:-100}}
              animate={{x:0}}
               transition={{duration:1,}}
              >
               
                <div className={'list'}>       
                                <a 
                                 
                                className={'nav-links'} >
                                  <a href={'#'}>
                                 <BsPersonFill className={this.state.activeClassName==='home' ? 'active-nav-icon nav-icon' : 'nav-icon'}/>   
                                  </a>
                                 <h6 className={'nav-text'}>
                                  Home 
                                 </h6>
                                </a>
                                <a
                               className={'nav-links'} >
                                    <a href={'#edu'}>

                                <BsFillAwardFill href={'#'} className={this.state.activeClassName==='education'? 'active-nav-icon nav-icon' : 'nav-icon'}/>   
                                    </a>
                                <h6 className={'nav-text'}>
                                  Education
                                 </h6> 
                               </a>
                               <a
                               
                              className={'nav-links'} >
                                   <a href={'#'}>

                               <BsBriefcaseFill href={'#'} className={this.state.activeClassName==='projects' ? 'active-nav-icon nav-icon' : 'nav-icon'}/>   
                                   </a>
                               <h6 className={'nav-text'}>
                                  Projects
                                 </h6>  
                              </a>
                              <a
                              
                             className={'nav-links'} >
                                  <a href={'#'}>

                              <BsFillPieChartFill href={'#'} className={this.state.activeClassName==='services' ? 'active-nav-icon nav-icon' : 'nav-icon'}/>   
                                  </a>
                              <h6 className={'nav-text'}>
                                  Services
                                 </h6>  
                             </a>
                             <a
                             
                            className={'nav-links'} >
                                 <a href={'#mail'}>

                             <BsEnvelopeFill href={'#'} className={this.state.activeClassName==='mail' ? 'active-nav-icon nav-icon' : 'nav-icon'}/>   
                                 </a>
                             <h6 className={'nav-text'}>
                                  Mail
                                 </h6> 
                            </a>
                        
                    
                </div>     
           </motion.nav>
        );
    }
}

