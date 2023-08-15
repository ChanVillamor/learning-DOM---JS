let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
  quote: `"The only way to do great work is to love what you do."`,
  person: "- Steve Jobs"
}, {
  quote: `"In three words I can sum up everything I've learned about life: it goes on." `,
  person: "- Robert Frost"
}, {
  quote: `"Believe you can and you're halfway there." `,
  person: "- Theodore Roosevelt"
}, {
  quote: `"Success is not final, failure is not fatal: It is the courage to continue that counts." `,
  person: "- Winston Churchill"
}, {
  quote: `"Don't watch the clock; do what it does. Keep going." `,
  person: "- Sam Levenson"
}, {
  quote: `"The future depends on what you do today."`,
  person: "- Mahatma Gandhi"
}, {
  quote: `"The only limit to our realization of tomorrow will be our doubts of today."`,
  person: "- Franklin D."
}, {
  quote: `"The road to success and the road to failure are almost exactly the same."`,
  person: "- Colin R. Davis"
}, {
  quote: `"Success is walking from failure to failure with no loss of enthusiasm."`,
  person: "- Winston Churchill"
}, {
  quote: `"The harder the conflict, the greater the triumph."`,
  person: "- George Washington"
}, {
  quote: `"It does not matter how slowly you go as long as you do not stop." `,
  person: "- Confucius"
}, {
  quote: `"Your time is limited, don't waste it living someone else's life."`,
  person: "- Steve Jobs"
}, {
  quote: `"In the middle of every difficulty lies opportunity."`,
  person: "- Albert Einstein"
}, {
  quote: `"The best revenge is massive success."`,
  person: "- Frank Sinatra"
}, {
  quote: `"The only thing standing between you and your dream is the will to try and the belief that it is actually possible."`,
  person: "- Joel Brown"
}, {
  quote: `"You are never too old to set another goal or to dream a new dream."`,
  person: "- C.S. Lewis"
}, {
  quote: `"Success usually comes to those who are too busy to be looking for it."`,
  person: "- Henry David Thoreau"
}, {
  quote: `"Don't be pushed around by the fears in your mind. Be led by the dreams in your heart."`,
  person: "- Roy T. Bennett"
}];

btn.addEventListener('click', function() {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});