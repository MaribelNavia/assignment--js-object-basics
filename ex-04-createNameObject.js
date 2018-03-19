/**
 * createNameObject()
 *
 * Write a function called `createNameObject` that takes a full first
 * & last name string and returns an object with `firstName`
 * and `lastName` properties that have string values.
 *
**/

function createNameObject(fullname){
	let nameObj1 = {
		firstName: "Benzo",
		lastName: "Lorenzo"
	}
	let fullNameArray = fullname.split(" ")
	nameObj1.firstName = fullNameArray[0]
	nameObj1.lastName = fullNameArray[1]
	return nameObj1
}





//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

var nameObj1 = createNameObject("Benzo Lorenzo")
console.log("1---------------------------------------")
console.assert(nameObj1.firstName === 'Benzo')
console.log("1---------------------------------------")
console.log("2---------------------------------------")
console.assert(nameObj1.lastName === 'Lorenzo')
console.log("2---------------------------------------")

var nameObj2 = createNameObject("Felipe Tortuga")
console.log("3---------------------------------------")
console.assert(nameObj2.firstName === 'Felipe')
console.log("3---------------------------------------")
console.log("4---------------------------------------")
console.assert(nameObj2.lastName === 'Tortuga')
console.log("4---------------------------------------")

var nameObj3 = createNameObject("Lupe Maria")
console.log("5---------------------------------------")
console.assert(nameObj3.firstName === 'Lupe')
console.log("5---------------------------------------")
console.log("6---------------------------------------")
console.assert(nameObj3.lastName === 'Maria')
console.log("6---------------------------------------")
