function vowelCount(vowelStr) {
  let isVowel = (char) => 'aeiou'.includes(char)
  let vowelMap = new Map()

  for (let char of vowelStr) {
    let lcChar = char.toLowerCase()
    if (isVowel(lcChar)) {
      if (vowelMap.has(lcChar)) {
        vowelMap.set(lcChar, vowelMap.get(lcChar) + 1)
      } else {
        vowelMap.set(lcChar, 1)
      }
    }
  }

  return vowelMap
}

console.log(vowelCount('NavEen MoHAnTy'))