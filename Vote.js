<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Voter Information</title>
    <style>
        table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
            padding: 8px;
        }
    </style>
</head>
<body>
    <h2>Voter Information</h2>

    <script>
        var voterName = prompt("Enter your name:");
        var voterAge = prompt("Enter your age:");

        var canVote = parseInt(voterAge) >= 18 ? "Yes" : "No";

        document.write("<table>");
        document.write("<tr><th>Name</th><th>Age</th><th>Can Vote</th></tr>");
        document.write("<tr><td>" + voterName + "</td><td>" + voterAge + "</td><td>" + canVote + "</td></tr>");
        document.write("</table>");
    </script>

</body>
</html>
