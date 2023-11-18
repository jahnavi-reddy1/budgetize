const mongoose = require("mongoose");

//Tt6vAxUco8AB42pe
const dbConnect = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URL,
        {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        }
    );
        console.log('DB connected Succesfully');   
            } catch (error) {
                console.log(`Error ${error.message}`);
            }
};

module.exports = dbConnect;