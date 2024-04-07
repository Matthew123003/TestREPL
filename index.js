const swapElements = (array, index1, index2) =>{
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
};

let array = [1, 2, 3, 4, 5];
swapElements(array, 2, 4);
//console.log(array)

for(x = 1; x <= 20; x++){
  if(x % 3 == 0){
    //console.log("nice")
  } else if (x % 5 == 0){
    //console.log("nicer")
  } else {
    //console.log(x)
  }
}

let y = 10
while (y <= 20){
  //console.log (y);
  y++
}

let newArray = [1, 2, 3, 4, 5]
//console.log (newArray.length)
newArray.splice(3,1,1)
//console.log(newArray)
newArray.push(6)
console.log(newArray)