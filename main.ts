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
// // // Stw??rz klas?? Computer posiadaj??c?? pola:
// // // - moc zasilacza, - podawane w W
// // // - pr??dko???? procesora - podawane w GHz,
// // // - ilosc rdzeni procesora,
// // // - p??yta g????wna,
// // // - GPU karty graficznej - podawane w GHz,
// // // Dodaj konstruktor i getery oraz setery do p??l.<br />
// // // Dodaj metod?? info wy??wietlaj??c?? informacje o komputerze.<br />
// // // Dodaj metod?? calculateProcessorsPower, kt??ra zwr??ci sum?? predkoscProcesora*iloscRdzeni+GPU.<br />
// // // ???

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
// // // Stw??rz klas?? SuperComputer dziedzicz??c?? po klasie Computer, kt??ra posiada dodatkowe pole na ilo???? procesor??w.
// // // Nadpisz metod?? info o wy??wietlanie dodatkowej informacji o ilo??ci procesor??w.
// // // Nadpisz metod?? z klasy bazowej calculateProcessorsPower wed??ug wzoru:
// // // ``` iloscProcesorow*(predkoscProcesora*iloscRdzeni)```
                                                                                                                  
// // // ???
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



// // Napisz klas?? ComputerGarage przechowuj??c?? komputery w tablicach. Pola klasy:
// // - Computers = [],
// // - SuperComputers=[],
// // - CryptoMinerStations=[]
// // Stw??rz metody tworz??ce pola powy??szych klas i dodaj??ce je do odpowiednich tablic.
// // Stw??rz metod?? info, kt??ra dla podanej nazwy tablicy wy??wietli informaje o wszystkich klasach z danej tablicy.
// // Stw??rz metod?? garageInfo, kt??ra wy??wietli informacje o wszystkich komputerach w gara??u
// // // ???
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
// // Do wbudowanej w j??zyk JS klasy String dodaj do prototypu metod?? upperFirst(), kt??ra kapitalizuje pierwsz?? liter?? podanego stringa.<br />
// // Podpowied??:<br />
// // [Dodawanie swoich metod do klas wbudowanych](https://stackoverflow.com/questions/8392035/add-method-to-string-class) sprawdz podej??cie w ES6 wspomniane w w??tku

// String.prototype.upperFirst =  function upperFirst () {
// 	let text = "hello"
// 	let letter = text.charAt(1)
// }
// class toArray {
// 	arrays=[]
// 	constructor(arrays:[]) {
// 	this.arrays = []
// 	}
// 	const newLetter =letter.push(arrays:[])
// 	console.log(arrays:[])
// }





// // // ## Zadnie 2
// // // Do wbudowanej w j??zyk JS klasy number dodaj metod?? isOdd() sprawdzaj??c?? czy liczba jest parzysta i isEven() sprawdzaj??c?? czy podana liczba jest nieparzysta.
// // // ???
// class evenOrOdd {
// 	evenOrOdd:number;
// 	constructor(evenOrOdd:number) {
// 		this.evenOrOdd=number;
// 	}
// }
// Number.prototype = isOdd (number:number) {
// 	if (number%2===0) {
// 		console.log("parzysta")
// 	}
// 	 else {
// 		console.log("nieparzysta")
// 	}
// }
// Number.prototype = isEven(number:number) {
// 	if (number%2===0) {
// 		console.log("parzysta")
// 	}
// 	 else {
// 		console.log("nieparzysta")
// 	}
// }

// // ## Zadanie 3
// // Stw??rz klas?? Akwarium kt??ra posiada pola fishes=[], fillLevel.
// // - [ ] w konstruktorze zainicjalizuj pola.
// // - [ ] dodaj metod?? nakarm, kt??ra iteruje po obiektach tablicy fishes i karmi rybki
// // - [ ] dodaj metod?? isSomeHungry, kt??ra iteruje po obiektach tablicy fishes i sprawdza czy poziom glodu jakiejs rybki jest <50 
// // - [ ] dodaj metod?? isSomeIll, ktora iteruje po obiektach tablicy fishes i sprawdza czy ktoras rybka jest chora,
// // - [ ] dodaj metod?? fill przyjmuj??c?? procent nape??nienia i zmieniaj??c?? pole fillLevel.
// // - [ ] addFish kt??ra przyjmuje pola i typ ryby (gupik lub krewetka) i dodaje je do tablicy ryb w akwarium,
// // - [ ] dodaj metode action, kt??ra iteruje po tablicy rybek i oblicza prawdopodobienstwo zdarzenia (Math.random>0.5) je??li rybka jest Gupikiem to zmienia jego flage isSleep, a jesli to krewetka to zmienia jego flage isFitering,
// // - [ ] dodaj metode info, ktora iteruje po tablicy rybek i wyswietla informacje o jej polach
// // - [ ] dodaj metode wyslij na kwarantanne, ktora wykorzystuje metode addFish z klasy z zadania 7
// // ???


// class Akwarium {
// 	fishes:[5]
// 	fillLevel:number
// 	poziomG??odu:number
// 	choroba:boolean
// 	flage:string
// 	typRyby:string 
// 	constructor(fishes:[5], fill:number,poziomG??odu:number,choroba:boolean,flage:'isSleep'|'isFitering',typRyby:'gupik'|'krewetka'){
// 		this.fishes=fishes
// 		this.fillLevel=fill
// 		this.poziomG??odu=poziomG??odu
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
// 		console.log("Ka??da rybka nakarmiona")
// 	}

// 	isSomeHungry() {
// 		if(this.poziomG??odu<50){
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
// let addWater = console.log("ile dola?? wody?")
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
// Klasa Fish posiadaj??ca pole wiek, poziom glodu i flag?? isIll.
// - [ ] zainicjalizuj pole w konstruktorze,
// - [ ] dodaj metody manipulujace polami klasy,
// ???
// class Fish {
// 	wiek:number
// 	poziomG??odu:number
// 	flaga:string
// 	constructor(wiek:1, poziomG??odu:3, flaga:"isIll") {
// 		this.wiek=wiek
// 		this.poziomG??odu=poziomG??odu
// 		this.flaga=flaga
// 	}

//  get wiek(wiek:number){
// return this.wiek;
//  }
//  set wiek(wiek:number) {
//     this.wiek = wiek++;
   
//  }
//   return("Rybka jest teraz starsza")



// get poziomG??odu(poziomG??odu:number){
//     return this.poziomG??odu
// }
// set poziomG??odu(poziomG??odu:number){
//     this.poziomG??odu=poziomG??odu--;

// }
// return("Rybka staje sie coraz bardziej g??odna")

// get flaga(flaga:string) {
//     return this.flaga
// }
// set Flaga(flaga:string) {
//     this.flaga="isHealthy"
// }
// return("Rybka jest zdrowa")


// }











// ## Zadanie 5
// Klasa Gupik dziedziczaca po polu Fish i posiadaj??ca flag?? isSleep
// - [ ] zainicjalizuj pole w konstruktorze,
// - [ ] dodaj metode zmieniajaca flage isSleep,
// ???

// class Gupik extends Fish {
//     isSleep:boolean;
//     constructor(checkIfSleep:true){
//         super(wiek:number, poziomG??odu:number,flaga:string)
//         this.isSleep=checkIfSleep
//     }
// changeFlage() {
//     if(poziomG??odu<10&checkIfSleep=true){
//         console.log(checkIfSleep=false&nakarm())
//     }
     
// }
// }



// ## Zadanie 6
// Klasa krewetka dziedziczaca po klasie Fish. Dodaj pole isFiltering informujace po tym czy krewetka filtruje teraz wode czy nie.
// - [ ] dodaj metode ktora zmienia pole informujace o tym czy krewetka filtruje wode czy nie
// ???

// class Krewetka extends Fish{
//     czyFiltruje:boolean
//     constructor(czyFiltruje:false){
// super(wiek:number, poziomG??odu:number, flaga:string)
// this.czyFiltruje=czyFiltruje
//     }
//     changeFiltrowanie(czyFiltruje:boolean) {
// do {
//     czyFiltruje=true}

// while(czyFiltruje=false)
// console.log("Teraz krewetka filtruje")
//     }
// }




// ## Zadanie 7
// Stw??rz klase AkwariumKwarantanna, kt??ra dziedziczy po Akwarium.
// - [ ] dodaj metode zwroc z kwarantanny ktora wykorzystuje metode addFish z klasy Akwarium

// class AkwariumKwarantanna extends Akwarium {
//     Kwarantanna:boolean
//     constructor(Kwarantanna:boolean) {
//         super(fishes:[5],
//             fillLevel:number,
//             poziomG??odu:number,
//             choroba:boolean,
//             flage:string,
//             typRyby:string )
//             this.Kwarantanna=Kwarantanna
//     }
//     zwrocKwarantanna(kwarantanna:boolean){
//         do{
//             addFish()
//         }
//         while(this.Kwarantanna:yes)
//       return("Rybka zwr??cona z Kwarantanny")
//     }
// }