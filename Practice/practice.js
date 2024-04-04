// const nums1= [1, 2, 3];
// const nums2= nums1;

// console.log(nums1);
// console.log(nums2);

// nums2[2]= 4;
// console.log(nums1);
// console.log(nums2);

// nums1[1]= 23;
// console.log(nums1);
// console.log(nums2);


// let s1= "abc";
// let s2= "def";
// s1= s1.concat(' ').concat(s2);
// s1= s1 + ' ' + s2;
// // s1= s1.concat(s2);
// console.log(s1);


// const paragraph = `My name is Asabeneh Yetayeh.\nI live in Finland, Helsinki.\n\tI am a teacher and I love teaching`;
// console.log(paragraph);

// let string = '09/03/2000'
// string= string.split('/');

// console.log(string.split())   
// console.log(string.split(' '))
// console.log(string);   

// let num= 12.23723456;
// console.log(num.toFixed(2));
// console.log(num.toPrecision(2));

// let string= "avvcds";
// string+= 'z';
// string[0]= 'A';
// console.log(string);


// const string= "I love people of great mindset";
// if(string.indexOf("love") == -1) console.log("Not Present");
// else console.log();


// const string= 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
// const newArr= string.split(' ');
// let count= 0;

// for(word of newArr){
//     count += (word.match(/love/gi) || []).length;
//     // console.log(word + " " + count);
// }

// console.log(count);

// const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
// const newSentence= 

// const str= 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
// const newStr= str.split(' ');
// console.log(newStr);
// let total= 0;

// for(word of newStr){
//     if(!isNaN(parseInt(word))){
//         total+= parseInt(word);
//     }
// }

// console.log(total);


// console.log('python'.length == 'jargon'.length);


// console.log(4 > 3 && 10 < 12); //1
// console.log(4 > 3 && 10 > 12); //0
// console.log(4 > 3 || 10 < 12); //1
// 4 > 3 || 10 > 12
// console.log(!(4 > 3));
// !(4 < 3) = 0 => 1
// !(false)
// !(4 > 3 && 10 < 12)
// !(4 > 3 && 10 > 12)
// !(4 === '4')



// let ans;
// for(let i=-10; i<100000; i++){
//     const result= (i*i) + 6*i + 9;
//     // console.log(result);
//     if(result== 0){
//         ans= i;
//         break;
//     } 
// }
// console.log(ans);


// Create a human readable time format using the Date time object
// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm
// const newDate= new Date();
// const ans1= newDate.getFullYear()+  '-'; //newDate.getMonth() +  '-' + newDate.getDate() + ' ' + newDate.getHours() + ':' + newDate.getMinutes();
// let month= newDate.getMonth()+1;



// const string= (month < 10 ? `0${month}` : `${month}`);
// console.log(string);



// const date = new Date();
// const day = date.getDate().toString().padStart(2, '0');
// const month = (date.getMonth() + 1).toString().padStart(2, '0');
// const year = date.getFullYear();
// const hours = date.getHours().toString().padStart(2, '0');
// const minutes = date.getMinutes().toString().padStart(2, '0');
// const formattedDate = `${day}-${month}-${year} ${hours}:${minutes}`;
// console.log(formattedDate);



// 1. Write a program which tells the number of days in a month, now consider leap year.
// const year= 2000;
// const month= "February";
// let daysInMonth= 0;
// if(month=='January' || month=='March' || month=='May' || month=='July' || month=='August' || month=='October' || month=='December'){
//     daysInMonth= 31;
// }
// else if(month== 'February'){
//     if(year%4== 0) daysInMonth= 29;
//     else daysInMonth= 28;

// } 
// else daysInMonth= 30;

// console.log(daysInMonth);



// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers.slice(-1, -3))


// const numbers = [1, 2, 3, 4, 5]
// const temArray= [11, 22, 33, 44, 55, 66];
// numbers.splice(0, 2, temArray.join())
// console.log(numbers)


// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node','Express', 'MongoDB']
// for(word of backEnd){
//     frontEnd.push(word);
// }
// console.log(frontEnd);

// let string= "Ritesh" ;
// string = string.substring(0, string.length-1);
// console.log(string);

// const numbers= [1, 2, 3, 4, 5, 6];
// console.log(Math.min(...numbers));

// const arr= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// for(let i=0; i<10; i++){
//     let randomScript= "";
//     const randNum= Math.floor(Math.random()*26);
//     for(let j=0; j<randNum; j++){
//         randomScript+= arr[Math.floor(Math.random()*arr.length+1)];
//     }
//     console.log(randomScript);
// }


// RGB Generator
// for(let i=0; i<10; i++){
//     const R= Math.floor(Math.random()*256);
//     const G= Math.floor(Math.random()*256);
//     const B= Math.floor(Math.random()*256);
//     const rgb= `rgb(${R}, ${G}, ${B})`
//     console.log(rgb);
// }

// const countries= ['India', 'Pakistan', 'Afghanistan'];
// const lenArr= Array(countries.length);
// for(let i=0; i<countries.length; i++) lenArr[i]= countries[i].length;
// console.log(lenArr);

// const arr= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// for(let i=0; i<10; i++){
//     let randomScript= "";
//     const randNum= Math.floor(Math.random()*26);
//     for(let j=0; j<randNum; j++){
//         randomScript+= arr[Math.floor(Math.random()*arr.length+1)];
//     }
//     console.log(randomScript);
// }

// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya'
// ]

// const arr= [];
// for(let country of countries){
//     const tempArr= [];zz
//     const first= country;
//     const second= country.substring(0, 3).toUpperCase();
//     const third= country.length;
//     tempArr.push(first);
//     tempArr.push(second);
//     tempArr.push(third);
//     arr.push(tempArr);
// }
// console.log(arr);

// const hexaString= '0123456789abcdef';
// const hexColor= () => {
//   const randNum= Math.floor(Math.random()*7);
//   let color= '#';
//   for(let i=0; i<6; i++){
//     const temp= Math.floor(Math.random()*16);
//     color+= hexaString[temp];
//   }
//   return color;
// }
// console.log(hexColor());



// hex to rgb
// const rgb= (string) => {
//   string.shift();
//   const r= string.substring(0, 2)
// }

// console.log(rgb('#234hhj'));


// Scope
// function abc() {
//   var num= 12;
//   {
//     var num= 25;
//   }
//   console.log(num);
// }

// abc();

// const obj= {
//   name: undefined,
//   age: undefined,
// }
// console.log(obj);




// Imagine you are getting the above users collection from a MongoDB database. a. 
// Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.



// const users = [
//   {
//       _id: 'ab12ex',
//       username: 'Alex',
//       email: 'alex@alex.com',
//       password: '123123',
//       createdAt:'08/01/2020 9:00 AM',
//       isLoggedIn: false
//   },
//   {
//       _id: 'fg12cy',
//       username: 'Asab',
//       email: 'asab@asab.com',
//       password: '123456',
//       createdAt:'08/01/2020 9:30 AM',
//       isLoggedIn: true
//   },
//   {
//       _id: 'zwf8md',
//       username: 'Brook',
//       email: 'brook@brook.com',
//       password: '123111',
//       createdAt:'08/01/2020 9:45 AM',
//       isLoggedIn: true
//   },
//   {
//       _id: 'eefamr',
//       username: 'Martha',
//       email: 'martha@martha.com',
//       password: '123222',
//       createdAt:'08/01/2020 9:50 AM',
//       isLoggedIn: false
//   },
//   {
//       _id: 'ghderc',
//       username: 'Thomas',
//       email: 'thomas@thomas.com',
//       password: '123333',
//       createdAt:'08/01/2020 10:00 AM',
//       isLoggedIn: false
//   }
//   ];

// console.log(users);

// function signUp(){
//   const newObj= {
//     _id: 'ab12ex',
//     username: 'Alex',
//     email: 'alex@alex.com',
//     password: '123123',
//     createdAt:'08/01/2020 9:00 AM',
//     isLoggedIn: false
//   }
//   let ok= 1;

//   for(let user of users){
//     // console.log(user);
//     if(user._id === newObj._id){
//       ok= 0;
//       break;
//     }
//   }

//   if(ok){
//      users.push(newObj);
//      console.log("User Detail Pushed");
//   }
//   else 
//     console.log("User already exists");

// }

// // console.log('Hello');
// signUp();



// The products array has three elements and each of them has six properties. a.
//  Create a function called rateProduct which rates the product b. Create a function
//   called averageRating which calculate the average rating of a product

// const products = [
//   {
//     _id: 'eedfcf',
//     name: 'mobile phone',
//     description: 'Huawei Honor',
//     price: 200,
//     ratings: [
//       { userId: 'fg12cy', rate: 5 },
//       { userId: 'zwf8md', rate: 4.5 }
//     ],
//     likes: []
//   },
//   {
//     _id: 'aegfal',
//     name: 'Laptop',
//     description: 'MacPro: System Darwin',
//     price: 2500,
//     ratings: [],
//     likes: ['fg12cy']
//   },
//   {
//     _id: 'hedfcg',
//     name: 'TV',
//     description: 'Smart TV:Procaster',
//     price: 400,
//     ratings: [{ userId: 'fg12cy', rate: 5 }],
//     likes: ['fg12cy']
//   }
// ]

// const callback= (n) => n**2;

// function cube(callback, n){
//   return callback(n)*n;
// }

// console.log(cube(callback, 3));


// const cube= (n) =>{
//   const square= (n) => {
//     const number= (n) => {
//       return n;
//     }
//     return number(n)*n;
//   }
//   return square(n)*n;
// }
// console.log(cube(4));


// const numbers= [1,2,3,4,5,6];
// const sum= (numbers) => {
//   let add= 0;
//   numbers.forEach(element => {
//     add+= element;
//   });
//   return add;
// }
// console.log(sum(numbers));


// function sayHello(){
//   console.log("Hello");
// }

// setTimeout(sayHello, 2000);



// const nums= [1, 2, 3, 4, 5, 6, 7, 8];
// nums.forEach(function(ele, i){
//   console.log(i);
//   console.log(ele);
// })

// const square= nums.map(function(num){
//   return num*num;
// })
// console.log(square);

// const cube= nums.map((n)=> n**3);
// console.log(cube);

// const even= nums.filter((n) => n%2==0);
// console.log(even);

// const sum= nums.reduce((curr, acc) => curr+acc, 0);
// console.log(sum);


// function square(n){
//     return n*n;
// }

// function cube(square, n){
//     return 
// }

// const numbers= [1,2,3,4,5,6,7,8];
// let sum= numbers.map((num) => {
//     return num
// })

// console.log(isNaN);

// const nums= [1, 3, 4, 5, 6, 7, 7];
// function findMax(acc, curr){
//     return (acc > curr ? acc : curr);
// }
// const result= nums.reduce(findMax);

// const evenSum= nums.filter(num => num%2).reduce((acc, curr) => acc+curr);
// console.log(evenSum);
// // console.log(result);



    // const list= [
    //     {fName: "Ritesh", lName: "Gadre", age: 25},
    //     {fName: "Swapnil", lName: "Shelake", age: 25},
    //     {fName: "Akash", lName: "Bharati", age: 25}
    // ]

    // const result= list.map((obj)=>{
    //     return obj.fName+ " " + obj.lName;
    // });

    // console.log()
    // console.log(result);

    // const s= new Set([1, 2, 3, 4, 5, 6, 6]);
    // s.add(7);
    // console.log(s.has(9));

    // const s= new Set();
    // for(let i=0; i<10; i++) s.add(i);
    // console.log(s);

    // const set1= new Set([1, 2, 3, 4, 5]);
    // const set2= new Set([2, 3, 4, 5, 6]);
    // const set3= new Set([...set1, ...set2]);
    // const set4= new Set([...set1].filter(ele => set2.has(ele)));

    
    // for(const ele of set1){
    //     if(set2.has(ele)){
    //         set4.add(ele);
    //     }
    // }

    // console.log(set3);
    // console.log(set4);


    // const obj= {
    //     name: "aksh",
    //     age: 34
    // }

    // const [name, age]= Object.keys(obj);
    // console.log(age);


    // const person= [
    //     {name: "Ritesh", age: 25, isMArried: false},
    //     {name: "Akash", age: 25, isMArried: false},
    //     {name: "Yogesh", age: 25, isMArried: false},
    //     {name: "Sharad", age: 25, isMArried: false}
    // ]

    // for(const {name, age, isMArried} of person){
    //     console.log(name, age, isMArried);
    // }

    // person.forEach(({name, age, isMArried}) => {
    //     console.log(name, age, isMArried);
    // })

    // const 

    // try {
    //     let lastName = 'Yetayeh'
    //     // let fistName = 'fglm'
    //     let fullName = fistName + ' ' + lastName
    //     console.log(fullName);
    //   } catch (err) {
    //     console.log(err)
    //   }


    // class Person {

    //     constructor(fname, lname, age, country, city) {
      
    //       this.fname = fname
    //       this.lastname = lname
    //       this.age = age
    //       this.country = country
    //       this.city = city
    //       this.score = 10
    //     }
      
    //     get getScore(){
    //       return this.score
    //     }

    //     get getName(){
    //         return this.fname;
    //     }

    //     set setName (name){
    //       this.fname= name;
    //     }
    //   };
      
    //   const person1 = new Person("Ritesh", "Shelke", 22, "elkgm", "alfkg");
    //   console.log(person1);
    //   person1.setName= "Akash";
    //   console.log(person1.getName);
      
    //   person1.setName("sachin")
    //   console.log(person1.getName());


    // class Animal{
    //     constructor(canEat, canDrink, canFuck){
    //         this.canEat= canEat;
    //         this.canDrink= canDrink;
    //         this.canFuck= canFuck;
    //     }

    //     set setDrink(drink){
    //         this.canDrink= drink;
    //     }
    // }

    // class Cat extends Animal{
    //     constructor(canEat, canDrink, canFuck, name){
    //         super(canEat, canDrink, canFuck)
    //         this.name= name;
    //     }

    //     set setDrink(drink){
    //         this.canDrink= drink;
    //     }
    // }

    // const c1= new Cat(true, true, true, "Cat");
    // c1.name= "Ali";
    // c1.name= "Madarchod"
    // c1.setDrink= 0;
    // console.log(c1);


    // class Statistics{
    //     constructor(numbers){

    //         for(let i=0; i<numbers.length; i++){
    //             this.numbers[i]= numbers[i];
    //         }
    //     }

    //     sum(){
    //         const result= numbers.reduce((acc, curr){
    //             return acc+curr;
    //         }, 0)
    //         return result;
    //     }
    // }

    // const numbers= [1,2,3,4,5,6,7,8,9];
    // const stat= new Statistics
    // console.log(Statistics.sum());



    // const skills= ['HTML', 'CSS', 'JS   ']


// const url = '://restcountries.com/v2/all'
// fetch(url)
// .then(response => response.json())
// .then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log("error:" + err);
// })


const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// fetch(countriesAPI)
// .then(response => response.json())
// .then(data => {
//     console.log(data);
// })
// .then(err => {
//     console.log('Error: ' + err);
// })


// const fetchData= async () => {
//     try{
//         const response= await fetch(countriesAPI);
//         const countries= await response.json();
//         console.log(countries);
//     }
//     catch(err){
//         console.log('error:' + err);
//     }
// } 

// setTimeout(fetchData, 2000);