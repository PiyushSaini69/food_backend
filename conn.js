import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/Canteen');

const con = mongoose.connection;
con.on('open', () => {
    console.log("connection success");
})

const formSchema = new mongoose.Schema({
    dishname: String,
    dishingredients: String,
    dishprice: String,
    dishimage: String
})

const Form = mongoose.model('detail',formSchema)


export {Form}


