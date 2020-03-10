

let kata = "saya saya saya saya saya Saya aku aku adalah adalah aku aku aku aku".split(' ')
let kataBanyak
let jumlah = 0
let max = [0,0]
for(let i = 0;  i < kata.length; i++){
    jumlah = 0 
    for(let j = 0; j < kata.length; j++){
        if(kata[i].toLowerCase() == kata[j].toLowerCase()){
            jumlah++
            max[0] = jumlah
        }else{
            jumlah = jumlah
        }
    }
    if(max[0] > max[1]){
        max[1] = max[0]
        kataBanyak = kata[i]
    }else{
        max[1] = max[1]
    }
    
}
console.log(kataBanyak,max[1])
