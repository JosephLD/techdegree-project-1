/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//Here I create the array of quotes
let quotes = [
  {
    quote: 'A',
    source: 'a'
  },
  {
    quote: 'B',
    source: 'b'
  } ,
  {
    quote: 'C',
    source: 'c'
  },
  {
    quote: 'D',
    source: 'd'
  },
  {
    quote: 'E',
    source: 'e'
  },
  {
    quote: 'F',
    source: 'f'
  },
  {
    quote: 'G',
    source: 'g'
  },
  {
    quote: 'H',
    source: 'h'
  },
  {
    quote: 'I',
    source: 'i',
    citation: '12',
    year: 1324
  },
  {
    quote: 'J',
    source: 'j',
    citation: 'lnmop',
    year: 1981
  }
]
//Testing that the array is correct
console.log(quotes);
//Here I create the function to generate a random quote object from the array
function getRandomQuote()  {
  //here I generate a random number from 0 to 9
  let randomNumber = (Math.floor(Math.random() * quotes.length));
  //And now I assign the newly created number to a quote object and the return the quote
  return quotes[randomNumber];
}
//Testing that the random quote is generated
console.log(getRandomQuote());


/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/
function printQuote() {
  let randomQuote = getRandomQuote();
  let message = "";
  message += '<p class="quote">' + randomQuote.quote + '</p>';
  message += '<p class= "source">' + randomQuote.source;
  //Need to figure out a way to get the conditionals to work
    if (randomQuote.citation !== undefined) {
      message += '<span class="citation">' + randomQuote.citation + '</span>'
    }
    if(randomQuote.year !== undefined) {
     message += '<span class="year">' + randomQuote.year + '</span>'
    }
  message += '</p>';
  //Using getElementById from MDN to try to target the 'quote box' div
document.getElementById("quote-box").innerHTML = message;
}


//Reminder: DO NOT TOUCH THIS CODE.
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.