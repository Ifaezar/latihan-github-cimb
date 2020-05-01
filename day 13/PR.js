let number = 9781
let a = number.toString().split("")
let b = number.toString().split("")
let temp, kecil, besar, hasil, jum = 0
let newNumber = []
let kondisi = true

function min(a) {
    for(let i = 0; i <= a.length; i++){
        for(let j = 0; j <= a.length; j++){
            if(a[i] < a[j]){
                temp = a[i]
                a[i] = a[j]
                a[j] = temp
            }
        }
    }
    kecil = parseInt(a.join(""))
    return kecil
}

function max(b) {
    for(let i = 0; i <= b.length; i++){
            for(let j = 0; j <= b.length; j++){
                if(b[i] > b[j]){
                    temp = b[i]
                    b[i] = b[j]
                    b[j] = temp
                }
            }
        }
        besar = parseInt(b.join(""))
      
        return besar
}
while (kondisi){
    if(hasil == 6174){
        kondisi = false
    }else{
        min(a)
        max(b)
        hasil = besar - kecil
        a = hasil.toString().split("")
        b = hasil.toString().split("")
        kondisi = true
        jum++
    }
    console.log( hasil)
}

console.log(`ada ${jum} iterasi`)

