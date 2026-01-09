// Declare a string using template literals -----> (using backticks" ` ") (dynamic string interpolation ----> using (${}) for inserting strings dynamically )
const name = "manas";
const gitrepocount = 50;

// Using template literal to insert variables into a string
console.log(`hello my name is ${name} and my git repo count is ${gitrepocount}`);

// Creating a String object (not just a primitive string)
const gameName = new String('Valorant');

// Accessing characters using index
console.log(gameName[0]); // 'V'

// Accessing prototype of String object (shows built-in methods)
console.log(gameName.__proto__);

// String length property
console.log(gameName.length); // 8

// Convert string to uppercase (original string remains unchanged)
console.log(gameName.toUpperCase()); // 'VALORANT'

// Get character at specific index
console.log(gameName.charAt(2)); // 'l'

// Find index of a specific character
console.log(gameName.indexOf('o')); // 3

// Extract part of string using substring(start, end)
// Note: end index is NOT included
const newString = gameName.substring(0, 4);
console.log(newString); // 'Valo'

// Extract part of string using slice(start, end)
// Supports negative indices (counts from end)
const anotherString = gameName.slice(-8, 4);
console.log(anotherString); // 'Valo'

// Remove whitespace from both ends
const newStringOne = "      manas   ";
console.log(newStringOne);           // '      manas   ' (original string with spaces)
console.log(newStringOne.trim());    // 'manas'
console.log(newStringOne.trimStart());// 'manas   '
console.log(newStringOne.trimEnd());  // '      manas'

// Replace a part of string
const url = "https://manas.com/Manas%20shete";
console.log(url.replace('%20', '_')); // 'https://manas.com/Manas_shete'

// Check if a substring exists
console.log(url.includes('Manas')); // true

// Split string into array based on separator
console.log(gameName.split('_')); // Since '_' not in 'Valorant', returns ['Valorant']





/*
====================================
📚 JavaScript String Methods Cheat Sheet
====================================

--- 🔹 Property ---
length             // Returns the length of the string

--- 🔹 Character Access & Codes ---
charAt(index)          // Character at index
at(index)              // Supports negative indexes
charCodeAt(index)      // UTF-16 code at index
codePointAt(index)     // Full Unicode code point (emoji-safe)

--- 🔹 Substring Extraction ---
slice(start, end)      // Extract part of string (supports negatives)
substring(start, end)  // Similar to slice, but no negatives
substr(start, length)  // Extract with length (legacy)

--- 🔹 Searching & Matching ---
includes(search, pos)       // true/false if substring exists
startsWith(search, pos)     // true/false if starts with
endsWith(search, length)    // true/false if ends with
indexOf(search, pos)        // First match index or -1
lastIndexOf(search, pos)    // Last match index or -1
search(regex)               // Search using regex
match(regex)                // Matches regex, returns array/null
localeCompare(str, locale)  // Compare strings in locale order

--- 🔹 Modification & Formatting ---
concat(str1, str2, ...)     // Concatenate strings
repeat(count)               // Repeat string N times
replace(search, replace)    // Replace first match
replaceAll(search, replace) // Replace all matches
split(separator, limit)     // Split into array
trim()                      // Remove spaces both ends
trimStart()                 // Remove spaces from start
trimEnd()                   // Remove spaces from end
padStart(len, pad)          // Pad start to length
padEnd(len, pad)            // Pad end to length

--- 🔹 Unicode & Normalization ---
normalize([form])           // Normalize Unicode text

--- 🔹 Case Conversion ---
toLowerCase()               // Lowercase all letters
toUpperCase()               // Uppercase all letters
toLocaleLowerCase()         // Lowercase (locale-aware)
toLocaleUpperCase()         // Uppercase (locale-aware)

--- 🔹 Conversion & Utility ---
toString()                  // Convert to string
valueOf()                   // Primitive string value
String.fromCharCode(num1, num2, ...) // Create string from UTF-16 codes

--- 🔹 Deprecated HTML Wrappers (Avoid using) ---
anchor(), big(), blink(), bold(), fixed(), fontcolor(), fontsize(),
italics(), link(), small(), strike(), sub(), sup()

====================================
⚡ Notes:
- Strings in JS are immutable — methods return NEW strings.
- Use `codePointAt()` + `normalize()` for emoji/international text.
- Avoid deprecated HTML methods in modern code.
====================================
*/
