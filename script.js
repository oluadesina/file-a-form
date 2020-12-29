//selects all radio buttions
let radioButtons = document.querySelectorAll('input[type="radio"]');
console.log(radioButtons);

//selects I-90 radio button
let radio90 = document.getElementById('I-90');
console.log(radio90);

//selects I-90 hidden content
let radio90Content = document.getElementById("toogle-1");
console.log(radio90Content);

//selects I-102 radio button
let radio102 = document.getElementById('I-102');
console.log(radio102);

//selects I-102 hidden content
let radio102Content = document.getElementById('toogle-2');
console.log(radio102Content);

//selects I-130 radio button
let radio130 = document.getElementById('I-130');
console.log(radio130);

//selects I-130 hidden content
let radio130Content = document.getElementById('toogle-3');
console.log(radio102Content);

//selects N-336 radio button
let radio336 = document.getElementById('N-336');
console.log(radio336);

//selects N-336 hidden content
let radio336Content = document.getElementById('toogle-4');
console.log(radio336Content);

//selects N-400 radio button
let radio400 = document.getElementById('N-400');
console.log(radio400);

//selects N-400 hidden content
let radio400Content = document.getElementById('toogle-5');
console.log(radio400Content);

//selects I-407 radio button
let radio407 = document.getElementById('I-407');
console.log(radio407);

//selects I-407 hidden content
let radio407Content = document.getElementById('toogle-6');
console.log(radio407Content);

//selects I-485 radio button
let radio485 = document.getElementById('I-485');
console.log(radio485);

//selects I-485 hidden content
let radio485Content = document.getElementById('toogle-7');
console.log(radio485Content);

//selects I-485A radio button
let radio485A = document.getElementById('I-485A');
console.log(radio485A);

//selects I-485 hidden content
let radio485AContent = document.getElementById('toogle-8');
console.log(radio485AContent);

//selects I-539 radio button
let radio539 = document.getElementById('I-539');
console.log(radio539);

//selects I-539 hidden content
let radio539Content = document.getElementById('toogle-9');
console.log(radio539Content);


/////FUNCTIONS

//Using Array.from(radioButtons) to turn radioButtons into an "array" since radioButtons is NodeList
Array.from(radioButtons).forEach(item => {
item.addEventListener("change", Display);
})
//Function that displays content of selected radio buttons while hiding content for unselected radio buttons.
function Display() {

if (radio90.checked === true) {
radio90Content.classList.remove('hide');
} else {
radio90Content.classList.add('hide');
}

if (radio102.checked === true) {
radio102Content.classList.remove('hide');
} else {
radio102Content.classList.add('hide');
}

if (radio130.checked === true) {
radio130Content.classList.remove('hide');
} else {
radio130Content.classList.add('hide');
}

if (radio336.checked === true) {
radio336Content.classList.remove('hide');
} else {
radio336Content.classList.add('hide');
}

if (radio400.checked === true) {
radio400Content.classList.remove('hide');
} else {
radio400Content.classList.add('hide');
}

if (radio407.checked === true) {
radio407Content.classList.remove('hide');
} else {
radio407Content.classList.add('hide');
}

if (radio485.checked === true) {
radio485Content.classList.remove('hide');
} else {
radio485Content.classList.add('hide');
}

if (radio485A.checked === true) {
radio485AContent.classList.remove('hide');
} else {
radio485AContent.classList.add('hide');
}

if (radio539.checked === true) {
radio539Content.classList.remove('hide');
} else {
radio539Content.classList.add('hide');
}
}