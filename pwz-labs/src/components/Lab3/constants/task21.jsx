const  task21 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Таблична верстка</title>

    <style type="text/css">
        html,body{
        height:100%;
        margin:0 2%;
        padding:0px
        }
        .header, .footer{
            background: navy;
            height: 10%;
        }
        .yellow{
            background: yellow;
        }
        td{
            text-align: center;
        }

       </style>
</head>
<body height = "100%">
    <table border="1" width="100%" height = "100%">
        <tr>
            <th colspan=3 class="header">Header</th>
        </tr>

        <tr>
            <td width="10%" class="yellow"></td>        
            <td width="80%">Content</td>
            <td width="10%" class="yellow"></td>
        <tr>
            <td colspan=3 class="footer">Footer</td>
        </tr>
    </table>
</body>
</html>`;

export default task21;
