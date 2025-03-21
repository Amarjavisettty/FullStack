<script>
    let num = parseInt(prompt("Enter a number to check if it's an Armstrong number:"));
    let temp = num;
    let sum = 0;
    let digits = num.toString().length;

    while (temp > 0) {
        let remainder = temp % 10;
        sum += Math.pow(remainder, digits);
        temp = Math.floor(temp / 10);
    }

    if (sum === num) {
        alert(`${num} is an Armstrong number`);
    } else {
        alert(`${num} is not an Armstrong number`);
    }
</script>
