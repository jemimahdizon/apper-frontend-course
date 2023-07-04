function convertToVowels(word) {
    const vowels = 'aeiouAEIOU';
    let result = '';
  
    for (let i = 0; i < word.length; i++) {
      if (vowels.includes(word[i])) {
        result += word[i];
      }
    }
  
    return result;
  }
  
  const word = 'thisissomeword';
  const wordWithOnlyVowels = convertToVowels(word);
  console.log(wordWithOnlyVowels); // 'iioeo'
  