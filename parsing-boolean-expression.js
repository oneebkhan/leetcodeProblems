// Parsing a boolean expression:
//
// examples:
//   1. Q: expr = &(t, t)
//      A: true
//   2. Q: expr = !(t)
//      A: false
//   3. Q: expr = &(&(t, t) ,t, t, !(f), &(t, t))
//      A: true


let expr = '&(&(t, t) ,t, t, !(f), &(t, t))'

expr = expr.replace(/ /g, '').split('')
let finalExpression = ''
let expressionArray = []

expr.forEach((element, i) => {
  switch (element) {
    case '!':
      finalExpression = finalExpression + '!'
      expressionArray.push('!')
      break;
    case '(':
      finalExpression = finalExpression + '('
      break;
    case ')':
      finalExpression = finalExpression + ')'
      expressionArray.pop()
      break;
    case 'f':
      finalExpression = finalExpression + 'false'
      break;
    case 't':
      finalExpression = finalExpression + 'true'
      break;
    case '&':
      expressionArray.push('&&')
      break;
    case '|':
      expressionArray.push('||')
      break;
    case ',':
      finalExpression = finalExpression + expressionArray[expressionArray.length - 1]
    default:
      break;
  }
});

console.log('finalExpression: ', finalExpression)
console.log('eval: ', eval(finalExpression))