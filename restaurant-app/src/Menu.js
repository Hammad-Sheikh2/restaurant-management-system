import React, { useState } from "react";
import AddItemInMenu from "./AddItemInMenu";
import "./App.css";
function Menu (props)
{
    let a =false;
    let [isButtonClick,setIsButtonClick]=useState(false);
    let setButtonClickOnOFF =()=>{
        if(a==false)
        {
            a=true;
            setIsButtonClick(true);
        }
        else
        {
            a=false;
            setIsButtonClick(false);
        }
    }

    return (
        <div className="my-5">
            <h1 className="display-1 subheading">Menu</h1>
                {
                    props.categories.map( (item)=>{
                        let i=0;
                        return (
                            <div className="container">
                                <div class="jumbotron text-center" style={{marginBottom:'0'}}>
                                    <h1>{item}</h1> 
                                </div>
                                <div className="row">
                                    {
                                        props.menu.map((item1)=>{
                                            i++;
                                            return ( item1.category===item?(
                                                <div class="col-md-6 col-lg-4 ">
                                                    <div class="card m-3" style={{width: '18rem'}}>
                                                        <img class="card-img-top" style={{height:'430px'}} src={process.env.PUBLIC_URL + item1.image} alt="Card image cap"></img>
                                                        <div class="card-body" style={{textAlign:'left'}}>
                                                            <h5 class="card-title">{item1.item}</h5>
                                                            <h5 class="card-title text-danger">{item1.price} RS</h5>
                                                            <p class="card-text">{item1.description}</p>
                                                            <ul class="ftco-social d-flex">
                                                                <li className=" mx-4" style={{color:'red'}}>{item1.likes}  <i class="far fa-grin-hearts"></i></li>
                                                                <li className=" mx-4" style={{color:'black'}} >{item1.dislikes}  <i class="far fa-thumbs-down"></i></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            ):(<React.Fragment></React.Fragment>))
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }   
            <div>
                <div className="container">
                    <div class="jumbotron text-center" style={{marginBottom:'0'}}>
                        <h1 className="subheading display-1">Add Item</h1> 
                        <button className="btn btn-outline-danger px-5" onClick={()=>{setButtonClickOnOFF()}}>Add</button>
                        {isButtonClick==false?(<React.Fragment></React.Fragment>):(<AddItemInMenu setMenu={props.setHotelMenu}  menu={props.menu} category={props.categories}></AddItemInMenu>)}
                    </div>    
                </div>
            </div>
            
        </div> 
    )
}
export default Menu;