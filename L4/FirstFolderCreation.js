//node FirstFolderCreation.js --source=teams.json --dest=root

let minimist=require("minimist");
let fs=require("fs");
let path=require("path");

let args=minimist(process.argv);

let teamsJSON=fs.readFileSync(args.source,"utf-8");
let teams=JSON.parse(teamsJSON);

// console.log(teamsJSON);

for(let i=0;i<teams.length;i++)
{
    let foldername=path.join(args.dest,teams[i].name); // makes path for your folder as in root/India etc
    fs.mkdirSync(foldername);// makes the folder of the given path
    // console.log(foldername);
}