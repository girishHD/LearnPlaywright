# JavaScript String Methods Cheat Sheet

## Static Methods

| Method | Description | Example |
|--------|-------------|---------|
| `String.fromCharCode(n1, n2, ...)` | Returns string from Unicode values | `String.fromCharCode(65, 66, 67)` → `"ABC"` |
| `String.fromCodePoint(n1, n2, ...)` | Returns string from code points | `String.fromCodePoint(128512)` → `"😀"` |
| `String.raw\`...\`` | Returns raw template string | `String.raw\`Hello\nWorld\`` → `"Hello\\nWorld"` |

## Instance Methods & Properties

| Method | Description | Example |
|--------|-------------|---------|
| `length` | Returns string length (property) | `"Hello".length` → `5` |
| `at(index)` | Returns char at index (accepts negative) | `"Hello".at(-1)` → `"o"` |
| `charAt(index)` | Returns character at index | `"Hello".charAt(1)` → `"e"` |
| `charCodeAt(index)` | Returns UTF-16 code at index | `"Hello".charCodeAt(0)` → `72` |
| `codePointAt(pos)` | Returns code point at position | `"😀".codePointAt(0)` → `128512` |
| `concat(str1, ...)` | Concatenates strings | `"Hello".concat(" ", "World")` → `"Hello World"` |
| `includes(str, pos)` | Checks if string contains substring | `"Hello".includes("ell")` → `true` |
| `endsWith(str, len)` | Checks if string ends with substring | `"Hello".endsWith("lo")` → `true` |
| `indexOf(str, from)` | Returns first occurrence index | `"Hello".indexOf("l")` → `2` |
| `lastIndexOf(str, from)` | Returns last occurrence index | `"Hello".lastIndexOf("l")` → `3` |
| `localeCompare(str)` | Locale-aware string comparison | `"a".localeCompare("b")` → `-1` |
| `match(regexp)` | Matches string against regex | `"Hello123".match(/\d+/)` → `["123"]` |
| `matchAll(regexp)` | Returns iterator of all regex matches | `[... "ab".matchAll(/./g)]` → `["a","b"]` |
| `normalize(form)` | Returns Unicode normalized form | `"é".normalize("NFD")` → `"é"` |
| `padEnd(len, str)` | Pads string from the end | `"5".padEnd(3, "0")` → `"500"` |
| `padStart(len, str)` | Pads string from the start | `"5".padStart(3, "0")` → `"005"` |
| `repeat(count)` | Repeats string count times | `"Hi".repeat(3)` → `"HiHiHi"` |
| `replace(search, repl)` | Replaces first match | `"Hello".replace("l", "x")` → `"Hexlo"` |
| `replaceAll(search, repl)` | Replaces all matches | `"Hello".replaceAll("l", "x")` → `"Hexxo"` |
| `search(regexp)` | Searches for match, returns index | `"Hello123".search(/\d+/)` → `5` |
| `slice(begin, end)` | Extracts section of string | `"Hello".slice(1, 4)` → `"ell"` |
| `split(sep, limit)` | Splits string into array | `"a,b,c".split(",")` → `["a","b","c"]` |
| `startsWith(str, pos)` | Checks if string starts with substring | `"Hello".startsWith("He")` → `true` |
| `substr(start, len)` | Extracts substring (deprecated) | `"Hello".substr(1, 3)` → `"ell"` |
| `substring(start, end)` | Extracts substring (no negatives) | `"Hello".substring(1, 4)` → `"ell"` |
| `toLocaleLowerCase()` | Locale-aware lowercase | `"İstanbul".toLocaleLowerCase("tr")` → `"istanbul"` |
| `toLocaleUpperCase()` | Locale-aware uppercase | `"i".toLocaleUpperCase("tr")` → `"İ"` |
| `toLowerCase()` | Converts to lowercase | `"Hello".toLowerCase()` → `"hello"` |
| `toString()` | Returns string primitive | `("Hello").toString()` → `"Hello"` |
| `toUpperCase()` | Converts to uppercase | `"Hello".toUpperCase()` → `"HELLO"` |
| `trim()` | Removes whitespace from both ends | `"  Hi  ".trim()` → `"Hi"` |
| `trimEnd()` / `trimRight()` | Removes trailing whitespace | `"Hi  ".trimEnd()` → `"Hi"` |
| `trimStart()` / `trimLeft()` | Removes leading whitespace | `"  Hi".trimStart()` → `"Hi"` |
| `valueOf()` | Returns primitive value of String | `("Hello").valueOf()` → `"Hello"` |
