var pdf = require("html-pdf");

class PDFWriter{
    static WhitePDF(filename, html){
        pdf.create(html,{}).toFile(filename,(err) => {});
    }

}

module.exports = PDFWriter;