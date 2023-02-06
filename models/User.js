var mongoose = require('mongoose');

var WalletSchema = new mongoose.Schema({
    key: {
        public: {
            type: String,
            required: true
        },
        private: {
            type: String,
            required: true
        },
    },
    balance: {
        type: Number,
        default: 0
    },
    created_at: {
        type: String,
        default: Date.now
    }
});

module.exports = mongoose.model('Wallet', WalletSchema);