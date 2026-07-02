# Chapter 14 - Objects (Structured Data)

[← Back to Main README](../README.md)

---

---

## What This Chapter Is

Objects are containers that hold multiple named values (properties) describing a single entity. This chapter covers object creation, property access, primitive vs reference types, destructuring, spread, getters/setters, and object methods.

---

## Files in This Chapter

### 124_Objects.js
Basic object creation with curly braces `{}` and key-value pairs:
```js
let cave = { location: "north", size: "big", hasFire: true }
```

### 125_Objects2.js
Additional object creation patterns.

### 126_Objects_Creation.js
Different creation approaches:
- `{}` literal — simplest
- `Object.create()` — create from prototype
- Constructor pattern — blueprint for similar objects

### 127_Objects_REAL.js
Real configuration object with dynamic property addition, modification, and deletion.

### 128_Primitive_Ref.js
Primitive vs Reference types:
- Primitives (number, string, boolean, null, undefined): copied by value
- Reference types (objects, arrays): copied by reference — both variables share the same data

### 129_Ob_Examples.js
Various object examples demonstrating different patterns.

### 130_IQ.js
Object interview questions: dynamic property access (`obj["prop"]` vs `obj.prop`), property descriptors.

### 131_Object_Fn.js
Object methods — functions stored as object properties:
```js
let caveman = { name: "Ugg", grunt: function() { console.log("Ugg!"); } }
```
`caveman.grunt()` calls the method.

### 132_Obj_Decon.js
Object destructuring: extract properties into variables in one line:
```js
let { name, age } = caveman;
```

### 133_Spread.js
Spread operator with objects (`...`): copy properties from one object to another:
```js
let newCave = { ...oldCave, location: "south" };
```

### 134_Objects_GET_SET_Methods.js
Getters and setters:
- `get`: executes code when a property is read
- `set`: executes code when a property is written

### 135_IQ.js
More object interview questions.

### 136_Obj_REAL.js
Practical object patterns for testing: test data objects, configuration objects, user objects.

### 137_Let_Const_Obj.js
`const` with objects: prevents reassignment of the variable but does NOT prevent mutation of the object's properties.

---

## Why This Matters

Testing is full of objects: test configurations, user data (name, email, password), API responses, page elements. Understanding objects is essential for working with real data structures.

---

## What You'll Learn

- Creating objects with `{}`
- Adding, modifying, and deleting properties
- Primitive vs Reference types
- Methods (functions inside objects)
- Destructuring (unpacking objects)
- Spread operator (copying objects)
- Getters and setters
- `const` behavior with objects

---

## Key Terms

| Term | Definition |
|---|---|
| Object | A collection of named properties |
| Property | A key-value pair within an object |
| Method | A function that belongs to an object |
| Destructure | Extract properties into individual variables |
| Spread | Copy all enumerable properties into a new object |
| Getter | Code executed when a property is read |
| Setter | Code executed when a property is assigned |

---

← [Back to Main README](../README.md)

---

*Happy coding!*
