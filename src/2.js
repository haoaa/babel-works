// import {parse} from "@babel/parser";

// import traverse from "@babel/traverse";
// import * as t from "@babel/types";
// import generate from "@babel/generator";

// const code = `function square(n) {
//   return n * n;
// }`;


// let a = parse(code);

// traverse(a, {
//   enter(path) {
//     // if (
//     //   path.node.type === "Identifier" &&
//     //   path.node.name === "n"
//     // ) {
//     //   path.node.name = "x";
//     // }
//     if(t.isIdentifier(path.node, {name:'n'})) {
//       path.node.name = "x";
//     }
//   }
// });

// console.log(
//   generate(a, {
//     retainLines: false,
//     compact: "auto",
//     concise: false,
//     quotes: "double",
//     // ...
//   }, code)
// );
// console.log(
//   generate(t.binaryExpression("*", t.identifier("a"), t.identifier("b")))
// );