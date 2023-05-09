const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salesSchema = new Schema({
  name: { type: String, required: true },
  itemid: { type: String, required: true },
  customername: { type: String, required: true },
  qty: { type: String, required: true },
  um: { type: String, required: true },
  price: { type: String, required: true },
  saleprice: { type: String, required: true },
  weight: { type: String, required: false },
  description: { type: String, required: true },
  category: { type: String, required: true },
  userId: { type: String, required: true }
}, {
  timestamps: true
});

const Sales = mongoose.model('Product', salesSchema);

module.exports = Sales