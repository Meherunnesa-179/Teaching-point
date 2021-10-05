import React from 'react';
import Header from '../../Components/Header/Header';
import image1 from '../../Images/programmer.jpg';
import image2 from '../../Images/ui-ux.jpg'
import image3 from '../../Images/web-development.jpg'

const Home = () => {
    return (
        <div>
             <Header/>
                <h1 className="text-center text-danger m-5"><u>Featured Course</u></h1>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 g-4  m-4">
                        <div className="col ">
                            <div className="card h-100 border-2 rounded-3 text-center ">
                                <img src={image1} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                        <h4 className="card-title">JavaScript</h4>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                        </p>
                                        </div>
                                </div>
                            </div>
                        <div className="col ">
                            <div className="card h-100 border-2 rounded-3 text-center ">
                                <img src={image2} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                        <h4 className="card-title">React with Fun</h4>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                        </p>
                                        </div>
                                </div>
                            </div>
                        <div className="col ">
                            <div className="card h-100 border-2 rounded-3 text-center ">
                                <img src={image3} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                        <h4 className="card-title"> Spoken English</h4>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                        </p>
                                        </div>
                                </div>
                            </div>
                       </div>
                 </div>
         </div>
    );
};

export default Home;