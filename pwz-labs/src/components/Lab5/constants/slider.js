const slider = `
<html>
<head>

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <script src="https://cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.min.js"></script>

  <script>
    $(document).ready(function(){
      $('.slider').bxSlider();
    });
  </script>

</head>
<body>

  <div class="slider">
   <img src="https://content.r9cdn.net/rimg/dimg/27/bb/1e63bfbb-city-15139-1645cdfc948.jpg?" alt="img" width="500"></img>
   <img src="https://www.interkultur.com/fileadmin/_processed_/6/a/csm_S-01-Kyiv2020-Shutterstock_6cdd2a1dda.jpg" alt="img" width="500"></img>
  </div>

</body>
</html>
`;

export default slider;