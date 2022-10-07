/*** 
 * `quotes` array 
***/
//quotes is an array of objects. Each object has property value pairs.
let quotes = [
  {
    quote:'The greatest glory in living lies not in never falling, but in rising every time we fall.', 
    source: 'Nelson Mandela', 
    tag:'inspirational'
  },
  {
    quote:'The way to get started is to quit talking and begin doing. ', 
    source: 'Walt Disney', 
    tag:'inspirational'
  },
  {
    quote:'Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma – which is living with the results of other people\'s thinking.', 
    source:'Steve Jobs', 
    citation:'goodreads.com'
  },
  {
    quote:'Spread love everywhere you go. Let no one ever come to you without leaving happier. ', 
    source:'Mother Teresa', 
    tag:'love'
  }, 
  {
    quote:'Don\'t judge each day by the harvest you reap but by the seeds that you plant.', 
    source:'Robert Louis Stevenson', 
    citation:'goalcast.com', 
    tag:'motivational'
  }, 
  {
    quote:'The future belongs to those who believe in the beauty of their dreams.', 
    source:'Eleanor Roosevelt', 
    citation:'parade.com', 
    tag:'motivational'
  },
  {
    quote:'If you want to find the secrets of the universe, think in terms of energy, frequency and vibration.', 
    source:'Nikola Tesla', 
    citation:'goodreads.com', 
    tag:'theory'
  },
  {
    quote:'Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.', 
    source:'Patrick McKenzie', 
    citation:'Twitter', 
    year:2016, 
    tag:'inspirational'}
];

/***
 * `getRandomQuote` function
***/
function getRandomQuote() {          
  let randomizeQuote = Math.floor( Math.random() * quotes.length );
  return quotes[randomizeQuote];
}

/***
 * `printQuote` function
***/
function printQuote() {
  let randomQuote = getRandomQuote();
  let htmlString = `<p class= "quote">${randomQuote.quote}</p> 
                   <p class= "source">${randomQuote.source}`                  
  if(randomQuote.citation) {
      htmlString +=  `<span class="citation">${randomQuote.citation}</span>`              
  } 
  if(randomQuote.year) {
    htmlString += `<span class="year">${randomQuote.year}</span>` 
  }
  if(randomQuote.tag) {
    htmlString += `<span class="tag">, ${randomQuote.tag}</span>`
  } 
htmlString += '</p>'
return document.getElementById('quote-box').innerHTML = htmlString;
}

//Auto-refreshed quotes every 20 seconds
setInterval(printQuote, 20000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);