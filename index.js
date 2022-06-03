const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const newQ = document.getElementById("newQ");
const tweet = document.getElementById("tweet");

let realData = "";
let quotesData = "";

const tweetMe = () => {
  let tweetPost = `https://twitter.com/intent/tweet?text=${quotesData.text} by ${quotesData.author}`;
  window.open(tweetPost);
};
const getNewQuotes = () => {
  let rnum = Math.floor(Math.random() * 2000);
  quotesData = realData[rnum];
  quotes.innerText = `${quotesData.text}`;
  quotesData.author == null
    ? (author.innerText = "Anonymous")
    : (author.innerText = `by ${quotesData.author}`);
};

const getQuotes = async () => {
  const api = "https://type.fit/api/quotes";
  try {
    let data = await fetch(api);
    realData = await data.json();
    getNewQuotes();

    // console.log(realData[10].author);
  } catch (error) {}
};

tweet.addEventListener("click", tweetMe);
newQ.addEventListener("click", getNewQuotes);
getQuotes();
