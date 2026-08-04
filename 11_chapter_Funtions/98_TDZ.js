// tempory dead zone (TDZ) is a behavior in JavaScript that occurs when you try to access a variable before it has been declared and initialized. This can happen with variables declared using let and const, which are block-scoped and not hoisted like var variables.

{
    console.log(a);
    let a = 10;
}

// Enter Block
//  ↓
// a is created ✅
// a has NO value yet ❌
//     ↓
// console.log(a)  ❌ Error (TDZ)
//     ↓
// let a = 10;
//     ↓
// a = 10 ✅

