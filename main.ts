// // class Order {
// //     id:number
// //     price:number
// //     name: string

// //     constructor (id:number, name:string,price:number){
// //         this.id=id,
// //         this.price=price,
// //         this.name=name
// //     }
// // }
// // function firstnPrime(number:number){
// // 	let count=0;
// // for(let i=2;i<=number;i++){
// // 	 if(calculatePrice(i)){
// // 		 count++;
// // 	 }
// // }
// // 	return count;
// // }
// // function calculatePrice(number:number){
// //     let temp=2;
// //     while(temp<number){
// //       if(number%temp === 0){
// //           return false;
// //       }
// //       temp++;
// //     }
// //  return true;
// // }

// //console.log(firstnPrime(100));

// // const getNext=(prev:number)=>{
// // 	return prev+1;
// // }

// // const findHighestId=(allOrders:Order[])=>{
// // 	const sortedArr=allOrders.map(el=>el.id).sort((a,b)=>a-b)
// // 	return sortedArr[sortedArr.length-1];
// // }

// // const maps = new Map();
// // maps.set(maps.size+1,new Order(maps.size+1,"test",23));

// // 











// // zad 3 - dziedziczenie

// class Account {
//     balance:number;
//     number:number

// constructor(balance:number, number:number) {
//     this.balance = number;
//     this.number = number
// }
// deposit(value:number) {
// 	if( value >= 0) {
// 		this.balance+=value
// 	} else if (value < 0) {
//     console.log('blad')
// 	}
// }
// withdraw(value:number) {
// if( value > 0) {
//     this.balance-=value
// } else if(value < 0) {
//     console.log('')
// }
// }
// }

// class SavingAccount extends Account {
// 	interest:number;
// 	constructor(balance:number, number:number,interest:number){
// 		super(balance,number)
// 		this.interest=interest
// 	}

// // calculate=(interest) => {
// // const saveCalculate = interest + value
// // console.log(saveCalculate)
// // }

// }

// class CurrentAccount extends Account{

// overdraft_limit:number;

//     constructor(balance:number, number:number,overdraft_limit:number){
// super(balance, number)
// this.overdraft_limit = overdraft_limit
// 	}

// // function add () => {
// // const overdraft = overdraft_limit + value
// // console.log(overdraft)
// // }
// }

// const curAcc=new CurrentAccount(100,123465,100);

// class Bank{
// 	accounts:Account[]=[];

// 	addAccount(newAccount:Account|CurrentAccount|SavingAccount){
// 		this.accounts.push(newAccount)
// 	}
// 	update(newDeposit:number){
// 		// iterowanie po koncie
// 		this.accounts.forEach((account)=>{
//             account.deposit(newDeposit)
// 			// jesli jest CurrentAccount overdraft 10
// 			if(account instanceof CurrentAccount){
// 				account.overdraft_limit+=10
// 			}
// 			// jesli jest SavingAccount o 5
// if ( account instanceof SavingAccount) {
//     account.interest += 5
// }

            
// 		})


// 	}
// }

// // zad 5
// // class Airplane(isFlying:boolean) {
// //     name:String
// //     isFlying:false
// //     constructor(name:String, isFlying:boolean) {
// //         this.name = string;
// //         this isFlying = boolean

// //     }
// class Airplane {
// 	name:string;
// 	isFlying:boolean;
// 	constructor(isFlying:boolean,name:string){
// 		this.name = name
// 		this.isFlying = isFlying
// 	}
// 	takeOff = () => {
//     this.isFlying = true
// }
// land = () => {
//     this.isFlying= true
// }
// }

// //zad 5







// // 1 poznana metoda tworzenia class




// // interface CatType{
// //     name:string;
// //     level_hapiness:number;
// //     level_hunger:number;
// //     level_lonliness:number
// // }

// // class Cat {
// // 	  name:string;
// //     level_hapiness:number;
// //     level_hunger:number;
// //     level_lonliness:number
// //     constructor(name:string, level_hapiness:number, level_hunger:number, level_lonliness:number){
// //         this.name = name;
// //         this.level_hapiness = level_hapiness;
// //         this.level_hunger= level_hunger;
// //         this.level_lonliness =  level_lonliness
// //   }
// //  feed = (level_hunger:number) => {
// // 	this.level_hunger=this.level_hunger+level_hunger;

// // if (this.level_hunger>5) {
// //     console.log("Pusia is not hungry")
// // }
// // }

// //  status = (level_hapiness:number) => {
// //    // this.level_hunger=this.level_hunger+level_hunger;
// // if (this.level_hapiness>5) {
// //     console.log("Pusia is happy")
// // }
// // }

// //  play = (level_lonliness:number) => {

// // if (this.level_lonliness>5) {
// //     console.log("Pusia has fun")
// // }
// // }

// // info(){
// // 	console.log(`${this.name} ${this.level_hunger>5 ? "not" : "very"} hungry`)
// // }
// // };
// // const cat1 = new Cat("Zosia",2,1, 8)
// // cat1.feed(10);

// // 2 poznana metoda tworzenia class

// // let Cat2 = class{

// //     constructor(name:string, level_hapiness:number, level_hunger:number, level_lonliness:number) {
// //         this.name = name;
// //         this.level_hapiness = level_hapiness;
// //         this.level_hunger= level_hunger;
// //         this.level_lonliness = level_lonliness;
// //     }


// // }

// // const cat = new Cat(
// //     this.name = Zosia;
// //     this.level_hapiness = 2;
// //     this.level_hunger= 1;
// //     this.level_lonliness = 8;
// // )





// // class Person{
// // 	name:string;
// // 	surname:string;
// //    constructor(name:string, surname:string){
// //         this.name = name;
// //         this.surname = surname;
// //    }

// // }

// // class Teacher extends Person {
// // 	subject = "Matematyka"
// // 	constructor(name:string, surname:string,subject:string){
// // 		super(name,surname)
// // 		this.subject=subject
// // 	}

// // teach = () => {
// // 	console.log(`${this.name} and ${this.surname} is now teaching ${this.subject}`)
// // }
// //   }








// // // ## Zadanie 1
// // // Stwórz klasę Computer posiadającą pola:
// // // - moc zasilacza, - podawane w W
// // // - prędkość procesora - podawane w GHz,
// // // - ilosc rdzeni procesora,
// // // - płyta główna,
// // // - GPU karty graficznej - podawane w GHz,
// // // Dodaj konstruktor i getery oraz setery do pól.<br />
// // // Dodaj metodę info wyświetlającą informacje o komputerze.<br />
// // // Dodaj metodę calculateProcessorsPower, która zwróci sumę predkoscProcesora*iloscRdzeni+GPU.<br />
// // // ​

// // class Computer {
	
// //     #mocZasilacza: number = 0;
// //     predkosc:number = 0;
// //     iloscRdzeni:number = 0;
// //     gpuKarty:number = 0


// // 	constructor(moc:number, predkosc: number, rdzenie: number, karty: number) {
// // 		this.#mocZasilacza = moc;
// // // 		this.predkosc = predkosc;
// // // 		this.iloscRdzeni = rdzenie;
// // // 		this.gpuKarty = karty;
// // // 	}

// // // 	get mocZasilacza() {
// // // 		return (this.#mocZasilacza);
// // // 	}

// // // 	set mocZasilacza(moc:number) {
// // // 		this.#mocZasilacza = moc;
// // // 	}

// // // 	get predkosc() {
// // // 		return(this.#predkosc);
// // // 	}
// // // 	set predkosc() {
// // // 		 this.#predkosc = 5;
// // // 	}

// // // 	getIloscRdzeni() {
// // // 		return(this.iloscRdzeni);
// // // 	}
// // // 	setIloscRdzeni() {
// // // 		this.iloscRdzeni=5;
// // // 	}
// // // 	getGpuKarty() {
// // // 		return (this.gpuKarty);
// // // 	}

// // // 	setGpuKarty() {
// // // 		this.gpuKarty = 4;
// // // 	}

// // //     info() {
// // //         console.log(`this computer has ${this.#mocZasilacza} W, ${this.predkosc} GHz `)
// // //     }
// // // }


// // // ## Zadanie 2
// // // Stwórz klasę SuperComputer dziedziczącą po klasie Computer, która posiada dodatkowe pole na ilość procesorów.
// // // Nadpisz metodę info o wyświetlanie dodatkowej informacji o ilości procesorów.
// // // Nadpisz metodę z klasy bazowej calculateProcessorsPower według wzoru:
// // // ``` iloscProcesorow*(predkoscProcesora*iloscRdzeni)```
                                                                                                                  
// // // ​
// // class Computer{
// // 	iloscProcesorow:number
// // 	iloscRdzeni:number

// // 	constructor(mocProcesorow:number,iloscRdzeni:number){
// // this.iloscProcesorow=mocProcesorow;
// // this.iloscRdzeni=iloscRdzeni;
// // 	}
	
// // calculateProcessorsPower()  {
// // let result = this.iloscProcesorow*this.iloscRdzeni;
// // return(result)
// // }
// // }

// //  class SuperComputer extends Computer {
// // 	dodatkowaMoc:number

// // 	constructor(dodatkowePole:number, iloscProcesorow: number, iloscRdzeni: number){
// // 	super(iloscProcesorow, iloscRdzeni)
// // 	this.dodatkowaMoc=dodatkowePole;
// // 	}
// // 	get takeInfo() {
// // 		return(this.dodatkowaMoc)
// // 	}
// //  }



// // Napisz klasę ComputerGarage przechowującą komputery w tablicach. Pola klasy:
// // - Computers = [],
// // - SuperComputers=[],
// // - CryptoMinerStations=[]
// // Stwórz metody tworzące pola powyższych klas i dodające je do odpowiednich tablic.
// // Stwórz metodę info, która dla podanej nazwy tablicy wyświetli informaje o wszystkich klasach z danej tablicy.
// // Stwórz metodę garageInfo, która wyświetli informacje o wszystkich komputerach w garażu
// // // ​
// // class ComputerGarage {
// // 	Computers=[]
// // 	SuperComputers = []
// // 	CryptoMinerStations=[]
// // constructor(Computers:Computers[], SuperComputers:SuperComputers[], CryptoMinerStations: CryptoMinerStations[]){
// // 	this.Computers=Computers;
// // 	this.SuperComputers=SuperComputers
// // }
// // }


// // ## Zadanie 1
// // Do wbudowanej w język JS klasy String dodaj do prototypu metodę upperFirst(), która kapitalizuje pierwszą literę podanego stringa.<br />
// // Podpowiedź:<br />
// // [Dodawanie swoich metod do klas wbudowanych](https://stackoverflow.com/questions/8392035/add-method-to-string-class) sprawdz podejście w ES6 wspomniane w wątku

// // String.prototype.upperFirst =  upperFirst () {
// // 	let text = "hello"
// // 	let letter = text.charAt(1)
// // }
// // class toArray {
// // 	arrays=[]
// // 	constructor(arrays:[]) {
// // 	this.arrays = []
// // 	}
// // 	const newLetter =letter.push(arrays:[])
// // 	console.log(arrays:[])
// // }





// // // ## Zadnie 2
// // // Do wbudowanej w język JS klasy number dodaj metodę isOdd() sprawdzającą czy liczba jest parzysta i isEven() sprawdzającą czy podana liczba jest nieparzysta.
// // // ​
// // class evenOrOdd {
// // 	evenOrOdd:number;
// // 	constructor(evenOrOdd:number) {
// // 		this.evenOrOdd=number;
// // 	}
// // }
// // String.prototype.number = isOdd (number:number) {
// // 	if (number%2===0) {
// // 		console.log("parzysta")
// // 	}
// // 	 else {
// // 		console.log("nieparzysta")
// // 	}
// // }
// // String.prototype.number = isEven(number:number) {
// // 	if (number%2===0) {
// // 		console.log("parzysta")
// // 	}
// // 	 else {
// // 		console.log("nieparzysta")
// // 	}
// // }

// // ## Zadanie 3
// // Stwórz klasę Akwarium która posiada pola fishes=[], fillLevel.
// // - [ ] w konstruktorze zainicjalizuj pola.
// // - [ ] dodaj metodę nakarm, która iteruje po obiektach tablicy fishes i karmi rybki
// // - [ ] dodaj metodę isSomeHungry, która iteruje po obiektach tablicy fishes i sprawdza czy poziom glodu jakiejs rybki jest <50 
// // - [ ] dodaj metodę isSomeIll, ktora iteruje po obiektach tablicy fishes i sprawdza czy ktoras rybka jest chora,
// // - [ ] dodaj metodę fill przyjmującą procent napełnienia i zmieniającą pole fillLevel.
// // - [ ] addFish która przyjmuje pola i typ ryby (gupik lub krewetka) i dodaje je do tablicy ryb w akwarium,
// // - [ ] dodaj metode action, która iteruje po tablicy rybek i oblicza prawdopodobienstwo zdarzenia (Math.random>0.5) jeśli rybka jest Gupikiem to zmienia jego flage isSleep, a jesli to krewetka to zmienia jego flage isFitering,
// // - [ ] dodaj metode info, ktora iteruje po tablicy rybek i wyswietla informacje o jej polach
// // - [ ] dodaj metode wyslij na kwarantanne, ktora wykorzystuje metode addFish z klasy z zadania 7
// // ​


// class Akwarium {
// 	fishes:[5]
// 	fillLevel:number
// 	poziomGłodu:number
// 	choroba:boolean
// 	flage:string
// 	typRyby:string 
// 	constructor(fishes:[5], fill:number,poziomGłodu:number,choroba:boolean,flage:'isSleep'|'isFitering',typRyby:'gupik'|'krewetka'){
// 		this.fishes=fishes
// 		this.fillLevel=fill
// 		this.poziomGłodu=poziomGłodu
// 		this.choroba = choroba
// 		this.flage=flage
// 		this.typRyby=typRyby
// 	} 
// 	nakarm () {
// for(let i = 1; i>0;i++){
// console.log("rybka nakarmiona")
// }
// 	}
// 	fishes.forEach(el => el.nakarm){
// 		console.log("Każda rybka nakarmiona")
// 	}

// 	isSomeHungry() {
// 		if(this.poziomGłodu<50){
// 			console.log("rybka jest ponizej 50")
// 		}
// 	}
// 	fishes.forEach(el =>el.isSomeHungry){
// 	}
// isSomeIll() {
// if(this.choroba=="yes") {
// 	console.log("Rybka jest chora")
// }
// }


// fill(){
// let addWater = console.log("ile dolać wody?")
// newLevelOffWater= fillLevel+addWater
// }

// action() {
// 	Math.random>0.5
// 	if(this.typRyby=='Gupik') {
// 		this.flage==='isSleep'
// 	}
// }
// info() {
// 	this.fishes.forEach(el=>el); {
// 		console.log(this.typRyby)
// 	}
// }
// }
// class addFish {
// 	typRyby:string 
// 	constructor(typRyby:"gupik"|"krewetka"){
// this.typRyby=typRyby
// 	}
// typRyby.push(fishes: string)
// }
	












// ## Zadanie 4
// Klasa Fish posiadająca pole wiek, poziom glodu i flagę isIll.
// - [ ] zainicjalizuj pole w konstruktorze,
// - [ ] dodaj metody manipulujace polami klasy,
// ​
// class Fish {
// 	wiek:number
// 	poziomGłodu:number
// 	flaga:string
// 	constructor(wiek:1, poziomGłodu:3, flaga:"isIll") {
// 		this.wiek=wiek
// 		this.poziomGłodu=poziomGłodu
// 		this.flaga=flaga
// 	}


// }









// ## Zadanie 5
// Klasa Gupik dziedziczaca po polu Fish i posiadająca flagę isSleep
// - [ ] zainicjalizuj pole w konstruktorze,
// - [ ] dodaj metode zmieniajaca flage isSleep,
// ​
// ## Zadanie 6
// Klasa krewetka dziedziczaca po klasie Fish. Dodaj pole isFiltering informujace po tym czy krewetka filtruje teraz wode czy nie.
// - [ ] dodaj metode ktora zmienia pole informujace o tym czy krewetka filtruje wode czy nie
// ​
// ## Zadanie 7
// Stwórz klase AkwariumKwarantanna, która dziedziczy po Akwarium.
// - [ ] dodaj metode zwroc z kwarantanny ktora wykorzystuje metode addFish z klasy Akwarium