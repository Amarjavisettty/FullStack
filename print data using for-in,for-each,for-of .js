let person = {
    name: "John",
    age: 25,
    country: "USA"
};
console.log("Using for-in loop:");
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
console.log("\nUsing forEach loop:");
Object.values(person).forEach(value => {
    console.log(value);
});   
console.log("\nUsing for-of loop:");
for (let [key, value] of Object.entries(person)) {
    console.log(`${key}: ${value}`);
}
output
Using for-in loop:
name: John
age: 25
country: USA

Using forEach loop:
John
25
USA

Using for-of loop:
name: John
age: 25
country: USA
