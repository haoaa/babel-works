module.exports = function({ types: t }) {
  // plugin contents
  return {
    visitor:{
      Identifier(path, state) {},
      BinaryExpression(path) {
        if (path.node.operator !== "===") {
          return;
        }
        // 修改变量
        path.node.left = t.identifier("sebmck");
        path.node.right = t.identifier("dork");
        // 修改路径
        path.replaceWith( 
          t.binaryExpression("**", path.node.left, t.NumericLiteral(2))
        );
      },
      // 重名会覆盖
      // BinaryExpression(path) {
      //   // console.log(path.get('left')); 
      //   if (path.get('left').isIdentifier({ name: "a" })) {
      //     // ...
      //     console.log(1);
          
      //   }
      // },
      // ReturnStatement(path) {
      //   path.replaceWithMultiple([
      //     t.expressionStatement(t.stringLiteral("Is this the real life?")),
      //     t.expressionStatement(t.stringLiteral("Is this just fantasy?")),
      //     t.expressionStatement(t.stringLiteral("(Enjoy singing the rest of the song in your head)")),
      //   ]);
      // },
      // FunctionDeclaration(path) {
        // path.insertBefore(t.expressionStatement(t.stringLiteral("Because I'm easy come, easy go.")));
        // path.insertAfter(t.expressionStatement(t.stringLiteral("A little high, little low.")));
      // },
      Program(path) {
        // console.log(path.get('body.0'))
      },
      // FunctionDeclaration(path) {
      //   path.remove();
      // },
      // FunctionDeclaration(path) {
      //   // if (path.scope.hasBinding("a")) {
      //   if (path.scope.hasOwnBinding("a")) {
      //     console.log('aa');
          
      //   }
      // },
      // FunctionDeclaration(path) {
      //   const id = path.scope.generateUidIdentifierBasedOnNode(path.node.id);
      //   path.remove();
      //   path.scope.parent.push({ id, init: path.node });
      // },
      // FunctionDeclaration(path){
      //   path.scope.rename('a', 'aa')
      // },
      StringLiteral(path) {
        throw path.buildCodeFrameError("Error message here");
      },
    }
  }
}
