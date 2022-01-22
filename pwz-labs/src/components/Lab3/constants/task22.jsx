const task22 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Float верстка</title>
    <style type="text/css">
        html,body{
        height:100%;
        margin:0 2%;
        padding:0px
        }
        header, footer{
            background: navy;
            height: 10%;
        }
        main{
            height: 80%;
        }
        .float-right{
            float: right;
            background: yellow;
            height: 100%;
            width: 10%;
        }
        .float-left{
            float: left;
            background: yellow;
            height: 100%;
            width: 10%;
        }
        .center{
            background: green;
            height: 100%;
            width: 100%;
        }
        h4{
            text-align: center;
            margin: 0 auto;
            color:white;
            font-size: 15px;
            padding-top: 10px;
        }
       </style>
</head>
</head>
<body>
    <header>
        <h4>Header</h4>
    </header>
    <main>
        <div class="float-left"></div>
        <div class="float-right"></div>
        <div class="center">
            <h4>Content</h4>
        </div>
    </main>
    <footer>
        <h4>Footer</h4>
    </footer>
</body>
</html>`;

export default task22;
