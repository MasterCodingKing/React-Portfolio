import React from "react";
import IMAGES from './images';
function AboutUS(){
    return(
        <>
            
            <div className="container-fluid col-sm-12 text-light d-flex justify-content-center bg-dark">
                <div className="container row col-sm-10 row d-flex fd-row">
                    <div className="col-sm-6 row mb-5 rounded mypic">
                        <img src={IMAGES.picMe} alt="" srcSet=""  height={550} />
                    </div>
                    <div className="details col-sm-6">
                        <div className="aboutMe text-start">
                            <h2>About Me</h2>
                            <p>I'm Christian Julius Bonaobra, a passionate and dedicated front-end developer hailing from the beautiful town of Canaway in Malilipot Albay. With a Bachelor's degree in Science and Computer Science from Dr. Ruby Lanting Casaul Educational Foundation Incorporated, I specialize in front-end development, utillizing the latest technologies such as HTML5, CSS, Javascript to bring ideas to life. Thankyou for visiting my porfolio website. Please take a look at my projects to get glimpse of my work and experties.</p>
                            <div className="background d-flex gap-4 f-wrap">
                                <div className="btn-group dropend">
                                        <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"> Skills</button>
                                            <ul className="dropdown-menu bg-dark text-light text-start">
                                            <li>Web Development</li>
                                                <li>UI/UX Principles </li>
                                                <li>Programming Language
                                                    <p>HTML, CSS, and JAVASCRIPT</p>
                                                    <p>GIT/GITHUB</p>
                                                    <p>Basic Python</p>
                                                    <p>Basic React</p>
                                                    <p>Bootstrap</p>
                                                </li>
                                            </ul>
                                </div>
                                <div className="btn-group dropend">
                                        <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Experience </button>
                                                <ul className="dropdown-menu bg-dark text-light">
                                                <li>Web Developer Intern
                                                    <p>LCC MAll, Tabaco</p>
                                                </li>
                                                <li>Thesis
                                                    <p><i>The Development of Fire Detection and Response System Using Arduino</i></p>
                                                </li> 
                                                </ul>
                                </div>
                                <div className="btn-group dropend">
                                        <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Educational</button>
                                        <ul className="dropdown-menu bg-dark text-light">
                                        <li>Bachelor of Science and Computer Science
                                            <p><i>Dr. Ruby Lanting-Casaul Educational Foundation Inc.</i></p>
                                            </li>
                                        </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutUS;