function generate() {
    var quotes = {
        "Albert Einstein": '"Imagination is more important than knowledge."',
        "Maya Angelou": '"I\'ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."',
        "Mark Twain": '"The secret of getting ahead is getting started."',
        "Oscar Wilde": '"Be yourself; everyone else is already taken."',
        "Mahatma Gandhi": '"Be the change that you wish to see in the world."',
        "Martin Luther King Jr.": '"I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character."',
        "Winston Churchill": '"Success is not final, failure is not fatal: It is the courage to continue that counts."',
        "Nelson Mandela": '"It always seems impossible until it\'s done."',
        "Abraham Lincoln": '"In the end, it\'s not the years in your life that count. It\'s the life in your years."',
        "Steve Jobs": '"Innovation distinguishes between a leader and a follower."'
    }
    
    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];

    document.getElementById('quote').innerHTML = quote;
    document.getElementById('author').innerHTML = author;
}