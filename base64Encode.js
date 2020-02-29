var fs = require('fs');

var image = 'actuarial';
var extension = 'png';

var imageAsBase64 = fs.readFileSync('./img/' + image + "." + extension, 'base64');
imageAsBase64 = 'data:image/' + extension + ';base64,' + imageAsBase64;
fs.writeFileSync('./img/' + image + '.txt' , imageAsBase64 );

