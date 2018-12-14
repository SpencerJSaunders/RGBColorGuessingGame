<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Color Game</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <link rel="stylesheet" type = "text/css" href="stylesheet.css">
    <link href="https://fonts.googleapis.com/css?family=Noto+Serif+SC" rel="stylesheet">

</head>
<body>


<section id = "headerSec">
        <div class = "container">
        <div id = "jumboContainer" class = "jumbotron text-center">
        <h1>The <br> <span id = "colorDisplay">RGB</span><br> Color Game</h1>
        </div>
        </div>
</section>

    <div class = "container">
    <div id = "stripe">
    <button id = "playAgain" class = "playButton">Play Again</button>
    <span id = "message"></span>
    <button id = "easy">Easy</button>
    <button id = "hard" class = "selectedButton">Hard</button>
    </div>
</div>

<div id = "container" style = "margin-top: 30px;">
    <div class = "square"></div>
    <div class = "square"></div>
    <div class = "square"></div>
    <div class = "square"></div>
    <div class = "square"></div>
    <div class = "square"></div>
</div>




<script type = "text/javascript" src = "script.js"></script>

</body>
</html>