var mongoose = require('mongoose');

var TransactionSchema = new mongoose.Schema({
     from: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Wallet',
          required: true
     },
     to: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Wallet',
          required: true
     },
     amount: {
          type: Number,
          required: true
     }
});

module.exports = mongoose.model('Transaction', TransactionSchema)