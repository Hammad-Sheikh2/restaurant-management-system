import './App.css';
import React,{useState} from "react";
import MainPage from "./MainPage";
import Menu from "./Menu";
import Order from './Order';
import Reports from "./Reports"


let restaurantMenu=[
  {
    item : "Burger",
    price : 250,
    description: "A Burger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun. The patty may be pan fried, grilled, smoked or flame broiled.",
    image : "/Images/Menu/burger.jpg",
    category : "FastFood",
    likes : 178,
    dislikes :5
  },
  {
    item : "PizzaBurger",
    price : 250,
    description: "A Burger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun. The patty may be pan fried, grilled, smoked or flame broiled.",
    image : "/Images/Menu/burger1.jpg",
    category : "FastFood",
    likes : 100,
    dislikes :3
  },
  {
    item : "Pizza",
    price : 1500,
    description: "Pizza is a savory dish of Italian origin consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven. A small pizza is sometimes called a pizzetta.",
    image : "/Images/Menu/pizza.jpg",
    category : "FastFood",
    likes : 258,
    dislikes :7
  },
  {
    item : "Fish",
    price : 1000,
    description: "Many species of fish are consumed as food in virtually all regions around the world. Fish has been an important source of protein and other nutrients for humans throughout history.",
    image : "/Images/Menu/fish.jpg",
    category : "Desi",
    likes : 178,
    dislikes :5
  },
  {
    item : "Hurricane Drink",
    price : 250,
    description: "The hurricane is an iconic tropical cocktail that you should know how to make. It is a fun rum-filled drink that includes the captivating pairing of passion fruit and orange juices.",
    image : "/Images/Menu/hurricane.jpg",
    category : "Drinks",
    likes : 100,
    dislikes :3
  },
  {
    item : "Coke Cola",
    price : 80,
    description: "Coca-Cola, or Coke, is a carbonated soft drink manufactured by The Coca-Cola Company.",
    image : "/Images/Menu/cokecola.png",
    category : "Drinks",
    likes : 100,
    dislikes :3
  },
  {
    item : "Biryani",
    price : 220,
    description: "Biryani (/ b ɜːr ˈ j ɑː n i /) is a mixed rice dish with its origins among the Muslims of the Indian subcontinent. It is made with Indian spices, rice, and meat (chicken, beef, goat, pork, lamb, prawn, or fish), and sometimes, in addition, eggs and/or potatoes in certain regional varieties.",
    image : "/Images/Menu/biryani.jpg",
    category : "Desi",
    likes : 258,
    dislikes :7
  },{
    item : "Chicken",
    price : 600,
    description: "The best roast chicken has garlic herb butter under and on the skin, is stuffed with lemon and herbs, roasted until it’s crispy and deep golden on the outside, and juicy on the inside. It’s really easy to prepare a whole chicken for roasting.",
    image : "/Images/Menu/chicken.jpg",
    category : "Desi",
    likes : 258,
    dislikes :7
  }
];
let categories=[
  "FastFood",
  "Desi",
  "Drinks"
];

let billsList=[];

function App() {
  let [hotelMenu,setHotelMenu]=useState(restaurantMenu);
  let [menu,setMenu]=useState("Home");
  return (
    <div className="App custom-scrollbar">
      <nav className="navbar navbar-expand-md navbar-light shadow-sm">
          <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                <ul className="navbar-nav mr-auto">
                    <li style={{cursor:'pointer'}} className="nav-item nav-link">
                        <i className="fas fa-phone-alt"></i> 032.897.345
                    </li>
                    <li style={{cursor:'pointer'}} className="nav-item nav-link">
                        <i className="far fa-clock"></i> 08:00 - 16:00
                    </li>
                </ul>
          </div>
          <div className="mx-auto order-0">
                <p className="navbar-brand mx-auto" style={{cursor:'pointer', borderTop: '#DC3545 3px solid', borderBottom:  '#DC3545 3px solid', color:'#DC3545'}} onClick={()=>{setMenu("Home")}}>Restaurant Management System (RMS)</p>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                  <span className="oi oi-menu"></span> Contact
                </button>
          </div>
          <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item nav-link" style={{cursor:'pointer'}}>
                        <i className="fas fa-gem"></i> Shop
                    </li>
                    <li className="nav-item nav-link" style={{cursor:'pointer'}}>
                        <i className="far fa-user"></i> My Account
                    </li>
                    <li className="nav-item nav-link" style={{cursor:'pointer'}}>
                        <i className="fas fa-shopping-cart"></i> Cart
                    </li>
                </ul>
          </div>
      </nav>

      <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-danger ftco-navbar-light" id="ftco-navbar">
        <div className="container mt-3">
          <p className="navbar-brand subheading" style={{fontSize:'30px',cursor:'pointer'}} onClick={()=>{setMenu("Home")}}>Taste.<span>it</span></p>
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="oi oi-menu"></span> Menu
          </button>
          <div className="navbar-collapse collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item" style={{cursor:'pointer'}}><p className="nav-link" onClick={()=>{setMenu("Home")}}>Home</p></li>
              <li className="nav-item" style={{cursor:'pointer'}}><p className="nav-link"onClick={()=>{setMenu("Menu")}}>Menu</p></li>
              <li className="nav-item" style={{cursor:'pointer'}}><p  className="nav-link"onClick={()=>{setMenu("Order")}}>Order</p></li>
              <li className="nav-item" style={{cursor:'pointer'}}><p  className="nav-link"onClick={()=>{setMenu("Reports")}}>Reports</p></li>
            </ul>
          </div>
        </div>
      </nav>

      {menu==="Home"?(<MainPage></MainPage>):(<React.Fragment></React.Fragment>)}
      {menu==="Menu"?(<Menu menu={hotelMenu} setHotelMenu={setHotelMenu} categories={categories} ></Menu>):(<React.Fragment></React.Fragment>)}
      {menu==="Order"?(<Order categories={categories} menu={hotelMenu} billsList={billsList}billsList={billsList}></Order>):(<React.Fragment></React.Fragment>)}
      {menu==="Reports"?(<Reports menu={hotelMenu} categories={categories} billsList={billsList}></Reports>):(<React.Fragment></React.Fragment>)}

      <section id="chef" className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-7 text-center heading-section">
              <span className="subheading display-3">Chefs</span>
              <h2 className="mb-4">Our Master Chefs</h2>
            </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-3 ">
                <div className="card m-3" style={{width: '18rem'}}>
                  <img className="card-img-top" style={{height:'430px'}} src={process.env.PUBLIC_URL + "/Images/MainPage/Chefs/ceo.jpg"} alt="CardImageCap"></img>
                  <div className="card-body" style={{textAlign:'left'}}>
                    <h5 className="card-title">CEO, Co Founder</h5>
                    <p className="card-text">I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                    <ul className="ftco-social d-flex">
                        <li className="ftco-social-list-item" style={{color:'skyblue'}}><span className="fab fa-twitter"></span></li>
                        <li className="ftco-social-list-item" style={{color:'blue'}}><span className="fab fa-facebook"></span></li>
                        <li className="ftco-social-list-item" style={{color:'red'}}><span className="fab fa-google-plus"></span></li>
                        <li className="ftco-social-list-item" style={{color:'purple'}}><span className="fab fa-instagram"></span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 ">
                <div className="card m-3" style={{width: '18rem'}}>
                  <img className="card-img-top" style={{height:'430px'}} src={process.env.PUBLIC_URL + "/Images/MainPage/Chefs/headChef.jpg"} alt="CardImageCap"></img>
                  <div className="card-body" style={{textAlign:'left'}}>
                    <h5 className="card-title">Head Chef</h5>
                    <p className="card-text">I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                    <ul className="ftco-social d-flex">
                        <li className="ftco-social-list-item" style={{color:'skyblue'}}><span className="fab fa-twitter"></span></li>
                        <li className="ftco-social-list-item" style={{color:'blue'}}><span className="fab fa-facebook"></span></li>
                        <li className="ftco-social-list-item" style={{color:'red'}}><span className="fab fa-google-plus"></span></li>
                        <li className="ftco-social-list-item" style={{color:'purple'}}><span className="fab fa-instagram"></span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 ">
                <div className="card m-3" style={{width: '18rem'}}>
                  <img className="card-img-top" style={{height:'430px'}} src={process.env.PUBLIC_URL + "/Images/MainPage/Chefs/chefCook.jpg"} alt="CardImageCap"></img>
                  <div className="card-body" style={{textAlign:'left'}}>
                    <h5 className="card-title">Chef Cook</h5>
                    <p className="card-text">I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                    <ul className="ftco-social d-flex">
                        <li className="ftco-social-list-item" style={{color:'skyblue'}}><span className="fab fa-twitter"></span></li>
                        <li className="ftco-social-list-item" style={{color:'blue'}}><span className="fab fa-facebook"></span></li>
                        <li className="ftco-social-list-item" style={{color:'red'}}><span className="fab fa-google-plus"></span></li>
                        <li className="ftco-social-list-item" style={{color:'purple'}}><span className="fab fa-instagram"></span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 ">
                <div className="card m-3" style={{width: '18rem'}}>
                  <img className="card-img-top" style={{height:'430px'}} src={process.env.PUBLIC_URL + "/Images/MainPage/Chefs/chefCook1.jpg"} alt="CardImageCap"></img>
                  <div className="card-body" style={{textAlign:'left'}}>
                    <h5 className="card-title">Chef Cook</h5>
                    <p className="card-text">I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                    <ul className="ftco-social d-flex">
                        <li className="ftco-social-list-item" style={{color:'skyblue'}}><span className="fab fa-twitter"></span></li>
                        <li className="ftco-social-list-item" style={{color:'blue'}}><span className="fab fa-facebook"></span></li>
                        <li className="ftco-social-list-item" style={{color:'red'}}><span className="fab fa-google-plus"></span></li>
                        <li className="ftco-social-list-item" style={{color:'purple'}}><span className="fab fa-instagram"></span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>






      <footer id="About" className="ftco-footer">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6 col-lg-3">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Taste.it <i className="fas fa-utensils" style={{color:'#313131'}}></i></h2>
                <p className="text-dark">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</p>
                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-3">
                  <li className="ftco-animate fadeInUp ftco-animated"><span className="fab fa-twitter"></span></li>
                  <li className="ftco-animate fadeInUp ftco-animated"><span className="fab fa-facebook-f"></span></li>
                  <li className="ftco-animate fadeInUp ftco-animated"><span className="fab fa-instagram"></span></li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Open Hours <i className="far fa-clock" style={{color:'#313131'}}></i></h2>
                <table className="opened">
                  <tbody>
                    <tr>
                      <td>Monday</td>
                      <td className="text-dark">9:00 - 24:00</td>
                    </tr>
                    <tr>
                      <td>Tuesday</td>
                      <td className="text-dark">9:00 - 24:00</td>
                    </tr>
                    <tr>
                      <td>Wednesday</td>
                      <td className="text-dark">9:00 - 24:00</td>
                    </tr>
                    <tr>
                      <td>Thursday</td>
                      <td className="text-dark">9:00 - 24:00</td>
                    </tr>
                    <tr>
                      <td>Friday</td>
                      <td className="text-dark">9:00 - 02:00</td>
                    </tr>
                    <tr>
                      <td>Saturday</td>
                      <td className="text-dark">9:00 - 02:00</td>
                    </tr>
                    <tr>
                      <td>Sunday</td>
                      <td className="text-dark">Closed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Instagram <i className="fab fa-instagram" style={{color:'#313131'}}></i></h2>
                <div className="thumb d-sm-flex">
                  <img className="thumb-menu img" src={process.env.PUBLIC_URL + "/Images/MainPage/thumb1.png"}></img>
                  <img className="thumb-menu img" src={process.env.PUBLIC_URL + "/Images/MainPage/thumb2.png"}></img>
                  <img className="thumb-menu img" src={process.env.PUBLIC_URL + "/Images/MainPage/thumb5.png"}></img>
                </div>
                <div className="thumb d-flex">
                  <img className="thumb-menu img" src={process.env.PUBLIC_URL + "/Images/MainPage/thumb3.png"}></img>
                  <img className="thumb-menu img" src={process.env.PUBLIC_URL + "/Images/MainPage/thumb4.png"}></img>
                  <img className="thumb-menu img" src={process.env.PUBLIC_URL + "/Images/MainPage/thumb6.png"}></img>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Newsletter <i className="far fa-newspaper" style={{color:'#313131'}}></i></h2>
                <p className="text-dark">Far far away, behind the word mountains, far from the countries.</p>
                <div className="form-group">
                    <input type="text" className="form-control mb-2 text-center" style={{backgroundColor:'#313131', border:'none' }} placeholder="Enter email address"></input>
                    <input type="submit" value="Subscribe" className="form-control submit px-3" style={{backgroundColor:'#E52B34', border:'none',color:'white' }} ></input>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid px-0 bg-danger py-3">
          <div className="row no-gutters">
            <div className="col-md-12 text-center">
              <p className="mb-0 text-white">
                Copyright ©<script>document.write(new Date().getFullYear());</script>2021 All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a className="text-white" href="#" target="_blank">H Production</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
