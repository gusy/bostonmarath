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

var svg = d3.select("#vis")
	.append("svg:svg")
	.attr("width",w)
	.attr("height",h)
	.append("svg:g")

xAxis = d3.svg.axis().scale(x)
yAxis = d3.svg.axis().scale(y).orient("left")
v=280;
svg.append("svg:g")
	.attr("class", "xaxis")
	.attr("transform","translate(0,"+(h-margin)+")")
        .call(xAxis)
                
svg.append("svg:g")
	.attr("class", "yaxis")
        .attr("transform", "translate(30,0)")
        .call(yAxis)
