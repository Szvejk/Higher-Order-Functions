
// Obiekt będzie wykorzystywany w wielu zadaniach
// ```js
// const sampleObj=[
//     {name: "Alex", age: 30},
//     {name: "Piotr", age: 26},
//     {name: "Patryk", age: 45},
//     {name: "Agnieszka", age: 20}
// ]
// ```
// ​
// ## Zadanie 1
// Za pomocą map stwórz tablicę stringów zawierających tekst "Jestem (name) i mam (age) lat", wykorzystaj tablicę sampleObj.
// ​
// ## Zadanie 2
// Za pomocą map stwórz tablicę obiektów, która zawiera name, age oraz nowy klucz bornYear, który zostanie obliczony na podstawie wieku i dodany do obiektu, w nowo tworzonej tablicy
// ​
// ## Zadanie 3
// Za pomocą filter wyciągnij z tabliy sampleObj osoby które mają więcej niż 25 lat.
// ​
// ## Zadanie 4
// Za pomocą filter wyciągnij z tablicy sampleObj osoby który imię kończy się na a lub r.
// ​
// ```js
// const books=[
//     {name: "Wojna i pokoj",price: '30'},
//     {name: "Encyklopedia", price: 100},
//     {name: "Kosmos", price: 65}
// ]
// ```
// ​
// ## Zadanie 5
// Za pomocą map połącz osoby z sampleObj i książki z books tak aby pierwsza osoba miała pierwszą książkę, druga drugą itd.
// ​
// ## Zadanie 6
// Przefiltruj książki tak aby znaleźć książkę, której cena jest stringiem
// ​
// ## Zadanie 7
// Za pomocą find znajdź cenę książki Kosmos.
// ​
// ## Zadanie 8
// Sprawdź za pomocą every czy każda książka kosztuje powyżej 50
// ​
// ## Zadanie 9
// Sprawdź za pomocą some czy jakaś książka kosztuje poniżej 40
// ​
// ## Zadanie 10
// Sprawdż czy każda osoba z sampleObj jest pełnoletnia
// ​
// ## Zadanie 11
// Zsumuj wiek wszystkich osób za pomocą reduce i oblicz średnią wieku
// ​
// ## Zadanie 12
// Za pomocą forEach znajdź najmłodszą i najstarszą osobę i oblicz ich różnicę wieku
// ​
// ## Zadanie 13
// Wyświetl nazwę książki która jest najtańsza i najdroższa
// ​
// ## Zadanie 14
// Zsumuj cenę wszystkich książek
// ​
// ## Zadanie 15
// Stwórz funckję zapisującą do localStorage, sessionStorage lub ciastka
// ​
// ## Zadanie 16
// Stwórz funkcję odczytującą ciasteczka z przeglądarki i tworzącą z nich obiekt wygodny do odczytu. Ciasteczka są zapisywane jako string. W stworzonym obiekcie niech kluczem będzie nazwa, a value wartością w obiekcie
// ```js
// {name}={value};
// ```





// zadanie 1
// const text =["Jestem (sample.Obj(name)) i mam (sample.Obj(age)) lat"]
// const string = sample.Obj.map((text) => {
//     return text()
// });
 
// ## Zadanie 2
// Za pomocą map stwórz tablicę obiektów, która zawiera name, age oraz nowy klucz bornYear, który zostanie obliczony na podstawie wieku i dodany do obiektu, w nowo tworzonej tablicy
 
//  let currentYear = 2022
//  let yourAge = document.getElementById("age")  // age wpisany w input w html
//  const calculate = () => {
// bornYear = currentYear - yourAge;

//  }
//  return (bornYear);
// const presentation = [name === "Sara", age = 23]; let bornYear = presentation.keys(); for (let key of bornYear) (console.log(key))

// ## Zadanie 3
// Za pomocą filter wyciągnij z tabliy sampleObj osoby które mają więcej niż 25 lat.
// 
// const filterArray = sample.Obj.filter((age>25));
// console.log(filterArray);


// ​const sampleObj=[
//     {name: "Alex", age: 30},
//     {name: "Piotr", age: 26},
//     {name: "Patryk", age: 45},
//     {name: "Agnieszka", age: 20}
// ]
// // ## Zadanie 4
// // Za pomocą filter wyciągnij z tablicy sampleObj osoby który imię kończy się na a lub r.
// const filterArray = sampleObj.filter() => sampleObj.endsWith('a||r')
// return (filterArray)

// const books=[
//     {name: "Wojna i pokoj",price: '30'},
//     {name: "Encyklopedia", price: 100},
//     {name: "Kosmos", price: 65}
// ]
// ```
​
// ## Zadanie 5 !
// Za pomocą map połącz osoby z sampleObj i książki z books tak aby pierwsza osoba miała pierwszą książkę, druga drugą itd.
// ​

// // _.map( (array1, array2), function(knownValue, indexOfArray1, indexOfArray2) );

// const a1 = ['a', 'b', 'c'];
// const a2 = ['One', 'Two', 'Three'];

// const result = _.zip(a1, a2).map(function([a1_item, a2_item], indexForBoth) { 
//   return a1_item + a2_item + indexForBoth;
// });


// ## Zadanie 6
// Przefiltruj książki tak aby znaleźć książkę, której cena jest stringiem
// const books=[
//     {name: "Wojna i pokoj",price: '30'},
//     {name: "Encyklopedia", price: 100},
//     {name: "Kosmos", price: 65}
// ]
// const result = books.filter(price => price.typeof === string)
// console.log(result)



// }
// ​
// ## Zadanie 7
// Za pomocą find znajdź cenę książki Kosmos.
// const books=[
//     {name: "Wojna i pokoj",price: '30'},
//     {name: "Encyklopedia", price: 100},
//     {name: "Kosmos", price: 65}
// ]
// const found = books.find(name === "Kosmos" => price);
// console.log(found)

// ## Zadanie 8
// Sprawdź za pomocą every czy każda książka kosztuje powyżej 50
// ​

// books.every(checkPrize)
// function checkPrize(books) {
//     return books > 50;
// }


// ## Zadanie 9
// Sprawdź za pomocą some czy jakaś książka kosztuje poniżej 40
// // ​

// const even = (element) => prize < 40;
// console.log(array.some(even));


// ## Zadanie 10
// Sprawdż czy każda osoba z sampleObj jest pełnoletnia

// ​const sampleObj=[
//     {name: "Alex", age: 30},
//     {name: "Piotr", age: 26},
//     {name: "Patryk", age: 45},
//     {name: "Agnieszka", age: 20}
// ]
// const checkIfAdult = sampleObj.every(item => item.age > 18);
// console.log (checkIfAdult)

​
// ## Zadanie 11
// Zsumuj wiek wszystkich osób za pomocą reduce i oblicz średnią wieku
// ​

//     average = sampleObj.reduce(function (sum, age) {
//         return sum + age;
//     }, 0) / array.length;

// console.log(average);

// ## Zadanie 12
// Za pomocą forEach znajdź najmłodszą i najstarszą osobę i oblicz ich różnicę wieku


// // sampleObj.forEach(function(age) {
//   const maximum =  Math.max(sampleObj => age)
//   return maximum
//   const minimum = Math.min(sampleObj => age)
//   return minimum
// // }
// console.log(maximum-minimum)


// ## Zadanie 13 !
// Wyświetl nazwę książki która jest najtańsza i najdroższa
// books.reduce(function (price){
// return Math.max(...price)});

// books.reduce(function (price) {
//     return Math.min(...price);
//   })


// ## Zadanie 14
// Zsumuj cenę wszystkich książek
// ​
// const values = Object.values(books);

// const sum = values.reduce((accumulator, value) => {
//   return accumulator + value;
// }, 0);

// console.log(sum);





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