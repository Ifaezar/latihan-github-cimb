
// const digitalRoot = (number) => {
//     let kondisi = true
//     let hasil = 0
//     while(kondisi){
//     for(let i = 0; i < number.length; i++){
//         hasil += parseInt(number[i])
//     }
//     console.log(hasil)
//         if(hasil < 10){
//             kondisi = false
//         }else{
//             number = hasil.toString().split("").join('')
//             hasil = 0
//             kondisi = true
//         }
//     }
// }

// let angka = 129
// let a = angka.toString().split("").join('')
// digitalRoot(a)


const arrayUnik = (num1, num2) => {
    let hasil=[]
    let k = []
    let a = 0
    for(let i = 0; i < num1.length; i++){
        for(let j = 0; j < num2.length; j++){
            if(num1[i] == num2[j]){
                hasil[i] = num1[i]
                k[a] = hasil[i]
                a++
            }else{
                k[a] = num2[j]
            }
            
        }
    }
    return(k)
}

let angka1 = [1,2,3,4,5]
let angka2 = [1,3,6,7,8]
console.log(arrayUnik(angka1,angka2))