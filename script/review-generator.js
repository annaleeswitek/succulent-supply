// This code will generate a review based on a sample review.

// Choose some text to analyze

const text = `Gorgeous, fast growing succulents
My succulents have already grown a noticeable amount since I purchased them. They are so gorgeous! About 3 of my succulents were damaged during shipping and the Succulent Source refunded my money for those plants almost instantly. I highly recommend this company! Just what I needed
The cuttings were in great condition and the instructions were very helpful. I used them for a DIY terrarium program at my library and the teens loved them. I typed out easy home care guides for them using the instructions provided- overall good experience.`

// Make all the words in the text lower case and remove punctuation

function parseText(text){
  const lowerCaseText = text.toLowerCase();
  const noPuncText = lowerCaseText.replace(/(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=)/g,"");
  const textArray = noPuncText.split(' ');
  return textArray;
}

// Create a Markov Chain Object with the text, assigning each unique word a key, excluding the last word. The value for each key is an array of every word that follows it.

function generateWordPairs(words) {
  const markovChain= {};

  for(var i = 0; i < words.length -1; i++){
    let currentWord = words[i];
    let nextWord = words[i+1];

    if (markovChain[currentWord]) { // if the object has values for the current word already
      markovChain[currentWord].push(nextWord); // push this value into that array
    } else {
      markovChain[currentWord] = [nextWord]; // not in the object yet so, make it a key with value nextWord
    }
  }
  return markovChain;
}

var wordPairs = generateWordPairs(parseText(text));

// Generate a random word from the poem

function randomWord(wordArray){
  var randomIndex = parseInt(Math.random() * wordArray.length);
  return wordArray[randomIndex];
}

// Create a line of poetry

function writeLine(mcObj, minWords){
  const textArray = Object.keys(mcObj); // array of all the keys
  const word = randomWord(textArray); // chooses a random word from the array of keys
  const line = [word]; // this is an array of each word in the line

  while (line.length < minWords){  // while the line is less than the assigned length
    let nextWord = mcObj[word]; // assign nextWord to the values array for the word
    word = randomWord(nextWord); // then re-assign word to a random word chosen from the values array
    line.push(word); // then populate the line with that word
    if(!(mcObj[word])){ // if this word doesn't have any values
      word = randomWord(textArray); // pick a new word and keep going
    }
  }
  return line.join(' ');
}

// Write the poem, specifying how many lines and how many words per line

function generateReview(wordCorpus, numLines, numWords){
  const poem = [];
  for(var i =0; i <= numLines; i++){
    poem.push(writeLine(wordCorpus, numWords));
  }
  return poem;
}

generateReview(wordPairs, 10, 4);
