var buttonInput;
var lettersIndexes = [];
var textInput;
var validEnglishWordMatches = [];
var word;
var words;
var wordLength;

buttonInput = document.getElementById("inputButton");
textInput = document.getElementById("inputText");

buttonInput.onclick = function() {
  
  word = textInput.value;
  word = word.toLowerCase();
  wordLength = word.length;
  wordLength = Number(wordLength);
  
  lettersIndexes = determineCombinationArray(wordLength);  
  words = createAnArrayOfAllWordCombinations(word, lettersIndexes);
  validEnglishWordMatches = checkWordCombinationsAgainstValidEnglishWords(words);
  
  output(validEnglishWordMatches, words);
};
