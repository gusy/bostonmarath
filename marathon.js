w = 925,
h = 550,
margin = 30,
startTime = 0,
endTime = 1000,
startDist = 0,
endDist = 50,
y = d3.scale.linear().domain([endDist, startDist]).range([0+margin, h-margin]),
x = d3.scale.linear().domain([startTime, endTime]).range([0+margin-5, w]),
time = d3.range(startTime, endTime);

var vis = d3.select("#vis")
	.append("svg:svg")
	.attr("width",w)
	.attr("height",h)
	.append("svg:g")

var line = d3.svg.line()
	.x(function(d,i) {return x(d.x);})
	.y(function(d) { return y(d.y);})

vis.append("svg:line")
	.attr("x1",x(startTime))
	.attr("y1",y(startDist))
	.attr("x2",x(startTime))
	.attr("y2",y(endDist))
	.attr("class","axis")

vis.append("svg:line")
    .attr("x1", x(startTime))
    .attr("y1", y(startDist))
    .attr("x2", x(endTime))
    .attr("y2", y(startDist))
    .attr("class", "axis")