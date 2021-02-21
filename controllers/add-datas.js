let mongoose       = require('mongoose');
let getJSON        = require('get-json');
let bodyParser     = require("body-parser");
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let url = "mongodb://localhost:27017/nancymongodb";

const Parking = require('../models/parkingSchema');
const Garden = require('../models/gardenSchema');
const Velo = require('../models/veloSchema');

exports.addParking = async(req, res, next) => {
    
    getJSON('https://geoservices.grand-nancy.org/arcgis/rest/services/public/VOIRIE_Parking/MapServer/0/query?where=1%3D1&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=nom%2Cadresse%2Cplaces%2Ccapacite&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=4326&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&resultOffset=&resultRecordCount=&queryByDistance=&returnExtentsOnly=false&datumTransformation=&parameterValues=&rangeValues=&f=pjson', function(error, response){
        
        // Create database (named 'nancydb')
        mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
            if (err) throw err;
            console.log("Database nancydb created! for Parking");

            //Delete all previously data if exist
            Parking.deleteMany({}, function(err){
                if (err) return handleError(err);
            });

            // Inserting all data
            // console.log(response.features.length);
            let i = 0;
            for(i; i<response.features.length; i++){

                let parking = new Parking({
                    name: response.features[i].attributes.NOM,
                    address: response.features[i].attributes.ADRESSE,
                    nbStands: response.features[i].attributes.PLACES,
                    open: true,
                    position: {
                        lat: response.features[i].geometry.y,
                        long: response.features[i].geometry.x,
                    }
                });

                parking.save();
            }
        });
    });
}

exports.addPark = async(req, res, next) => {

    mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        console.log("Database nancydb created! for Parks");

        // console.log("On y est");
        //Delete all previously data if exist
        Garden.deleteMany({}, function(err){
            if (err) return handleError(err);
        });

        
    });

}

exports.addVelo = async(req, res, next) => {
    
    getJSON('https://api.jcdecaux.com/vls/v3/stations?contract=nancy&apiKey=5b9e0c425c23cdeac1cb9ea614c6090f1db01e19', function(error, response){
        
        // Create database (named 'nancydb')
        mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
            if (err) throw err;
            console.log("Database nancydb created for Velo!");

            //Delete all previously data if exist
            Velo.deleteMany({}, function(err){
                if (err) return handleError(err);
            });

            // Inserting all data
            // console.log(response.length);
            let i = 0;
            for(i; i<response.length; i++){


                let velo = new Velo({
                    name: response[i].name,
                    nbStandsAvailable: response[i].totalStands.availabilities.stands,
                    nbVeloAvailable: response[i].totalStands.availabilities.bikes,
                    position: {
                        lat: response[i].position.latitude,
                        long: response[i].position.longitude,
                    }
                });

                velo.save();
            }
        });
    });

}