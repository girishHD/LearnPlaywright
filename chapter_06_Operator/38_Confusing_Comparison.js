// == (loose) vs === (strict) — Confusing / Tricky Cases

// ─── Number vs String ───
console.log(3 == "3");   // true  ("3" → 3)
console.log(3 === "3");  // false (type mismatch)

// ─── Empty string vs 0 / false ───
console.log(0 == "");    // true  ("" → 0)
console.log(0 === "");   // false
console.log(false == "");// true  ("" → 0, false → 0)
console.log(false === "");// false

// ─── Boolean coercion ───
console.log(true == 1);  // true  (true → 1)
console.log(true === 1); // false
console.log(false == 0); // true  (false → 0)
console.log(false === 0);// false
console.log(true == "1");// true  (true → 1, "1" → 1)
console.log(true == 2);  // false (true → 1, 1 !== 2)

// ─── null and undefined ───
console.log(null == undefined);  // true  (special rule)
console.log(null === undefined); // false
console.log(null == 0);    // false (null only == undefined)
console.log(undefined == 0);// false
console.log(null == false);// false
console.log(undefined == false);// false
console.log(null == "");   // false
console.log(undefined == "");// false

// ─── NaN — never equal to anything ───
console.log(NaN == NaN);  // false
console.log(NaN === NaN); // false
console.log(NaN == false);// false
console.log(NaN == null); // false

// ─── Arrays ───
console.log([] == false);   // true  ([] → "" → 0, false → 0)
console.log([] == 0);       // true  ([] → "" → 0)
console.log([] == "");      // true  ([] → "")
console.log([] == ![]);     // true  ([] → 0, ![] → false → 0)
console.log([] == []);      // false (different references)
console.log([1] == true);   // true  ([1] → "1" → 1, true → 1)
console.log([1] == 1);      // true  ([1] → "1" → 1)
console.log([1, 2] == "1,2"); // true (array → string)

// ─── Objects ───
console.log({} == {});      // false (different references)
console.log({} == 0);       // false ({} → NaN, NaN != 0)
console.log({} == false);   // false ({} → NaN, NaN != 0)
console.log({} == "");      // false ({} → NaN, NaN != "")

// ─── Whitespace strings ───
console.log(" " == 0);      // true  (" " → 0)
console.log("\t" == 0);     // true  (\t → 0)
console.log("\n" == 0);     // true  (\n → 0)
console.log(" " == "0");    // false (string vs string, no coercion)

// ─── String "false" is truthy! ───
console.log(false == "false"); // false ("false" → NaN, false → 0)
console.log(false === "false");// false

// ─── Other tricky ones ───
console.log("1" == true);   // true  ("1" → 1, true → 1)
console.log("-0" == 0);     // true  ("-0" → -0, -0 == 0)
console.log(0 == -0);       // true
console.log(Object.is(0, -0)); // false (Object.is is even stricter)
