import mongoose from 'mongoose'

const CustomSchema = new mongoose.Schema({
  widgetId: {
    type: String
  },
  productInfo: {
    type: Object
  },
  priceInfo: {
    type: Object
  },
  printAmount:{
    type: Object
  },
  summary: {
    type: Object
  }
})
module.exports = mongoose.models.Favorite || mongoose.model('Favorite', CustomSchema)