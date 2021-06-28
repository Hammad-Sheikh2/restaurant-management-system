import React, { useEffect, useState } from 'react'  
  
function Order(Props) {   
    let [filterCategories,setFilterCategories]=useState(Props.categories);
    let [selectedCategory,setSelectedCategory]=useState("All");
    let [selectedOrder,setSelectedOrder] = useState([]);
    let [totalPrice,setTotalPrice]=useState(0);
    let calculateTotalPrice=()=>{
        let sum=0;
        if( selectedOrder.length!=0)
        {
            selectedOrder.map(item=>{
                sum+=item[2];
            });
        }
        setTotalPrice(sum);
    }
    useEffect(() => {

    }) ;

    return (  
        <div>
            <div class="jumbotron text-center m-5" style={{borderRadius:'20px'}}>
                <h1 className="subheading">Add Order</h1> 
            </div>
            <div className="row container-fluid mt-3" >  
                <div className="col-sm-4 col-md-3 col-lg-3">
                    <div className="input-group">
                        <input className="form-control"  type="text" onChange={(e)=>{
                            let temp=[];
                            for(let i=0; i<Props.categories.length; i++)
                            {
                                if(Props.categories[i].toUpperCase().indexOf(e.target.value.toUpperCase())!=-1)
                                {
                                    temp.push(Props.categories[i]);
                                }
                            }
                            setFilterCategories(temp);
                        }}></input>
                    </div>
                    <div className="ml-3 mt-3" style={{ textAlign:'left',height: '480px', overflowY: 'scroll'}}>
                        <div style={{cursor:'pointer'}} onClick={()=>{
                            setFilterCategories(Props.categories)
                            setSelectedCategory("All")
                        }}>
                            <p><b>All Categories</b></p>
                        </div>
                        {filterCategories.map((item=>{
                            return(
                                <div style={{cursor:'pointer'}} onClick={()=>{
                                    let temp=[];
                                    temp.push(item);
                                    setFilterCategories(temp)
                                    setSelectedCategory(item)
                                }}>
                                    <p><b>{item}</b></p>
                                </div>
                            )
                        }))}
                    </div>
                </div>


                <div className="col-sm-8 col-md-9 col-lg-9">
                    <div className="row mt-3 " style={{ textAlign:'left',height: '450px',overflowY: 'scroll'}}>
                        {
                            selectedCategory==="All"?(
                                Props.menu.map((item)=>{
                                    return(
                                        <div className="col-md-3 col-sm-6">
                                            <div class="card" onClick={()=>{
                                                let isFound=false;
                                                for(let i = 0; i < selectedOrder.length; i++)
                                                {
                                                    if(selectedOrder[i][0]===item.item)
                                                    {
                                                        let tempSelectedOrder=selectedOrder;
                                                        tempSelectedOrder[i][1]++;
                                                        tempSelectedOrder[i][2]=item.price*selectedOrder[i][1];
                                                        setSelectedOrder(tempSelectedOrder);
                                                        i=selectedOrder.length;
                                                        isFound=true;
                                                    }
                                                }
                                                if(isFound==false)
                                                {
                                                    let tempSelectedOrder=selectedOrder;
                                                    let temp = [ "", 1, 0];
                                                    temp[0]=item.item;
                                                    temp[2]=item.price;
                                                    tempSelectedOrder.push(temp);
                                                    setSelectedOrder(tempSelectedOrder);
                                                }
                                                calculateTotalPrice();  
                                            }}>
                                                <img class="card-img-top" src={item.image} style={{height:'150px'}} alt="Card image"></img>
                                                <div class="card-body">
                                                    <h5 class="card-title">{item.item}</h5>
                                                    <p class="card-text">{item.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )  
                                })
                            ):(
                                Props.menu.map((item)=>{
                                    return(
                                        item.category===selectedCategory?(
                                            <div className="col-md-3 col-sm-6">
                                                <div class="card" onClick={()=>{
                                                    let isFound=false;
                                                    for(let i = 0; i < selectedOrder.length; i++)
                                                    {
                                                        if(selectedOrder[i][0]===item.item)
                                                        {
                                                            let tempSelectedOrder=selectedOrder;
                                                            tempSelectedOrder[i][1]++;
                                                            tempSelectedOrder[i][2]=item.price*selectedOrder[i][1];
                                                            setSelectedOrder(tempSelectedOrder);
                                                            i=selectedOrder.length;
                                                            isFound=true;
                                                        }
                                                    }
                                                    if(isFound==false)
                                                    {
                                                        let tempSelectedOrder=selectedOrder;
                                                        let temp = [ "", 1, 0];
                                                        temp[0]=item.item;
                                                        temp[2]=item.price;
                                                        tempSelectedOrder.push(temp);
                                                        setSelectedOrder(tempSelectedOrder);
                                                    }
                                                    calculateTotalPrice();
                                                }}>
                                                    <img class="card-img-top" src={item.image} style={{height:'150px'}} alt="Card image"></img>
                                                    <div class="card-body">
                                                        <h5 class="card-title">{item.item}</h5>
                                                        <p class="card-text">{item.price}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ):(<React.Fragment></React.Fragment>)
                                    )
                                })
                            )
                        }
                    </div>
                </div>


                <div className="col-sm-12 col-md-12 col-lg-12" style={{ textAlign:'left',height: '500px', overflow: 'hidden'}}>
                    <div className="bg-dark mt-1" style={{textAlign:'center',marginBottom:'0px',paddingBottom:'0px'}}>
                        <h1 className="subheading">Bill</h1>
                    </div>
                    <div className="table-responsive">
                        <table class="table" style={{marginTop:'0px',paddingTop:'0px'}}>
                            <thead>
                                <tr className="table-success">
                                    <th>Name</th>
                                    <th>Qty</th>
                                    <th>Price</th>
                                    <th></th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div className="table-responsive" style={{overflowY: 'scroll',height: '310px'}}>
                        <table class="table">
                            <tbody>
                                {   
                                    selectedOrder.length!=0?(
                                        selectedOrder.map((item)=>{
                                            return(
                                                <tr> 
                                                    <th>{item[0]}</th>
                                                    <th><button className="btn btn-outline-danger" onClick={()=>{
                                                        if(item[1]>1)
                                                        {
                                                            item[1]--;
                                                            for(let i=0; i<Props.menu.length; i++)
                                                            {
                                                                if(Props.menu[i].item==item[0])
                                                                {
                                                                    item[2]=Props.menu[i].price*item[1];
                                                                    i=Props.menu.length;
                                                                }
                                                            }
                                                            calculateTotalPrice();
                                                        }
                                                    }}>-</button> {item[1]} <button className="btn btn-outline-success" onClick={()=>{
                                                            item[1]++;
                                                            for(let i=0; i<Props.menu.length; i++)
                                                            {
                                                                if(Props.menu[i].item==item[0])
                                                                {
                                                                    item[2]=Props.menu[i].price*item[1];
                                                                    i=Props.menu.length;
                                                                }
                                                            }
                                                            calculateTotalPrice();
                                                    }}>+</button></th>
                                                    <th>{item[2]}</th>
                                                    <th style={{cursor:'pointer',color:'red'}} onClick={()=>{
                                                        selectedOrder.splice(selectedOrder.indexOf(item),1);
                                                        calculateTotalPrice();
                                                    }}><i class="far fa-times-circle"></i></th>
                                                </tr>
                                            )
                                        })
                                    ):(<React.Fragment></React.Fragment>) 
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="sticky-bottom bg-warning subheading display-4">
                        Total : {totalPrice}
                    </div>
                </div>
                <div className="col-12 mt-3">
                    <button className="p-3 btn btn-danger btn-block" data-toggle="modal" data-target="#myModal" onClick={()=>{
                        let temp=[];
                        temp.push(selectedOrder);
                        temp.push(totalPrice);
                        Props.billsList.push(temp);
                        let tbody="";
                        selectedOrder.map((item)=>{
                            let row="<tr>";
                            row+="<td>"+item[0]+"</td>";
                            row+="<td>"+item[1]+"</td>";
                            row+="<td>"+item[2]+"</td>";
                            row+="</tr>";
                            tbody+=row;
                        })
                        document.getElementById("billItems").innerHTML=tbody;
                        setSelectedOrder([]);
                        setTotalPrice(0);

                    }}>Submit Order</button>
                </div>
                <div className="col-12 mt-3">
                    <button className="p-3 btn btn-dark btn-block" onClick={()=>{
                        let temp=[];
                        temp.push(selectedOrder);
                        temp.push(totalPrice);
                        Props.billsList.push(temp);
                        setSelectedOrder([]);
                        setTotalPrice(0);
                    }}>Print Bill</button>
                </div>
            </div>

            
            <div class="modal" id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content">

                    
                        <div class="modal-header">
                            <h4 class="modal-title subheading">Order Submitted</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>

                        
                        <div class="modal-body" style={{fontFamily:'sans-serif'}}>
                            Order ID is {Props.billsList.length-1}
                            <div className="table" style={{textAlign:'left'}}>
                                <table className="table">
                                    <thead>
                                        <tr className="table-danger">
                                            <th>Name</th>
                                            <th>Qty</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody id="billItems">

                                    </tbody>
                                </table>
                            </div>
                            <p className="subheading display-4">Total {Props.billsList.length==0?0:Props.billsList[Props.billsList.length-1][1]}</p>
                        </div>
                        
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
          
    )  
}  
  
export default Order