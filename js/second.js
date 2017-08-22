//chart
FusionCharts.ready(function () {
    var c=new FusionCharts({
        type: 'pie3d',//pie3d,pie2d,line,column2d,bar2d,bar3d
        renderAt: 'chart',
        width: '800',
        height: '600',
        dataFormat:'json',
        dataSource: {
            chart:{
                caption:'个人技能',
            },
            data:[
                {label:'HTML',value:9},
                {label:'CSS',value:7},
                {label:'JS',value:6},
                {label:'BootStrap',value:8},
                {label:'jQuery',value:6},
                {label:'MySql',value:8},
                {label:'Ajax',value:6},
                {label:'AngularJs',value:6},
                {label:'ZepToJs',value:5},
                {label:'PHP',value:7},
                {label:'NodeJS',value:6},
                {label:'ReactJs',value:7},
            ]
        }
    });
    c.render();//把图表渲染到DOM树上
})
