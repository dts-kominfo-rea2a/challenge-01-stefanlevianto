// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
/* const firstUser = {
/*     /* name: "Monica",
    gender:"Female",
    age:17,
    email:"monica@dingdong.com",
    favoriteColor:favoriteColor1,
    isHavePet:"Yes",
    education:education1,education2,education3,
    favoriteRestaurant:favoriteRestaurant1 
}; */
//USER 1 
const favoriteColor1 = new Set();
favoriteColor1.add("Yellow");
favoriteColor1.add("Pink");
favoriteColor1.add("White");
favoriteColor1.add("Purple");



const education1={ 
    name: "SD 01",
    city: "Jakarta",
    graduate: "2016"
}

const education2={ 
    name: "SMP 02",
    city: "Jakarta",
    graduate: "2019"
}

const education3={ 
    name: "SMA 03",
    city: "Tangerang",
}
const setEd1=new Set();
setEd1.add(education1);
setEd1.add(education2);
setEd1.add(education3);

const favoriteRestaurant1=new Set();
favoriteRestaurant1.add("Bento");
favoriteRestaurant1.add("Sushi");
favoriteRestaurant1.add("Pancake");
favoriteRestaurant1.add("Eggy");
favoriteRestaurant1.add("Tempura");
favoriteRestaurant1.add("Bento");
favoriteRestaurant1.add("Eggy");
favoriteRestaurant1.add("Padang");
favoriteRestaurant1.add("Tteok");
favoriteRestaurant1.add("Sushi");
favoriteRestaurant1.add("Sushi");

/* const firstUser=new Map();

firstUser.set("name", "Monica");
firstUser.set("gender","Female");
firstUser.set("age",17);
firstUser.set("email","monica@dingdong.com");
firstUser.set("favoriteColor",favoriteColor1);
firstUser.set("isHavePet","Yes");
firstUser.set("education",setEd1);
firstUser.set("favoriteRestaurant",favoriteRestaurant1);
console.log(firstUser); */
const firstUser={
    name: "Monica",
    gender:"Female",
    age:17,
    email:"monica@dingdong.com",
    favoriteColor:favoriteColor1,
    isHavePet:"Yes",
    education:setEd1,
    favoriteRestaurant:favoriteRestaurant1
}
console.log(firstUser);
//USER 2
const favoriteColor2 = new Set();
favoriteColor2.add("Blue");
favoriteColor2.add("Black");
favoriteColor2.add("Grey");

const education4={
    name:"SD 02",
    city:"Jakarta",
    graduate:"2010"
}
const education5={
    name:"SMP 03",
    city:"Bogor",
    graduate:"2013"
}
const education6={
    name:"SMA 01",
    city:"Surabaya",
    graduate:"2016"
}
const education7={
    name:"Universitas Maju",
    city:"Tangerang"
}
const setEd2=new Set();
setEd2.add(education4);
setEd2.add(education5);
setEd2.add(education6);
setEd2.add(education7);

const favoriteRestaurant2=new Set();
favoriteRestaurant2.add("Tempura");
favoriteRestaurant2.add("Bento");
favoriteRestaurant2.add("Sushi");
favoriteRestaurant2.add("Pancake");
favoriteRestaurant2.add("Padang");
favoriteRestaurant2.add("Katsu");
favoriteRestaurant2.add("Geprek");
favoriteRestaurant2.add("Pancake");
favoriteRestaurant2.add("Eggy");

/* const secondUser=new Map();
secondUser.set("name", "Wendy");
secondUser.set("gender","Male");
secondUser.set("age",23);
secondUser.set("email","wendy@dingdong.com");
secondUser.set("favoriteColor",favoriteColor2);
secondUser.set("isHavePet","Yes");
secondUser.set("education",setEd2);
secondUser.set("favoriteRestaurant",favoriteRestaurant2); */
const secondUser={
    name: "Wendy",
    gender:"Male",
    age:23,
    email:"wendy@dingdong.com",
    favoriteColor:favoriteColor2,
    isHavePet:"Yes",
    education:setEd2,
    favoriteRestaurant:favoriteRestaurant2,
}

console.log(secondUser);

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser,secondUser];
console.log(users);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};