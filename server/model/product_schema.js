import mongoosh from "mongoose"  ;

const productSchema = new mongoosh.Schema({

    id:{
       type: String,
       require:true ,
       unique:true 
    },
    url:String,
    detailUrl:String,
    title:Object,
    price:Object,
    quantity:Number,
    description:String,
    discount:String,
    tagline:String

})

const Product = mongoosh.model("product",productSchema);

export default Product ;