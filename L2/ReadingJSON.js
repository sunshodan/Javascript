let minimist=require("minimist");
let fs=require("fs");

let args=minimist(process.argv);

//reading file

fs.readFile(args.source,"utf-8",function(err,data){
    if(err)
    {
        console.log(err);
    }
    else
    {
        // console.log(data);
        //now our data is of form string it is not JSO yet, so we cant't apply operations on it and extract its values
        //so we gotta convert JSON to JSO
        let teams=JSON.parse(data);// now data i.e JSON is converted to JSO and is name teams
        console.log(teams[1].name); 
    }
})


