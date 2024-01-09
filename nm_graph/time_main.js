let timechart = document.getElementById('timechart');



d3.json('nm_graph/db_server/db.json').then(
    res=>{
        get_json_timedata(res)
        console.log("rows")
    }
);

function get_json_timedata(ddd){
    var rows = ddd.records;
    console.log(rows)

    let time_range = [
        "17:00", "19:00", "21:00", "23:00", "1:00", "3:00"
    ];
    let time_dot = [
        "17", "19", "21", "23", "1", "3"
    ];
    let count = Array(6).fill(0);

    for(let i = 0; i < rows.length; i++){ //一筆一筆data進來
        for(let k = 0; k < time_range.length; k++){
            if(rows[i].time == time_dot[k]){ //確認是哪個時間的data
                let t = k; //時間編號
                
                count[t] += 1; 
            }
        }
    }

    console.log("count", count)

    var trace1 = {
        type: "scatter",
        mode: "lines",
        name: 'Time prefer to go',
        x: time_range,
        y: count,
        line: {color: '#17BECF'}
    }

    let timedata =[];
    timedata.push(trace1);
    console.log(trace1);

    var timelayout = {
        title: 'Nightmarket popular Time',
        titlefont :{
            family: 'Arial',
            size :35,
            color : 'rgb(5,68,123)'
        },
        xaxis:{
            range:time_range,
            tickfont:{
                size :15,
                color : 'rgb (0,0,0)'
            }
        },
        yaxis:{
            tickfont:{
                size :15,
                color : 'rgb (0,0,0)'
            }
        },
        width: 1100,
        height: 1100
    };
    
    Plotly.newPlot(timechart, timedata, timelayout);
}