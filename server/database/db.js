import mongoose from "mongoose";


export const Connection = async (username,password)=>{
    const URL = `mongodb+srv://${username}:${password}@cluster0.2f1dpd7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 ` ;

    try{
       await mongoose.connect(URL);
       console.log("Database connected Successfully");
    }catch(error){

        console.log("Error while connecting with database",error.message);
    }

}

export default Connection ;