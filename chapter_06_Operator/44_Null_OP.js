console.log(null >= 0); // null == 0 or null > 0
console.log(null === 0);

// ?? Nullish
let amul = null;
let milk_required = amul ?? "nandini milk";
console.log(milk_required);

// ?? Nullish
amul = "Amul Present";
milk_required = amul ?? "nandini milk";
console.log(milk_required);

