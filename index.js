var arr1 = [2, -1, 9, -12, 7, 4]
var arr2 = [1, 4, -5, 'Array', 2, 9, true, 'Hello', NaN, 'Iphone', 7, 4]

/*    myForEach     */ 
Array.prototype.myForEach = function(callbackfn) {
  for (var i = 0; i < this.length; i++) {
    callbackfn(this[i], i, this)
  }
}

try {
  arr1.myForEach(function(element, index, arr1) {
  console.log('res: ' + element, 'index: ' + index, 'array: ' + arr1)
  })
}

catch(err) {
    console.log(err.name + ': ' + err.message)    
}
console.log('--------------------------------------')

/*    myMap     */   
Array.prototype.myMap = function(callbackfn) {
  var result = []
  for (var i = 0; i < this.length; i++) {
    result.push(callbackfn(this[i], i, this))  
  }
  return result 
}

myArr = arr1.myMap(function(element, index, array) {
  return element + 'a'
  }
)

console.log(arr1)
console.log(myArr)

console.log('---------------------------')

/*    mySort     */ 
Array.prototype.mySort = function (callbackfn) {
  callbackfn = callbackfn || function (first, second) {
    if (first === second) {
      return 0
    } else if (first > second) {
      return 1
    } else {
      return -1
    }
  }

  for (var i = 0; i < this.length; i++) {
    if (callbackfn(this[i], this[i + 1]) === 1 && i >= 0) {
      var element = this[i]
      this[i] = this[i + 1]
      this[i + 1] = element
      i -= 2
    }
  }

  return this
}

var sorted = arr2.sort()
var mySorted = arr2.mySort()


console.log(sorted)
console.log(mySorted)
