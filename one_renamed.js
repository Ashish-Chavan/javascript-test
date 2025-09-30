// This is a comment in JavaScript
console.log("Hello from script.js!");

function greetUser(name) {
  return "Hello, " + name + "!";
}

let userName = "Alice";
let greetingMessage = greetUser(userName);
console.log(greetingMessage);

// Event listener example (for web pages)
document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('myButton');
  if (button) {
    button.addEventListener('click', () => {
      alert('Button clicked!');
    });
  }
});
