

data = [[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]]
data2 = [[0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]]
    for(let i = 0; i < data.length; i++){
        for(let j = 0; j < data.length; j++){
            if(i == 0 && j == 0){
                data2[i][j+3] = data[i][j]
            }else if(i == 0){
                data2[i+j][3] = data[i][j]
            }else if(j == 3){
                data2[3][j-i] = data[i][j]
            }else if(i == 3){
                data2[j][j-j] = data[i][j]
            }else if(j == 0){
                data2[j][3-i] = data[i][j]
            }
        }
    }
console.log(data)
console.log(data2)