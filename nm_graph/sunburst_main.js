let sunburst_chart = document.getElementById("sunburst_chart");

d3.json('db_server/db.json').then(
    res=>{
        getJSON_data(res)
        console.log('Local json:',res)
    }
);

let nightmarkets = [
    "Miaokou_nm", "Shilin_nm", "Ningxia_nm", "Nanya_nm", "Linjiang_nm", "HuaxiStreet_nm", "Raohe_nm", "Taoyuan_nm", "Zhongyuan_nm", "Zhongli_nm", "ChenghuangTemple_nm",
    "Yizhong_nm", "Fengchia_nm", "Jingcheng_nm", "Longden_nm", "Huwei_nm", "Caoxiedun_nm",
    "Chialehu_nm", "Wenhua_nm", "Flower_nm", "Ruifeng_nm", "Liuhe_nm", "KentingStreet_nm",
    "Luodong_nm ", "Dongdaemun_nm", "Taitung_nm"
];

let nightmarkets_chinese = [
    "廟口夜市", "士林夜市", "寧夏夜市", "湳雅夜市", "臨江夜市", "華西街夜市", "饒河夜市", "桃園夜市", "中原夜市", "中壢夜市", "城隍廟夜市",
    "一中街夜市", "逢甲夜市", "精誠夜市", "龍燈夜市", "虎尾夜市", "草鞋墩夜市",
    "家樂福夜市", "文化路夜市", "花園夜市", "瑞豐夜市", "六合夜市", "墾丁大街夜市",
    "羅東夜市", "東大門夜市", "台東夜市"
]

let nightmarkets_score_num = Array(26).fill(0);
let nightmarkets_score_average = Array(26).fill(0);


let score = ["tidy", "food", "price", "traffic", "ent"];

function getJSON_data(ddd){
    var rows = ddd.records;

    let sunburst_trace = {
        type: "sunburst",
        title: "總表",

        ids: [
            //區域
            "東", "南", "中", "北",
            //name
            "廟口夜市", "士林夜市", "寧夏夜市", "湳雅夜市", "臨江夜市", "華西街夜市", "饒河夜市", "桃園夜市", "中原夜市", "中壢夜市", "城隍廟夜市",
            "一中街夜市", "逢甲夜市", "精誠夜市", "龍燈夜市", "虎尾夜市", "草鞋墩夜市",
            "家樂福夜市", "文化路夜市", "花園夜市", "瑞豐夜市", "六合夜市", "墾丁大街夜市",
            "羅東夜市", "東大門夜市", "台東夜市"
        ],
        labels: [
            "東", "南", "中", "北",
            // 夜市名称
            "廟口夜市", "士林夜市", "寧夏夜市", "湳雅夜市", "臨江夜市", "華西街夜市", "饒河夜市", "桃園夜市", "中原夜市", "中壢夜市", "城隍廟夜市",
            "一中街夜市", "逢甲夜市", "精誠夜市", "龍燈夜市", "虎尾夜市", "草鞋墩夜市",
            "家樂福夜市", "文化路夜市", "花園夜市", "瑞豐夜市", "六合夜市", "墾丁大街夜市",
            "羅東夜市", "東大門夜市", "台東夜市"
        ],
        parents: [
            "", "", "", "",
            // 夜市區域
            "北", "北", "北", "北", "北", "北", "北", "北", "北", "北", "北",
            "中", "中", "中", "中", "中", "中",
            "南", "南", "南", "南", "南", "南",
            "東", "東", "東"
        ],
        values: new Array(4 + 6 * (11 + 6 + 6 + 3)).fill(0),
        leaf: { opacity: 0.8 },
        marker: { line: { "width": 2 } },
        branchvalues: 'total'
    };

    for(let i = 0; i < 26; i++){
        sunburst_trace.ids.push(nightmarkets_chinese[i] + " - 整潔度");
        sunburst_trace.ids.push(nightmarkets_chinese[i] + " - 食物的好吃程度");
        sunburst_trace.ids.push(nightmarkets_chinese[i] + " - 價格是否合理");
        sunburst_trace.ids.push(nightmarkets_chinese[i] + " - 交通是否方便");
        sunburst_trace.ids.push(nightmarkets_chinese[i] + " - 玩樂的項目");
    }

    for(let i = 0; i < 26; i++){
        sunburst_trace.labels.push("整潔度");
        sunburst_trace.labels.push("食物的好吃程度");
        sunburst_trace.labels.push("價格是否合理");
        sunburst_trace.labels.push("交通是否方便");
        sunburst_trace.labels.push("玩樂的項目");
    }

    for(let i = 0; i < nightmarkets.length; i++){
        for(let j = 0; j < 5; j++){
            sunburst_trace.parents.push(nightmarkets_chinese[i]);
        }
    }

    //輸入值
    for(let i = 0; i < rows.length; i++){ //一筆一筆data進來
        for(let k = 0; k < nightmarkets.length; k++){
            if(rows[i].nightmarket == nightmarkets[k]){ //確認是哪個夜市的data
                let market_num = k; //夜市編號
                sunburst_trace.values[30 + (market_num)*5] += parseInt(rows[i].tidy, 10);
                sunburst_trace.values[4 + market_num] += parseInt(rows[i].tidy, 10);
                sunburst_trace.values[30 + (market_num)*5 + 1] += parseInt(rows[i].food, 10);
                sunburst_trace.values[4 + market_num] += parseInt(rows[i].food, 10);
                sunburst_trace.values[30 + (market_num)*5 + 2] += parseInt(rows[i].price, 10);
                sunburst_trace.values[4 + market_num] += parseInt(rows[i].price, 10);
                sunburst_trace.values[30 + (market_num)*5 + 3] += parseInt(rows[i].traffic, 10);
                sunburst_trace.values[4 + market_num] += parseInt(rows[i].traffic, 10);
                sunburst_trace.values[30 + (market_num)*5 + 4] += parseInt(rows[i].ent, 10);
                sunburst_trace.values[4 + market_num] += parseInt(rows[i].ent, 10);
                
                nightmarkets_score_num[market_num] += 1; //0~25
            }
        }
    }

    for(let i = 0; i < 26; i++){
        for(let j = 0; j < 5; j++){
            if(nightmarkets_score_num[i] != 0){
                sunburst_trace.values[30 + (i)*5 + j] /= nightmarkets_score_num[i];
            }
        }
    }

    for(let i = 0; i < 26; i++){
            sunburst_trace.values[i+4] = 0;
        for(let j = 0; j < 5; j++){
            sunburst_trace.values[i+4] += sunburst_trace.values[30 + i*5 + j];
        }
    }

    for(let i = 4; i < 15; i++){
        sunburst_trace.values[3] += sunburst_trace.values[i];
    }
    for(let i = 15; i < 21; i++){
        sunburst_trace.values[2] += sunburst_trace.values[i];
    }
    for(let i = 21; i < 27; i++){
        sunburst_trace.values[1] += sunburst_trace.values[i];
    }
    for(let i = 27; i < 30; i++){
        sunburst_trace.values[0] += sunburst_trace.values[i];
    }
    let summ = 0;
    for(let i =0; i < 4; i++){
        summ += sunburst_trace.values[i];
    }
    
    let layout = {
        "margin": {"l": 0, "r": 0, "b": 0, "t": 0},
    };

    Plotly.newPlot(sunburst_chart, [sunburst_trace], layout, {showSendToCloud: true});

    console.log('Local json:',sunburst_trace)
}
