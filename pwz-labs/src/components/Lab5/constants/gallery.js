const gallery = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Video player ArtPlayer.js</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <style>
           .gallery {
        width: 100%;
        border:1px solid #EEE;
        padding:2%;
      }
      .placeholder {
        width: 48%;
        margin: 1%;
        float: left;
      }

      .placeholder img {
        border: 1px solid #EEEEEE;
        width: 100%;
        padding:1%;
        min-height: 300px;
        max-height: 600px;
      }

      .gallery-images {
        width: 48%;
        margin: 1%;
        float: left;
      }

      .image img {
        width: 31.333%;
        min-height:125px;
        float: left;
        margin: 1%;
        cursor: pointer;
      }
            .text-center{
                text-align: center;
            }
    </style>
</head>
<body>
    <div class="container">
        <h1 class="text-center">jQuery Gallery</h1>

        <div class="gallery">
            
            <div class="placeholder" id="featured">
                <img src="https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?">
            </div>
    
            <div class="gallery-images">
                <div class="image">
                    <img src="https://images.ctfassets.net/hrltx12pl8hq/45tAKd349x1JHCRX7MGm6A/8cddb0b45a440fbffbb1d56f3c7d2440/02-nature_1529923664.jpg?" data-id="1">
                </div>
                <div class="image">
                    <img src="https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?" data-id="2">
                </div>
                <div class="image">
                    <img src="https://images.ctfassets.net/hrltx12pl8hq/66lRNN2kfHcVSUMrmrcKxf/76b78071032586ff9766d8eb51592f21/free-nature-images.jpg?" data-id="3">
                </div>
                <div class="image">
                    <img src="https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?" data-id="4">
                </div>
            <div class="clear clearfix"></div>
</div>
            
<script>
      jQuery(document).ready(function($) {
          $('.image img').click(function(event) {
            // detect data-id for later
            var id = $(this).data('id');
            // grab src to replace #featured
            var src = $(this).attr('src');
            // set featured image
            var img = $('#featured img');

            img.fadeOut('fast', function() {
              $(this).attr({src: src,});
              $(this).fadeIn('fast');
            });
          });
        });
</script>        
</body>
</html>`;

export default gallery;
