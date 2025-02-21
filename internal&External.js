<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Internal and External JavaScript Example</title>
    <script>
        function showInternalMessage() {
            alert("This is an internal JavaScript message!");
        }
    </script>
    <script src="external.js"></script>
</head>
<body>
    <h1>Internal and External JavaScript Example</h1>
    <button onclick="showInternalMessage()">Show Internal Message</button>
    <h2>Click the button below to run external JavaScript</h2>
    <button onclick="showExternalMessage()">Show External Message</button>
</body>
</html>
