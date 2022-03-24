import mongoose from 'mongoose'

const CustomSchema = new mongoose.Schema({
  widgetId: {
    type:String
  },
})
module.exports = mongoose.models.Favorite || mongoose.model('Favorite', CustomSchema)