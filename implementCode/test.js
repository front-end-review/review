// console.log(Symbol(1) === Symbol(1))

function Person(name) {
  this.name = name;
  // return { test: '1'}
  return function() {}
}
function Person1(name) {
  this.name = name;
  this.test = function() {
    
  }
  return 1;
}

console.log(new Person('test')); // { test: '1'}
console.log(new Person1('test')); // Person1 { name: 'test' }