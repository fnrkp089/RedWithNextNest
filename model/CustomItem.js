import mongoose from 'mongoose'

const CustomSchema = new mongoose.Schema({
  customData: {
    type:String
  },
  customKey: {
    type:String
  },
  defaultPrice: {
    type: Object
  },
  docVersion: {
    type:String
  },
  envMode: {
    type:String
  },
  options: {
    type: Object
  },
  productCode: {
    type:String
  },
  productName: {
    type:String
  },
  summary: {
    type: Object
  },
})
module.exports = mongoose.models.Custom || mongoose.model('Custom', CustomSchema)