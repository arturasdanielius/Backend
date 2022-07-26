console.log('------1----');
//1. Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const mas = [];
for(let i = 0; i < 30; i++){
    mas.push(rand(5, 25));
}
console.log(mas);

console.log('------2a----');
//2. Naudodamiesi 1 uždavinio masyvu:

//a) Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;

let kiekis = 0;
mas.forEach(a => a > 10 ? kiekis += 1 : null);  // nulo reikia, kad nepyktu ternaris (else). kiekis  gali buti "kiekis++"
console.log(kiekis);

console.log('------2b----');
//b) Raskite didžiausią masyvo reikšmę ir jos indeksą;

console.log(Math.max(...mas), mas.indexOf(Math.max(...mas))); 

console.log('------2c----');
//c) Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;
let suma = 0;
mas.filter((a, i) => {
    if(mas[i] % 2 === 0){
        suma += a;
    }
});
console.log(suma);

console.log('------2d----');
//d) Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;

let naujasMas = [];
naujasMas.push(mas.map((a, i) => a - i));
//mas.map((a, i) => a - i));
console.log(naujasMas);

console.log('------2e----');
//e) Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;

for(let i = mas.length; i < 40; i++){
    mas.push(rand(5, 25));
}
//kaip alternatyva  mas.push(...([...Array(10)].map(_ => rand(5,25))));
console.log(mas);

console.log('------2f----');
//f) Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių indeksų reikšmių, o kitas iš porinių (pagal neporinį-porinį indeksą, ne reikšmę);
let porinisMas = [];
let nePorinisMas = [];
mas.forEach((_, i) => i % 2===0 ?
porinisMas.push(mas[i]) :
nePorinisMas.push(mas[i]));

console.log(porinisMas);
console.log(nePorinisMas);

console.log('------2g---?-');
//g) Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;

mas.map((a, i) => i % 2===0 && a > 15 ? mas[i] = 0 : a);


/*
mas.map((a, i) => {
if(i % 2===0 && a > 15){
    mas[i] = 0
}});
*/

console.log(mas);
console.log('------2h----');
//h) Suraskite pirmą (mažiausią) indeksą, kurio elemento reikšmė didesnė už 10;

//let saugiklis = 100;
manama = [2, 0, 15, 99, 45, 77, 10, 74];
//const index = -1;
let i = -1;
while(i < manama.length&& manama[i++] <= 10){}
console.log(i > manama.length -1 ? -1 : i);
//if(!(saugiklis--)) break;
//i++;


console.log('------3----');
// 3. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.

const nmas = [];
let raides = ['A', 'B', 'C', 'D'];
for(let i = 0; i < 200; i++){
    nmas.push(raides[rand(0, 3)]);
}//const mas2 = [...Arrey(200)].map(_ => ['A', 'B', 'C', 'D'][rand(0, 3)]);
let kiekis1 = 0;
let kiekis2 = 0;
let kiekis3 = 0;
let kiekis4 = 0;
for (let i = 0; i < nmas.length; i++){
    if (nmas[i] === raides[0]){
        kiekis1 += 1;
    }if (nmas[i] === raides[1]){
        kiekis2 += 1;
    }if (nmas[i] === raides[2]){
        kiekis3 += 1;
    }if (nmas[i] === raides[3]){
        kiekis4 += 1;
    }
}

console.log(nmas);
console.log(kiekis1, raides[0]);
console.log(kiekis2, raides[1]);
console.log(kiekis3, raides[2]);
console.log(kiekis4, raides[3]);

console.log('--------------4---------------');
/*
4. Sugeneruokite 3 masyvus pagal 3 uždavinio sąlygą. Sudėkite masyvus, sudėdami atitinkamas reikšmes. Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote.
*/
const mas1 = [];
const mas2 = [];
const mas3 = [];
let raides1 = ['A', 'B', 'C', 'D'];
//mas.push(...([...Array(10)].map(_ => rand(5,25))))
mas1.push(...([...Array(200)].map(_ => raides1[rand(0, 3)])));
mas2.push(...([...Array(200)].map(_ => raides1[rand(0, 3)])));
mas3.push(...([...Array(200)].map(_ => raides1[rand(0, 3)])));

console.log(mas1);
console.log(mas2);
console.log(mas3);

let unique = 0;
let sudetasMasyvas = [];
sudetasMasyvas.push(...([...Array(200)].map((_, i) => mas1[i] + mas2[i] + mas3[i])));
console.log(sudetasMasyvas);

sudetasMasyvas.forEach((a, i) => sudetasMasyvas.indexOf(a) === i ? unique++ : unique += 0);


//unikalias kombinacijas su Setu [...new Set()], pasiguuglink

console.log(unique);
console.log('--------------5---------------');
//5. Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).


//size = length ,tik sete, o masyve naudojame ilgi(length)
const m1 = new Set();
const mas20 = [];
let sk = 0;
while(m1.size < 100) {
    sk++;
    //add = push tik sete.
    m1.add(rand(100, 999));
}
const mas10 = [...m1];
while(m1.size < 100) {
    sk++;
    //add = push tik sete.
    m1.add(rand(100, 999));
}
console.log([...m1]);

console.log('--------------6---------------');
//6. Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 5 uždavinio masyve, bet nėra //antrame 5 uždavinio masyve.
include()
console.log('--------------7---------------');
//7. Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 5 uždavinio masyvuose.
[]
console.log('--------------8---------------');
//8. Sugeneruokite masyvą, kurio indeksus sudarytų pirmo 5 uždavinio masyvo reikšmės, o jo reikšmės iš būtų antrojo masyvo.
[]
console.log('--------------9---------------');
//9. Sugeneruokite 10 skaičių masyvą pagal taisyklę: Du pirmi skaičiai- atsitiktiniai nuo 5 iki 25. Trečias, pirmo ir antro suma. Ketvirtas- antro ir trečio suma. Penktas trečio ir ketvirto suma ir t.t.*/
