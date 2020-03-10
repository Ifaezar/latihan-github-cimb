

// function namaFunction(param){
//     console.log(param)
// }

// namaFunction("Hai")

// let a = 9
// let b = 10

// function namaFunction(angka1, angka2){
//     let total
//     total = angka1 + angka2
//     return total

// }
// console.log(namaFunction(a,b))

let arrNumber = [80, 90, 70] 

console.log(gradeFunction(arrNumber))

function gradeFunction(marks){
    let average = averageFunction(marks)
    if (average <= 60 ){
        return "F"
    }
    if (average <= 70){
        return "D"
    }
    if (average <= 80){
        return "B"
    }
    if (average > 80){
        return "A"
    }
    
}

function averageFunction(arr){
    let total = 0
    
    for (let i = 0; i < arr.length; i++){
        total += arr[i]
    }
    
    return total/arr.length
}

