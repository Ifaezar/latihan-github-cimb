// let huruf = ("abcdefghijklmnopqrfstuvwxyz").split('')
// let total = ''
// let j = 0
// const jumlahkata = (input) => {
//     do{
//     for(let i = 0 ; i < huruf.length; i++){
//         if (input[j] == huruf[i]){
//             total = (i+1)
//             j++
//             console.log(total)
//         }
//     }
// }while (j < input.length)
//     // console.log(total)
// }
// let input = 'ab'
// jumlahkata(input)

class Product {
    constructor(nama, Harga){
        this.nama = nama
        this.harga = Harga
    }
}

let arrData = [
    new Product("Apel", 10000),
    new Product("Semangka", 10000),
    new Product("Jeruk", 10000),
    new Product("Durian", 5000)
]


const searchProductName = str => {
    //cara pertama
    // return arrData.filter((Value) =>{
    //     if (Value.nama.toLowerCase().includes(str.toLowerCase())){
    //         return true
    //     }
    //     return false
    // })

    //cara kedua
    return arrData.filter((Value) =>Value.nama.toLowerCase().includes(str.toLowerCase()))
}
const searhPrice = (min, max) => {
    return arrData.filter(val => (val.Harga >= min) && (val.Harga <= max))
}

console.log(searchProductName('a'))
console.log(searhPrice(1000, 6000))
