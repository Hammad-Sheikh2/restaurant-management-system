import React from "react";
import $ from "jquery"
function AddItemInMenu (Props) {

    return(
        <React.Fragment>
            <div class="input-group input-group-lg mt-3">
                <span class="input-group-text px-3" id="inputGroup-sizing-lg"><i class="fas fa-signature"></i>Item Name  </span>
                <input id="itemName" type="text" class="form-control"  aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"></input>
            </div>
            <div class="input-group input-group-lg mt-3">
                <span class="input-group-text px-3" id="inputGroup-sizing-lg"><i class="fas fa-dollar-sign"></i>Item Price  </span>
                <input id="itemPrice" type="number" class="form-control"  aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"></input>
            </div>
            <div class="input-group mt-3">
                <span class="input-group-text px-3"><i class="fas fa-prescription-bottle-alt"></i>Description</span>
                <textarea id="itemDescription" class="form-control" aria-label="With textarea"></textarea>
            </div>
            <div class="input-group input-group-lg mt-3">
                <span class="input-group-text px-3" id="inputGroup-sizing-lg"><i class="fas fa-tag"></i>Item Category  </span>
                <select id="itemCategory" class="form-control" aria-label="Default select example">
                    {
                        Props.category.map((item)=>{
                            return(
                                <option value={item}>{item}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div class="input-group  mt-3">
                <input type="file" class="form-control" id="inputGroupFile02" ></input>
                <label class="input-group-text" for="inputGroupFile02">Upload</label>
            </div>
            <div className="mt-3 d-flex flex-start">
                <img src="https://placehold.it/250x480" id="preview" class="img-thumbnail" alt="General"></img>
            </div>
            <div id ="alert" className="mt-3"></div>
            <button className="btn btn-dark mt-3 px-5" onClick={()=>{
                if(document.getElementById("itemName").value===""||document.getElementById("itemPrice").value===""||document.getElementById("itemDescription").value==="")
                {
                    document.getElementById("alert").innerHTML='<div class="alert alert-danger alert-dismissible fade show"><button type="button" class="close" data-dismiss="alert">&times;</button><strong>INFORMATION!</strong> is Incomplete.</div>'
                }
                else
                {
                    let x = Props.menu.concat({
                        item : document.getElementById("itemName").value,
                        price : document.getElementById("itemPrice").value,
                        description: document.getElementById("itemDescription").value,
                        image : "/Images/Menu/general.jpg",
                        category : document.getElementById("itemCategory").value,
                        likes : 0,
                        dislikes :0
                    });
                    $.ajax({
                        url:"http://localhost:8080/ReactAppServletsServerSide_war/dbHandler",
                        type:"POST",
                        data:{
                            action:"AddItem",
                            ItemName:document.getElementById("itemName").value,
                            itemDescription:document.getElementById("itemDescription").value,
                            itemCategory:document.getElementById("itemCategory").value,
                            itemPrice:document.getElementById("itemPrice").value,
                            itemLikes:0,
                            itemDislikes:0
                        },
                        success:(data)=>{
                            console.log(data);
                        },
                        failure:(error)=>{
                            console.log("Error on getting all Data",error);
                        }
                    })
                    Props.setMenu(x);
                    document.getElementById("itemName").value="";
                    document.getElementById("itemPrice").value="";
                    document.getElementById("itemDescription").value="";
                    document.getElementById("alert").innerHTML='<div class="alert alert-success alert-dismissible fade show"><button type="button" class="close" data-dismiss="alert">&times;</button><strong>ADDED!</strong> Menu Item to Menu.</div>'
                }
            }}>Add Item In Menu</button>
        </React.Fragment>
    )
}


export default AddItemInMenu;
