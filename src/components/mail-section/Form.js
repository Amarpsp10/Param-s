import React,{Component} from 'react'
import './Form.css'


export default class form extends Component{

    render(){
        return(
            <div className={'form'}>
                <h1 className={'heading'}>Contact Me</h1>

                <div className='inputs'>
                <input className={'input-name'} placeholder={'xyx123@gmail.com'} minlength="1" maxlength="50" type="text" id="name" name="Mail"/>
                <input className={'input-name'} placeholder={'Enter your good Name'} minlength="1" maxlength="20" type="text" id="name" name="Name"/>
                <input className={'input-name'} placeholder={'Subject'} minLength="0" maxLength="80" type="text" id="name" name="Subject"/>
                <textarea className={'input-name message'} name="text" placeholder="Message :)"></textarea>
                </div>
                <button className={'submit'}>Submit</button>
            </div>
        );
    }
}
