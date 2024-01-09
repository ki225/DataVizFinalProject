
let piechart = document.getElementById('piechart');



d3.json('db_server/db.json').then(
    res=>{
        get_json_data(res)
        console.log("rows")
    }
);

function get_json_data(ddd){
    var rows = ddd.records;
    console.log(rows)

    let trait = [
        "clean","delicious","cheap","convenience","fun"
    ];

    var trait_chinese = [
        "環境整潔","食物美味","價格便宜","交通方便","有玩樂設施"
    ];

    var ultimateColors = [
        'rgb(147, 184, 191)', 'rgb(75, 146, 128)', 'rrgb(74, 76, 148)', 'rrgb(215, 196, 102)', 'rgb(137, 98, 82)'
        
    ];

    let point = Array(5).fill(0);

    for(let i = 0; i < rows.length; i++){ //一筆一筆data進來
        for(let k = 0; k < point.length; k++){
            if(rows[i].trait == trait[k]){ //確認是哪個夜市的data
                let index = k; //夜市編號
                
                point[index] += 1; //0~25
            }
        }
    }
    console.log("point", point)


    var data = [{
        values: point,
        labels: trait_chinese,
        marker: {
            colors: ultimateColors
        },
        hole : 0.5,
        title : "最重視der夜市特質" ,
        titlefont:{
            family: 'Arial',
            size : 30
        },
        type: 'pie',
        marker: {
            colors: ultimateColors
        },
        //hoverinfo: 'label+percent+name',
        textinfo: 'none'
    }];

    var layout = {
        height: 2000,
        width: 1100,
        //grid: {rows: 2, columns: 2}
    };
    
    Plotly.newPlot(piechart, data, layout);
}