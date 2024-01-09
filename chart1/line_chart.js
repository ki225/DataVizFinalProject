let myLineChart = document.getElementById('myLineChart');

d3.json('chart1/data/data.json').then(
    res=>{
        draw_line_chart(res)
    }
);

function unpack(rows, key){
    return rows.map(function(row){
        return row[key];
    });
}

var data_line=[];
var layout_line={};


function draw_line_chart(rows){
    //console.log(rows)
    
    for(i=0;i<all_nm.length;i++){
        var new_trace = {};
        new_trace.type = "scatter";
        new_trace.mode ="lines";
        new_trace.x = [];
        new_trace.y = [];
        
        new_trace.x=unpack(rows,'date');
        for(j=0;j<rows.length;j++){
            new_trace.y.push(rows[j][all_nm[i]]);
        }
        new_trace.name=all_nm[i];
        new_trace.title=all_nm[i];
        data_line.push(new_trace);
        //console.log(new_trace)

    }
    layout_line={
        xaxis: {
            //rangeselector: selectorOptions,
            rangeslider: {}
        },
        yaxis: {
            fixedrange: true
        },
        text: `搜索程度 ${rows[0]['date']}~ ${rows[rows.length-1]['date']}`,
        title:`搜索程度 ${rows[0]['date']}~ ${rows[rows.length-1]['date']}`
    };
    Plotly.newPlot('myLineChart', data_line, layout_line);

}
//console.log(data_line);
    