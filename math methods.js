<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Math Object Example</title>
</head>
<body>
    <h1>Math Object Example</h1>
    <p id="output"></p>

    <script>
        let output = "";

        output += "Value of Pi: " + Math.PI + "<br>";
        output += "Absolute value of -25: " + Math.abs(-25) + "<br>";
        output += "2 raised to the power of 3: " + Math.pow(2, 3) + "<br>";
        output += "Square root of 16: " + Math.sqrt(16) + "<br>";
        output += "Random number between 0 and 1: " + Math.random() + "<br>";
        output += "Rounded value of 4.7: " + Math.round(4.7) + "<br>";

        document.getElementById("output").innerHTML = output;
    </script>
</body>
</html>
output
Math Object Example
Value of Pi: 3.141592653589793
Absolute value of -25: 25
2 raised to the power of 3: 8
Square root of 16: 4
Random number between 0 and 1: 0.123035139073987
Rounded value of 4.7: 5
