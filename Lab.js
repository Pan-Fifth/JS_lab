/////////////////////////////////////////////// Class

//lab-01
// class Calculator{
//   constructor(v){
//     return this.value = v||0;
//   }
//   add(no){
//     return this.value+=no;
//   }
//   subtract(no){
//     return this.value-=no;
//   }
//   multiply(no){
//     return this.value*=no;
//   }
//   divide(no){
//     return this.value/=no;
//   }
//   show(){
//     console.log(this.value)
//   }
// }
// let c1 = new Calculator(10);
// // c1.add(5)
// // c1.subtract(3)
// // c1.multiply(5)
// // c1.divide(2)

// c1.show()


//lab-02
// class Sale{
//   constructor(_name,_amout,_price){
//     this.name = _name
//     this.amout = _amout
//     this.price = _price
//   }
//   calcPrice(){
//     return this.amout*this.price
//   }
// }

// class Beverage extends Sale{
//     constructor(A,B,C){
//       super(A, B, C);
//       }
// }

// let beverage1 = new Beverage ('Pepsi',5,20)
// console.log(beverage1)
// console.log("total price is" ,beverage1.calcPrice())


//////////////////////////////Is ARRay
//Lab-01
// let arr = [1,2,3,4,5,6];

// let is_arr = arr => Array.isArray(arr);

// console.log(is_arr(arr));




////////////////////////Object key value entries
//lab-01
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };

// let sum = Object.values(salaries).reduce((acc,cur)=>{acc = acc+cur; return acc},0)
// console.log('total salaries =', sum)

//lab-02
// let checkEmptyObj=obj=>Object.keys(obj) == 0
// let empty1 = {};
// console.log(checkEmptyObj(empty1))



//////////////////////////Rest and Spread
//Lab-01
// function series(...arg){
//   let sum = 0;
//   for (let i of arg){
//     sum += i ;
//   }
//   return sum;
// }
// console.log(series(1,2,3,4,5,6,7,8,9,10,11))

//lab-02
// function filterOutOdds(...arg){
//   let result = [];
//   for(let i of arg){
//     i%2 == 0 ?result.push(i) :'';
//   }
//   return result;
// }
// console.log("Even = ",filterOutOdds(1,2,3,4,5,6,7,8,9,10,11,12))

//lab-03
// let a= {name: 'John Doe'}
// let b= {age: 30,street: '123 Main St',}
// let c= {city: 'Anytown'}
// let d= {state: 'CA',zip: '12345'}

// function mergeObjects(...arg){
//   let result = {};
//     for(let item of arg){
//       Object.assign(result,item)
//       // console.log(item)
//     }

//   return result;
// }  
// console.log(mergeObjects(a,b,c,d))


//Lab04
// const nums1 = [1, -2, 3, 4];
// const nums2 = [8, 3, -8, 1];
// let result = [5,...nums1,-6,-1,...nums2]
// console.log(result)
// let total = result.reduce((acc,cur)=>{acc += cur; return acc},0)
// console.log(total)


//lab05
// let arr1 = [1,5,3,5,4,7,8];
// let newArr = [...arr1];
// function powerOn3 (arr){
//     arr[3] = arr[3]**2
//     return arr
// }
// console.log(arr1)
// console.log(powerOn3(newArr))


//lab06
// let info = (name,surname,...hobbies)=>{
//   return [name,surname,...hobbies,hobbies.length]
// }
// console.log(info('John','Doe','swim','golf','badminton','soccor'))


//lab07
// doubleAndReturnArgs([1, 2, 3], 4, 4);
// // expexted result: [1, 2, 3, 8, 8]
// doubleAndReturnArgs([2], 10, 4);
// // expexted result: [2, 20, 8]

// let doubleAndReturnArgs = ((...arg)=>{
//   let result = [];
//  for (let item of arg){
//    if(Array.isArray(item)==true){
//       result.push(item);
//       // console.log(item)
//    } else{
//      result.push(item*2);
//     //  console.log(item*2)
//    }
//  }
//  return result;
// })

// console.log(doubleAndReturnArgs([2], 10, 4));


//lab 09
// function cloneArray (arr){
//   let result = [...arr]
//   return result
// }


// let arr1 = [8,7,5,55,2,33,6,4,5,22,1]
// let arr2 = cloneArray(arr1)
// console.log(arr1)
// console.log(arr2)


//lab10
// function cloneObject (obj){
//   let result = {...obj}
//   return result;
// }

// let obj1 = {
//   name: 'john',
//   surname: 'Doe',
//   age: 8
// }

// console.log(cloneObject(obj1))
// console.log(obj1)



///////////////////////Destructuring
//lab11
// let [first, second, third] = ['Maya', 'Marisa', 'Chi'];
// console.log(first); // * Maya
// console.log(second); // ** Marisa
// console.log(third); // *** Chi

//lab12
// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//   'Raindrops on roses',
//   'whiskers on kittens',
//   'Bright copper kettles',
//   'warm woolen mittens',
// ];
// console.log(raindrops); // * Raindrops on roses  //refer to raindrops
// console.log(whiskers); // ** whiskers on kittens //refer to whiskers
// console.log(aFewOfMyFavoriteThings); // *** [Bright copper kettles,warm woolen mittens] // arry of the rest 

//lab13
// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]];
// console.log(numbers); // * [10,20,30] ///number[1] change to [2] and [2] chang to [4]


//lab14
// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// let { numPlanets, yearNeptuneDiscovered } = facts;
// console.log(numPlanets); // * 8  cause numPlanets, yearNeptuneDiscovered  = facts
// console.log(yearNeptuneDiscovered); // ** 1846 


//lab15
// let planetFacts = {
//   numPlanets: 8,
//   yearNeptuneDiscovered: 1846,
//   yearMarsDiscovered: 1659
// };
// let { numPlanets, ...discoveryYears } = planetFacts;
// console.log(discoveryYears); // * {yearNeptuneDiscovered: 1846,yearMarsDiscovered: 1659} cause  "...discoveryYears"


// //lab16
// function getUserData({ firstName, favoriteColor = 'green' }) {
//   return `Your name is ${firstName} and you like ${favoriteColor}`;
// }
// getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' }); // *Your name is Alejandro and you like purple
// getUserData({ firstName: 'Melissa' }); // ** Your name is Melissa and you like green
// getUserData({}); // *** Your name is green and you like green
// //cause defult value is "green"

//lab-17
// let guest = 'Jane';
// let admin = 'Pete';
//  [guest,admin] = ['Jane','Pete']
//  [guest, admin] = [admin,guest]
// console.log(guest)
// console.log(admin)


// //lab-18
// let user = {
//   firstName : "John",
//   lastName : "Cna",
//   age : 25
// }
// let{firstName:f,lastName:l,age} = user

// function checkAge (){
//   age>18 ?console.log("hello",f,l) :console.log("No permission to access")
// //  console.log(age)
// }

// checkAge()

//lab-19
// let user = {
//   name: 'John',
//   years: 27
// };

// let { name: nameProperty, years: ageProperty, isAdmin:isAdminProperty = false }= user;

//lab-21
// let arr = [1, [2, [[[3, 4], 5], 6]]];
// let [a,[b,[[[c,d],e],f]]] = arr
// console.log(arr)

//lab-22
// const obj = { prop: 5, prop2: 10 };
// let {prop:a,prop2:b} = obj;  ///////


//lab-23
// let a, b;
// { a, b } = { a: 1, b: 2 };
//syntax error

//lab-24
// const [, , , a, b] = [1, 2, 3];
// undefined

//lab-25
// const q = { prop: 5, prop2: [10, 100] };
// let {prop:x,prop2:[y,z]} = q;
// console.log(x)
// console.log(y)


//lab-26
// const q = {
//   prop: 'Hello',
//   prop2: {
//     prop2: {
//       nested: ['a', 'b', 'c']
//     }
//   }
// };

// let {
//   prop: x,
//   prop2: {
//     prop2: {
//       nested:[z, y, r]
//     }
//   }
// } = q;

// console.log(x)
// console.log(y)


//lab 27
// const names = [
//   { firstName: 'John', lastName: 'Doe' },
//   { firstName: 'Jack', lastName: 'Dann' },
//   { firstName: 'Joe', lastName: 'Dunne' }
// ];

// for(let item of names){

// let { firstName ,lastName} = item;
// console.log(firstName,lastName)

// }


//lab-28
// const users = [
//   { user: "Name1" },
//   { user: "Name2", age: 2 },
//   { user: "Name2" },
//   { user: "Name3", age: 4 }
// ];

// for (let item of users) {

// let { user ,age = "unknown"} = item;
// console.log(user,age)

// }