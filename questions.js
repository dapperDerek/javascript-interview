/**
 * What will be the result of the statements below?
 */

thing1()
thing2()

function thing1() {
  return 'Thing 1 reporting for duty!'
}

const thing2 = () => {
  return 'Thing 2 ready for action!'
}


/**
 * What do the conditionals below return? Explain.
 */

"1" == 1
"1" === 1


/**
 * What will be logged to the console? Explain.
 */

let obj1 = {
  firstName: "Derp",
  lastName: "Derpington",
  address: "123 Derpsalot Way"
}

let obj2 = obj1;

obj2.firstName = "Derpina"

console.log(obj1)
console.log(obj2)
