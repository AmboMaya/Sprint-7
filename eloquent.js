function smallestNum (a, b) {
	if (a < b){
	return a; 
    } else {
    return b;
	}
}

console.log(smallestNum(0,10));
console.log(smallestNum(0,-10));

function isEven(n) {
    if (n < 0){
        n *= -1;
    } 
    if (n === 1){
        return false;
    } else if (n === 0) {
        return true;
    } else {
        return isEven(n-2);
    }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

function countBs(str) {
	let noUpperCase = 0;
	for (var i=0; i < str.length; i++) {
    	if (str[i] === str[i].toUpperCase()){
         noUpperCase++;
        }
    }
	return noUpperCase; 
}

function countChar(str, char) {
  let thisChar = 0;
  for (var i=0; i<str.length; i++)
  if(str[i] === char){
  	thisChar++;
  }
  return thisChar;
}
console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));