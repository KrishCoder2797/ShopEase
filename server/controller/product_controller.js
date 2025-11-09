import { request, response } from 'express';
import Product from '../model/product_schema.js' ; 

export const getProducts = async(req,res)=>{

    try{
        const products = await Product.find({})  // Will fetch all data present in collection
        res.status(200).json(products) ;
    }catch(error){
        res.status(500).json({message :error.message}) ;
    }

};


 export const getProductById = async (request,response) =>{

    try{
        const id = request.params.id ;
        console.log(id);
        const product = await Product.findOne({'id':id})

        response.status(200).json(product);
    }catch(error){
        response.status(500).json({message:error.message});

    }
}

// export const getProductById = async (req, res) => {
//   try {
//     const id = req.params.id;
//     console.log("Requested ID:", id);

//     // Try to find by 'id' first
//     let product = await Product.findOne({ id: id });

//     // If not found, try by '_id'
//     if (!product) {
//       product = await Product.findOne({ _id: id });
//     }

//     if (!product) {
//       console.log("❌ Product not found for ID:", id);
//       return res.status(404).json({ message: "Product not found" });
//     }

//     console.log("✅ Product found:", product);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
