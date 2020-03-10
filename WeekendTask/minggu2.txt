var letters = 'abcdefghijklmnopqrstuvsxyz'

const caesarCipher = (word, num) => {
    // Buat sebuah function yang menerima sebuah string S dan number N ( N >= 0 )
    // Output functionnya adalah sebuah string dengan setiap huruf
    // dari S bergeser sebanyak N posisi dalam urutan alphabet

    // Input: 'abc', 1
    // Output: 'bcd'

    // Input: 'abc', 28
    // Output: 'cde'
    let newKalimat=''
    for (let i = 0; i < word.length; i++) {
        if (num < letters.length){
            newKalimat += `${letters[num]}`
            num++
        }else{
            newKalimat += `${letters[num-letters.length]}`
            num++
        }
    }
     console.log(newKalimat)
    
}
console.log("Nomor 1")
caesarCipher("abc",1)
caesarCipher("abc",28)
caesarCipher("abc",3)
console.log("////////////////////////////////")


//2.
let numArr 
const plusMinus = (numArr) => {
    // Buat sebuah function yang menerima sebuah array of numbers
    // Output functionnya adalah hasil dari setiap angka dari
    // array ditambah atau dikurang dengan index berikutnya secara bergantian.
    // Maaf penjelasannya gak jelas hehe
    let hasil = 0
    let output = ''
    for (i = 0; i < numArr.length; i++){
    if (i == 0){
        hasil = numArr[i]
        output += `${numArr[i]}`
    }else if (i % 2 == 1){
        hasil += numArr[i]
        output += ` + ${numArr[i]}`
    }else{
        hasil -= numArr[i]
        output += ` - ${numArr[i]}`
    }
}
    console.log(`${output} = ${hasil}`)
}
console.log("Nomor 2")
plusMinus([1,2,3,4])
plusMinus([1,1,1,1,1])
console.log("////////////////////////////////")

// 3.
let kata 
let kebalik
const isPalindrome = (kata) => {
    // Buat sebuah function yang menerima sebuah string
    // Function ini akan mengecek apakah string ini sebuah palindrome
    
    // Sebuah palindrome adalah sebuah kata atau kalimat yang jika dibalik,
    // akan memiliki urutan huruf yang sama dengan kata atau kalimat aslinya
  
    // Return true jika kata atau kalimat tersebut sebuah palindrome
    // return false sebaliknya
    kebalik = kata.split("").reverse().join("")
    if (kata == kebalik){
        console.log("true")
     }else{
         console.log("false")   
     }
  }
  console.log("Nomor 3")
  isPalindrome("Madam".replace(" ","").toLowerCase())
  isPalindrome("Racecar".replace(" ","").toLowerCase())
  isPalindrome("123321".replace(" ","").toLowerCase())
  isPalindrome("NuRsES ruN".replace(" ","").toLowerCase())
  isPalindrome("Hehe kocak".replace(" ","").toLowerCase())
  console.log("////////////////////////////////")