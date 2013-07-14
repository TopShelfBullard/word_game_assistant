var breakElement;
var buttonInput = document.getElementById("beginProcessButton");
var currentNumber;
var currentNumberCharacters = [];
var currentNumberCharactersSorted = [];
var currentNumberCharactersSortedJoined;
var endingNumber;
var endingNumberIncrementer;
var length;
var matches = [];
var paragraphNode = document.getElementById("outputParagraph");
var testNumber;
var textInput = document.getElementById("lengthInput");
var textNode;
var startingNumber;

buttonInput.onclick = function() {
  length = textInput.value;
  endingNumber = length;
  startingNumber = "1";
  length = Number(length);
  
  for (var index1 = 2; index1 <= length; index1++) {
    endingNumberIncrementer = length - (index1 - 1);
    endingNumberIncrementer = endingNumberIncrementer.toString();
    endingNumber = endingNumber + endingNumberIncrementer;
    startingNumber = startingNumber + index1.toString();
  }

  testNumber = startingNumber.charAt(0);

  for (var index2 = 1; index2 < length; index2++) { 
    testNumber = testNumber + startingNumber.charAt(index2);
  }

  endingNumber = Number(endingNumber);
  staringNumber = Number(startingNumber);
  
  for (var index3 = startingNumber; index3 <= endingNumber; index3++) {
    currentNumber = index3.toString();
    currentNumberCharacters = [];
    for (var index4 = 0; index4 < currentNumber.length; index4++) {
      currentNumberCharacters[index4] = currentNumber.charAt(index4); 
    }

    currentNumberCharactersSorted = currentNumberCharacters.sort();
    currentNumberCharactersSortedJoined = currentNumberCharactersSorted[0];

    for (var index5 = 1; index5 < currentNumberCharactersSorted.length; index5++) {
      currentNumberCharactersSortedJoined = currentNumberCharactersSortedJoined +
        currentNumberCharactersSorted[index5];
    }
    

    if (currentNumberCharactersSortedJoined === testNumber) {
      for (var index6 = 0; index6 < currentNumber.length; index6++) {
        matches.push(Number(currentNumber.charAt(index6)));
      }
    }
  }
 
  for(var index7 = 0; index7 < matches.length; index7++) {
    textNode = document.createTextNode(matches[index7] + ","); 
    breakElement = document.createElement("br");
    paragraphNode.appendChild(textNode); 
    
    if (index7 !==0 && index7 % 40 === 0) {
      breakElement = document.createElement("br");
      paragraphNode.appendChild(breakElement);
    }  
  }

};


