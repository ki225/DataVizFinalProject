
let dotchart = document.getElementById('dotchart');



d3.json('db_server/db.json').then(
    res=>{
        get_json_data(res)
        console.log("rows")
    }
);

function get_json_data(ddd){
    var rows = ddd.records;
    console.log(rows)
    
    let nightmarkets = [
        "Miaokou_nm", "Shilin_nm", "Ningxia_nm", "Nanya_nm", "Linjiang_nm", "HuaxiStreet_nm", "Raohe_nm", "Taoyuan_nm", "Zhongyuan_nm", "Zhongli_nm", "ChenghuangTemple_nm",
        "Yizhong_nm", "Fengchia_nm", "Jingcheng_nm", "Longden_nm", "Huwei_nm", "Caoxiedun_nm",
        "Chialehu_nm", "Wenhua_nm", "Flower_nm", "Ruifeng", "Liuhe_nm", "KentingStreet_nm",
        "Luodong_nm ", "Dongdaemun_nm", "Taitung_nm"
    ];

    var nightmarket_chinese = [
        '廟口夜市', '士林夜市', '寧夏夜市', '湳雅夜市', '臨江夜市', '華西街夜市', '饒河夜市', '桃園夜市', '中原夜市', '中壢夜市', '城隍廟夜市',
            '一中街夜市', '逢甲夜市', '精誠夜市', '龍燈夜市', '虎尾夜市', '草鞋墩夜市',
            '家樂福夜市', '文化路夜市', '花園夜市', '瑞豐夜市', '六合夜市', '墾丁大街夜市',
            '羅東夜市', '東大門夜市', '台東夜市'
    ];


    let account = Array(26).fill(0);

    for(let i = 0; i < rows.length; i++){ //一筆一筆data進來
        for(let k = 0; k < nightmarkets.length; k++){
            if(rows[i].nightmarket == nightmarkets[k]){ //確認是哪個夜市的data
                let market_num = k; //夜市編號
                
                account[market_num] += 1; //0~25
            }
        }
    }

    let s = Array(26).fill(0);

    for(let i = 0 ; i < s.length ; i++){
        s[i] = account[i] * 40;
    }
    console.log("account", account)

    var trace1 = {
        x: nightmarket_chinese,
        y: account,
        //text: ['A<br>size: 40', 'B<br>size: 60', 'C<br>size: 80', 'D<br>size: 100'],
        mode: 'markers',
        marker: {
          color: ['rgb(93, 164, 214)',
           'rgb(255, 144, 14)',  
           'rgb(44, 160, 101)', 
           'rgb(255, 65, 54)',
           'rgb(93, 164, 214)',
           'rgb(255, 144, 14)',  
           'rgb(44, 160, 101)', 
           'rgb(255, 65, 54)',
           'rgb(93, 164, 214)',
           'rgb(255, 144, 14)',  
           'rgb(44, 160, 101)', 
           'rgb(255, 65, 54)',
           'rgb(93, 164, 214)',
           'rgb(255, 144, 14)',  
           'rgb(44, 160, 101)', 
           'rgb(255, 65, 54)',
           'rgb(93, 164, 214)',
           'rgb(255, 144, 14)',  
           'rgb(44, 160, 101)', 
           'rgb(255, 65, 54)',
           'rgb(93, 164, 214)',
           'rgb(255, 144, 14)',  
           'rgb(44, 160, 101)', 
           'rgb(255, 65, 54)',
           'rgb(93, 164, 214)',
           'rgb(255, 144, 14)'
        ],
          size: s
        }
    };
      
    let data =[];
    data.push(trace1);
    console.log(trace1);

    let layout = {
        title: '夜市拜訪人數',
        titlefont :{
            family: 'Arial',
            size :30,
            color : 'rgb(0,0,0)'
        },
        xaxis: {
            //linecolor: 'rgb(31,5,120)',
            tickfont:{
                size :12,
                color : 'rgb (0,0,0)'
            }
        },
        yaxis: {
            //linecolor: 'rgb(31,5,120)',
            tickfont:{
                size :20,
                color : 'rgb (0,0,0)'
            }
        },
        showlegend: false,
        width: 2000,
        height: 1100,
        
    };

    Plotly.newPlot(dotchart, data, layout);
}