// let shopping = ["Milk","Butter","Bananas","Shaving Cream", "Apples", "Bread", "Beans"]

// // 1 Išimti pirmus du pirkinius.

// output = shopping.slice(0 , 2)

// console.log(output)

// // 2 Išimti tris paskutinius pirkinius.

// output2 = shopping.slice(-3)

// console.log(output2)

// // 3. Išimti ketvirtą ir penktą pirkinį.

// output3 = shopping.slice(3, 5)

// console.log(output3)


// //4. Išimti antrą ir trečią pirkinį.

// output4 = shopping.slice(1, 3)

// console.log(output4)

// //5. Išimti visus, išskyrus pirmą pirkinį.

// output5 = shopping.slice(1)

// console.log(output5)



// UŽDUOTIS:
// Sukurti 10-ties filmų masyvą ir iš jo:
// 1. Išimti pirmus 5 filmus.
// 2. Išimti 4 paskutinius filmus.
// 3. Išimti nuo trečio iki septinto filmo.
// 4. Išimti antrą ir trečią filmą.
// 5. Išimti visus, išskyrus pirmą filmą.
// 6. Išimti 5 filmus skaičiuojant nuo trečio.
// 7. Išimti tris filmus nuo galo, tačiau palikti paskutinį.
// 8. Vietoje penkto filmo įrašyti du naujus filmus.
// 9. Pašalinti pirmą filmą.
// 10. Įrašyti naują filmą į masyvo pradžią. 

// 11.1. Išimti pirmus tris filmus, skaičiuojant nuo antro filmo.
// 11.2. Išimti paskutinius tris filmus, skaičiuojant nuo priešpaskutinio filmo.
// 11.3. Šiuos išimtus filmus išsaugoti naujame masyve ir padaryti, jog jo nariai būtų apsukti.

myMovies = ["Jūros gelmėse", "Tezė", " Atmerk akis", " Įrašas ", "Kuklus buržuazijos žavesys", "Kiti", " La lengua de las mariposas", "Andalūzijos šuo", "La colmena", " Los santos inocentes"];

// 1. Išimti pirmus 5 filmus.

// splicedMovies = myMovies.splice(0,5);

// console.log(splicedMovies);

// 2. Išimti 4 paskutinius filmus.


// splicedMovies = myMovies.splice(-4,4);

// console.log(splicedMovies);

// 3. Išimti nuo trečio iki septinto filmo.


// splicedMovies = myMovies.splice(3,4);

// console.log(splicedMovies);

// 4. Išimti antrą ir trečią filmą.

// splicedMovies = myMovies.splice(1,2);

// console.log(splicedMovies);

// 5. Išimti visus, išskyrus pirmą filmą.

// splicedMovies = myMovies.splice(1);

// console.log(splicedMovies);

// 6. 

// splicedMovies = myMovies.splice(3,5);

// console.log(splicedMovies);

// 7. 


// splicedMovies = myMovies.splice(-4, 3);

// console.log(splicedMovies);

// 8. 



// splicedMovies = myMovies.splice(4,1,"Death of a Cyclist ", "Viridiana");

// console.log(splicedMovies);

// console.log(myMovies);

// 9

// splicedMovies = myMovies.splice(4,1,"Death of a Cyclist ", "Viridiana");

// console.log(splicedMovies);

// console.log(myMovies);

// 10 


// myMovies.splice(0,0,"Viridiana")

// console.log(myMovies);


// 11.1. Išimti pirmus tris filmus, skaičiuojant nuo antro filmo.
// 11.2. Išimti paskutinius tris filmus, skaičiuojant nuo priešpaskutinio filmo.
// 11.3. Šiuos išimtus filmus išsaugoti naujame masyve ir padaryti, jog jo nariai būtų apsukti.

// elevenOne = myMovies.splice(1,3)

// elevenTwo = myMovies.splice(-5,3)

// elevenThree = elevenOne.concat(elevenTwo)

// elevenThree =  elevenThree.reverse()

// console.log(elevenThree)

masyvas = [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751];

// 1

masyvas.shift()


// 2 

masyvas.pop()


// 3

console.log(masyvas)


middle = (masyvas.length) / 2

middle = Math.floor(middle)

console.log(middle)

masyvas.splice(middle, 1)

console.log(masyvas)

// 4 

masyvas.splice(-2, 1)

console.log(masyvas)

// // 5 

masyvas.splice(1, 1)
console.log(masyvas)


// // 6


masyvas.splice(6, 2)
console.log(masyvas)

// // 7 

masyvas.splice(-6, 3)
console.log(masyvas)

// console.log("im here")

// 8.  

masyvas.splice(2, 1, 888)
console.log(masyvas)

// 9. Pašalinti dešimtą masyvo narį ir į jo vietą įdėti skaičius: 33, 789 ir 6543.


masyvas.splice(9, 1, 33, 789, 6543)
console.log(masyvas)

// 10.Pašalinti paskutinį masyvo narį į jo vietą įdėti skaičius: 321, 654, 987


masyvas.splice(-1, 1, 321, 654, 987)
console.log(masyvas)

// 1.11. Tarp pirmo ir antro masyvo narių įdėti skaičių 11.

masyvas.splice(1, 0, 11)
console.log(masyvas)

// 1.12. Tarp 13 ir 14 masyvo narių įdėti skaičių 1.

masyvas.splice(13, 0, 1)
console.log(masyvas)

//1.13. Tarp paskutinio ir priešpaskutinio masyvo narių įdėti skaičių -1.


masyvas.splice(-1, 0, -1)
console.log(masyvas)

// 1.14. Į masyvo pradžią pridėti skaičius: 1, 2, 3.

masyvas.splice(0, 0, 1, 2, 3)
console.log(masyvas)


// 1.15. Į masyvo pabaigą pridėti skaičius: -333, -321, -312.


num = masyvas.length
console.log(num)
masyvas.splice(num, 0, -333, -321, -312)
console.log(masyvas)



// 1.16. Į masyvo vidurį pridėti skaičių 0.

num = masyvas.length / 2
console.log(num)
num = Math.floor(num)
masyvas.splice(num, 0, 0)
console.log(masyvas)


// 1.17. Pašalinti pirmą masyvo narį.

masyvas.shift()
console.log(masyvas)


// 1.18. Pašalinti paskutinį masyvo narį.

masyvas.pop()
console.log(masyvas)

// 1.19. Į masyvo pradžią pridėti žodį "start".



masyvas.splice(0, 0, "start")
console.log(masyvas)


// 1.20. Į masyvo pabaigą pridėti žodį "end".
num = masyvas.length
masyvas.splice(num, 0, "end")
console.log(masyvas)





// 2. Tęsiant darbą su šiuo masyvu atlikti šias užduotis naudojant slice metodą. Kiekvienai užduočiai sukurti naują kintamąjį, jame išsaugoti reikšmę, kurią grąžina slice metodas, ir šį kintamąjį išvesti į konsolę:
// 2.1. Gauti pirmą masyvo narį.

newMasyvas = masyvas.slice(0, 1)

console.log(newMasyvas)

// 2.2. Gauti paskutinį masyvo narį.

newMasyvas2 = masyvas.slice(-1)

console.log(newMasyvas2)


// 2.3. Gauti antrą masyvo narį.


newMasyvas3 = masyvas.slice(1, 2)

console.log(newMasyvas3)


// 2.4. Gauti priešpaskutinį masyvo narį.


newMasyvas4 = masyvas.slice(-2, -1)

console.log(newMasyvas4)

// 2.5. Gauti aštuntą masyvo narį.

newMasyvas5 = masyvas.slice(7, 8)

console.log(newMasyvas5)
// 2.6. Gauti devintą masyvo narį skaičiuojant nuo galo.

newMasyvas6 = masyvas.slice(-9, -8)

console.log(newMasyvas6)



// 2.7. Gauti vidurinį masyvo narį.

number = masyvas.length / 2

number = Math.floor(number)

console.log(number)

newMasyvas7 = masyvas.slice(number, number + 1)

console.log(newMasyvas7)




// 2.8. Gauti pirmus tris masyvo narius.


newMasyvas8 = masyvas.slice(0, 3)

console.log(newMasyvas8)



// 2.9. Gauti paskutinius tris masyvo narius.


newMasyvas9 = masyvas.slice(-4, -1)

console.log(newMasyvas9)




// 2.10. Gauti pirmus 10 masyvo narius.

newMasyvas10 = masyvas.slice(0, 10)

console.log(newMasyvas10)

// 2.11. Gauti paskutinius 10 masyvo narius.


newMasyvas11 = masyvas.slice(-11, -1)

console.log(newMasyvas11)


// 2.12. Gauti nuo 3 iki 8 masyvo nario (iš viso 6 nariai).


newMasyvas12 = masyvas.slice(2, 8)

console.log(newMasyvas12)

// 2.13. Gauti nuo 5 iki 9 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 5 nariai).

newMasyvas13 = masyvas.slice(-9, -4)

console.log(newMasyvas13)

// 2.14. Gauti nuo 11 iki 19 masyvo nario (iš viso 9 nariai).


newMasyvas14 = masyvas.slice(10, 19)

console.log(newMasyvas14)



// 2.15. Gauti nuo 9 iki 17 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 9 nariai).


newMasyvas15 = masyvas.slice(8, 17)

console.log(newMasyvas15)



// 2.16. Gauti visus masyvo narius išskyrus pirmą.


maxlenght = masyvas.length

newMasyvas16 = masyvas.slice(1, maxlenght)

console.log(newMasyvas16)



// 2.17. Gauti visus masyvo narius išskyrus paskutinį.


newMasyvas17 = masyvas.slice(0, -1)

console.log(newMasyvas17)


// 2.18. Gauti visus masyvo narius išskyrus pirmus 5.

newMasyvas18 = masyvas.slice(5, maxlenght)

console.log(newMasyvas18)




// 2.19. Gauti visus masyvo narius išskyrus paskutinius 5.

newMasyvas19 = masyvas.slice(0, -5)

console.log(newMasyvas19)



// 2.20. Gauti visus masyvo narius iki vidurinio masyvo nario, vidurinio nario neįskaičiuojant (iš viso 13 narių).

newMasyvas19 = masyvas.slice(0, -5)

console.log(newMasyvas19)



// 2.21. Gauti visus masyvo narius nuo vidurinio masyvo nario, vidurinio nario neįskaičiuojant, iki pabaigos (iš viso 13 narių).

veyrmax = masyvas.length

maxlenght = masyvas.length / 2

maxlenght = Math.floor(maxlenght)

console.log(maxlenght)

newMasyvas20 = masyvas.slice(maxlenght + 1, veyrmax)

console.log(newMasyvas20)

// 2.22. Gauti visus narius išskyrus pirmą ir paskutinį.
// 2.23. Gauti visus narius išskyrus pirmus penkis ir paskutinius tris.
// 2.24. Gauti visus narius išskyrus pirmą ir paskutinius 8.
// 2.25. Gauti visus narius išskyrus pirmus 7 ir paskutinį.
// 2.26. Gauti visus narius išskyrus pirmus 9 ir paskutinius 12.
// 2.27. Gauti 9 narius skaičiuojant nuo 11.
// 2.28. Gauti 12 narių skaičiuojant nuo 8.
// 2.29. Gauti pirmus penkis ir paskutinius šešis masyvo narius. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.
// 2.30. Gauti masyvo narius nuo 3 iki 5 ir nuo 15 iki 17. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.







uzd3Masyvas = ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']



// 3. Tęsiant darbą su ankstesniu masyvu atlikti šias užduotis naudojant filter metodą. Kiekvienai užduočiai sukurti naują kintamąjį, jame išsaugoti reikšmę, kurią grąžina filter metodas, ir šį kintamąjį išvesti į konsolę:
// 3.1. Gauti tik teigiamus skaičius.

let filteredNums = uzd3Masyvas.filter(num => num > 0)

console.log(filteredNums)


// 3.2. Gauti tik neigiamus skaičius.


let filteredNums2 = uzd3Masyvas.filter(num => num < 0)

console.log(filteredNums2)


// 3.3. Gauti tik skaičius, kurie dalinasi iš 2.




let filteredNums3 = uzd3Masyvas.filter(num => num % 2 === 0);


let filteredNums31 = uzd3Masyvas.filter(num => {

  if (num % 2 === 0) {
    return num
  }

});

console.log("filteredNums3")
console.log(filteredNums3)
console.log("filteredNums31")
console.log(filteredNums31)



// 3.4. Gauti tik skaičius, kurie dalinasi iš 3.


let filteredNums4 = uzd3Masyvas.filter(num => num % 3 === 0);



// 3.5. Gauti tik skaičius, kurie dalinasi iš 5.


let filteredNums5 = uzd3Masyvas.filter(num => num % 5 === 0);


// 3.6. Gauti tik skaičius, kurie dalinasi iš 11.

let filteredNums6 = uzd3Masyvas.filter(num => num % 11 === 0);

// 3.7. Gauti tik skaičius, kurie dalinasi iš 31.


let filteredNums7 = uzd3Masyvas.filter(num => num % 31 === 0);


// 3.8. Gauti tik skaičius, kurie dalinasi iš 2 ir iš 3.

let filteredNums8 = uzd3Masyvas.filter(num => num % 3 === 0 && num % 2 === 0)
  ;

console.log(filteredNums8)


// 3.9. Gauti tik skaičius, kurie dalinasi iš 3 ir iš 7.

let filteredNums9 = uzd3Masyvas.filter(num => num % 3 === 0 && num % 7 === 0)
  ;

console.log(filteredNums9)


// 3.10. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 9.

let filteredNums10 = uzd3Masyvas.filter(num => num % 5 === 0 && num % 9 === 0)
  ;

console.log(filteredNums10)


// 3.11. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 11.

console.log(uzd3Masyvas.filter(num => num % 5 === 0 && num % 11 === 0))





// 3.12. Gauti tik skaičius, kurie dalinasi iš 2, 8 ir 12.

console.log(uzd3Masyvas.filter(num => num % 2 === 0 && num % 12 === 0 && num % 8 === 0))


// 3.13. Gauti tik skaičius, kurie dalinasi iš 2 arba iš 3.

console.log(uzd3Masyvas.filter(num => num % 2 === 0 || num % 3 === 0))


// 3.14. Gauti tik skaičius, kurie dalinasi iš 3 arba iš 5.

console.log(uzd3Masyvas.filter(num => num % 2 === 0 || num % 5 === 0))

// 3.15. Gauti tik skaičius, kurie dalinasi iš 5 arba iš 6.


console.log(uzd3Masyvas.filter(num => num % 5 === 0 || num % 6 === 0))

// 3.16. Gauti tik skaičius, kurie dalinasi iš 7 arba iš 8.

console.log(uzd3Masyvas.filter(num => num % 7 === 0 || num % 8 === 0))


// 3.17. Gauti tik skaičius, kurie dalinasi iš 9 arba iš 13.

console.log(uzd3Masyvas.filter(num => num % 9 === 0 || num % 13 === 0))
// 3.18. Gauti tik skaičius, kurie dalinasi iš 2, 3 arba iš 5.


console.log(uzd3Masyvas.filter(num => num % 2 === 0 || num % 3 === 0 || num % 5 === 0))

// 3.19. Gauti tik skaičius, kurie dalinasi iš 5, 7 arba iš 9.

console.log(uzd3Masyvas.filter(num => num % 5 === 0 || num % 7 === 0 || num % 9 === 0))

// 3.20. Gauti tik skaičius, kurie dalinasi iš 7, 8 arba iš 11.

console.log(uzd3Masyvas.filter(num => num % 7 === 0 || num % 8 === 0 || num % 11 === 0))

// 3.21. Gauti tik skaičius, kurie dalinasi iš 9, 12 arba iš 13.

console.log(uzd3Masyvas.filter(num => num % 9 === 0 || num % 12 === 0 || num % 13 === 0))


// 3.22. Gauti tik skaičius, kurie yra didesni už 100.

console.log(uzd3Masyvas.filter(num => num > 100))


// 3.23. Gauti tik skaičius, kurie yra didesni už 555.

console.log(uzd3Masyvas.filter(num => num > 555))
// 3.24. Gauti tik skaičius, kurie yra didesni arba lygūs 888.

console.log(uzd3Masyvas.filter(num => num >= 888))
// 3.25. Gauti tik skaičius, kurie yra didesni arba lygūs 6789.


console.log(uzd3Masyvas.filter(num => num >= 6789))
// 3.26. Gauti tik skaičius, kurie yra mažesni už 50.

console.log(uzd3Masyvas.filter(num => num < 50))
// 3.27. Gauti tik skaičius, kurie yra mažesni už 1000.

console.log(uzd3Masyvas.filter(num => num < 1000))
// 3.28. Gauti tik skaičius, kurie yra mažesni arba lygūs -1.

console.log(uzd3Masyvas.filter(num => num <= 50))
// 3.29. Gauti tik skaičius, kurie yra mažesni arba lygūs -5564.
console.log(uzd3Masyvas.filter(num => num <= -5564))
// 3.30. Gauti tik skaičius, kurie yra mažesni už 1000 ir didesni už 500.
console.log(uzd3Masyvas.filter(num => num < 1000 && num > 500))
// 3.31. Gauti tik skaičius, kurie yra mažesni už 100 ir didesni už 0.

console.log(uzd3Masyvas.filter(num => num < 100 && num > 0))
// 3.32. Gauti tik skaičius, kurie yra mažesni už 0 ir didesni už -50.

console.log(uzd3Masyvas.filter(num => num < 0 && num > -50))
// 3.33. Gauti tik skaičius, kurie yra mažesni arba lygūs 0 ir didesni už -100.

console.log(uzd3Masyvas.filter(num => num <= 0 && num > -100))
// 3.34. Gauti tik skaičius, kurie yra didesni arba lygūs 0 ir mažesni už 55.


console.log(uzd3Masyvas.filter(num => num < 55 && num > 0))

// 3.35. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir mažesni arba lygūs 654.

console.log(uzd3Masyvas.filter(num => num <= 654 && num >= 444))
// 3.36. Gauti tik teigiamus skaičius, kurie dalinasi iš 2.

console.log(uzd3Masyvas.filter(num => num % 2 === 0 && num > 0))

// 3.37. Gauti tik teigiamus skaičius, kurie dalinasi iš 3.

console.log(uzd3Masyvas.filter(num => num % 3 === 0 && num > 0))
// 3.38. Gauti tik neigiamus skaičius, kurie dalinasi iš 4.

console.log(uzd3Masyvas.filter(num => num % 4 === 0 && num < 0))
// 3.39. Gauti tik neigiamus skaičius, kurie dalinasi iš 111.

console.log(uzd3Masyvas.filter(num => num % 111 === 0 && num < 0))

// 3.40. Gauti tik skaičius, kurie yra didesni už 500 ir kurie dalinasi iš 2.


console.log(uzd3Masyvas.filter(num => num % 2 === 0 && num > 500))

// 3.41. Gauti tik skaičius, kurie yra didesni už 1000 ir kurie dalinasi iš 3.

console.log(uzd3Masyvas.filter(num => num % 3 === 0 && num > 1000))
// 3.42. Gauti tik skaičius, kurie yra mažesni už 1000 ir kurie dalinasi iš 9.

console.log(uzd3Masyvas.filter(num => num % 9 === 0 && num < 1000))

// 3.43. Gauti tik skaičius, kurie yra mažesni už 500 ir kurie dalinasi iš 2.


console.log(uzd3Masyvas.filter(num => num % 2 === 0 && num < 500))


// 3.44. Gauti tik skaičius, kurie yra didesni arba lygūs 33 ir kurie dalinasi iš 3.

console.log(uzd3Masyvas.filter(num => num % 3 === 0 && num >= 33))


// 3.45. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir kurie dalinasi iš 12.

console.log(uzd3Masyvas.filter(num => num % 12 === 0 && num > 444))

// 3.46. Gauti tik skaičius, kurie yra mažesni arba lygūs 155 ir kurie dalinasi iš 5.




console.log(uzd3Masyvas.filter(num => num % 5 === 0 && num < 155))

// 3.47. Gauti tik skaičius, kurie yra mažesni arba lygūs -333 ir kurie dalinasi iš 9.



console.log(uzd3Masyvas.filter(num => num % 9 === 0 && num <= -333))

// 3.48. Gauti tik skaičius, kurie yra didesni už 100, mažesni už 500 ir kurie dalinasi iš 5.



console.log(uzd3Masyvas.filter(num => num % 5 === 0 && num < 500 && num > 100))


// 3.49. Gauti tik skaičius, kurie yra didesni arba lygūs 888, mažesni už 1000 ir kurie dalinasi iš 2.




console.log(uzd3Masyvas.filter(num => num % 2 === 0 && num >= 888 && num < 1000))


// 3.50. Gauti tik skaičius, kurie yra mažesni arba lygūs 888, didesni arba lygūs -333, dalinasi iš 3 ir nėra nulis.

console.log(uzd3Masyvas.filter(num => num % 3 === 0 && num <= 888 && num >= -333 && num != 0))


// 3.51. Gauti tik skaičius.

console.log(uzd3Masyvas.filter(num => typeof (num) === "number"))


// 3.52. Gauti tik tekstus (string).


console.log(uzd3Masyvas.filter(num => typeof (num) === "string"))

// 3.53. Gauti tik tekstus (string), kurie turi daugiau nei 5 simbolius.


console.log(uzd3Masyvas.filter(num => typeof (num) === "number"))

// 3.54. Gauti tik tekstus (string), kurie turi mažiau arba lygiai 5 simbolius.

console.log(uzd3Masyvas.filter(num => num.length <= 5))

// 3.55. Gauti tik tekstus (string), kurie turi daaugiau arba lygiai 5 simbolius.

console.log(uzd3Masyvas.filter(num => num.length >= 5))

// 3.56. Gauti tik tekstus (string), kurie turi raidę t.


let task356 = uzd3Masyvas.filter(item => isNaN(item) && item.includes('t'));

console.log(task356)

// 3.57. Gauti tik tekstus (string), kurie turi raidę y.
// 3.58. Gauti tik tekstus (string), kurie turi raides e arba a.
// 3.59. Gauti tik tekstus (string), kurie turi raides t ir i.
// 3.60. Gauti tik tekstus (string), kurie turi raide t, bet neturi raidės k.
// 3.61. Gauti tik tekstus (string), kurie turi raide a, bet neturi raidės s.
// 3.62. Gauti tik tekstus (string), kurie turi daugiau nei vieną raidę t.
// 3.63. Gauti tik tekstus (string), kurie turi raidžių junginį st.
// 3.64. Gauti tik tekstus (string), kurie turi raidžių junginį nd.
// 3.65. Gauti tik tekstus (string), kurie neturi raidės s.
// 3.66. Gauti tik tekstus (string), kurie neturi raidės t.
// 3.67. Gauti tik tekstus (string), kurie neturi raidės r ir l.
// 3.68. Gauti tik tekstus (string), kurie prasideda skaičiumi.
// 3.69. Gauti tik tekstus (string), kurie prasideda raide s.
// 3.70. Gauti tik tekstus (string), kurie prasideda raide o.
// 3.70. Gauti tik tekstus (string), kurie baigiasi raide d.
// 3.71. Gauti tik tekstus (string), kurie baigiasi raide s.
// 3.72. Gauti tik tekstus (string), kurie turi daugiau nei 4 simbolius ir turi raidę o.
// 3.73. Gauti tik tekstus (string), kurie turi daugiau arba lygiai 5 simbolius ir turi raidę a.
// 3.74. Gauti tik tekstus (string), kurie turi daugiau arba lygiai 5 simbolius ir turi raidę a.
// 3.75. Gauti tik tekstus (string), kurie turi porinį simbolių skaičių.
// 3.76. Gauti tik tekstus (string), kurie turi neporinį simbolių skaičių ir turi raidę s.
// 3.77. Gauti tik tekstus (string), kurių trečias simbolis yra a.
// 3.78. Gauti tik tekstus (string), kurių ketvirtas simbolis yra l.
// 3.79. Gauti tik tekstus (string), kurių penktas simbolis nėra t ir kurie turi daugiau simbolių nei 4.
// 3.80. Gauti tik tekstus (string), kurių pirmas simbolis nėra e, kurie turi mažiau simbolių nei 6 ir kurie neprasideda skaičiumi.




