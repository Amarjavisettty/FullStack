<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Palindrome Checker</title>
    <script>
        function checkPalindrome() {
            var input = document.getElementById("inputText").value;
            var reversedInput = input.split('').reverse().join('');
            
            if (input === reversedInput) {
                document.getElementById("result").innerText = '"' + input + '" is a palindrome.';
            } else {
                document.getElementById("result").innerText = '"' + input + '" is not a palindrome.';
            }
        }
    </script>
</head>
<body>
    <h1>Palindrome Checker</h1>
    <input type="text" id="inputText" placeholder="Enter a word or phrase">
    <button onclick="checkPalindrome()">Check Palindrome</button>
    <p id="result"></p>
</body>
</html>
