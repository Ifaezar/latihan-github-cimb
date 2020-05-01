
let a =''

function tes(word) {
    for(let i = 0; i < word.length; i++){
        if (i == 0){
         a += word[i].toUpperCase()
        }
        for (let j = 0; j < i; j++){
            if (j == 0){
                a += word[i].toUpperCase()
            }
            a += word[i]
        }
        if (i < word.length-1){
            a += "-"
        }
    }    
    return a
}

console.log(tes("hello"))