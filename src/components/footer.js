import React from "react";
function Footer(){
    
    return(
        <>

            <div className="contaier-fluid footer d-flex justify-content-center">
                <div className="container contacts row col-sm-12 ">
                    <div className="details col-sm-6 text-light text-start">
                        <h2>Contacts</h2>
                        <div className="d-flex flex-column mb-3">
                        <i className="bi bi-geo-alt-fill">  Zone 5 Canaway Malilipot Albay</i>
                            <i className="bi bi-telephone">   09462802364</i>
                            <i className="bi bi-envelope"> christianjuliusbonaobra7@gmail.com</i>
                        </div>
                    </div>
                    <div className="details col-sm-6 text-start">
                        <div className="gap-2 text-light text d-flex  mb-3 ">
                                    <i className="bi bi-facebook"></i>
                                    <i className="bi bi-linkedin"></i>
                                    <i className="bi bi-github"></i>
                        </div>
                       <a href="https://drive.google.com/file/d/1PXgFC_ILzDmvLqHIRBq6tRUrh5K4MyP5/view?usp=sharing"> <button className="btn btn-info">Download My Resume</button></a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;