const fs = require('fs');
const natural = require('natural');
const tokenizer = new natural.WordTokenizer();

// Perform Tokenization:
// Tokenization involves splitting text into individual words or tokens. In this step, we'll tokenize the text data from your CSV file.
const rawData = fs.readFileSync('rnsas.csv', 'utf8'); // Load and preprocess data
const lines = rawData.split('\n');
const tokenizedTexts = lines.map(line => {
  const tokens = tokenizer.tokenize(line); // Tokenize the line
  return tokens.join(' '); // Join tokens back into a sentence
});

console.log(tokenizedTexts);

// Perform Sentiment Analysis:
// Sentiment analysis involves determining the sentiment (positive, negative, neutral) of a text. We'll use the natural library's SentimentAnalyzer for this purpose.
const Sentiment = natural.SentimentAnalyzer;
const stemmer = natural.PorterStemmer;
const sentiment = new Sentiment('English', stemmer, 'afinn');

// Analyze sentiment of each tokenized text
const sentimentResults = tokenizedTexts.map(text => {
  const result = sentiment.getSentiment(tokenizer.tokenize(text)); // Analyze sentiment
  return result;
});

console.log(sentimentResults);
