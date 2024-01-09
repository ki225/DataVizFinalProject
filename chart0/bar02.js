var travel_2019 = {
    x: ['士林夜市', '寧夏夜市', '饒河夜市', '逢甲夜市', '六合夜市', ' 師大夜市'],
    y: [40.55, 13.61, 13.29, 10.39, 11.61, 2.87],
    type: 'bar',
    name: '2019調查之旅客票數',
    marker: {
      color: '#4F6F52',
      //opacity: 0.7,
    }
  };
  
  var travel_2020 = {
    x: ['士林夜市', '寧夏夜市', '饒河夜市', '逢甲夜市', '六合夜市', ' 師大夜市'],
    y: [22.72, 9.35, 9.98, 8.05, 4.92, 3.01], //3987
    type: 'bar',
    name: '2020調查之旅客票數',
    marker: {
      color: '#739072',
      //opacity: 0.5
    }
  };

  var travel_2021 = {
    x: ['士林夜市', '寧夏夜市', '饒河夜市', '逢甲夜市', '六合夜市', ' 師大夜市'],
    y: [8.17, 5.7, 6.61, 5.7, 0.52, 3.79], //2876
    type: 'bar',
    name: '2021調查之旅客票數',
    marker: {
      color: '#86A789',
      //opacity: 0.5
    }
  };
  
  var data_3years = [travel_2019, travel_2020, travel_2021];
  
  var layout_3years = {
    title: '2019~2021旅客遊覽夜市票數/百人次排名',
    xaxis: {
      tickangle: -45,
      title: "夜市名稱"
    },
    yaxis: {
      title: "票數/百人次"
    },
    barmode: 'group'
  };
  
  Plotly.newPlot('rank2_graph', data_3years, layout_3years);
  