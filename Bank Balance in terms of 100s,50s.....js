<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Denomination Calculator</title>
    <script>
        function calculateDenominations() {
            var amount = parseInt(document.getElementById("amount").value);
            var denominations = [100, 50, 20, 10, 5, 2, 1];
            var result = "";
            
            if (isNaN(amount) || amount <= 0) {
                alert("Please enter a valid amount.");
                return;
            }

            for (var i = 0; i < denominations.length; i++) {
                var denominationCount = Math.floor(amount / denominations[i]);
                if (denominationCount > 0) {
                    result += denominationCount + " - " + denominations[i] + "'s, ";
                    amount = amount % denominations[i];
                }
            }

            document.getElementById("result").innerText = result.slice(0, -2); 
        }
    </script>
</head>
<body>
    <h1>Denomination Calculator</h1>
    <label for="amount">Enter amount:</label>
    <input type="number" id="amount" placeholder="Enter amount">
    <button onclick="calculateDenominations()">Calculate Denominations</button>
    <p id="result"></p>
</body>
</html>
