//Use an array to hold the value of the quotes
const quotes = [
    {
        author: 'Oscar Wilde',
        quote: 'Be yourself; everyone else is already taken.'
    },
    {
        author: 'Albert Einstein',
        quote: 'Two things are infinite: the universe and human stupidity; and I am not sure about the universe.'
    },
    {
        author: 'Frank Zappa',
        quote: 'So many books, so little time.'
    },
    {
        author: 'Marcus Tullius Cicero',
        quote: 'A room without books is like a body without a soul.'
    },
    {
        author: 'Dr. Seuss',
        quote: 'You know you are in love when you can not fall asleep because reality is finally better than your dreams.'
    },
    {
        author: 'Mahatma Gandhi',
        quote: 'Be the change that you wish to see in the world.'
    },
    {
        author: 'Oscar Wilde',
        quote: 'Be yourself; everyone else is already taken.'
    },
    {
        author: 'Albert Einstein',
        quote: 'Two things are infinite: the universe and human stupidity; and I am not sure about the universe.'
    },
    {
        author: 'Frank Zappa',
        quote: 'So many books, so little time.'
    },
    {
        author: 'Marcus Tullius Cicero',
        quote: 'A room without books is like a body without a soul.'
    },
    {
        author: 'Dr. Seuss',
        quote: 'You know you are in love when you can not fall asleep because reality is finally better than your dreams.'
    },
    {
        author: 'Mahatma Gandhi',
        quote: 'Be the change that you wish to see in the world.'
    },
];


// Idea 1
function generateQuote(){
    var randomQuote = Number.parseInt(Math.random()*quotes.length);
    document.getElementById('quote').innerHTML = `\"${quotes[randomQuote].quote}\"`;
    document.getElementById('author').innerHTML = `- ${quotes[randomQuote].author}`;

}

// Idea 2
// var currentIndex = 0;

// function generateQuote(){
// if( currentIndex == quotes.length )
//     currentIndex = 0;

// var myData = `<p>${quotes[currentIndex].quote}</p>
//        <p>${quotes[currentIndex].author}</p>`

//        currentIndex++;

//     document.getElementById('quoteOutput').innerHTML = myData;

//     }
