//node FirstPdf.js --source=teams.json --dest=root

let minimist=require("minimist");
let fs=require("fs");
let path=require("path");
let pdf=require("pdf-lib");

let args=minimist(process.argv);

let teamsJSON=fs.readFileSync(args.source,"utf-8");
let teams=JSON.parse(teamsJSON);

//console.log(teamsJSON);

for(let i=0;i<teams.length;i++)
{
    let foldername=path.join(args.dest,teams[i].name);
    for(let j=0;j<teams[i].matches.length;j++)
    {
        let matchFileName=path.join(foldername,teams[i].matches[j].vs + ".pdf")//making path for our pdfs
        // fs.writeFileSync(pdfname,"","utf-8");//making pdfs of vs names

        createScorceCard(teams[i].name,teams[i].matches[j],matchFileName);
    }
}
function createScorceCard(teamsName,match,matchFileName)
{
    //this function will create pdf for matches in appropriate folders with correct details
    //it will use pfd-lib to create pdf
    let t1=teamsName;
    let t2=match.vs;
    let result= t1+" "+match.result;

    let originalBytes=fs.readFileSync("Template.pdf"); //reading the bytes of template pdf which we will use later
    //pdf has been read from HDD

    //this promise makes a pdf in RAM then does all the changes in RAM and when we do writeFileSync then it loads it in HDD
    let promiseToLoadBytes=pdf.PDFDocument.load(originalBytes);  //this is a promise that it will load bytes
    promiseToLoadBytes.then(function(pdfdoc){  //After it loades the bytes run this function
        let page=pdfdoc.getPage(0); //get first page of pdf
        page.drawText(t1,{   //write on pdf
            x:320,
            y:704,
            size:9
        });
        page.drawText(t2,{   //write on pdf
            x:320,
            y:690,
            size:9
        });
        page.drawText(result,{   //write on pdf
            x:320,
            y:676,
            size:9
        });

        let promiseToSave=pdfdoc.save(); //Another promise to save the pdf
        promiseToSave.then(function(changedBytes){ //after promise is returned call this function 
            fs.writeFileSync(matchFileName,changedBytes); //after that make pdf and put changed bytes in the pdf
        })
    })
}