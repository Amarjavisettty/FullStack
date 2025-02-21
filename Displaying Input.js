<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Different Ways to Take Input in JavaScript</title>
    <script>
        function promptInput() {
            var userInput = prompt("Please enter your name:");
            if (userInput != null && userInput != "") {
                alert("You entered: " + userInput);
            } else {
                alert("No input provided.");
            }
        }
        function textInput() {
            var textFieldInput = document.getElementById("textField").value;
            if (textFieldInput != "") {
                alert("You entered: " + textFieldInput);
            } else {
                alert("Please enter something in the input field.");
            }
        }
        function confirmInput() {
            var isConfirmed = confirm("Do you like JavaScript?");
            if (isConfirmed) {
                alert("You like JavaScript!");
            } else {
                alert("You don't like JavaScript.");
            }
        }
    </script>
</head>
<body>
    <h1>Different Ways to Take Input in JavaScript</h1>
    <button onclick="promptInput()">Enter Name via Prompt</button>
    <br><br>
    <h3>Enter your name below:</h3>
    <input type="text" id="textField" placeholder="Enter your name">
    <button onclick="textInput()">Submit Name via Input Field</button>
    <br><br>
    <button onclick="confirmInput()">Do you like JavaScript? (Yes/No)</button>
</body>
</html>
