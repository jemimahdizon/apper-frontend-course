function reverse(word) {
    let reversed = '';
    
    for (let i = word.length - 1; i >= 0; i--) { // Iterate from the last character to the first character
      let currentCharacter = word[i]; // Concatenate the current character with the reversed string
      reversed += currentCharacter; 
    }

    return reversed;
  }
  
  const word = 'hello';
  const reversedWord = reverse(word);
  console.log(reversedWord); // 'olleh'
  