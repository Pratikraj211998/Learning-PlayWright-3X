// ==========================================
// Practice Questions — Set 4: Strings
// Ordered from simple to hard.
// Solve each question below its comment block.
// ==========================================

// ---------- Basic ----------

// Q1. Given `let str = "Playwright Automation";`, log its length, its first
//     character, and its last character (using .at(-1)).


// Q2. Given `let email = "pratik@example.com";`, use `.includes()` to check
//     if it contains "@", and `.split("@")` to separate the username from
//     the domain.


// Q3. Given `let name = "  pratik  ";`, trim the whitespace and convert it
//     to have the first letter capitalized ("Pratik").


// ---------- Intermediate ----------

// Q4. Given `let sentence = "the quick brown fox";`, capitalize the first
//     letter of EVERY word so it reads "The Quick Brown Fox" (hint: split by
//     space, transform each word, join back).


// Q5. Given `let msg = "aaa-bbb-aaa-ccc-aaa";`, replace only the FIRST "aaa"
//     with "XXX" using `.replace()`, then replace ALL of them using
//     `.replaceAll()`. Log both results separately.


// Q6. Given `let id = 7;`, format it as a zero-padded 4-digit string
//     ("0007") using `.padStart()`.


// Q7. Given `let url = "https://api.example.com/v1/users/42";`, extract just
//     the numeric ID at the end using string methods (no regex needed —
//     think `.split()` + `.at(-1)`).


// ---------- Hard ----------

// Q8. Write a function `isPalindrome(str)` that checks if a string reads the
//     same forwards and backwards (e.g. "madam", "racecar"). Make it
//     case-insensitive and ignore spaces (so "Nurses Run" also counts).


// Q9. Write a function `reverseString(str)` that reverses a string WITHOUT
//     using the built-in array `.reverse()` method.


// Q10. Write a function `countVowels(str)` that counts how many vowels
//      (a, e, i, o, u — case-insensitive) appear in a string.


// Q11. Write a function `areAnagrams(str1, str2)` that checks if two strings
//      are anagrams of each other (e.g. "listen" and "silent" — same
//      letters, different order). Ignore case and spaces.


// Q12. Write a function `wordFrequency(sentence)` that returns an object
//      counting how many times each word appears, e.g.
//      wordFrequency("the cat and the dog") -> { the: 2, cat: 1, and: 1, dog: 1 }


// Q13. Write a function `truncate(str, maxLength)` that shortens a string to
//      `maxLength` characters and appends "..." if it was cut off, but
//      leaves it unchanged if it's already short enough.


// ---------- Interview Process (theory + predict-the-output) ----------
// Answer these in a comment under each one.

// Q14. Are strings mutable or immutable in JavaScript? Prove your answer
//      with a short example.


// Q15. What's the difference between `.slice()` and `.substring()` when
//      given a negative start index?


// Q16. Predict the output, then explain why:
//      let msg = "a-a-a";
//      console.log(msg.replace("a", "X"));
//      console.log(msg);


// Q17. Predict the output, then explain why:
//      console.log("Banana" < "apple");


// Q18. Predict the output, then explain why (careful with truthiness):
//      let str = "hello";
//      if (str.indexOf("h")) { console.log("found"); } else { console.log("not found"); }
//      // hint: what index is "h" actually at, and is that index truthy?
