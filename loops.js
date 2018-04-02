
function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.");
    }
    else {
      array.push("i am ${i} strange loops.")
    }
  }
  return array;
}

function whileLoop(n) {
  while (0 < n) {
    console.log(--n)
  }
   return "done"
}


function doWhileLoop(array) {
  function maybeTrue() {
  return Math.random() >= 0.5
  }

  do {
  array.pop()
  } 
  while (array.length > 0 && maybeTrue()) {
  } 
  return array
<<<<<<< HEAD
}
=======
}
>>>>>>> 2aa59001d998567cc17b590630d8e447ab26502a
