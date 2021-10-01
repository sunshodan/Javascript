let minimist=require("minimist");
let fs=require("fs");

let args=minimist(process.argv);

//JSON is Javascript Object Notation
//JSON means saving data in same format as javascript objects

//JSO javascript objects

let s1={
    name:"Sunshodan",
    age:21
};

let s2={
    name:"Tato",
    age:18
};

//s1 and s2 are JSO ie javascript objects

let studentsWay1=[s1,s2]; //this is an array of objects
//array of objects is also considered an object
//therefore studentWay1 is also a JSO but not JSON yet

// let json=JSON.stringify(studentsWay1);
//stringify converts anyting to string
//over here JSON.stringyfy converts JSO to string
//JSO when converted to string is JSON
//  ***so JSON.stringify converts JSO to JSON***

//s1 or s2 can also be comnverted to JSON using stringfy

// fs.writeFileSync(args.dest,json,"utf-8"); //new JSON file is created

//Using Objects

// let s1={
//     name:"Sunshodan",
//     age:21
// };

// console.log(s1.name);
// console.log(s1.age);

//accessing in array of objects

let arrayOfObjects= [
    {
        name:"Sunshodan",
        age:21,
        matches: [
            {
                vs:"Pak",
            },
            {
                vs:"Usa"
            }
        ]
        
    },
    {
        name:"Tato",
        age:18,
        matches: [
            {
                vs:"England"
            },
            {
                vs:"Australia"
            }
        ]
    }
];
let json=JSON.stringify(arrayOfObjects);
// console.log(arrayOfObjects[0].name);//to access Sunshodan's Name
// console.log(arrayOfObjects[1].age);//to access Anant's Age

//callback way of writing
// fs.writeFile(args.dest,json,function(err,res){
//     if(err)
//     {
//         console.log(err);
//     }
//     else
//     {
//         console.log(res);
//     }
// })

//to get an element from array of objects of objects
console.log(arrayOfObjects[1].matches[1].vs); //getting vs at line 71