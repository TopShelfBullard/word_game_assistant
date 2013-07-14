function  determineCombinationArray(lengthRecieved) {   
  var arrayRequired = [];

  switch (true) {
    case lengthRecieved === 1:
      arrayRequired = returnArrayForLength1();
      break;
    case lengthRecieved === 2:
      arrayRequired = returnArrayForLength2();
      break;
    case lengthRecieved === 3:
      arrayRequired = returnArrayForLength3();
      break;
    case lengthRecieved === 4:
      arrayRequired = returnArrayForLength4();
      break;
    case lengthRecieved === 5:
      arrayRequired = returnArrayForLength5();
      break;
    case lengthRecieved === 6:
      arrayRequired = returnArrayForLength6();
      break;
    case lengthRecieved === 7:
      arrayRequired = returnArrayForLength7();
      break;
    case lengthRecieved === 8:
      arrayRequired = returnArrayForLength8();
      break;
  }  
  
  return(arrayRequired);
}


function createAnArrayOfAllWordCombinations(word, indexes) {
  var currentWordCombination;
  var words = [];
  var indexesIndex = 0;
 
  for (var wordsIndex = 0; wordsIndex < indexes.length / word.length; wordsIndex++) {
    currentWordCombination = word.charAt((indexes[indexesIndex])-1);
    indexesIndex++;  
    for (var counter = 1; counter < word.length; counter++) {
      currentWordCombination = currentWordCombination + 
                               word.charAt((indexes[indexesIndex])-1);
      indexesIndex++; 
    }
    words.push(currentWordCombination);
  }
  return(words);
}


function checkWordCombinationsAgainstValidEnglishWords(wordCombinations) {
  var matches = [];
  var validEnglishWords = [];
  
  validEnglishWords = returnAnArrayOfValidEnglishWords();
  for (var outerIndex = 0; outerIndex < wordCombinations.length; outerIndex++) {
    for (var innerIndex = 0; innerIndex < validEnglishWords.length; innerIndex++) {
      if (wordCombinations[outerIndex] === validEnglishWords[innerIndex]) {
        matches.push(wordCombinations[outerIndex]);
      }
    }
  }
  console.log(validEnglishWords);
  console.log(wordCombinations);
  return(matches);  
} 



function output(matches, combinations) {
  var combinationsParagraph;
  var combinationsTextNode;
  var matchesParagraph;
  var matchesTextNode;
  var breakElement;

  matchesParagraph = document.getElementById("matchesParagraph");
  combinationsParagraph = document.getElementById("combinationsParagraph"); 

  for (var index1 = 0; index1 < matches.length; index1++) {
    matchesTextNode = document.createTextNode(matches[index1] + ","); 
    matchesParagraph.appendChild(matchesTextNode); 
    
    if (index1 !==0 && index1 % 12 === 0) {
      breakElement = document.createElement("br");
      matchesParagraph.appendChild(breakElement);
    }  
  }

  for (var index2 = 0; index2 < combinations.length; index2++) {
    combinationsTextNode = document.createTextNode(combinations[index2] + ","); 
    combinationsParagraph.appendChild(combinationsTextNode); 
    
    if (index2 !==0 && (index2 + 1) % 12 === 0) {
      breakElement = document.createElement("br");
      combinationsParagraph.appendChild(breakElement);
    }  
  }
}
