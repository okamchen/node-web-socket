/* importar o modulo do framework express */
var express = require('express');

/*importar o modulo consign */
var consign = require('consign');

/*importar o modulo do body-parser */
var bodyParser = require('body-parser');

/*importar o modulo do express-validator */
var expressValidator = require('express-validator');

/* iniciar o objeto do express */
var app = express();

/*setar as variáveis da 'view engine' e 'view'do express */
app.set('view engine', 'ejs');
app.set('views', './app/views');

/* configurar o middleware express.static*/
app.use(express.static('./app/public'));

/* configurar o middleware body-parser*/
app.use(bodyParser.urlencoded({extended:true}));

/* configurar o mildware express-validator */
app.use(expressValidator());

/* efetua o autoload das rotas, dos models e dos controllers para o objecto app. */
consign()
	.include('app/routes')
	.include('app/models')
	.include('app/controllers')
	.into(app);

/* exportar o objeto app */
module.exports = app;