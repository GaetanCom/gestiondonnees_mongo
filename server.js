const config     = require('./config/config');
const express    = require('express');
const app        = express();
const mongoose   = require('mongoose');
const swig       = require('swig-templates');
const bodyParser = require("body-parser");

const mainRoutes = require('./routes/main-routes');
const apiRoutes = require('./routes/api-routes');

const addDatas = require('./controllers/add-datas');

let url = "mongodb://localhost:27017/nancymongodb";

const addData = () => {

    addDatas.addParking();
    addDatas.addPark();

}

addData();

app.set('views', __dirname + '/resources/views');
app.set('view engine', 'twig');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', mainRoutes);

app.use('/api', apiRoutes);

let view = new swig.Swig();
app.engine('html', view.renderFile);
app.set('view engine', 'html');

app.listen(config.app.port, () => {
    console.log("Application ouvert au port " + config.app.port)
});