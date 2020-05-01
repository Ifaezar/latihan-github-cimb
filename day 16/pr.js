
const triangleArray= (panjang) => {
    let menu =[]
    let arr2 = []
    for (let i = 0; i < panjang; i++){
        let arr = []
        for (let j = 0; j<=i; j++){ 
            arr2[j] = j+1
            arr.push(arr2[j])
        }
        menu.push(arr)
    }
    return menu
}


const triangleGanjil= (panjang) => {
    let menu =[]
    let arr2 = []
    let a = 1
    for (let i = 0; i < panjang; i++){
        let arr = []
        for (let j = 0; j<=i; j++){ 
            if(i == 0){
                arr2[j] = a
                arr.push(arr2[j])
            }else{
                arr2[j] = a+=2
                arr.push(arr2[j])
            }
        }
        menu.push(arr)
    }
    return menu
}



const fibonacci = (panjang) => {
    let menu =[]
    let arr2 = []
    let index = 0   
    let fibo = []
    for (let i = 0; i < panjang; i++){
        let arr = []
        for (let j = 0; j<=i; j++){ 
            if(i == 0){
                fibo[index] = 0
                arr2[j] = fibo[index]
                arr.push(arr2[j])
                index++
            }else if(i == 1){
                fibo[index] = 1
                arr2[j] = fibo[index]
                arr.push(arr2[j])
                index++
            }else{
                fibo[index] = fibo[index-1] + fibo[index-2] 
                arr2[j] = fibo[index]
                arr.push(arr2[j])
                index++
            }
        }
        menu.push(arr)
    }
    return menu
}



const segitigaPascal= (panjang) => {
    let menu =[]
    let arr2 = []
    for (let i = 0; i < panjang; i++){
        let arr = []
        for (let j = 0; j<=i; j++){ 
            if(j == 0 || j == i){
                arr2[j] = 1
                arr.push(arr2[j])
            }else {
                arr2[j] = menu[i-1][j-1]+menu[i-1][j]
                arr.push(arr2[j])
            }
        }
        menu.push(arr)
    }
    return menu
}
console.log("/////////////////////////////")
console.log("Triangle Array")
console.log(triangleArray(6))
console.log("/////////////////////////////")
console.log("Triangle Ganjil")
console.log(triangleGanjil(6))
console.log("/////////////////////////////")
console.log("Fibonacci")
console.log(fibonacci(6))
console.log("/////////////////////////////")
console.log("Segitiga Pascal")
console.log(segitigaPascal(6))