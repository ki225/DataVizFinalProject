let radarchart = document.getElementById('radarchart');

d3.json('nm_graph/db_server/db.json').then(
    res=>{
        get_json_radardata(res)
    }
);

function get_json_radardata(ddd){
    var rows = ddd.records;

    //廟口夜市
    let trace_Miaokou ={
        type: 'scatterpolar',
        fill: 'toself',
        theta: ["整潔度", "好吃程度", "價格", "交通", "玩樂","整潔度"],
        visible: true,
    };
    
    let tidy =0;
    let food =0;
    let price =0;
    let traffic =0;
    let ent =0;
    let num =0;

    for(let x=0; x<rows.length; x++){
       if(rows[x].nightmarket=="Miaokou_nm"){
        tidy += parseInt(rows[x].tidy);        
        food += parseInt(rows[x].food);
        price += parseInt(rows[x].price);
        traffic += parseInt(rows[x].traffic);
        ent += parseInt(rows[x].ent);
        num +=1;
       }          
    }

    trace_Miaokou.r = [tidy / num, food / num, price / num, traffic / num, ent / num, tidy / num];
    
    //士林夜市
    let trace_Shilin ={
        type: 'scatterpolar',
        fill: 'toself',
        theta: ["整潔度", "好吃程度", "價格", "交通", "玩樂","整潔度"],
        visible: false
    };
    
    tidy =0;
    food =0;
    price =0;
    traffic =0;
    ent =0;
    num =0;

    for(let x=0; x<rows.length; x++){
       if(rows[x].nightmarket=="Shilin_nm"){
        tidy += parseInt(rows[x].tidy);        
        food += parseInt(rows[x].food);
        price += parseInt(rows[x].price);
        traffic += parseInt(rows[x].traffic);
        ent += parseInt(rows[x].ent);
        num +=1;
       }          
    }

    trace_Shilin.r = [tidy / num, food / num, price / num, traffic / num, ent / num, tidy / num];
   
    //寧夏夜市
    let trace_Ningxia ={
        type: 'scatterpolar',
        fill: 'toself',
        theta: ["整潔度", "好吃程度", "價格", "交通", "玩樂","整潔度"],
        visible: false
    };
    
    tidy =0;
    food =0;
    price =0;
    traffic =0;
    ent =0;
    num =0;

    for(let x=0; x<rows.length; x++){
       if(rows[x].nightmarket=="Ningxia_nm"){
        tidy += parseInt(rows[x].tidy);        
        food += parseInt(rows[x].food);
        price += parseInt(rows[x].price);
        traffic += parseInt(rows[x].traffic);
        ent += parseInt(rows[x].ent);
        num +=1;
       }          
    }

    trace_Ningxia.r = [tidy / num, food / num, price / num, traffic / num, ent / num, tidy / num];
    
    //湳雅夜市
    let trace_Nanya ={
        type: 'scatterpolar',
        fill: 'toself',
        theta: ["整潔度", "好吃程度", "價格", "交通", "玩樂","整潔度"],
        visible: false
    };
    
    tidy =0;
    food =0;
    price =0;
    traffic =0;
    ent =0;
    num =0;

    for(let x=0; x<rows.length; x++){
       if(rows[x].nightmarket=="Nanya_nm"){
        tidy += parseInt(rows[x].tidy);        
        food += parseInt(rows[x].food);
        price += parseInt(rows[x].price);
        traffic += parseInt(rows[x].traffic);
        ent += parseInt(rows[x].ent);
        num +=1;
       }          
    }

    trace_Nanya.r = [tidy / num, food / num, price / num, traffic / num, ent / num, tidy / num];
    
    //臨江夜市
    let trace_Linjiang ={
        type: 'scatterpolar',
        fill: 'toself',
        theta: ["整潔度", "好吃程度", "價格", "交通", "玩樂","整潔度"],
        visible: false
    };
    
    tidy =0;
    food =0;
    price =0;
    traffic =0;
    ent =0;
    num =0;

    for(let x=0; x<rows.length; x++){
       if(rows[x].nightmarket=="Linjiang_nm"){
        tidy += parseInt(rows[x].tidy);        
        food += parseInt(rows[x].food);
        price += parseInt(rows[x].price);
        traffic += parseInt(rows[x].traffic);
        ent += parseInt(rows[x].ent);
        num +=1;
       }          
    }

    trace_Linjiang.r = [tidy / num, food / num, price / num, traffic / num, ent / num, tidy / num];
    
    //華西街夜市
    let trace_HuaxiStreet ={
        type: 'scatterpolar',
        fill: 'toself',
        theta: ["整潔度", "好吃程度", "價格", "交通", "玩樂","整潔度"],
        visible: false
    };
    
    tidy =0;
    food =0;
    price =0;
    traffic =0;
    ent =0;
    num =0;

    for(let x=0; x<rows.length; x++){
       if(rows[x].nightmarket=="HuaxiStreet_nm"){
        tidy += parseInt(rows[x].tidy);        
        food += parseInt(rows[x].food);
        price += parseInt(rows[x].price);
        traffic += parseInt(rows[x].traffic);
        ent += parseInt(rows[x].ent);
        num +=1;
       }          
    }

    trace_HuaxiStreet.r = [tidy / num, food / num, price / num, traffic / num, ent / num, tidy / num];
    
    //饒河夜市
    let trace_Raohe ={
        type: 'scatterpolar',
        fill: 'toself',
        theta: ["整潔度", "好吃程度", "價格", "交通", "玩樂","整潔度"],
        visible: false
    };
    
    tidy =0;
    food =0;
    price =0;
    traffic =0;
    ent =0;
    num =0;

    for(let x=0; x<rows.length; x++){
       if(rows[x].nightmarket=="Raohe_nm"){
        tidy += parseInt(rows[x].tidy);        
        food += parseInt(rows[x].food);
        price += parseInt(rows[x].price);
        traffic += parseInt(rows[x].traffic);
        ent += parseInt(rows[x].ent);
        num +=1;
       }          
    }

    trace_Raohe.r = [tidy / num, food / num, price / num, traffic / num, ent / num, tidy / num];
    
    //桃園夜市
    let trace_Taoyuan ={
        type: 'scatterpolar',
        fill: 'toself',
        theta: ["整潔度", "好吃程度", "價格", "交通", "玩樂","整潔度"],
        visible: false
    };
    
    tidy =0;
    food =0;
    price =0;
    traffic =0;
    ent =0;
    num =0;

    for(let x=0; x<rows.length; x++){
       if(rows[x].nightmarket=="Taoyuan_nm"){
        tidy += parseInt(rows[x].tidy);        
        food += parseInt(rows[x].food);
        price += parseInt(rows[x].price);
        traffic += parseInt(rows[x].traffic);
        ent += parseInt(rows[x].ent);
        num +=1;
       }          
    }

    trace_Taoyuan.r = [tidy / num, food / num, price / num, traffic / num, ent / num, tidy / num];
    
    //中原夜市
    let trace_Zhongyuan ={
        type: 'scatterpolar',
        fill: 'toself',
        theta: ["整潔度", "好吃程度", "價格", "交通", "玩樂","整潔度"],
        visible: false
    };
    
    tidy =0;
    food =0;
    price =0;
    traffic =0;
    ent =0;
    num =0;

    for(let x=0; x<rows.length; x++){
       if(rows[x].nightmarket=="Zhongyuan_nm"){
        tidy += parseInt(rows[x].tidy);        
        food += parseInt(rows[x].food);
        price += parseInt(rows[x].price);
        traffic += parseInt(rows[x].traffic);
        ent += parseInt(rows[x].ent);
        num +=1;
       }          
    }

    trace_Zhongyuan.r = [tidy / num, food / num, price / num, traffic / num, ent / num, tidy / num];

    //中壢夜市
    let trace_Zhongli ={
        type: 'scatterpolar',
        fill: 'toself',
        theta: ["整潔度", "好吃程度", "價格", "交通", "玩樂","整潔度"],
        visible: false
    };

    tidy =0;
    food =0;
    price =0;
    traffic =0;
    ent =0;
    num =0;

    for(let x=0; x<rows.length; x++){
       if(rows[x].nightmarket=="Zhongli_nm"){
        tidy += parseInt(rows[x].tidy);        
        food += parseInt(rows[x].food);
        price += parseInt(rows[x].price);
        traffic += parseInt(rows[x].traffic);
        ent += parseInt(rows[x].ent);
        num +=1;
       }          
    }

    trace_Zhongli.r = [tidy / num, food / num, price / num, traffic / num, ent / num, tidy / num];

    //城隍廟夜市
    let trace_ChenghuangTemple ={
        type: 'scatterpolar',
        fill: 'toself',
        theta: ["整潔度", "好吃程度", "價格", "交通", "玩樂","整潔度"],
        visible: false
    };

    tidy =0;
    food =0;
    price =0;
    traffic =0;
    ent =0;
    num =0;

    for(let x=0; x<rows.length; x++){
       if(rows[x].nightmarket=="ChenghuangTemple_nm"){
        tidy += parseInt(rows[x].tidy);        
        food += parseInt(rows[x].food);
        price += parseInt(rows[x].price);
        traffic += parseInt(rows[x].traffic);
        ent += parseInt(rows[x].ent);
        num +=1;
       }          
    }

    trace_ChenghuangTemple.r = [tidy / num, food / num, price / num, traffic / num, ent / num, tidy / num];

    //一中街夜市
    let trace_Yizhong ={
        type: 'scatterpolar',
        fill: 'toself',
        theta: ["整潔度", "好吃程度", "價格", "交通", "玩樂","整潔度"],
        visible: false
    };

    tidy =0;
    food =0;
    price =0;
    traffic =0;
    ent =0;
    num =0;

    for(let x=0; x<rows.length; x++){
       if(rows[x].nightmarket=="Yizhong_nm"){
        tidy += parseInt(rows[x].tidy);        
        food += parseInt(rows[x].food);
        price += parseInt(rows[x].price);
        traffic += parseInt(rows[x].traffic);
        ent += parseInt(rows[x].ent);
        num +=1;
       }          
    }

    trace_Yizhong.r = [tidy / num, food / num, price / num, traffic / num, ent / num, tidy / num];

    //逢甲夜市
    let trace_Fengchia ={
        type: 'scatterpolar',
        fill: 'toself',
        theta: ["整潔度", "好吃程度", "價格", "交通", "玩樂","整潔度"],
        visible: false
    };

    tidy =0;
    food =0;
    price =0;
    traffic =0;
    ent =0;
    num =0;

    for(let x=0; x<rows.length; x++){
       if(rows[x].nightmarket=="Fengchia_nm"){
        tidy += parseInt(rows[x].tidy);        
        food += parseInt(rows[x].food);
        price += parseInt(rows[x].price);
        traffic += parseInt(rows[x].traffic);
        ent += parseInt(rows[x].ent);
        num +=1;
       }          
    }

    trace_Fengchia.r = [tidy / num, food / num, price / num, traffic / num, ent / num, tidy / num];

    //精誠夜市
    let trace_Jingcheng ={
        type: 'scatterpolar',
        fill: 'toself',
        theta: ["整潔度", "好吃程度", "價格", "交通", "玩樂","整潔度"],
        visible: false
    };

    tidy =0;
    food =0;
    price =0;
    traffic =0;
    ent =0;
    num =0;

    for(let x=0; x<rows.length; x++){
       if(rows[x].nightmarket=="Jingcheng_nm"){
        tidy += parseInt(rows[x].tidy);        
        food += parseInt(rows[x].food);
        price += parseInt(rows[x].price);
        traffic += parseInt(rows[x].traffic);
        ent += parseInt(rows[x].ent);
        num +=1;
       }          
    }

    trace_Jingcheng.r = [tidy / num, food / num, price / num, traffic / num, ent / num, tidy / num];

    //龍燈夜市
    let trace_Longden ={
        type: 'scatterpolar',
        fill: 'toself',
        theta: ["整潔度", "好吃程度", "價格", "交通", "玩樂","整潔度"],
        visible: false
    };

    tidy =0;
    food =0;
    price =0;
    traffic =0;
    ent =0;
    num =0;

    for(let x=0; x<rows.length; x++){
       if(rows[x].nightmarket=="Longden_nm"){
        tidy += parseInt(rows[x].tidy);        
        food += parseInt(rows[x].food);
        price += parseInt(rows[x].price);
        traffic += parseInt(rows[x].traffic);
        ent += parseInt(rows[x].ent);
        num +=1;
       }          
    }

    trace_Longden.r = [tidy / num, food / num, price / num, traffic / num, ent / num, tidy / num];

    //虎尾夜市
    let trace_Huwei ={
        type: 'scatterpolar',
        fill: 'toself',
        theta: ["整潔度", "好吃程度", "價格", "交通", "玩樂","整潔度"],
        visible: false
    };

    tidy =0;
    food =0;
    price =0;
    traffic =0;
    ent =0;
    num =0;

    for(let x=0; x<rows.length; x++){
       if(rows[x].nightmarket=="Huwei_nm"){
        tidy += parseInt(rows[x].tidy);        
        food += parseInt(rows[x].food);
        price += parseInt(rows[x].price);
        traffic += parseInt(rows[x].traffic);
        ent += parseInt(rows[x].ent);
        num +=1;
       }          
    }

    trace_Huwei.r = [tidy / num, food / num, price / num, traffic / num, ent / num, tidy / num];

    //草鞋墩夜市
    let trace_Caoxiedun ={
        type: 'scatterpolar',
        fill: 'toself',
        theta: ["整潔度", "好吃程度", "價格", "交通", "玩樂","整潔度"],
        visible: false
    };

    tidy =0;
    food =0;
    price =0;
    traffic =0;
    ent =0;
    num =0;

    for(let x=0; x<rows.length; x++){
       if(rows[x].nightmarket=="Caoxiedun_nm"){
        tidy += parseInt(rows[x].tidy);        
        food += parseInt(rows[x].food);
        price += parseInt(rows[x].price);
        traffic += parseInt(rows[x].traffic);
        ent += parseInt(rows[x].ent);
        num +=1;
       }          
    }

    trace_Caoxiedun.r = [tidy / num, food / num, price / num, traffic / num, ent / num, tidy / num];

    //嘉樂福夜市
    let trace_Chialehu ={
        type: 'scatterpolar',
        fill: 'toself',
        theta: ["整潔度", "好吃程度", "價格", "交通", "玩樂","整潔度"],
        visible: false
    };

    tidy =0;
    food =0;
    price =0;
    traffic =0;
    ent =0;
    num =0;

    for(let x=0; x<rows.length; x++){
       if(rows[x].nightmarket=="Chialehu_nm"){
        tidy += parseInt(rows[x].tidy);        
        food += parseInt(rows[x].food);
        price += parseInt(rows[x].price);
        traffic += parseInt(rows[x].traffic);
        ent += parseInt(rows[x].ent);
        num +=1;
       }          
    }

    trace_Chialehu.r = [tidy / num, food / num, price / num, traffic / num, ent / num, tidy / num];

    //文化路夜市
    let trace_Wenhua ={
        type: 'scatterpolar',
        fill: 'toself',
        theta: ["整潔度", "好吃程度", "價格", "交通", "玩樂","整潔度"],
        visible: false
    };

    tidy =0;
    food =0;
    price =0;
    traffic =0;
    ent =0;
    num =0;

    for(let x=0; x<rows.length; x++){
       if(rows[x].nightmarket=="Wenhua_nm"){
        tidy += parseInt(rows[x].tidy);        
        food += parseInt(rows[x].food);
        price += parseInt(rows[x].price);
        traffic += parseInt(rows[x].traffic);
        ent += parseInt(rows[x].ent);
        num +=1;
       }          
    }

    trace_Wenhua.r = [tidy / num, food / num, price / num, traffic / num, ent / num, tidy / num];

    //花園夜市
    let trace_Flower ={
        type: 'scatterpolar',
        fill: 'toself',
        theta: ["整潔度", "好吃程度", "價格", "交通", "玩樂","整潔度"],
        visible: false
    };

    tidy =0;
    food =0;
    price =0;
    traffic =0;
    ent =0;
    num =0;

    for(let x=0; x<rows.length; x++){
       if(rows[x].nightmarket=="Flower_nm"){
        tidy += parseInt(rows[x].tidy);        
        food += parseInt(rows[x].food);
        price += parseInt(rows[x].price);
        traffic += parseInt(rows[x].traffic);
        ent += parseInt(rows[x].ent);
        num +=1;
       }          
    }

    trace_Flower.r = [tidy / num, food / num, price / num, traffic / num, ent / num, tidy / num];

    //瑞豐夜市
    let trace_Ruifeng ={
        type: 'scatterpolar',
        fill: 'toself',
        theta: ["整潔度", "好吃程度", "價格", "交通", "玩樂","整潔度"],
        visible: false
    };

    tidy =0;
    food =0;
    price =0;
    traffic =0;
    ent =0;
    num =0;

    for(let x=0; x<rows.length; x++){
       if(rows[x].nightmarket=="Ruifeng_nm"){
        tidy += parseInt(rows[x].tidy);        
        food += parseInt(rows[x].food);
        price += parseInt(rows[x].price);
        traffic += parseInt(rows[x].traffic);
        ent += parseInt(rows[x].ent);
        num +=1;
       }          
    }

    trace_Ruifeng.r = [tidy / num, food / num, price / num, traffic / num, ent / num, tidy / num];

    //六合夜市
    let trace_Liuhe ={
        type: 'scatterpolar',
        fill: 'toself',
        theta: ["整潔度", "好吃程度", "價格", "交通", "玩樂","整潔度"],
        visible: false
    };

    tidy =0;
    food =0;
    price =0;
    traffic =0;
    ent =0;
    num =0;

    for(let x=0; x<rows.length; x++){
       if(rows[x].nightmarket=="Liuhe_nm"){
        tidy += parseInt(rows[x].tidy);        
        food += parseInt(rows[x].food);
        price += parseInt(rows[x].price);
        traffic += parseInt(rows[x].traffic);
        ent += parseInt(rows[x].ent);
        num +=1;
       }          
    }

    trace_Liuhe.r = [tidy / num, food / num, price / num, traffic / num, ent / num, tidy / num];

    //墾丁大街夜市
    let trace_KentingStreet ={
        type: 'scatterpolar',
        fill: 'toself',
        theta: ["整潔度", "好吃程度", "價格", "交通", "玩樂","整潔度"],
        visible: false
    };

    tidy =0;
    food =0;
    price =0;
    traffic =0;
    ent =0;
    num =0;

    for(let x=0; x<rows.length; x++){
       if(rows[x].nightmarket=="KentingStreet_nm"){
        tidy += parseInt(rows[x].tidy);        
        food += parseInt(rows[x].food);
        price += parseInt(rows[x].price);
        traffic += parseInt(rows[x].traffic);
        ent += parseInt(rows[x].ent);
        num +=1;
       }          
    }

    trace_KentingStreet.r = [tidy / num, food / num, price / num, traffic / num, ent / num, tidy / num];

    //羅東夜市
    let trace_Luodong ={
        type: 'scatterpolar',
        fill: 'toself',
        theta: ["整潔度", "好吃程度", "價格", "交通", "玩樂","整潔度"],
        visible: false
    };

    tidy =0;
    food =0;
    price =0;
    traffic =0;
    ent =0;
    num =0;

    for(let x=0; x<rows.length; x++){
       if(rows[x].nightmarket=="Luodong_nm"){
        tidy += parseInt(rows[x].tidy);        
        food += parseInt(rows[x].food);
        price += parseInt(rows[x].price);
        traffic += parseInt(rows[x].traffic);
        ent += parseInt(rows[x].ent);
        num +=1;
       }          
    }

    trace_Luodong.r = [tidy / num, food / num, price / num, traffic / num, ent / num, tidy / num];

    //東大門夜市
    let trace_Dongdaemun ={
        type: 'scatterpolar',
        fill: 'toself',
        theta: ["整潔度", "好吃程度", "價格", "交通", "玩樂","整潔度"],
        visible: false
    };

    tidy =0;
    food =0;
    price =0;
    traffic =0;
    ent =0;
    num =0;

    for(let x=0; x<rows.length; x++){
       if(rows[x].nightmarket=="Dongdaemun_nm"){
        tidy += parseInt(rows[x].tidy);        
        food += parseInt(rows[x].food);
        price += parseInt(rows[x].price);
        traffic += parseInt(rows[x].traffic);
        ent += parseInt(rows[x].ent);
        num +=1;
       }          
    }

    trace_Dongdaemun.r = [tidy / num, food / num, price / num, traffic / num, ent / num, tidy / num];

    //台東夜市
    let trace_Taitung ={
        type: 'scatterpolar',
        fill: 'toself',
        theta: ["整潔度", "好吃程度", "價格", "交通", "玩樂","整潔度"],
        visible: false
    };

    tidy =0;
    food =0;
    price =0;
    traffic =0;
    ent =0;
    num =0;

    for(let x=0; x<rows.length; x++){
       if(rows[x].nightmarket=="Taitung_nm"){
        tidy += parseInt(rows[x].tidy);        
        food += parseInt(rows[x].food);
        price += parseInt(rows[x].price);
        traffic += parseInt(rows[x].traffic);
        ent += parseInt(rows[x].ent);
        num +=1;
       }          
    }

    trace_Taitung.r = [tidy / num, food / num, price / num, traffic / num, ent / num, tidy / num];

    //
    let radar_data =[];
    radar_data.push(trace_Miaokou);
    radar_data.push(trace_Shilin);
    radar_data.push(trace_Ningxia);
    radar_data.push(trace_Nanya);
    radar_data.push(trace_Linjiang);
    radar_data.push(trace_HuaxiStreet);
    radar_data.push(trace_Raohe);
    radar_data.push(trace_Taoyuan);
    radar_data.push(trace_Zhongyuan);
    radar_data.push(trace_Zhongli);    
    radar_data.push(trace_ChenghuangTemple);

    radar_data.push(trace_Yizhong);
    radar_data.push(trace_Fengchia);
    radar_data.push(trace_Jingcheng);
    radar_data.push(trace_Longden);
    radar_data.push(trace_Huwei);
    radar_data.push(trace_Caoxiedun);

    radar_data.push(trace_Chialehu);
    radar_data.push(trace_Wenhua);
    radar_data.push(trace_Flower);
    radar_data.push(trace_Ruifeng);
    radar_data.push(trace_Liuhe);
    radar_data.push(trace_KentingStreet);

    radar_data.push(trace_Luodong);
    radar_data.push(trace_Dongdaemun);
    radar_data.push(trace_Taitung);

    let radar_layout = {
        title:"夜市戰力指數",
        updatemenus: [       
            {
                y: 1,
                x: 1,
                yanchor: 'top',
                buttons: [
                    {
                        method: 'restyle',
                        args: 
                            ['visible', [true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]],
                        label: '廟口夜市'
                    },
                    {
                        method: 'restyle',
                        args: 
                            ['visible', [false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]],
                        label: '士林夜市'
                    },
                    {
                        method: 'restyle',
                        args: 
                            ['visible', [false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]],
                        label: '寧夏夜市'
                    },
                    {
                        method: 'restyle',
                        args: 
                            ['visible', [false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]],
                        label: '湳雅夜市'
                    },
                    {
                        method: 'restyle',
                        args: 
                            ['visible', [false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]],
                        label: '臨江夜市'
                    },
                    {
                        method: 'restyle',
                        args: 
                            ['visible', [false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]],
                        label: '華西街夜市'
                    },
                    {
                        method: 'restyle',
                        args: 
                            ['visible', [false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]],
                        label: '饒河夜市'
                    },
                    {
                        method: 'restyle',
                        args: 
                            ['visible', [false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]],
                        label: '桃園夜市'
                    },
                    {
                        method: 'restyle',
                        args: 
                            ['visible', [false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]],
                        label: '中原夜市'
                    },
                    {
                        method: 'restyle',
                        args: 
                            ['visible', [false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]],
                        label: '中壢夜市'
                    },
                    {
                        method: 'restyle',
                        args: 
                            ['visible', [false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]],
                        label: '城隍廟夜市'
                    },
                    {
                        method: 'restyle',
                        args: 
                            ['visible', [false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false]],
                        label: '一中街夜市'
                    },
                    {
                        method: 'restyle',
                        args: 
                            ['visible', [false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false]],
                        label: '逢甲夜市'
                    },
                    {
                        method: 'restyle',
                        args: 
                            ['visible', [false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false]],
                        label: '精誠夜市'
                    },
                    {
                        method: 'restyle',
                        args: 
                            ['visible', [false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false]],
                        label: '龍燈夜市'
                    },
                    {
                        method: 'restyle',
                        args: 
                            ['visible', [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false]],
                        label: '虎尾夜市'
                    },
                    {
                        method: 'restyle',
                        args: 
                            ['visible', [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false]],
                        label: '草鞋墩夜市'
                    },
                    {
                        method: 'restyle',
                        args: 
                            ['visible', [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false]],
                        label: '嘉樂福夜市'
                    },
                    {
                        method: 'restyle',
                        args: 
                            ['visible', [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false]],
                        label: '文化路夜市'
                    },
                    {
                        method: 'restyle',
                        args: 
                            ['visible', [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false]],
                        label: '花園夜市'
                    },
                    {
                        method: 'restyle',
                        args: 
                            ['visible', [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false]],
                        label: '瑞豐夜市'
                    },
                    {
                        method: 'restyle',
                        args: 
                            ['visible', [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false]],
                        label: '六合夜市'
                    },
                    {
                        method: 'restyle',
                        args: 
                            ['visible', [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false]],
                        label: '墾丁大街夜市'
                    },
                    {
                        method: 'restyle',
                        args: 
                            ['visible', [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false]],
                        label: '羅東夜市'
                    },
                    {
                        method: 'restyle',
                        args: 
                            ['visible', [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false]],
                        label: '東大門夜市'
                        },
                    {
                        method: 'restyle',
                        args: 
                            ['visible', [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true]],
                        label: '台東夜市'
                    }
                    
                ]
            }
        ],
        polar: {
            radialaxis: {
                visible: true,
                range: [0, 5],
                
            },
            tickangle: 15,
        },
        startangle: 18,
    };

    Plotly.newPlot(radarchart, radar_data, radar_layout);
}