var travel_2019 = {
    x: ['士林夜市', '寧夏夜市', '饒河夜市', '逢甲夜市', '六合夜市', ' 師大夜市'],
    y: [3472, 1165, 1138, 890, 994, 246],
    type: 'bar',
    name: '2019調查之旅客票數',
    marker: {
      color: '#9BBEC8',
      //opacity: 0.7,
    }
  };
  
  var travel_2020 = {
    x: ['士林夜市', '寧夏夜市', '饒河夜市', '逢甲夜市', '六合夜市', ' 師大夜市'],
    y: [906, 373, 398, 321, 196, 120],
    type: 'bar',
    name: '2020調查之旅客票數',
    marker: {
      color: '#427D9D',
      //opacity: 0.5
    }
  };

  var travel_2021 = {
    x: ['士林夜市', '寧夏夜市', '饒河夜市', '逢甲夜市', '六合夜市', ' 師大夜市'],
    y: [235, 164, 190, 164, 15, 109],
    type: 'bar',
    name: '2021調查之旅客票數',
    marker: {
      color: '#164863',
      //opacity: 0.5
    }
  };
  
  var data_3years = [travel_2019, travel_2020, travel_2021];
  
  var layout_3years = {
    title: '2019~2021旅客遊覽夜市票數排名',
    xaxis: {
      tickangle: -45,
      title: "夜市名稱"
    },
    yaxis: {
      title: "調查人數之票數"
    },
    barmode: 'group'
  };
  
  Plotly.newPlot('rank_graph', data_3years, layout_3years);
  