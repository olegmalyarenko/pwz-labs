const informers = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Інформери</title>
</head>
<body>
  <h2>Погода</h2>
  <iframe width="200" height="240" frameborder="0" scrolling="no" src="https://pogodnik.com/informer/daily"> Посмотреть прогноз погоды на <a href="https://pogodnik.com"> <img src="https://pogodnik.com/images/prognoz-pogody-200x240.png"> </a> </iframe> 
  <h2>Курс валют</h2>  
<div id="minfin-informer-m1Fn-region">Загружаем <a href="https://minfin.com.ua/currency/" target="_blank">курсы валют</a> от minfin.com.ua</a></div><script>var iframe = '<ifra'+'me width="275" height="120" fram'+'eborder="0" src="https://informer.minfin.com.ua/gen/region/0/?color=yellow" vspace="0" scrolling="no" hspace="0" allowtransparency="true"style="width:275px;height:120px;ove'+'rflow:hidden;"></iframe>';var cl = 'minfin-informer-m1Fn-region';document.getElementById(cl).innerHTML = iframe; </script><noscript><img src="https://informer.minfin.com.ua/gen/img.png" width="1" height="1" alt="minfin.com.ua: курсы валют" title="Курс валют" border="0" /></noscript>
<h2>Годинник</h2> 
    <!-- clock widget start -->
<script type="text/javascript"> var css_file=document.createElement("link"); css_file.setAttribute("rel","stylesheet"); css_file.setAttribute("type","text/css"); css_file.setAttribute("href","https://s.bookcdn.com//css/cl/bw-cl-c22.css?v=0.0.1"); document.getElementsByTagName("head")[0].appendChild(css_file); </script> <div id="tw_22_984431449"><div style="width:200px; height:px; margin: 0 auto;"><a href="https://hotelmix.com.ua/time/kiev-18881">Київ</a><br/></div></div> <script type="text/javascript"> function setWidgetData_984431449(data){ if(typeof(data) != 'undefined' && data.results.length > 0) { for(var i = 0; i < data.results.length; ++i) { var objMainBlock = ''; var params = data.results[i]; objMainBlock = document.getElementById('tw_'+params.widget_type+'_'+params.widget_id); if(objMainBlock !== null) objMainBlock.innerHTML = params.html_code; } } } var clock_timer_984431449 = -1; widgetSrc = "https://widgets.booked.net/time/info?ver=2;domid=966;type=22;id=984431449;scode=124;city_id=18881;wlangid=29;mode=1;details=0;background=ffffff;border_color=ffffff;color=686868;add_background=ffffff;add_color=333333;head_color=ffffff;border=0;transparent=0"; var widgetUrl = location.href; widgetSrc += '&ref=' + widgetUrl; var wstrackId = ""; if (wstrackId) { widgetSrc += ';wstrackId=' + wstrackId + ';' } var timeBookedScript = document.createElement("script"); timeBookedScript.setAttribute("type", "text/javascript"); timeBookedScript.src = widgetSrc; document.body.appendChild(timeBookedScript); </script>
<!-- clock widget end -->

</body>
</html>`;

export default informers;
