function penggilingKopi() { // named function
  console.log('proses blender')
  console.log('silahkan tunggu')
  console.log('kopi selesai digiling')
}
// penggilingKopi()

const kalkulatorTambah = (input1, input2, someFunction) => { // arrow function
  console.log(input1 + input2)

  console.log(someFunction)
  if (someFunction) {
    someFunction()
  }
}

const otherFuction = () => {
  console.log('this is the other function')
}
kalkulatorTambah(5, 5, otherFuction)

// kalkulatorTambah(3, 5)
// kalkulatorTambah('aku', 'cinta')

// kalkulatorTambah(3, 5, () => {
//   console.log('selamat anda memasuki fungsi ke 2')
// })
