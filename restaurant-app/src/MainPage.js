import React from "react";
import "./App.css";
function MainPage ()
{
    return (
        <div id="demo" className="carousel slide" data-ride="carousel">
            <ul className="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" className="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
            </ul>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={process.env.PUBLIC_URL + "/Images/MainPage/slide3.jpg"} alt="Los Angeles" width="100%" height="100%"></img>
                    <div className="carousel-caption">
                        <h1 className="subheading">Best Restaurant</h1>
                        <p>Fresh And Delicious Food Your Health</p>
                    </div>   
                </div>
                <div className="carousel-item">
                    <img src={process.env.PUBLIC_URL + "/Images/MainPage/slide2.jpg"} alt="Chicago" width="100%" height="100%"></img>
                    <div className="carousel-caption">
                        <h1 className="subheading" style={{color:'yellow'}}>Swage</h1>
                        <p>Fresh And Delicious Food Your Health</p>
                    </div>   
                </div>
                <div className="carousel-item">
                    <img src={process.env.PUBLIC_URL + "/Images/MainPage/slide1.jpg"} alt="New York" width="100%" height="100%"></img>
                    <div className="carousel-caption">
                        <h1 className="subheading" style={{color:'#FC9417'}}>Taste</h1>
                        <p>Fresh And Delicious Food Your Health</p>
                    </div>   
                </div>
            </div>
            <a className="carousel-control-prev" href="#demo" data-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next">
                <span className="carousel-control-next-icon"></span>
            </a>
      </div>
    )
}
export default MainPage;