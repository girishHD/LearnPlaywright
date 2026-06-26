# TypeScript Type Annotations

## 1. Primitive
```typescript
let str: string = "hello";
let num: number = 42;
let bool: boolean = true;
let big: bigint = 100n;
let sym: symbol = Symbol("foo");
let und: undefined = undefined;
let nul: null = null;
```

## 2. Array
```typescript
let arr: number[] = [1, 2, 3];
// or Array<number>
```

## 3. Tuple
```typescript
let tuple: [string, number] = ["foo", 42];
```

## 4. Enum
```typescript
enum Color { Red, Green, Blue }
let c: Color = Color.Green;
```

## 5. Object literal / shape
```typescript
let obj: { name: string; age: number } = { name: "Alice", age: 30 };
```

## 6. Function
```typescript
let fn: (x: number) => string = (x) => x.toString();
```

## 7. Union
```typescript
let union: string | number = "hello";
```

## 8. Intersection
```typescript
type A = { a: number };
type B = { b: string };
let inter: A & B = { a: 1, b: "x" };
```

## 9. Type alias
```typescript
type Point = { x: number; y: number };
let p: Point = { x: 0, y: 0 };
```

## 10. Interface
```typescript
interface User { id: number; name: string }
let u: User = { id: 1, name: "Bob" };
```

## 11. Generic
```typescript
let gen: Array<number> = [1, 2, 3];
```

## 12. Literal
```typescript
let lit: "red" | "blue" = "red";
```

## 13. Any
```typescript
let anyVal: any = "could be anything";
```

## 14. Unknown
```typescript
let unk: unknown = JSON.parse("{}");
```

## 15. Never
```typescript
function fail(): never { throw new Error(); }
```

## 16. Void
```typescript
function log(): void { console.log("hi"); }
```

## 17. Optional / nullable
```typescript
let maybeName: string | null = null;
let optionalProp: { name?: string } = {};
```

## 18. Index signature
```typescript
let dict: { [key: string]: number } = { a: 1 };
```

## 19. Mapped type
```typescript
type Readonly<T> = { readonly [K in keyof T]: T[K] };
let ro: Readonly<Point> = { x: 1, y: 2 };
```

## 20. Conditional type
```typescript
type IsString<T> = T extends string ? "yes" : "no";
type Result = IsString<"foo">; // "yes"
```

## 21. Template literal type
```typescript
type EventName = `on${string}`;
let ev: EventName = "onClick";
```

## 22. `this` parameter
```typescript
function onClick(this: HTMLElement) { /* ... */ }
```

## 23. `satisfies` (TS 4.9+)
```typescript
let palette = { red: [255,0,0] } satisfies Record<string, number[]>;
```
