const mongoose = require('mongoose');
const express  = require('express');

const Parking = require('../models/parkingSchema');

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