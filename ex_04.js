let a = 2
let b = 4
let action = "sub"

function addtion() {
	return a + b 
}

function substraction (){
	return a - b
}
function calculator () {
	if (action === "add") {
  return addition()
  }else if (action === "sub") {
  	return substraction ()
  }else {
  	return 0
  }

