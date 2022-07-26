function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log('-----------1-----------')
const mas = []

for(let i = 0; i < 2; i++){
    mas.push(rand(0, 4));
}

if (mas[0] > mas[1]){
    console.log(mas, (mas[0]/mas[1]));
}else {
    console.log(mas, (mas[1]/mas[0])); 
}

//mas.forEach(n => console.log(n));

console.log('-----------2-----------');

const masi = []
for(let i = 0; i < 3; i++){
    masi.push(rand(0, 25));
}

if (masi[0] > masi[1] &&  masi[0] < masi[2] || masi[0] < masi[1] &&  masi[0] > masi[2]){
    console.log(masi[0]);
    }else if (masi[1] > masi[0] &&  masi[1] < masi[2] || masi[1] < masi[0] &&  masi[1] > masi[2]){
    console.log(masi[1]);
    }else{
    console.log(masi[2]);
}
console.log(masi);

console.log('-----------3-----------');

const tri = []
for(let i = 0; i < 3; i++){
    tri.push(rand(1, 10));
}

if (((tri[0] + tri[1]) > tri[2]) && ((tri[1] + tri[2]) > tri[0]) && ((tri[2] + tri[0]) > tri[1])) {
    console.log(true);
    }else {
    console.log(false);
}

console.log(tri);

console.log('-----------4-----------');

const kt = []
for(let i = 0; i < 4; i++){
    kt.push(rand(0, 2));
}

let count0 = 0;
let count1 = 0;
let count2 = 0;
for(let i = 0; i < kt.length; i++){
    if (kt[i] === 0){
        count0 += 1; 
    }if(kt[i] === 1){
        count1 += 1;
    }if(kt[i] === 2){
        count2 += 1;      
    }
}

console.log(kt);
console.log(count0);
console.log(count1);
console.log(count2);


console.log('-----------5-----------');


const plsMns = []
for(let i = 0; i < 3; i++){
    plsMns.push(rand(-10, 10));
}
console.log(plsMns);

for(let i = 0; i < plsMns.length; i++){
    if(plsMns[i] < 0){
        console.log('+'+plsMns[i]+'+');
    } else if (plsMns[i] > 0){ 
        console.log('-'+plsMns[i]+'-');    
    } else {
        console.log('*'+plsMns[i]+'*');
    }
}

console.log('-----------6-----------');

const zvakes = []
for(let i = 0; i < 1; i++){
    zvakes.push(rand(5, 3000));
}
console.log(zvakes);

let zvakiuKaina = 1;
let disc3 = (zvakiuKaina*0.97);
let disc4 = (zvakiuKaina*0.96);
let visaSuma = 0
for (let i = 0; i < zvakes.length; i++){ 
    if (zvakes[0] > 2000){
        visaSuma = zvakes[0]*disc4;
    }else if (zvakes[0] > 1000){
        visaSuma = zvakes[0]*disc3;
    }else{
        visaSuma = zvakes[0]*zvakiuKaina; 
    }
}

console.log(zvakes,visaSuma +'EUR');

//nauja kaina nepriima nuo 2000 4 proc nuolaidos

console.log('-----------7-----------');

const vidurkis = [];

for(let i = 0; i < 3; i++){
    vidurkis.push(rand(0, 100));
}
console.log(vidurkis);

let total = 0;
vidurkis.forEach(i => {
    total = total + i;
});
const aritVidurkis = total / vidurkis.length;
console.log(aritVidurkis);

// nepadaryta antra reiskmereiksme(Paskaičiuokite jų aritmetinį vidurkį. Ir aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite su console.log()

