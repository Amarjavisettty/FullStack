<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Factorial Calculator</title>
    <script>
        function calculateFactorial() {
            var num = document.getElementById("number").value;
            var factorial = 1;
            
            if (num < 0) {
                alert("Please enter a positive number.");
                return;
            }
            
            for (var i = 1; i <= num; i++) {
                factorial *= i;
            }
            
            document.getElementById("result").innerText = "Factorial of " + num + " is: " + factorial;
        }
    </script>
</head>
<body>
    <h1>Factorial Calculator</h1>
    <input type="number" id="number" placeholder="Enter a number">
    <button onclick="calculateFactorial()">Calculate Factorial</button>
    <p id="result"></p>
</body>
</html>
