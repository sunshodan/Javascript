//Making a excel file i.e workbook


let minimist=require("minimist");
let fs=require("fs");
let excel=require("excel4node"); //helps in doing excel work

let args=minimist(process.argv);

let teamsJSON=fs.readFileSync(args.source,"utf-8");// we got the json file
let teams=JSON.parse(teamsJSON);//converting to jso

let wb = new excel.Workbook();// to make new workbook


//Adding Style to the sheets
let hs=wb.createStyle({
    font: {
        bold:true,
        underline:true,
        size:15
    }
});

for(let i=0;i<teams.length;i++)
{
    let sheet=wb.addWorksheet(teams[i].name);//to make sheet for each team
    sheet.cell(1,1).string("Opponent").style(hs);//Adding content in cells
    sheet.cell(1,2).string("Result").style(hs);
    for(j=0;j<teams[i].matches.length;j++)
    {
        sheet.cell(j+3,1).string(teams[i].matches[j].vs);
        sheet.cell(j+3,2).string(teams[i].matches[j].result);
    }
}
wb.write(args.dest);