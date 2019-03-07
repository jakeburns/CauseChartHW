var data = d3.csv("data.csv");

data.then(function(data)
{
  console.log("data",data);
  drawChart(data);
},
function(err)
{
  console.log(err);
});



var drawChart = function(data){
    var height = 300;
    var width = 800;
    var barWidth = (width/data.length)

    var svg = d3.select("svg")
      .attr("width", width)
      .attr("height", height);
    svg.selectAll("rect")
              .data(data)
              .enter()
              .append("rect")
              .attr("x", function(d,i){
                return i * barWidth;
              })
              .attr("y", function(d){
                return height - d.grads_total*10;
              })
              .attr("height", function(d){
                return d.grads_total * 10;
              })
              .attr("width", barWidth);
      svg.selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .text(function(d){
        return d.geo_name;
      })
      .attr("x", function(d, i){
        return i * barWidth + 8;
      })
      .attr("y", function(d){
        return height;
      })
      .attr("font-size", "9")
      .attr("fill", "red");




}
