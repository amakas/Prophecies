import { magicalQuotes } from "./Quotes/quotes.js";

const quote = document.querySelector(".quote");
const randomQuote =
  magicalQuotes[Math.floor(Math.random() * magicalQuotes.length)];
quote.textContent = randomQuote;
