import React, { Component } from 'react';
import './index.scss';
import echarts from 'echarts';


export default class index extends Component {
    initCharts = () => {
        var myChart = echarts.init(document.getElementById('echarts'));
        var option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };
        myChart.setOption(option);
    };

    componentDidMount() {
        this.initCharts();
    }
    render() {
        return (
            <div id='echarts'></div>
        )
    }
}
