$(document).bind(Firefly.Event.UnHandledCommand,function(d,a){if(a.cmd=="create"&&a.type=="ECharts"){var c=new Firefly.EChartsContainer;Firefly.editor.getEditorCanvas().add(c);c.moveTo(a.x,a.y);var b="option = {title: {text: 'ECharts \u5165\u95e8\u793a\u4f8b'},";b+="tooltip: {},";b+="legend: {data:['\u9500\u91cf']},";b+="xAxis: {data: ['\u886c\u886b','\u7f8a\u6bdb\u886b','\u96ea\u7eba\u886b','\u88e4\u5b50','\u9ad8\u8ddf\u978b','\u889c\u5b50']},";b+="yAxis: {},";b+="series: [{name: '\u9500\u91cf',type: 'bar',data: [5, 20, 36, 10, 10, 20]}]}";
c.setOption(b)}});
Firefly.EChartsContainer=function(){Firefly.ComponentBase.call(this);this.view.css("overflow","hidden");this.view.outerWidth(350);this.view.outerHeight(220);this.optionJsStr="";this.descriptor=new Firefly.EChartsContainerDescriptor(this);this.container=$("<div>",{style:"position:absolute;"});this.container.outerWidth(this.view.outerWidth());this.container.outerHeight(this.view.outerHeight());this.container.appendTo(this.view);$("<div>",{style:"position:absolute;width:100%;height:100%;"}).appendTo(this.view);this.chart=
void 0;this.clearEnable=!0;this.setOption=function(a){if(this.chart==void 0)this.chart=echarts.init(this.container.get(0));this.optionJsStr=a;try{var c=eval(this.optionJsStr);this.clearEnable&&this.chart.clear();this.chart.setOption(c)}catch(b){this.optionJsStr=b}};var d=this.resizeTo;this.resizeTo=function(a,c){d.call(this,a,c);this.container.outerWidth(this.view.outerWidth());this.container.outerHeight(this.view.outerHeight());this.chart!=void 0&&this.chart.resize()};this.clone=function(){var a=
new Firefly.EChartsContainer;a.view=this.view.clone();a.view.children().eq(0).remove();a.container.outerWidth(this.view.outerWidth());a.container.outerHeight(this.view.outerHeight());a.container.prependTo(a.view);a.setOption(this.optionJsStr);return a};this.toXmlNode=function(){var a=this.view.clone();a.attr("ff-type","EChartsContainer");a.empty();a.text(this.optionJsStr);return a}};
Firefly.EChartsContainer.create=function(d){var a=new Firefly.EChartsContainer;a.view=d.clone();a.view.empty();a.container.outerWidth(a.view.outerWidth());a.container.outerHeight(a.view.outerHeight());a.container.prependTo(a.view);$("<div>",{style:"position:absolute;width:100%;height:100%;"}).appendTo(a.view);a.setOption(d.text());return a};
