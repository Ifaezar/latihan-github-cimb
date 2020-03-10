class Orang {
    constructor(nama, pekerjaan, umur, picture){
        this.nama = nama
        this.pekerjaan = pekerjaan
        this.umur = umur
        this.picture = picture
    }
}

let dataOrang = [
    new Orang("Luffy", "Bajak Laut", 20,"https://fajar.co.id/wp-content/uploads/2018/01/monkey_d_luffy_after_timeskip__paint__by_twin_gamer-d4ez19r.jpg"),
    new Orang("zoro", "Teman Luffy", 22,"https://i.pinimg.com/originals/f4/bb/ce/f4bbce5b0fb84a8fc543b2c338214233.png"),
    new Orang("law", "navigator", 23,"https://www.greenscene.co.id/wp-content/uploads/2020/03/zoro-696x497.jpg")
]

let temp 
let menu ={}

for (let i = 0; i < dataOrang.length; i++){
    for(let j = 0; j < dataOrang.length; j++){
        if(dataOrang[i].nama < dataOrang[j].nama){
            temp = dataOrang[j]
            dataOrang[j] = dataOrang[i]
            dataOrang[i] = temp 
        }
    }
    console.log(dataOrang[1])
    menu += dataOrang[i]
}

console.log(menu)