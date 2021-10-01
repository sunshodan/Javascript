//https://www.espncricinfo.com/series/icc-cricket-world-cup-2019-1144415/match-results
let minimist=require('minimist');
let fs=require('fs');
let axios=require('axios');

let args=minimist(process.argv);

let download_promise=axios.get(args.url);

download_promise.then(function(response){
    let html=response.data;
    fs.writeFileSync(args.file,html,"utf-8");
}).catch(function(err){
    console.log(err);
})