// const arr=[1,2,3,4,5,6];

// Node.js does not support ES6 module syntax (export and import) by default in scripts. Instead, you should use CommonJS module syntax for Node.js scripts.
// const str = "my name is rahul garg";
const str1 = "abaaaaaaaa";
// const arr=[1,2,3,4,5];




const FirstLetterUpperCase=(word)=>{
  return word.split(" ").map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(" ");
}
console.log(FirstLetterUpperCase(str1));


// const arrowfun=(a,b)=>a+b;
// console.log(arrowfun(3,5));


// const person={name:'rahul', age: 30};
// const {name, age}= person;
// console.log(name,age);


// const mergearrays=(arr1,arr2)=>[...arr1, ...arr2];
// console.log([1,2,3],[4,5,6]);


// const mypromise=()=>new Promise((resolve)=>{
//   setTimeout(()=>{
//     resolve("promise resolved");
//   },1000);
//   });
// mypromise().then((result) => console.log(result));






// class Rectangle{
//   constructor(width, height){
//     this.width=width;
//     this.height=height;
//   }
//   getArea(){
//     return this.width*this.height;
//   }
// }
// const rect=new Rectangle(5,10);
// console.log(rect.getArea());



// const myfuntion=(a, b=10)=>a+b;
// console.log(myfuntion(5));


// const name='alice';
// const age=30;
// const person={name, age};
// console.log(person);


// const fruitcolors=new Map([
//   ['apple', 'red'],
//   ['banana','yellow'],
//   ['orange', 'orange'],
// ]);
// console.log(fruitcolors.get('apple'));



// const numbers=[1,2,3,4,5,6,6,6,6];
// const uniquenumbers=new Set(numbers);
// console.log(uniquenumbers);




// const numbers=[1,2,3];
// const doublednumbers=numbers.map(num=>num*2);
// console.log(doublednumbers);


// const numbers=[1,2,3];
// const res=numbers.some(num=>num>2);
// console.log(res);







































// function findCombinationsFromText(text) {
//     if (!text) return [];

//     const cleanText = text.replace(/[^\w\s,-]/g, '').replace(/\s{2,}/g, ' ').trim();
//     const tags = cleanText.split(',');
//     const validTags = tags.filter(tag => {
//         const parts = tag.split('-');
//         return parts.every(part => part && !part.includes('_'));
//     });

//     if (validTags.length === 0) return [];

//     const combinations = [];

//     for (let i = 0; i < validTags.length; i++) {
//         const combination = [];
//         for (let j = i; j < validTags.length; j++) {
//             combination.push(validTags[j].replace(/-/g, ' '));
//             combinations.push([...combination]);
//         }
//     }

//     return combinations;
// }

// // Test cases
// console.log(findCombinationsFromText('Group_Electric-Pallet-Jack-Parts, Category_Switches, Subcategory_Ignition-Switch'));
// console.log(findCombinationsFromText('--Group_Electric-Pallet-Jack-Parts, Category_Switche@%s-!! Subcategory_Ignition-Switch))@!%'));
// console.log(findCombinationsFromText('Category_Switches-Group Electric-Pallet-Jack-Parts- Subcategory Ignition-Switch'));
// console.log(findCombinationsFromText('Group_Tools-Hardware-Category_Roll-Pin-Make_Atlas'));
// console.log(findCombinationsFromText('Group_Tools-Hardware-Category_Roll-Pin-Make_Atlas- Wrong Prefix Test'));
// console.log(findCombinationsFromText('Group_Tools-Hardware-Category Roll-Pin-Make Atlas- Group Test'));
// console.log(findCombinationsFromText('Make_Atlas-Model_Zenith-Type9-Diagram_Frame'));
// console.log(findCombinationsFromText('Group_Tools-&-Hardware'));
// console.log(findCombinationsFromText('Group_Electric-Pallet-Jack-Parts-Category Battery- Subcategory Battery-Charger-Make_Hyster-Model_B218N26949L-UP'));
// console.log(findCombinationsFromText('Group_Electric-Pallet-Jack-Parts-Category Electric- Pallet-Jack-Lift-Parts-Subcategory_Yoke'));
// console.log(findCombinationsFromText('Group_Industrial-Seal-Kits-Make_Yutani'));
// console.log(findCombinationsFromText('Make_Atlas-Model_Zenith-Type9'));
// console.log(findCombinationsFromText('Group_Wheel-Bearings-Category_Bearing-Wiper'));




// let str="rahul garg";

// const firstuppercasebnana=(word)=>{
//      return str.split(' ').map(word.charAt(0).toUpperCase()+word.slice(1)).join(" ");

// }
// console.log(firstuppercasebnana(str));