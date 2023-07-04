function reverse(word) {
    let reversed = '';
  
    for (let i = word.length - 1; i >= 0; i--) {
      let currentCharacter = word[i];
      reversed += currentCharacter;
    }
  
    return reversed;
  }
  
  function isPalindrome(word) {
    let reversedWord = reverse(word);
  
    if (reversedWord === word) {
      return true; 
    } else {
      return false; 
    }
  }
  
  const word = 'racecar';
  if (isPalindrome(word)) {
    console.log('It is a palindrome!');
  } else {
    console.log('It is not a palindrome!');
  }
  