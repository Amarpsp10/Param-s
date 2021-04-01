import React,{Component} from 'react'
import './Edu.css'
import test from '../../images/building.jpg'
import uniw from '../../images/uniwindsor-logo.jpg'
import unipu from '../../images/unipu-logo.png'
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
                              Masters in automobile engineering
                          </li>
                          <li>
                              CGPA-8.8
                          </li>
                          <li>
                              location windsor, canada
                          </li>
                      </ul>
                      <h2><img className={'uni-logo'} src={unipu} width='60px'/> Punjab University,2013-2017</h2>
                      <ul className={'info-list'}>
                          <li>
                              Bachlors in Mechanical engineering
                          </li>
                          <li>
                              CGPA-8.2
                          </li>
                          <li>
                              location windsor, canada
                          </li>
                      </ul>
                  </div>
                  <div class="card card-1">
                      <h2>hello</h2>
                      <p>helkdskljfksdjklj</p>
                      <p>sldkjfk</p>
                  </div>
                  </div>
               </section>
            </div>
        );
    }
}