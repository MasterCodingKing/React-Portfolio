import './com.css';
import React from 'react';
import IMAGES from './images';
import { Link } from 'react-router-dom';
function Home(){
    return(
        <>
        <div className="container-fluid bg-dark home row col-sm-12 align-items-center text-start">
        
            <div className="container-fluid row">

                <div className="col text-light homeContent col-sm-5  d-flex align-items-start justify-content-center">
                    
                    <h5>Hi, I am CHRISTIAN</h5>
                    <h3>Web Developer</h3>
                    <p>I specialize in front-end development,
                        utillizing the latest technologies such as HTML5, CSS, Javascript to bring ideas to life.
                    </p>
                  <Link to='/service'>  <button className='btn btn-primary'>Learn More</button></Link>
                </div>
                
                <div className="col col-sm-6 pictures">
                    
                    <div className="pic d-flex justify-content-center align-items-center">
                        <img src={IMAGES.picImg} height='800' width='700' alt="" srcSet="" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default function MyHome(){
    return(
        <>
        <Home/>
        </>
    )
}