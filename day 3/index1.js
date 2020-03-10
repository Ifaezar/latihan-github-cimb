// LOOPING FOR TO DO
// let len = 50
// let ketemu = 1
//     for (let i = 1; i <= len; i++){
//         if ((i % 3 == 0) && (i % 5 == 0)){
//             console.log("FizzBuzz")
//             if (ketemu < 2){
//                 ketemu++
//             } else {
//                 break  //untuk memperhentikan proses looping
//             }           // continue seperti break cuman continue akan menghabiskan program tapi masih lanjut ke proses looping selanjutnya
            
//         }else if (i % 3 == 0 ){
//             console.log("Fizz")
//         }else if(i % 5 == 0){
//             console.log("Buzz")
//         }else {
//             console.log(i)
//         }
//     }


let bintang = ""
for (i = 1; i <= 5; i++){
    for (j = 1 ; j <= 5; j++){
        if (j <= i){
        bintang += "*"
    }
    }
    bintang += "\n"
} console.log(bintang)


 for (i = 1; i <= 5; i++){
     for (j = 1 ; j <= 5; j++){
         if (j >= i){
         bintang += "*"
     }
     }
     bintang += "\n"
 } console.log(bintang)

