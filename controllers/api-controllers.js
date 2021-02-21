const mongoose = require('mongoose');
const express  = require('express');

DOMParser = require('xmldom').DOMParser;

const Parking = require('../models/parkingSchema');
const Velo = require('../models/veloSchema');

exports.parking = async(req, res, next) => {
    let parkings;

    try {
        parkings = await Parking.find();
    } catch (err) {
        const error = new HttpError(
          'Fetching parkings failed, please try again later.',
          500
        );
        return next(error);
    }
      res.json({ parkings: parkings.map(parking => parking.toObject({ getters: true })) });
}

exports.park = async (req, res, next) => {

  const file = __dirname + "/../resources/data/PARCS.kml";
  // res.send(convertedWithStyles);
  res.download(file);

}

exports.stopStan = async (req, res, next) => {

  const file = __dirname + "/../resources/data/stopStan.kml";
  // res.send(convertedWithStyles);
  res.download(file);

}

exports.parkingVelo = async (req, res, next) => {
  let parkingsvelos;

  try {
    parkingsvelos = await Velo.find();
  } catch (err) {
    const error = new HttpError(
      'Fetching parkings failed, please try again later.',
      500
    );
    return next(error)
  }

  res.json({VeloSchema: parkingsvelos.map(parkingvelo => parkingvelo.toObject({getters: true})) });

}

