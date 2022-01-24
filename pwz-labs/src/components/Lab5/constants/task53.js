const task53 = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>jQuery UI Menu - Default functionality</title>
  <link rel="stylesheet" href="//code.jquery.com/ui/1.13.1/themes/base/jquery-ui.css">
  <link rel="stylesheet" href="/resources/demos/style.css">
  <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
  <script src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"></script>
  <script>
  $( function() {
    $( "#menu" ).menu();
  } );
  </script>
  <style>
  .ui-menu { width: 150px; }
  </style>
</head>
<body>
 
<ul id="menu">
  <li><div>Тема</div></li>
  <li><div>Вступ</div></li>
  <li><div>Завдання</div>
    <ul>
      <li><div>Приклад 1</div></li>
      <li><div>Приклад 2</div></li>
    </ul>
  </li>
    <li><div>Висновки</div></li>
  <li class="ui-state-disabled"><div>Контрольні запитання</div></li>
</ul>
 
</body>
</html>`;

export default task53;
