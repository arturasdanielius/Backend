[1, 5, 77].forEach(a => console.log(a));

/*forEach
map   -  Map masyvo pusbrolis, masyve naudosime map
sort
filter*/
console.log('--------forEach-----------');
[1, 5, 77].forEach(a => {
    if(a > 4) {
        console.log(a);
    }
});

console.log('--------forEach-----------');

[1, 5, 77].forEach((a, i) => console.log(a, i));

console.log('--------forEach---?--------');

[1, 5, 77].forEach((a, i, t) => console.log(t[i]));

console.log('--------forEach-----------');

//a - reiksme, i - kelintas narys, t - visas masyvas

[1, 5, 77].forEach((a, i, t) => console.log(t[2 - i]));

console.log('--------forEach-----------');

[1, 5, 77].forEach((a, i, t) => console.log(t[t.length - i - 1]));


console.log('-------------map----------');

/*const fe = [1, 5, 77].forEach(a => console.log(a));
//const map = [1, 5, 77].map(a => console.log(a));
//const map = [1, 5, 77].map(a => a * 100);
//const map = [1, 5, 77].map((a, i) => a * i);
const map = [1, 5, 77].map((a, i) => {
    return a * i;
});

//zr auksciau jei yra viena eilute - ji atutomatiskai returninama
//map grazina pakoreguota masyva

console.log(fe);
console.log(map); */


console.log('-------------filter----------');
//deti toks koks jis yra arba nedeti, jei deti sakyti true, jei ne false.

// 1 const fi = [1, 5, 77].filter(a => console.log(a));
//console.log(fi);

//deti toks koks jis yra arba nedeti, jei deti sakyti true, jei ne false.

// 2 const fi = [1, 5, 0, 77].filter(a => a > 4);
//console.log(fi);

//filtras taip pat grazina areju, bet isfiltruotu masyvu.


const fi = [1, 5, 0, 77].filter(a => a > 4).map(r => r * 10);
console.log(fi);

console.log('-------------sort----------');

//pakeis zaidzia su originaliu namu ir isrusiuoja namo aukstus norima tvarka

const namas = [1, 10, 660, 0, 5, 77];

namas.sort((a , b) => {
    if (a > b) return -1; //isrusiuos mazejimo tvarka 
    if (a < b) return 1;  //isrusiuos didejimo tvarka
    return 0;
});

//issortina skaicius abeceles tvarka, 10 yra maziau uz 5, ne 1 ir 0 maziau uz 5. (sort algoritmas google)
//lygina 2 gretimas reiksmes
//duoda ir sukeis jei bus neigiama reiksme pvz -37, nieko nedaro jei 0 ir palieka jei yra teigiamas skaicius pvz +5. (visa tai aprasome salygoje ) 

console.log('-------------sort----------');

const namas1 = ['1z', '1p0', '6z60', '0', '5d', '7o7'];
console.log(namas1);

namas1.sort((a , b) => {
    if (a < b) return 1;
    if (b < a) return -1;
    return 0;
});
//namas1.sort((a , b) => a.localeCompare(b));
