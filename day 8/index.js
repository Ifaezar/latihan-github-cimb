
// let a = {
//     nama: "Doraemon",
//     asal: "jepang",
//     kontak:{
//         notelp: "1111",
//         kota: "BSD"
//     }
// }

// let { nama, asal, kontak: {notelp,kota}} = a

// console.log(nama)
// console.log(kota)

// const Tampi = ({nama, asal}) =>{
//     return nama 
// }

// console.log(Tampi(a))
let arr = [-7, 5, 2, -2, 1, -13]
let total = 0, total2 = 0
const latihan = number =>{
    for(let i = 0; i < number.length; i++){
        if (number[i] >= 0){
            total += number[i]
        }
        if (number[i] < 0){
            total2 += number[i]
        }
    }
    console.log([total, total2])
}

latihan(arr)
