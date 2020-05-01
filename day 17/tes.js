
const repFilter = (array, cb) => {
    let result = []
    for (let i = 0; i < array.length; i++){
        if(array[i] <= 4){
            result.push(cb(array[i]))
        }
    }
    return result
}

console.log(repFilter([1,2,3,4,5], (val)=>{
    return val
}))
