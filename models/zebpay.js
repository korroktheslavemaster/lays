var mongoose = require('mongoose');


var schema = mongoose.Schema({
  market: Number,
  buy: Number,
  sell: Number,
  currency: String,
  volume: Number,
  timestamp: Date,
})

module.exports = mongoose.model('Zebpay_Datapoint', schema)
