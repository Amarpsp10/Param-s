import React,{Component} from 'react'
import './Edu.css'
import {MdLocationOn} from "react-icons/md";
import test from '../../images/building.jpg';
import uniw from '../../images/uniwindsor-logo.jpg'
import unipu from '../../images/unipu-logo.png'
import stCompany from '../../images/company-logo.png'
export default class edu extends Component{



    render(){
        return(
            <div id='edu'>
               <section className="edu-section">
                  <div>
                  <div class="card card-1">
                      <h2><img className={'uni-logo'} src={uniw} width='50px'/> University of Windsor,2020-2021</h2>
                      <ul className={'info-list'}>
                          <li>
                              Master's degree in automobile engineering
                          </li>
                          <li>
                              CGPA-8.8
                          </li>
                          <li>
                          n general, paragraphs consist of three parts: the topic sentence,
                           body sentences, and the concluding or the bridge sentence to the
                            next paragraph or section. Paragraphs show where the subdivisions
                             of a research paper begin and end and, thus, help the reader see 
                             the organization of the essay and grasp its main points. 
                          </li>
                          <li><a href='https://goo.gl/maps/DuYrdWjw7c2tSazP7' target='_blanck'>
                              <MdLocationOn/>
                              </a>
                              location windsor, canada
                          </li>
                      </ul>
                      <h2><img className={'uni-logo'} src={unipu} width='60px'/> Punjab University,2012-2016</h2>
                      <ul className={'info-list'}>
                          <li>
                              Bachelor's degree in Mechanical engineering
                          </li>
                          <li>
                              CGPA-8.2
                          </li>
                          <li>
                          n general, paragraphs consist of three parts: the topic sentence,
                           body sentences, and the concluding or the bridge sentence to the
                            next paragraph or section. Paragraphs show where the subdivisions
                             of a research paper begin and end and, thus, help the reader see 
                             the organization of the essay and grasp its main points. 
                          </li>
                          <li><a href='https://g.page/PbUniv?share' target='_blanck'>
                              <MdLocationOn/>
                              </a>
                              Punjab University, Chandigarh, India
                          </li>
                      </ul>
                  </div>
                  <div class="card card-1">
                      <h2><img className={'uni-logo'} src={stCompany} width='50px' style={{borderRadius:'50%'}}/> Stellarix Consultancy Services, 2017-2019</h2>
                      <ul className={'info-list'}>
                          <li>
                          Stellarix is a global research and analytics company, with particular focus on the practice of Critical Innovation.
                          </li>
                          <li>
                          n general, paragraphs consist of three parts: the topic sentence,
                           body sentences, and the concluding or the bridge sentence to the
                            next paragraph or section.
                          </li>
                          <li>
                          n general, paragraphs consist of three parts: the topic sentence,
                           body sentences, and the concluding or the bridge sentence to the
                            next paragraph or section.
                          </li>
                          <li>
                          n general, paragraphs consist of three parts: the topic sentence,
                           body sentences, and the concluding or the bridge sentence to the
                            next paragraph or section.
                          </li>
                          <li><a href='https://goo.gl/maps/D5diA1zVXZCssj5k8' target='_blanck'>
                              <MdLocationOn/>
                              </a>
                              Jaipur, India
                          </li>
                      </ul>
                  </div>
                  </div>
               </section>
            </div>
        );
    }
}