var mongoose = require('mongoose');

var WalletSchema = new mongoose.Schema({
    key: {
        public: String,
        private: String
    },
    balance: Number
});

module.exports = mongoose.model('Wallet', WalletSchema);