function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const girls = ['Brigita', 'Edita', 'Deimantė', 'Justė', 'Ona', 'Bronė', 'Ramunė', 'Kaštonė', 'Meilutė'];

console.log('------------1-----------');
/*

const [a,b] =[5, 7];

tas pas tkaip
 const a = [5,7] [0];
 const b = [5,7] [1];

1.Sukurkite masyvą cats iš 10 elementų, kurių reikšmės atsitiktiniai skaičiai nuo 2 iki 12;
Sukurkite masyvą owners iš 10 elementų, kurių reikšmės atsitiktiniai vardai iš masyvo girls. Vardai gali kartotis. Masyvus atspausdinkite su console.log();*/

const cats = [];
const owners = [];
for(let i = 0; i < 10; i++){
    cats.push(rand(2, 12));
    owners.push(girls[rand(0, 8)]);
}
console.log(cats);
console.log(owners);


//"cats" masyvas aprasytas kitaip panaudojant const "mas".
const mas = [...Array(10)].map(_ => rand(2, 12));
console.log(mas);

console.log('-----2--katinukai-masyve--------');

/*
2.Suskaičiuokite kiek katinukų yra cats masyve (suraskite masyvo narių sumą). Sumuokite tik tas katinukų reikšmes, kurios be liekanos dalijasi iš 3. Rezultatą atspausdinkite su console.log();
*/
console.log(cats);
console.log();
let sum = 0;

let sumavisu = cats.reduce((a, b) => a + b, sum)
console.log(sumavisu);;

console.log(sumWithInitial);
cats.forEach(a => a++, sum += a)

cats

//let Sum = cats.filter(a => a > 4).map(r => r * 10)

/*for (let i = 0; i < cats.length; i++){
    const Sum = cats.filter(i => cats[i] % 3 === 0, catsSum + cats[i]);{
        console.log(Sum);
    }
}*/

/*for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum);*/

console.log('-----3--Nauseda-plius-index[0]--masyve--------');

/*
3.Į masyvo owners pradžią, t.y. elementą su indeksu 0 (o ne galą!, o pridėkite papildomai, o neužrašykite ant mergaitės!) pridėkite vardą 'Nausėda'. Masyvas po pridėjimo turi turėti 11 elementų;*/

const Nauseda = [...owners].map(a, owners[0]);
    {a => 'Nausėda' + owners[0]};
console.log(Nauseda);

unshift

/* 4.Sukurkite trečią masyvą catOwners, kurio reikšmė yra stringas, sudarytas iš vardo ir katinukų skaičiaus (pvz Deimantė has 2 cats), naudodami masyvus cats ir owners pagal taisyklę: pirmai mergaitei iš owners masyvo priskiriamas pirmas katinukų skaičius iš cats masyvo, antrai - antras ir t.t. Atkreipkite dėmesį, kad pirma mergaitė owners masyve yra ne pirmas elementas su indeksu 0 (pirmas yra 'Nausėda'), o antrasis su indeksu 1. Pirmas katinukų skaičius cats masyve yra standartiškai su indeksu 0. Masyvą atspausdinkite su console.log();*/

/*
8. Suraskite vieną (tik vieną) vardą owners masyve, kuris kartojasi (nesvarbu kiek kartų) ir jį atspausdinkite su console.log().*/

