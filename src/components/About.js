import React from 'react';
import aboutUs from '../img/aboutus.jpg'
import john from '../img/john.png';
import jane from '../img/jane.png';

const About = () => {
    return (
        <div>
        <div className="carousel">
            <div className="carousel-image">
                <img src={aboutUs} width="100%" alt="AllStar Cooking"/>
            </div>
            <div className="carousel-caption">
                <div className="caption-wrap">
                    <h1>About Us</h1>
                    <p>AllStar Cooking has been setting the standard for excellence in culinary education since July 2020. With campuses all over the world, we offer cooking classes for students of all ages.</p>
                    <p>Our primary goal is to provide the world's best professional culinary education and enable our students to succeed and excel in the culinary arts.</p>
                </div>
            </div>
        </div>

            <div className="container">
            
                <section id="team">
                    {/* <!-- Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> --> */}
                    <h1 style={{marginTop: "35px"}}>
                        Our Team
                    </h1>
                    <hr className="featurette-divider"></hr>
                    <div className="row featurette">
                        <div className="col-md-7">
                            <h2 className="featurette-heading">John Doe.</h2>
                            <p>Originally from Johndoeland, John discovered a passion and natural skill for cooking at a very young age. He earned his culinary degree at the University of AllStars and has now accumulated over 20 years of professional experience.</p>
                        </div>
                        <div className="col-md-5">
                            {/* <!-- Image obtained from http://clipart-library.com/free/man-silhouette-vector.html --> */}
                            <img className="featurette-image img-fluid mx-auto" src={john} alt="John Doe"/>
                        </div>
                    </div>

                    <hr className="featurette-divider"></hr>

                    <div className="row featurette">
                        <div className="col-md-7 order-md-2">
                            <h2 className="featurette-heading">Jane Smith.</h2>
                            <p>Jane Smith began her culinary career right here at AllStar Cooking. She has over 25 years of experience and specializes in a variety of cuisines.</p>
                        </div>
                        <div className="col-md-5 order-md-1">
                            {/* <!-- Image obtained from https://www.pinterest.ca/pin/534169205776378637/ --> */}
                            <img className="featurette-image img-fluid mx-auto" src={jane} alt="Jane Smith"/>
                        </div>
                    </div>
                </section>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
                <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css"/>
            </div>
        </div>
    )
}

export default About;