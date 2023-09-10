import './com.css';
import React from 'react';
import IMAGES from './images';

function Service(){
   
    return(
        <>
            <div className="container-fluid service-con col-sm-12 bg-dark">
                <div className="row text-light">
                    <div className="services row  col-sm-12">
                        <div className="service row col-sm-12 d-flex justify-content-center align-items-center">
                            <div className="details col-sm-4 text-start">
                                <h2>Services</h2>
                                <p>Fresh Graduate Offering Web Development and UX Design Services! Specializing in crafting responsive websites using HTML, CSS, and JavaScript, while also creating intuitive user experiences through wireframing and prototyping. </p>
                            </div>
                            <div className=" offer webDeveloper col-sm-4 d-flex justify-content-center align-items-center">
                                <h4>Web Developer</h4>
                                <p>Crafting Captivating user experiences through innovative frontend development.</p>
                            </div>
                             <div className=" offer webDeveloper col-sm-4 d-flex justify-content-center align-items-center">
                                <h4>UI/UX Designer</h4>
                                <p>Designing seamless and virtually appealing interfaces for exceptional user experiences.</p>
                            </div>
                            <div className="details col-sm-4 text-start">
                             <p> Let's collaborate to transform your ideas into impactful digital solutions that captivate and convert.</p>
                            </div>
                        </div>
                    </div>
                    <div className="projecs  row col-sm-12 d-flex justify-content-center my-4 align-items-center">
                            <div className="details col-sm-4 text-start">
                                        <h2>Projects</h2>
                                        <p>I'm excited to present my portfolio that showcases my journey into the world of web development. Through a blend of HTML, CSS, and JavaScript, I've crafted projects that highlight both my technical skills and creative approach to modern web design. Join me in exploring these creations that reflect the enthusiasm and dedication I bring to the field as a fresh graduate.</p>
                             </div>
                        <div className="projects row col-sm-6 d-flex justify-content-center align-items-center gap-4">
                            <div className="pic1">
                                <div className="backPicProject" data-text="Dive into a game of Scissor-paper-rock with my HTML, CSS, and JAVASCRIPT-powered interactive fun!."></div>
                                <div className="picProjects">
                                    <a href="https://mastercodingking.github.io/Rock-Paper-Scissor/"><img src={IMAGES.picRock} alt="" srcSet=""  height='200' width='200'/></a>
                                </div>
                            </div>
                            <div className="pic1">
                                <div className="backPicProject" data-text="Enjoy classic tic-tak-toe excitement!Play With friends in my HTML, CSS, and JAVASCRIPT game."></div>
                                <div className="picProjects">
                                    <a href="https://mastercodingking.github.io/calculator/"><img src={IMAGES.picTik} width='200' height='200' alt="" srcSet="" /></a>
                                  
                                </div>
                            </div>
                            <div className="pic1">
                                <div className="backPicProject" data-text="Turn your chaos into order with my quirky to-do list game! Powered by HTML, CSS, and JAVASCRIPT magic."></div>
                                <div className="picProjects">
                                   <a href="https://mastercodingking.github.io/todoList/"><img src={IMAGES.picTodo} alt="" height='200' width='200' srcSet="" /></a>
                                </div>
                            </div>
                            <div className="pic1">
                                <div className="backPicProject" data-text="A HTML and CSS scoring board is a web-based tool designed to track scores in games and competitions, offering an intuitive interface for displaying and updating scores. Its adaptable design makes it suitable for a wide range of activities, from sports events to board games."></div>
                                <div className="picProjects">
                                    <a href="https://mastercodingking.github.io/Score-board/"><img src={IMAGES.picScoring} alt="" height='200' width='200' srcSet="" /></a>
                                </div>
                            </div>
                            <div className="pic1">
                                <div className="backPicProject" data-text="This digital calculator, created with HTML, CSS, and JavaScript, enables users to perform arithmetic operations effortlessly, providing a user-friendly and efficient tool for mathematical calculations."></div>
                                <div className="picProjects">
                                    <a href="https://mastercodingking.github.io/digital-calculator/"><img src={IMAGES.picDigit} alt="" height='200' width='200' srcSet="" /></a>
                                </div>
                            </div>
                            <div className="pic1">
                                <div className="backPicProject" data-text="This emoji survey, designed with HTML, CSS, and JavaScript, offers an engaging and visual way for users to share their feelings and opinions through expressive emojis, enhancing user interaction and feedback collection.">
                                </div>
                                <div className="picProjects">
                                   <a href="https://pretentious-web.000webhostapp.com/index.php"> <img src={IMAGES.picEmoji} alt="" height='200' width='200' srcSet="" /></a>
                                </div>
                            </div>
                            <div className="pic1">
                            <div className="backPicProject" data-text="The travel order slip is a document used to request, authorize, or record travel-related details and expenses, facilitating organized and accountable travel arrangements within an organization or for personal use.">
                            </div>
                                <div className="picProjects">
                                    <a href=" https://epicyclic-crystals.000webhostapp.com/admin-index.php"><img src={IMAGES.picTravel} alt="" height='200' width='200' srcSet="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default function MyService(){
    return(
        <>
            <Service/>
        </>
    )
}