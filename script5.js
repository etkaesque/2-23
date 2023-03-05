
// 1. Sukurti 10-ies skaičių masyvą.

let masyvas = [123, -96, 4.5, 0, -9.3, 1885, 643, 30, 9, 10.9,6];

let masyvasTest = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2];

// 2. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina jų vidurkį.

function averageCalc(masyvas) {

    let sum = 0;
    let average; 

    masyvas.forEach((item) => {

        sum = item + sum;
    })

    average = sum / masyvas.length;
    return average
}

let vidurkis = averageCalc(masyvas)


// 2.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) vidurkis yra 15"





function format(masyvas) {

    let sliced = masyvas.slice(0,6)

    sliced.map((item, index) => {

        if (index === 0) {

            sliced.splice(index, 1 ,`${sliced[index]}`)

        } else if (index === sliced.length-1 ) {

            sliced.splice(index, 1 ,` ${sliced[sliced.length-1]} ...`)
        } else {
            sliced.splice(index, 1 ,` ${sliced[index]}`)
        }
        
    }) 

    return sliced 
   
}

let formated = format(masyvas)

let message21 = `Skaičių (${formated}) vidurkis yra ${vidurkis}`

console.log(message21)

// 3. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina jų medianą.

function medianaCalc(masyvas) {

    function compareFunction(a,b) {
        return a-b
    }

    console.log(masyvas)
    let arraySorted = masyvas.sort(compareFunction)


    console.log(arraySorted)

    if (arraySorted.length % 2 === 0) {

        let middleIndex1 = Math.round(((arraySorted.length-1)/2))
        let middleIndex2 = Math.round(((arraySorted.length+1)/2))
        console.log("middle " + middleIndex1 + "middle2 "+ middleIndex2)
      
        let equalNum1 = arraySorted[middleIndex1]
        let equalNum2 = arraySorted[middleIndex2]

        let equalMedian =  (equalNum1 + equalNum2)/2

        return equalMedian


    } else {

        let middleIndex3 = Math.round(((arraySorted.length-1)/2))
        let notEqualMedian =  arraySorted[middleIndex3]

        return notEqualMedian


    }
    


}

let mediana = medianaCalc(masyvas)

console.log(mediana)


// 3.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) mediana yra 15"

function printMedian(formated, mediana) {

    console.log(`Skaičių (${formated}) mediana yra  ${mediana}`)
}


// 4. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina didžiausia jame esantį skaičių.
// 4.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) didžiausias skaičius yra 15"


maxNum = Math.max(...masyvas)

console.log(`Skaičių (${formated}) didžiausias skaičius yra  ${maxNum}`)


// 5. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina mažiausią jame esantį skaičių.
// 5.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) mažiausias skaičius yra 1"




minNum = Math.min(...masyvas)

console.log(`Skaičių (${formated}) didžiausias skaičius yra  ${minNum}`)


// 6. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina n-tąjį skaičių pagal dydį (skaičiuojant nuo mažiausio iki didžiausio).
// 6.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) 3 skaičius pagal dydį yra 3"

function nthBiggest(nth, array) {

    function compareFunction(a,b) {
        return a-b
    }


    let sortedArray = masyvas.sort(compareFunction) 

    return sortedArray[nth-1]


    

}

let nthInput = 5;

let nthNumber = nthBiggest(nthInput,masyvas)

console.log(`Skaičių (${formated}) ${nthInput} skaičius pagal dydį (nuo mažiausio iki didžiausio) yra ${nthNumber}`)