/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//Here I create the array of quotes
//Using simple letter strings as filler while I flush out the code
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

//Here I create the function to generate a random quote object from the array
function getRandomQuote()  {
  //Here I generate a random number from 0 to 9
  let randomNumber = (Math.floor(Math.random() * quotes.length));
  //And now I assign the newly created number to a quote object and the return the quote
  return quotes[randomNumber];
}

//Here I create the printQuote function
function printQuote() {
  //I set the randomly generated quote to a variable for to access it easily
  let randomQuote = getRandomQuote();
  //I create an empty message string to concatenate onto
  let message = "";
  //I concatenate the message string with the quote and source
  message += '<p class="quote">' + randomQuote.quote + '</p>';
  message += '<p class= "source">' + randomQuote.source;
  //Here I check to see if the quote is missing the citation key
  //If it is not, I add the citation to the quote
    if (randomQuote.citation !== undefined) {
      message += '<span class="citation">' + randomQuote.citation + '</span>'
    }
    //Same process for the year key as for the citation key
    if(randomQuote.year !== undefined) {
     message += '<span class="year">' + randomQuote.year + '</span>'
    }
    //After checking for the citation and year, I end the message string
  message += '</p>';
  //Using getElementById from MDN to try to target the 'quote box' div
document.getElementById("quote-box").innerHTML = message;
}


//Reminder: DO NOT TOUCH THIS CODE.
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
