// 1. nilai max
// let angka = [1 , 4, 10, 6, 3]
// let max = angka[0]
//  for (let i = 0; i < angka.length; i++){
//          if (angka[i] > max){
//              max = angka[i]
//          }else{
//              max = max
//          }   
// }
// console.log(max)

// 2. sorting
// kecil ke besar
// let numbers = [10, 1, 4, 1, 8]
// let semenentara
// for(let i = 0; i < numbers.length; i++){
//     for(let j = 0 ; j < numbers.length; j++){
//         if (numbers[i] < numbers[j]){
//         semenentara = numbers[i]
//         numbers[i] = numbers[j]
//         numbers[j] = semenentara
//     }else{
//         numbers[i] = numbers[i]
//     }
//     }
// }
// console.log(numbers)

// // kecil ke besar
// let numbers2 = [10, 1, 4, 1, 8]
// let semenentara2
// for(let i = 0; i < numbers2.length; i++){
//     for(let j = 0 ; j < numbers2.length; j++){
//         if (numbers2[i] > numbers2[j]){
//         semenentara2 = numbers2[i]
//         numbers2[i] = numbers2[j]
//         numbers2[j] = semenentara2
//     }else{
//         numbers2[i] = numbers2[i]
//     }
//     }
// }
// console.log(numbers2)

// 3. sorting string 
// besar ke kecil
// let kalimat = ["Pesawat", "Mobil", "Motor", "Andong", "Kereta"]
// let semenentara2
// for(let i = 0; i < kalimat.length; i++){
//     for(let j = 0 ; j < kalimat.length; j++){
//         if (kalimat[i] > kalimat[j]){
//         semenentara2 = kalimat[i]
//         kalimat[i] = kalimat[j]
//         kalimat[j] = semenentara2
//     }else{
//         kalimat[i] = kalimat[i]
//     }
//     }
// }
// console.log(kalimat)

//kecil ke besar
// let kalimat2 = ["Pesawat", "Mobil", "Motor", "Andong", "Kereta"]
// let semenentara2
// for(let i = 0; i < kalimat2.length; i++){
//     for(let j = 0 ; j < kalimat2.length; j++){
//         if (kalimat2[i] < kalimat2[j]){
//         semenentara2 = kalimat2[i]
//         kalimat2[i] = kalimat2[j]
//         kalimat2[j] = semenentara2
//     }else{
//         kalimat2[i] = kalimat2[i]
//     }
//     }
// }
// console.log(kalimat2)

//4. hanya angka yang masuk

// let arrData = ["Hehe", 1, 2, "Haha", "Hihi", 4]
// let arrbaru = [ ]
// let j = 0
// for(let i = 0; i < arrData.length; i++){
//     if (typeof(arrData[i]) == "string"){
//         j = j
//     }else{
//         arrbaru[j] = arrData[i]
//         j++
//     }

// }
// console.log(arrbaru)

// let kata = "Ilham"
// let kata2 = kata.split('')
// let kataBaru =[]
// let j = 0
// for(let i = 0; i < kata.length; i++){
//     if (kata[i] == 'a'){
//         j = j
//     }else{
//         kataBaru[j] = kata[i]
//         j++   
//     }
// }
// kataBaru = kataBaru.join("")
// console.log(kata2)
// console.log(kataBaru)

let kata = "Doraemaon"
let kataBaru = []
let j = 0

for (i = 0; i < kata.length; i++){
    if((i == 0 ) || (i == kata.length-1 )){
        j = j
    }else{
        kataBaru[j] = kata[i]
        j++
    }
}
kataBaru = kataBaru.join("")
console.log(kataBaru)