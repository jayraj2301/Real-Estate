import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema({
    propertyTitle: {type: String,required: true},
    locality:{type:String, required: true},
    price1:{type:Number, required: true},
    price2:{type:Number, required: true},
    typo: {type: String,required: true}, // rent or sell

    images: [{type:String}],
    bedrooms: { type: Number, required: true },
    typeOfProperty: { type: String, required: true }, // tenament ,flat..
    areaSqFt: { type: Number },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
})
export const Property = mongoose.model("Property", propertySchema)