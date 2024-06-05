import mongoose from 'mongoose';

const connectToMongoDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("Connected To Mongo Database");
    } catch (error) {
        console.error("Mongo Database Error Catch Messgae: ", error.message)
        // throw new Error(error)
    }
}

export default connectToMongoDB



// import { MongoClient, ServerApiVersion } from 'mongodb';
// const uri = "mongodb+srv://bilalillahi25:1J5i6aLc7Ouo78tD@cluster0.28el64s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
