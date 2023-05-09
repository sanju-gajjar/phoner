const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String, required: true },
  qty: { type: String, required: true },
  um: { type: String, required: true },
  price: { type: String, required: true },
  weight: { type: String, required: false },
  description: { type: String, required: true },
  category: { type: String, required: true },
  userId: { type: String, required: true }
}, {
  timestamps: true
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product