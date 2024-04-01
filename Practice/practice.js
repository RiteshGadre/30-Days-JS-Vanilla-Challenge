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
const rgb= (string) => {
  string.shift();
  const r= string.substring(0, 2)
}

console.log(rgb('#234hhj'));

