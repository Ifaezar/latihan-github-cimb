
let angka = [1,2,3,4,5]
let hasil = 0
let output = ''
for (i = 0; i < angka.length; i++){
    if (i == 0){
        hasil = angka[i]
        output += `${angka[i]}`
    }else if (i % 2 == 1){
        hasil += angka[i]
        output += ` + ${angka[i]}`
    }else{
        hasil -= angka[i]
        output += ` - ${angka[i]}`
    }
}

console.log(output)
