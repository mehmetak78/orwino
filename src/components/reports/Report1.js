import React, {useRef, useState} from 'react';
import ReactEcharts from 'echarts-for-react';
import 'echarts/theme/macarons';
import {CHARTCONFIG} from '../charts/ChartsPageStyles';
import Button from "@material-ui/core/Button";

let bar1 = {};

bar1.option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['Satis'],
        textStyle: {
            color: CHARTCONFIG.color.text
        }
    },
    toolbox: {
        show: true,
        feature: {
            saveAsImage: {show: true, title: 'save'}
        }
    },
    calculable: true,
    xAxis: [
        {
            type: 'category',
            //data: ['Oca.', 'Şub.', 'Mar.', 'Nis.', 'May', 'Haz.', 'Tem.', 'Ağu.', 'Eyl.', 'Eki.', 'Kas.', 'Ara.'],
            axisLabel: {
                textStyle: {
                    color: CHARTCONFIG.color.text
                }
            },
            splitLine: {
                lineStyle: {
                    color: CHARTCONFIG.color.splitLine
                }
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLabel: {
                textStyle: {
                    color: CHARTCONFIG.color.text
                }
            },
            splitLine: {
                lineStyle: {
                    color: CHARTCONFIG.color.splitLine
                }
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: CHARTCONFIG.color.splitArea
                }
            }
        }
    ],
    series: [
        {
            name: 'Evaporation',
            type: 'bar',
            //data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
            markPoint: {
                data: [
                    {type: 'max', name: 'Max'},
                    {type: 'min', name: 'Min'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: 'Average'}
                ]
            }
        }
    ]
};

const Report1 = (props) => {
    bar1.option.xAxis[0].data = props.xAxis;
    bar1.option.series[0].data = props.data;

    const [echarts_react, setEcharts_react] = useState(null);

    if (echarts_react) {
        echarts_react.getEchartsInstance().setOption(bar1.option);
    }

    console.log(bar1.option.xAxis[0].data.length);

    return (
        <div hidden={ bar1.option.xAxis[0].data.length === 0} className="box box-default mb-4">
            <div className="box-header">Aylara Göre Satış</div>
            <div className="box-body">
                <ReactEcharts id="myChart" ref={(e) => { setEcharts_react(e);}} option={bar1.option} theme={"macarons"} />
            </div>
        </div>
    )
};

export default Report1;