const task3 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        html,
body {
  font-family: Consolas, monaco, monospace;
}

#chart {
  padding: 20px;
}

table {
  width: 100%;
  height: 400px;
}

.charttitle {
  text-align: center;
}

.bars td {
  vertical-align: bottom;
}

.bars div:hover {
  opacity: 0.6;
}

.legend {
  vertical-align: bottom;
  padding-left: 20px;
  text-align: left;
}

.legbox {
  display: block;
  clear: both;
}

.xaxisname {
  margin: 5px;
  color: #fff;
  font-size: 77%;
  padding: 5px;
  float: left;
}

.one {
  background: #16A085;
}

.two {
  background: #2ECC71;
}

.three {
  background: #27AE60;
}

.four {
  background: #3498DB;
}

.five {
  background: #2980B9;
}

.six {
  background: #9B59B6;
}

.seven {
  background: #8E44AD;
}

.eight {
  background: #34495E;
}

.nine {
  background: #2C3E50;
}

.ten {
  background: #22313f;
}
.form-box{
    margin-left: 10%;
    margin-top: 20px;
}
    </style>
</head>
<body>
    <div id="chart"></div>
    <div class="form-box">
        <form id="form">
            <p>Add value</p>
            <label for="fname">Name:</label><br>
            <input type="text" id="name" name="name"><br>
            <label for="lname">Value:</label><br>
            <input type="number" id="val" name="val" min="1" max="100"><br><br>
            <input type="submit" value="Submit" id="submit">
       </form>
    </div>   

    <script>
        const chartjson = {
  "title": "Scores",
  "data": [{
    "name": "1",
    "score": 20
  }, {
    "name": "2",
    "score": 73
  }, {
    "name": "3",
    "score": 20
  }, {
    "name": "4",
    "score": 89
  },],
  "xtitle": "Secured Marks",
  "ytitle": "Marks",
  "ymax": 100,
  "ykey": 'score',
  "xkey": "name",
  "prefix": "%"
}

const colors = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

const TROW = 'tr',
  TDATA = 'td';

  const updateList = () => {
const chart = document.createElement('div');
const barchart = document.createElement('table');
barchart.setAttribute('id', 'table');

const titlerow = document.createElement(TROW);
const titledata = document.createElement(TDATA);

titledata.setAttribute('colspan', chartjson.data.length + 1);
titledata.setAttribute('class', 'charttitle');
titledata.innerText = chartjson.title;
titlerow.appendChild(titledata);
barchart.appendChild(titlerow);
chart.appendChild(barchart);

const barrow = document.createElement(TROW);

for (let i = 0; i < chartjson.data.length; i++) {
  barrow.setAttribute('class', 'bars');
  barrow.setAttribute('id', 'bars');
  const prefix = chartjson.prefix || '';
 
  const bardata = document.createElement(TDATA);
  const bar = document.createElement('div');
  bar.setAttribute('class', colors[i]);
  bar.style.height = chartjson.data[i][chartjson.ykey] + prefix;
  bardata.innerText = chartjson.data[i][chartjson.ykey] + prefix;
  bardata.appendChild(bar);
  barrow.appendChild(bardata);
}

const legendrow = document.createElement(TROW);
const legend = document.createElement(TDATA);
legend.setAttribute('class', 'legend');
legend.setAttribute('id', 'leg');
legend.setAttribute('colspan', chartjson.data.length);

for (let i = 0; i < chartjson.data.length; i++) {
  const legbox = document.createElement('span');
  legbox.setAttribute('class', 'legbox');
  const barname = document.createElement('span');
  barname.setAttribute('class', colors[i] + ' xaxisname');
  const bartext = document.createElement('span');
  bartext.innerText = chartjson.data[i][chartjson.xkey];
  legbox.appendChild(barname);
  legbox.appendChild(bartext);
  legend.appendChild(legbox);
}
barrow.appendChild(legend);
barchart.appendChild(barrow);
barchart.appendChild(legendrow);
chart.appendChild(barchart);
document.getElementById('chart').innerHTML = chart.outerHTML;
}

const addTitle = (name,colorNumber) => {
    const titles = document.getElementById("leg");

const legbox = document.createElement('span');
   legbox.setAttribute('class', 'legbox');
    const barname = document.createElement('span');
    barname.setAttribute('class', colors[colorNumber] + ' xaxisname');
    const bartext = document.createElement('span');
    bartext.innerText = name;
    legbox.appendChild(barname);
    legbox.appendChild(bartext);
    titles.appendChild(legbox);
} 
updateList()

const addVal = (val,colorNumber) => {
    const bars = document.getElementById("bars");
    const bardata = document.createElement(TDATA);
    const bar = document.createElement('div');
    bar.setAttribute('class',  colors[colorNumber]);
    bar.style.height = val + "%";
    bardata.innerText = val + "%";
    bardata.appendChild(bar);
    bars.appendChild(bardata);
    
}


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const form  = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = form.elements.name.value;
    const colorNumber = Math.floor( Math.random() * colors.length);
    chartjson.data.push({name:form.elements.name.value, score: form.elements.val.value})
    const tbody = document.getElementsByTagName('tbody')[0];
    console.log(tbody)
    const bars = document.getElementById("bars");
    const chart = document.getElementById("chart");
    tbody.removeChild(bars);
    const container = document.querySelector('#chart');
    removeAllChildNodes(container);
    updateList();
});
    </script>
</body>
</html>`;

export default task3;
