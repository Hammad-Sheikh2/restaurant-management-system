import React from "react";
import Chart from "chart.js"
let colors= (num)=>{
    if(num%7==0)
    {
        return "rgb(255, 255, 4)";
    }
    if(num%6==0)
    {
        return " rgb(255, 94, 0)";
    }
    if(num%5==0)
    {
        return "rgb(255, 0, 0)";
    }
    if(num%4==0)
    {
        return "rgb(76, 0, 255)";
    }
    if(num%3==0)
    {
        return "rgb(255, 0, 179)";
    }
    if(num%2==0)
    {
        return "rgb(0, 255, 42)";
    }
    if(num%1==0)
    {
        return "rgb(255, 0, 55)";
    }
}

function Reports (Props) {
    let graph = () => {
        console.log("Graph");
        let myChart = document.getElementById('myChart').getContext('2d');
        // Global Options
        Chart.defaults.global.defaultFontFamily = 'Lato';
        Chart.defaults.global.defaultFontSize = 18;
        Chart.defaults.global.defaultFontColor = '#777';
    
        let massPopChart = new Chart(myChart, {
        type:'doughnut', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
        data:{
            labels:[],
            datasets:[{
            label:'Item Count',
            data:[],
            //backgroundColor:'green',
            backgroundColor:[],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
            }]
        },
        options:{
            title:{
            display:true,
            text:'Category Items Count',
            fontSize:25
            },
            legend:{
            display:true,
            position:'bottom',
            labels:{
                fontColor:'#000'
            }
            },
            layout:{
            padding:{
                left:50,
                right:0,
                bottom:0,
                top:0
            }
            },
            tooltips:{
            enabled:true
            }
        }
        });
        let i=6;
        Props.categories.map((item)=>{
            massPopChart.data.labels.push(item);
            let count=0;
            Props.menu.map((item1)=>{
                if(item1.category===item)
                {
                    count++
                }
            })
            massPopChart.data.datasets[0].data.push(count);
            massPopChart.data.datasets[0].backgroundColor.push(colors(i));
            i++;
        })
        var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if(isMobile)
        {
            massPopChart.options.legend.display=false;
        }
    }
    let graph1 = () => {
        console.log("Graph1");
        let myChart = document.getElementById('myChart1').getContext('2d');
        // Global Options
        Chart.defaults.global.defaultFontFamily = 'Lato';
        Chart.defaults.global.defaultFontSize = 18;
        Chart.defaults.global.defaultFontColor = '#777';
    
        let massPopChart = new Chart(myChart, {
        type:'pie', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
        data:{
            labels:[],
            datasets:[{
            label:'Population',
            data:[],
            //backgroundColor:'green',
            backgroundColor:[],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
            }]
        },
        options:{
            title:{
            display:true,
            text:'Popular Items',
            fontSize:25
            },
            legend:{
            display:true,
            position:"bottom",
            labels:{
                fontColor:'#000'
            }
            },
            layout:{
            padding:{
                left:50,
                right:0,
                bottom:0,
                top:0
            }
            },
            tooltips:{
            enabled:true
            }
        }
        });
        let i=5;
        Props.menu.map((item)=>{
            massPopChart.data.labels.push(item.item);
            massPopChart.data.datasets[0].data.push(item.likes);
            massPopChart.data.datasets[0].backgroundColor.push(colors(i));
            i++;
        })
        var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if(isMobile)
        {
            massPopChart.options.legend.display=false;
        }
        //
    }
    let graph2 = () => {
        console.log("Graph2");
        let myChart = document.getElementById('myChart2').getContext('2d');
        // Global Options
        Chart.defaults.global.defaultFontFamily = 'Lato';
        Chart.defaults.global.defaultFontSize = 18;
        Chart.defaults.global.defaultFontColor = '#777';
    
        let massPopChart = new Chart(myChart, {
        type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
        data:{
            labels:[],
            datasets:[{
            label:'Dislikes',
            data:[],
            //backgroundColor:'green',
            backgroundColor:[],
            borderWidth:2,
            borderColor:'#777',
            hoverBorderWidth:2,
            hoverBorderColor:'#000'
            }]
        },
        options:{
            title:{
            display:true,
            text:'Disliked Items',
            fontSize:25
            },
            legend:{
            display:false,
            position:"bottom",
            labels:{
                fontColor:'#000'
            }
            },
            layout:{
            padding:{
                left:50,
                right:0,
                bottom:0,
                top:0
            }
            },
            tooltips:{
            enabled:true
            }
        }
        });
        let i=1;
        Props.menu.map((item)=>{
            massPopChart.data.labels.push(item.item);
            massPopChart.data.datasets[0].data.push(item.dislikes);
            massPopChart.data.datasets[0].backgroundColor.push(colors(i));
            i++;
        })
        var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if(isMobile)
        {
            massPopChart.options.legend.display=false;
        }
    }
    
    setTimeout(graph,200);
    setTimeout(graph1,200);
    setTimeout(graph2,200);
    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <canvas id="myChart"></canvas>
                </div>
                <div className="col-12">
                    <canvas id="myChart1"></canvas>
                </div>
                <div className="col-12">
                    <canvas id="myChart2"></canvas>
                </div>
            </div>
        </div>
        
    )
}


export default Reports;