console.log("I'm ready!");


// Iteration 1: Names and Input
let hacker1 = "Akshay";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Vedant"; 
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} 
else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} 
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


// Iteration 3: Loops
let driverNameCaps = "";
for (let i = 0; i < hacker1.length; i++) {
  driverNameCaps += hacker1[i].toUpperCase() + " ";
}
console.log(driverNameCaps.trim());

let reverseNavigator = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reverseNavigator += hacker2[i];
}
console.log(reverseNavigator);

if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
} 
else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}


//Bonus 1
let loremText = `Labore ipsum sint enim aute nostrud ut officia sint excepteur adipisicing. Fugiat mollit laboris occaecat magna pariatur sint exercitation quis aliquip nostrud enim aute. Voluptate eiusmod enim elit ipsum commodo veniam pariatur nulla exercitation. Sit minim sunt dolore aliqua ipsum deserunt. In culpa amet dolor ex ut culpa dolor. Sunt qui amet esse aute do laborum Lorem pariatur amet id nostrud consectetur.
Est voluptate do sint fugiat sunt anim sit quis sunt aliqua ea. Consequat irure cupidatat culpa elit cillum non nisi. Nisi mollit id culpa nostrud occaecat id. Incididunt commodo sit deserunt culpa non quis incididunt ea nulla voluptate irure.Consectetur commodo consectetur ullamco commodo occaecat. Ipsum esse eu irure ut veniam sint exercitation sit nulla consequat enim eu ullamco adipisicing. Magna consectetur fugiat do pariatur. 
Sunt velit amet excepteur quis id quis amet ullamco culpa ea eiusmod laborum minim elit. Consectetur commodo aliqua ea ut Lorem enim est enim duis laboris. Commodo fugiat aute dolor deserunt incididunt qui minim amet deserunt cupidatat pariatur minim. Quis elit occaecat anim labore voluptate nulla aute. Exercitation excepteur pariatur non culpa.`

let wordCount = loremText.split(" ").length;
console.log(`Number of words: ${wordCount}`);

let etCount = loremText.split("et").length - 1;
console.log(`Number of times "et" appears: ${etCount}`);


//Bonus 2
let phraseToCheck = "A man, a plan, a canal, Panama!";
let cleanedPhrase = phraseToCheck.replace(/[^a-zA-Z]/g, "").toLowerCase();
let reversedPhrase = "";
for (let i = cleanedPhrase.length - 1; i >= 0; i--) {
  reversedPhrase += cleanedPhrase[i];
}

if (cleanedPhrase === reversedPhrase) {
  console.log("It's a palindrome!");
} else {
  console.log("It's not a palindrome.");
}

  
