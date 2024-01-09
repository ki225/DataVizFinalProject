let myGraph=document.getElementById('myDiv');
let myGraph_pie=document.getElementById('myPieDiv');


function unpack(rows, key){
    return rows.map(function(row){
        return row[key];
    });
}

d3.json('chart1/data/data02.json').then(
    res=>{
        get_json_data(res)//coordinates
        
        /*
        d3.json('chart1/data/nm_coordinate.json').then(
            coordinates=>{
                
                
            }
        );
        */
        //get_json_data(res)
        //year+=1;
        
    }
);

function get_data_num(){
    d3.json(dataURL).then(
        raw_data=>{
            var data_num=raw_data.length
            document.getElementById('data_num').innerHTML = data_num;
        }
    )
    
}



function get_json_data(rows){//coordinates
    
     
        let trace_pie={
            type: "pie",
            values: [],
            labels: [],
            textinfo: "label+percent",
            textposition: "inside",
            automargin: true,
            //marker: {
            //    color:[],
            //},
  
        }
        let trace_bubble={
            text:[],
            label:[],
            type: "scattermapbox",
            mode: 'markers+text',
            
            marker: {
                color:color_set,
                size: []
            },
            lon: [], 
            lat: [],
        }
        
    
        for(let j=0;j<all_nm.length;j++){ // j= night market
            //console.log(coordinates[all_nm[j]])
            //console.log(11.11111)
            //console.log(typeof corordinates_lat[0])
            //var co_lon = coordinates[0][all_nm[0]].lon
            //var co_lat = coordinates[0][all_nm[0]].lat
            
            //trace_bubble.lon.push(co_lon);
            //console.log(coordinates_list[0][0])
            //trace_bubble.lat.push(co_lat);
            trace_bubble.lat.push(corordinates_lat[j]);
            trace_bubble.lat.push(corordinates_lon[j]);
     
            trace_bubble.marker.size.push(5*Math.sqrt(rows[0][all_nm[j]]));
            trace_pie.values.push(rows[0][all_nm[j]]);
            trace_pie.labels.push(all_nm[j]);
         
            label_=all_nm[j]+rows[0][all_nm[j]];
            trace_bubble.text.push(label_);
        }
        data_pie = [trace_pie];
        data=[trace_bubble];

        var layout_pie = {
            //title: 'night markets in Taiwan '+ rows[year].date,
            height: 450,
            width: 450,
            margin: {"t": 0, "b": 0, "l": 0, "r": 0},
            showlegend: false
        }
        var layout = {
            title: 'night markets in Taiwan '+ rows[0].date,
            showlegend: false,
            xaxis: {
                autorange: true,
                showgrid: false,
                zeroline: false,
                showline: false,
                autotick: true,
                ticks: '',
                showticklabels: false
              },
              yaxis: {
                autorange: true,
                showgrid: false,
                zeroline: false,
                showline: false,
                autotick: true,
                ticks: '',
                showticklabels: false
            },
            dragmode: "zoom",
			mapbox: { style: "open-street-map", 
                center: { 
                    lat: 24,
                    lon: 121  
                }, 
                zoom: 6
            },
			margin: { r: 0, t: 0, b: 0, l: 0 }
        };
        //var config = {responsive: true}
        Plotly.newPlot('myDiv', data, layout);
        Plotly.newPlot('myPieDiv', data_pie, layout_pie);
    
}

