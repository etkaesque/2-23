

uzd3Masyvas = ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']



// 4. Tęsiant darbą su ankstesniu masyvu atlikti šias užduotis naudojant for ciklą ir map metodą. Kiekvieną užduotį atlikti abiem būdais (for ciklu ir map metodu). Visus narius išvesti į konsole pagal žemiau pateiktas sąlygas:


uzd3Masyvas.map(item => {
  if (!isNaN(item)) {
    console.log(item)
  }

})

for (let i = 0; i < uzd3Masyvas.length; i++) {

  if (typeof (uzd3Masyvas[i]) === 'number') {
    console.log(uzd3Masyvas[i])
  }

}




// 4.2. Tik tekstą (string tipo duomenis).

uzd3Masyvas.map(item => {
  if (isNaN(item)) {
    console.log(item)
  }

})

for (let i = 0; i < uzd3Masyvas.length; i++) {

  if (typeof (uzd3Masyvas[i]) === 'string') {
    console.log(uzd3Masyvas[i])
  }

}





// 4.3. Tik skaičius (number tipo duomenis) ir juos pakelti 4-tuoju laipsniu.

uzd3Masyvas.map(item => {
  if (!isNaN(item)) {
    console.log(item ** 4)
  }

})

for (let i = 0; i < uzd3Masyvas.length; i++) {

  if (typeof (uzd3Masyvas[i]) === 'number') {
    console.log(uzd3Masyvas[i] ** 4)
  }

}





// 4.4. Tik skaičius (number tipo duomenis) ir prie jų pridėti 55.

console.log("Map")


uzd3Masyvas.map(item => {
  if (!isNaN(item)) {
    console.log(item + 55)
  }

})

console.log("For loop")

for (let i = 0; i < uzd3Masyvas.length; i++) {

  if (typeof (uzd3Masyvas[i]) === 'number') {
    console.log(uzd3Masyvas[i] + 55)
  }

}





// 4.5. Tik skaičius (number tipo duomenis) ir juos padalinti iš 2.

console.log("Map")


uzd3Masyvas.map(item => {
  if (!isNaN(item)) {
    console.log(item / 2)
  }

})

console.log("For loop")

for (let i = 0; i < uzd3Masyvas.length; i++) {

  if (typeof (uzd3Masyvas[i]) === 'number') {
    console.log(uzd3Masyvas[i] / 2)
  }

}


// 4.6. Tik skaičius (number tipo duomenis) ir prieš juos pridėti teksta, tokiu formatu: "Number: 2".

console.log("Map")


uzd3Masyvas.map(item => {
  if (!isNaN(item)) {
    console.log(`Number ${item}`)
  }

})

console.log("For loop")

for (let i = 0; i < uzd3Masyvas.length; i++) {

  if (typeof (uzd3Masyvas[i]) === 'number') {
    console.log(`Number ${uzd3Masyvas[i]}`)
  }

}


// 4.7. Tik skaičius (number tipo duomenis) ir pridėti tekstą su jų pačių indeksais, pvz.:
//   "Index: 0, Number: 2"
//   "Index: 1, Number: 3"
//   "Index: 2, Number: 5"
//   Ir t.t.


console.log("Map 4.7")


uzd3Masyvas.map(item => {
  if (!isNaN(item)) {
    console.log(`Index: ${uzd3Masyvas.indexOf(item)}, Number ${item}`)
  }

})

console.log("For loop 4.7")

for (let i = 0; i < uzd3Masyvas.length; i++) {

  if (typeof (uzd3Masyvas[i]) === 'number') {
    console.log(`Index: ${i}, Number ${uzd3Masyvas[i]}`)
  }

}



// 4.8. Tik skaičius (number tipo duomenis) ir juos padauginti iš jų pačių indekso.



console.log("Map 4.8")


uzd3Masyvas.map(item => {
  if (!isNaN(item)) {
    console.log(uzd3Masyvas.indexOf(item) * item)
  }

})

console.log("For loop 4.8")

for (let i = 0; i < uzd3Masyvas.length; i++) {

  if (typeof (uzd3Masyvas[i]) === 'number') {
    console.log(i * uzd3Masyvas[i])
  }

}


// 4.9. Tik skaičius (number tipo duomenis) ir juos padauginti iš ankstesnio nario, pvz.:
//   - Pirmo skaičiaus dauginti nereikia.
//   - Antrą skaičių dauginti iš pirmo.
//   - Trečią skaičių dauginti iš antro.
//   - Ketvirta skaičių dauginti iš trečio.
//   - Penktą skaičių dauginti iš ketvirto.
//   Ir t.t.



console.log("Map 4.9")


skaiciai = uzd3Masyvas.filter(item => !isNaN(item))

console.log(skaiciai)

skaiciai.map((item, index) => {


    if (index === 0) {

      console.log("FIRST NUMBER IN ARRAY IS: " + skaiciai[index])

    } else (
      console.log(skaiciai[index] * skaiciai[index - 1])
    )


})

console.log("For loop 4.9")

for (let i = 0; i < skaiciai.length; i++) {

  if (i === 0) {

    console.log("FIRST NUMBER IN ARRAY IS: " + skaiciai[i])

  } else (
    console.log(skaiciai[i] * skaiciai[i - 1])
  )

}


// 4.10. Tik tuos skaičius (number tipo duomenis), kuriuos padauginus iš 5, atsakymas gaunasi didesnis už 350.



console.log("Map 4.10")


uzd3Masyvas.map((item, index) => {

  let itemFromArray = uzd3Masyvas[index] * 5

  if (!isNaN(itemFromArray) && itemFromArray > 350) {
    console.log(itemFromArray)
  }


})

console.log("For loop 4.10")

for (let i = 0; i < uzd3Masyvas.length; i++) {

  let itemFromArray = uzd3Masyvas[i] * 5

  if (!isNaN(itemFromArray) && itemFromArray > 350) {
    console.log(itemFromArray)
  }

}




// 4.11. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti kiek simbolių jis turi, pvz. "Start has 5 symbols".



console.log("Map 4.11")


uzd3Masyvas.map((item, index) => {

  if (isNaN(item)) {
    itemL = item.length
    console.log(`${item} has ${itemL} symbols`)
  }


})

console.log("For loop 4.11")

for (let i = 0; i < uzd3Masyvas.length; i++) {

  let itemFromArray = uzd3Masyvas[i]

  if (isNaN(itemFromArray)) {
    itemL = itemFromArray.length
    console.log(`${itemFromArray} has ${itemL} symbols`)
  }

}


// 4.12. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio raidę išskiriant brūkšniu ir paverčiant ją didžiąja raide, pvz.: "S-T-A-R-T".

console.log("Map 4.12")

uzd3Masyvas.map((item, index) => {

  if (isNaN(item)) {
    splittedLetters = item.split("")
    joinedLetters = splittedLetters.join("-")
    upperLetters = joinedLetters.toUpperCase()
    console.log(upperLetters)
  }


})

console.log("For loop 4.12")


for (let i = 0; i < uzd3Masyvas.length; i++) {

  let itemFromArray = uzd3Masyvas[i]

  if (isNaN(itemFromArray)) {
    splittedLetters = itemFromArray.split("")
    joinedLetters = splittedLetters.join("-")
    upperLetters = joinedLetters.toUpperCase()
    console.log(upperLetters)
  }

}



// 4.13. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio pirmą ir trečią raidę pakeičiant brūkšniu (underscore), pvz.: "_t_rt";



console.log("Map 4.13")

uzd3Masyvas.map((item, index) => {

  if (isNaN(item)) {
    splittedLetters = item.split("")
    splittedLetters[0] = '_'
    splittedLetters[2] = '_'
    joinedLetters = splittedLetters.join("")
    console.log(joinedLetters)
  }


})

console.log("For loop 4.13")


for (let i = 0; i < uzd3Masyvas.length; i++) {

  let itemFromArray = uzd3Masyvas[i]

  if (isNaN(itemFromArray)) {
    splittedLetters = itemFromArray.split("")
    splittedLetters[0] = '_'
    splittedLetters[2] = '_'
    joinedLetters = splittedLetters.join("")
    console.log(joinedLetters)
  }

}




// 4.14. Tik tekstą (string tipo duomenis), tačiau žodį parašant atvirkščiai, pvz.: vietoje "start" parašyti "trats";



console.log("Map 4.14")

uzd3Masyvas.map((item, index) => {

  if (isNaN(item)) {
    let splittedLetters = item.split("")
    let reveresedLetters = splittedLetters.reverse()
    let joinedLetters = reveresedLetters.join("")
    console.log(joinedLetters)
  }


})

console.log("For loop 4.14")


for (let i = 0; i < uzd3Masyvas.length; i++) {

  let itemFromArray = uzd3Masyvas[i]

  if (isNaN(itemFromArray)) {
    let splittedLetters = itemFromArray.split("")
    let reveresedLetters = splittedLetters.reverse()
    let joinedLetters = reveresedLetters.join("")
    console.log(joinedLetters)
  }

}





// 4.15. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti tarp kokių narių masyve jis yra, pvz.: "Word obuolys is between -5564 and -51 in the array".

console.log("Map 4.15")

uzd3Masyvas.map((item, index) => {

  if (isNaN(item)) {

    let plus = uzd3Masyvas[index + 1]
    let minus = uzd3Masyvas[index - 1]
    let message

    if (index === 0) {

      message = `Word "${item}" is the first in the array and second item is: ${plus}`

    } else if (index === uzd3Masyvas.length - 1) {

      message = `Word "${item}" is the last in the array and previous word was: ${minus}`

    } else {


      message = `Word "${item}" is between ${minus} and ${plus} in the array`

    }

    console.log(message)

  }


})

console.log("Foor lop 4.15")

for (let i = 0; i < uzd3Masyvas.length; i++) {

  let plus = uzd3Masyvas[i + 1]
  let minus = uzd3Masyvas[i - 1]
  let message

  if (isNaN(uzd3Masyvas[i])) {



    if (i === 0) {

      message = `Word "${uzd3Masyvas[i]}" is the first in the array and second item is: ${plus}`

    } else if (i === uzd3Masyvas.length - 1) {

      message = `Word "${uzd3Masyvas[i]}" is the last in the array and previous word was: ${minus}`

    } else {


      message = `Word "${uzd3Masyvas[i]}" is between ${minus} and ${plus} in the array`

    }

    console.log(message)

  }

}







