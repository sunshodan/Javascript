let minimist=require("minimist");
let args=minimist(process.argv);

let count=args.n;

let id=setInterval(function(){
    console.log(count + "time-unites to go.")
    count--;
    
    if(count==0)
    {
        clearInterval(id);  //clearInterval stops the timer
    }
},args.d)

//colsole.log will be called after every "args.d ms" interval of time "count" number of times.
