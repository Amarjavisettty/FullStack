<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Displaying Output in JavaScript</title>
    <script>
        function displayOutput() {
            var message = "Hello, this is a JavaScript output demonstration!";
            alert(message);
            document.write("<h2>" + message + "</h2>");
            console.log(message);
            document.getElementById("output").innerHTML = message;
        }
    </script>
</head>
<body>
    <h1>Different Ways to Display Output in JavaScript</h1>
    <button onclick="displayOutput()">Click to Display Output</button>
    <h3 id="output"></h3>
</body>
</html>
