//GettingElementsFromWeb.js
let minimist=require('minimist');
let fs=require('fs');
// const { readFile } = require('fs/promises');

//when we enter a link in our browser it get all the html from that link
//the it does two things for us
//1. prepares the web page i.e makes the UI from the html
//2. Prepares the DOM tree for the programmer

let jsdom=require('jsdom');
//jsdom loads the html and makes DOM for programmer just like a browser would have. 

let args=minimist(process.argv);

fs.readFile(args.source,"utf-8",function(err,html){
    let JSDOM= jsdom.JSDOM; // picking dom functionality from jsdom
    let dom= new JSDOM(html); //making a dom tree for the required html file write.html
    let document=dom.window.document;
    let discriptions=document.querySelectorAll("div.match-info > div.description"); // this means only get those match discreptions which are contained in "div with class match-info"
    for(let i=0;i<discriptions.length;i++)
    {
        console.log(discriptions[i].textContent);
    }
})