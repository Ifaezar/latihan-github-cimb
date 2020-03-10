

// let orang = {
//     nama: 'ilham',
//     tahunLahir: "1997",
//     asal: "wonogokil"
// }

// let developer = {
//     nama: 'ilham',
//     tahunLahir: "1997",
//     asal: "wonogokil",
//     speciality: "Front End",
//     pengalaman = "7"
// }

class Person{
    constructor(paramNama, paramTahunLahir, paramAsal){
        this.nama = paramNama
        this.tahunLahir = paramTahunLahir
        this.asal = paramAsal
    }
}

// menambahkan class Person
class Developer extends Person{
    constructor(nama, tahunLahir, asal, speciality, pengalaman){
        super(nama, tahunLahir, asal)
        this.speciality = speciality
        this.pengalaman = pengalaman
    }

}

class Product{
    constructor(paramName, paramPrice, paramStock, paramQty){
        this.name = paramName
        this.price = paramPrice
        this.stock = paramStock
        this.qty = paramQty
    }
}

class Clothing extends Product{
    constructor(Name, Price, Stock, Qty, Size){
        super(Name, Price, Stock, Qty)
        this.Size = Size
    }
}

// let a = new Person("Luffy", "1997", "Jowo")
// let b = new Person("Ilham", "1997", "Wonogokil")

console.log(a)
console.log(b)