var Reader = require("./Reader");
var Processor = require("./Processor");
var Table = require("./Table");
var HtmlParser = require("./HtmlParser");
var Writer = require("./Writer");
var PDFWriter = require("./PDFWriter");

var escritor = new Writer();
var leitor = new  Reader();


async function main(){
    var dados = await leitor.Read("./users.csv");
    var dadosProcessados = Processor.Process(dados);
  
    var usuarios = new Table(dadosProcessados);

    console.log(usuarios.rows);

     var html = await HtmlParser.Parse(usuarios);

     escritor.Write(Date.now() + ".html",html);
    PDFWriter.WhitePDF(Date.now() + ".PDF",html);
}

main();