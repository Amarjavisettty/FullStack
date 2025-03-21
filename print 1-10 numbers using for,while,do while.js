function printNumbers() {
    console.log("Using For loop:");
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
    console.log("\nUsing While loop:");
    let i = 1;
    while (i <= 10) {
        console.log(i);
        i++;
    }
    console.log("\nUsing Do-While loop:");
    i = 1;
    do {
        console.log(i);
        i++;
    } while (i <= 10);
}
printNumbers();
output
Using For loop:
1
2
3
4
5
6
7
8
9
10

Using While loop:
1
2
3
4
5
6
7
8
9
10

Using Do-While loop:
1
2
3
4
5
6
7
8
9
10
