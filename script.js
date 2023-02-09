// selectors

const quoteText = document.querySelector(".quoteText");
const author = document.querySelector(".author");
const button = document.querySelector(".generate");
const url = "https://api.quotable.io/random";

// functions
const getQuote = async function () {
  const res = await fetch(url);
  const data = await res.json();
  quoteText.textContent = data.content;
  author.textContent = data.author;
};
getQuote();
// event listeners
button.addEventListener("click", getQuote);
