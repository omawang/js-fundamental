// looping / perulangan
// for

const data = [1, 34, 45.645, 4356, 'asdf']

console.log(data)
for (let i = 3; i < data.length; i++) {
  console.log(data[i])
}

// while
let incr = 0
while (incr < data.length) {
  console.log('from while at incr ' + incr + ' with value = ' + data[incr])
  incr = incr + 1
}

let inc = 1
while (inc < 10) {
  console.log(inc)
  inc++
}
