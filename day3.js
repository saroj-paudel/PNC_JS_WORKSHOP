// var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


// days.push("Holiday") // add element at the end of the array
// console.log(days[0])
// console.log(days.length);
// days.pop() // remove last element
// days.unshift("Holiday") // add element at the start of the array
// days.shift() // remove first element
// console.log(days[0])

// console.log(days.length)

// var numbers=[1,2,3,4,5]
//slice
// var newnumbers=numbers.slice(1,4)
// console.log(newnumbers);
// console.log(numbers);
// inted to n-1th element



//splice
// var nenumbers=numbers.splice(2,1,10,11)
// kaha bata katne , kati ota katne , kateko thau ma k rakhney
// console.log(nenumbers);

// console.log(numbers);

// var data=[1,2,3,4,5,6]
// data.splice(1,3,"hello","bye","world")
// output -> [ 1, 'hello', 'bye', 'world', 5, 6 ]

// console.log(data);

// var haha=['m','a','n','i','s','h']
// haha.splice(0,6,13,1,14,9,19,8)
// console.log(haha);
// output = [ 13, 1, 14, 9, 19, 8 ]



//split
// var text="how are you, paras?"
// var splitText=text.split(" ")
// console.log(splitText);



 
var me= {
    name:"Saroj",
    age:19,
    faculty: "CSIT"
}
var me_not_changeable=Object.freeze(
    {
        name:"Saroj",
        age:19,
        faculty: "CSIT"
    }
)
console.log(me.name,me.age,me.faculty);

me.location="Bhairahawa"
console.log(me);

console.log(Object.keys(me_not_changeable));

