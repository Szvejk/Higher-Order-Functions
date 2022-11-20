"use strict";
// // Obiekt będzie wykorzystywany w wielu zadaniach
// // ```js
// const sampleObj=[
//     {name: "Alex", age: 30},
//     {name: "Piotr", age: 26},
//     {name: "Patryk", age: 45},
//     {name: "Agnieszka", age: 20}
// ]
// // ```
// // ​
// // ## Zadanie 1
// // Za pomocą map stwórz tablicę stringów zawierających tekst "Jestem (name) i mam (age) lat", wykorzystaj tablicę sampleObj.
// sampleObj.map(el=>`Jestem ${el.name} i mam ${el.age}`)
// // const text =["Jestem (sample.Obj(name)) i mam (sample.Obj(age)) lat"]
// //     return text()
// // });
// // ## Zadanie 2
// // Za pomocą map stwórz tablicę obiektów, która zawiera name, age oraz nowy klucz bornYear, który zostanie obliczony na podstawie wieku i dodany do obiektu, w nowo tworzonej tablicy
// // ​
// // ## Zadanie 3
// // Za pomocą filter wyciągnij z tabliy sampleObj osoby które mają więcej niż 25 lat.
// // ​
// // ## Zadanie 4
// // Za pomocą filter wyciągnij z tablicy sampleObj osoby który imię kończy się na a lub r.
// // ​
// // ```js
// // const books=[
// //     {name: "Wojna i pokoj",price: '30'},
// //     {name: "Encyklopedia", price: 100},
// //     {name: "Kosmos", price: 65}
// // ]
// // ```
// // ​
// // ## Zadanie 5
// // Za pomocą map połącz osoby z sampleObj i książki z books tak aby pierwsza osoba miała pierwszą książkę, druga drugą itd.
// // ​
// // ## Zadanie 6
// // Przefiltruj książki tak aby znaleźć książkę, której cena jest stringiem
// // ​
// // ## Zadanie 7
// // Za pomocą find znajdź cenę książki Kosmos.
// // ​
// // ## Zadanie 8
// // Sprawdź za pomocą every czy każda książka kosztuje powyżej 50
// // ​
// // ## Zadanie 9
// // Sprawdź za pomocą some czy jakaś książka kosztuje poniżej 40
// // ​
// // ## Zadanie 10
// // Sprawdż czy każda osoba z sampleObj jest pełnoletnia
// // ​
// // ## Zadanie 11
// // Zsumuj wiek wszystkich osób za pomocą reduce i oblicz średnią wieku
// // ​
// // ## Zadanie 12
// // Za pomocą forEach znajdź najmłodszą i najstarszą osobę i oblicz ich różnicę wieku
// // ​
// // ## Zadanie 13
// // Wyświetl nazwę książki która jest najtańsza i najdroższa
// // ​
// // ## Zadanie 14
// // Zsumuj cenę wszystkich książek
// // ​
// // ## Zadanie 15
// // Stwórz funckję zapisującą do localStorage, sessionStorage lub ciastka
// // ​
// // ## Zadanie 16
// // Stwórz funkcję odczytującą ciasteczka z przeglądarki i tworzącą z nich obiekt wygodny do odczytu. Ciasteczka są zapisywane jako string. W stworzonym obiekcie niech kluczem będzie nazwa, a value wartością w obiekcie
// // ```js
// // {name}={value};
// // ```
// // zadanie 1
// // ## Zadanie 2
// // Za pomocą map stwórz tablicę obiektów, która zawiera name, age oraz nowy klucz bornYear, który zostanie obliczony na podstawie wieku i dodany do obiektu, w nowo tworzonej tablicy
// //  let currentYear = new Date().getFullYear()
// //  let yourAge = document.getElementById("age")  // age wpisany w input w html
// //  const calculate = () => {
// // bornYear = currentYear - yourAge;
// //  }
// //  return (bornYear);
// // const presentation = [name === "Sara", age = 23]; let bornYear = presentation.keys(); for (let key of bornYear) (console.log(key))
// sampleObj.map(el=>({
//     name: el.name,
//     age: el.age,
//     bornYear: new Date().getFullYear()-el.age
// }))
// // ## Zadanie 3
// // Za pomocą filter wyciągnij z tabliy sampleObj osoby które mają więcej niż 25 lat.
// // const filterArray = sampleObj.filter(el=>el.age>25);
// // console.log(filterArray);
// //
// // // ## Zadanie 4
// // // Za pomocą filter wyciągnij z tablicy sampleObj osoby który imię kończy się na a lub r.
// // const filterArray = sampleObj.filter(el => el.endsWith('a') || el.endsWith('r'))
// // return (filterArray)
// //
// // ```
// ​
// // ## Zadanie 5 !
// // Za pomocą map połącz osoby z sampleObj i książki z books tak aby pierwsza osoba miała pierwszą książkę, druga drugą itd.
// // // ​
// const books=[
//     {name: "Wojna i pokoj",price: '30'},
//     {name: "Encyklopedia", price: 100},
//     {name: "Kosmos", price: 65}
// ]
// const newArr=[]
// for (i=0; i<books.length;i++){
//     newArr.push({​...books[i],...sampleObj[i]})
// }
// // const tab1=[1,2,3]
// // const tab2=[3,4,5]
// // newArr2=[1,2,3,3,4,5]
// // ## Zadanie 6
// // Przefiltruj książki tak aby znaleźć książkę, której cena jest stringiem
// // const books=[
// //     {name: "Wojna i pokoj",price: '30'},
// //     {name: "Encyklopedia", price: 100},
// //     {name: "Kosmos", price: 65}
// // ]
// const result = books.filter(book => typeof book.price === "string")
// console.log(result)
// // }
// // ​
// // ## Zadanie 7
// // Za pomocą find znajdź cenę książki Kosmos.
// // const books=[
// //     {name: "Wojna i pokoj",price: '30'},
// //     {name: "Encyklopedia", price: 100},
// //     {name: "Kosmos", price: 65}
// // ]
// const found = books.find(book=>book.name === "Kosmos");
// console.log(found.price)
// // ## Zadanie 8
// // Sprawdź za pomocą every czy każda książka kosztuje powyżej 50
// //
// // const tab=[1,58,8,8,4]
// // tab.some(el=>{
// //     console.log(el)
// // })
// books.every((x)=>{
//     return x.price > 50;
// })
// // ## Zadanie 9
// // Sprawdź za pomocą some czy jakaś książka kosztuje poniżej 40
// // // ​
// const even = (element) => element.price < 40;
// console.log(books.some(even));
// // ## Zadanie 10
// // Sprawdż czy każda osoba z sampleObj jest pełnoletnia
// // ​const sampleObj=[
// //     {name: "Alex", age: 30},
// //     {name: "Piotr", age: 26},
// //     {name: "Patryk", age: 45},
// //     {name: "Agnieszka", age: 20}
// // ]
// const checkIfAdult = sampleObj.every(item => item.age > 18);
// console.log (checkIfAdult)
// ​
// // ## Zadanie 11
// // Zsumuj wiek wszystkich osób za pomocą reduce i oblicz średnią wieku
// const average = sampleObj.reduce(function (acc, cur) {
//         return acc + cur.age;
//     }, 0) / sampleObj.length;
// // console.log(average);
// // ## Zadanie 12
// // Za pomocą forEach znajdź najmłodszą i najstarszą osobę i oblicz ich różnicę wieku
// // sampleObj.forEach(function(age) {
// //   const maximum =  Math.max(sampleObj => age)
// //   return maximum;
// //   const minimum = Math.min(sampleObj => age)
// //   return minimum
// // }
// const maximum=Math.max(...sampleObj.map(el=>el.age))
// const minimum=Math.min(...sampleObj.map(el=>el.age))
// console.log(maximum-minimum)
// // ## Zadanie 13 !
// // Wyświetl nazwę książki która jest najtańsza i najdroższa
// const maximumPrice=Math.max(...books.map(el=>el.price))
// const minimumPrice=Math.min(...books.map(el=>el.price))
// // ## Zadanie 14
// // Zsumuj cenę wszystkich książek
// // ​
// const sum = books.reduce((accumulator, cur) => {
//   return accumulator + cur.price;
// }, 0);
// console.log(sum);
// acc?
// ## Zadanie 15
// Stwórz funckję zapisującą do localStorage, sessionStorage lub ciastka
// ​
// window.onstorage = event => { ('storage', () => {
//     if (event.key != 'now') {
//       return;
//     }
//     alert(event.key + ':' + event.newValue + " at " + event.url);
//   };
//   localStorage.setItem('now', Date.now());
// ## Zadanie 16 !
// Stwórz funkcję odczytującą ciasteczka z przeglądarki i tworzącą z nich obiekt wygodny do odczytu. Ciasteczka są zapisywane jako string. W stworzonym obiekcie niech kluczem będzie nazwa, a value wartością w obiekcie
// ```js
// {name}={value};
// ```
var example = [
    { house: '', candys: 15 },
    { house: '', candys: 'dsdsa' },
    { house: '', candys: 24 },
];
var allCandys = example.reduce(function (acc, cur) {
    var converted = Number(cur.candys);
    if (!isNaN(converted)) {
        return acc + converted;
    }
    return acc;
}, 0);
console.log('all candys', allCandys);
var student = {
    name: "test",
    age: 25,
    isMan: true,
    books: ["test1", "test2"],
    czyPali: true
};
var Ciasto = /** @class */ (function () {
    //konstruktor klasy
    function Ciasto(wysokosc, ksztalt, smak) {
        this.etap = "w produkcji";
        this.wysokosc = wysokosc;
        this.ksztalt = ksztalt;
        this.smak = smak;
    }
    Ciasto.prototype.info = function () {
        console.log("".concat(this.wysokosc, " ").concat(this.ksztalt, " ").concat(this.smak, " ").concat(this.etap));
    };
    return Ciasto;
}());
var kremowka = new Ciasto(15, "okragle", "czekoladowe");
kremowka.info();
