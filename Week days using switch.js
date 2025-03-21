<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weekdays</title>
</head>
<body>
    <script>
        let day = parseInt(prompt("Enter a number (1-7) to get the weekday:"));

        switch(day) {
            case 1: alert("Sunday"); break;
            case 2: alert("Monday"); break;
            case 3: alert("Tuesday"); break;
            case 4: alert("Wednesday"); break;
            case 5: alert("Thursday"); break;
            case 6: alert("Friday"); break;
            case 7: alert("Saturday"); break;
            default: alert("Invalid input. Please enter a number between 1 and 7.");
        }
    </script>
</body>
</html>
